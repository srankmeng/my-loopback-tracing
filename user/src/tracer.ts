import { Resource } from '@opentelemetry/resources';
import { JaegerExporter } from '@opentelemetry/exporter-jaeger';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { PgInstrumentation } from '@opentelemetry/instrumentation-pg';
import { JaegerPropagator } from '@opentelemetry/propagator-jaeger';
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { trace, context }from '@opentelemetry/api';
require('dotenv').config()

const tracerInit = (serviceName: string) => {

    const provider = new NodeTracerProvider({
        resource: new Resource({
            [SemanticResourceAttributes.SERVICE_NAME]: serviceName
        }),
    });
    const traceExporter = new JaegerExporter({ endpoint: `${process.env.TRACING_URL}/api/traces`});

    provider.addSpanProcessor(new SimpleSpanProcessor(traceExporter));
    provider.register({ propagator: new JaegerPropagator() });
    registerInstrumentations({
        instrumentations: [
            new HttpInstrumentation({
                requestHook: (span, request) => {
                    // convert request to json format
                    const reqString = JSON.stringify(request);
                    const reqJson = JSON.parse(reqString);

                    span.updateName(`${reqJson.method} ${reqJson.path}`)
                },
            }),
            new PgInstrumentation(),
        ],
        tracerProvider: provider,
    });
    return trace.getTracer(serviceName);
}

export default tracerInit;