import { Next } from '@loopback/core'
import { Middleware, MiddlewareContext } from '@loopback/rest'
import tracerInit from '../tracer';
import { trace }from '@opentelemetry/api';

const tracer = tracerInit('user');

export const traceMiddleware: Middleware = async (
  middlewareCtx: MiddlewareContext,
  next: Next,
) => {
  const {request} = middlewareCtx

  // set root span name
  trace.getActiveSpan()?.updateName(`${request.method} ${request.originalUrl}`)
  try {

    // Proceed with next middleware
    const result = await next();

    return result
  } catch (err) {
    throw err
  }
}
