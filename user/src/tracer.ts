import { Resource } from '@opentelemetry/resources';
import { JaegerExporter } from '@opentelemetry/exporter-jaeger';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import { PgInstrumentation } from '@opentelemetry/instrumentation-pg';
import { JaegerPropagator } from '@opentelemetry/propagator-jaeger';
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { trace }from '@opentelemetry/api';

const tracerInit = (serviceName: string) => {

    const provider = new NodeTracerProvider({
        resource: new Resource({
            [SemanticResourceAttributes.SERVICE_NAME]: serviceName
        }),
    });
    const traceExporter = new JaegerExporter({ endpoint: 'http://localhost:14268/api/traces'});

    provider.addSpanProcessor(new SimpleSpanProcessor(traceExporter));
    provider.register({ propagator: new JaegerPropagator() });
    registerInstrumentations({
        instrumentations: [
            // new ExpressInstrumentation(),
            // new HttpInstrumentation({
            //     requestHook: (span, request) => {
            //         span.setAttribute("custom request hook attribute", "request");
            //     },
            // }),
            // new PgInstrumentation(),
        ],
        tracerProvider: provider,
    });
    return trace.getTracer(serviceName);
}

export default tracerInit;