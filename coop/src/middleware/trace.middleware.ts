import { Next } from '@loopback/core'
import { Middleware, MiddlewareContext } from '@loopback/rest'
import tracerInit from '../tracer';

const tracer = tracerInit('coop');

export const traceMiddleware: Middleware = async (
  middlewareCtx: MiddlewareContext,
  next: Next,
) => {
  const {request} = middlewareCtx
  // const span = tracer.startSpan(`handler:${request.method} ${request.originalUrl}`);
    // tracer.startActiveSpan('middleware', async (span) => {
    //     //add event with custom information to span
    //     span.addEvent('starting operation', { custom_headers: JSON.stringify(request.headers) });
    //     span.addEvent('operation finished!');
    //     //end the span
    //     span.end();
    // })

  // span.setAttribute('http.method', request.method);
  // span.setAttribute('http.url', request.url);
  // span.setAttribute('http.host', request.headers['host'] || '');
  // span.setAttribute('user-agent', request.headers['user-agent'] || '');
  // span.setAttribute('platform', request.headers['sec-ch-ua-platform'] || '');
  // span.setAttribute('http.method', request.method);
  try {

    // Proceed with next middleware
    const result = await next();

    return result
  } catch (err) {
    // span.setStatus({ code: 2 });  //   UNSET = 0, OK = 1, ERROR = 2
    // span.recordException(err);
    throw err
  } finally {
    // span.end();
  }
}
