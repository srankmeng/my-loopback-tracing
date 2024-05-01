### Install opentelemetry packages
```
npm install \
  @opentelemetry/api \
  @opentelemetry/exporter-jaeger \
  @opentelemetry/instrumentation \
  @opentelemetry/instrumentation-http \
  @opentelemetry/instrumentation-pg \
  @opentelemetry/propagator-jaeger \
  @opentelemetry/resources \
  @opentelemetry/sdk-trace-base \ 
  @opentelemetry/sdk-trace-node \
  @opentelemetry/semantic-conventions \
  --save 
```

### Create tracer
create `tracer.ts`

### Create middleware
create `middleware/trace.middleware.ts`

### Update application.ts
```
import {traceMiddleware} from './middleware/trace.middleware';   <========= Add this line


export class UserApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    ...

    this.middleware(traceMiddleware);  <========= Add this line
```
