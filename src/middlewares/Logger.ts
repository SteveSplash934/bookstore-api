import { Request, Response, NextFunction } from 'express';
import colors from 'colors';

export default class Logger {
  static methodColors = {
    GET: 'blue',
    POST: 'green',
    PUT: 'yellow',
    DELETE: 'red',
  };

  static log_client_request(req: Request, res: Response, next: NextFunction): void {
    const method = req.method as keyof typeof Logger.methodColors; 

    console.log(
      colors.gray(new Date().toISOString()),
      colors.rainbow(req.ip || 'unknown'),
      (colors as any)[Logger.methodColors[method]](req.method),
      colors.blue(req.url),
      colors.green(res.statusCode.toString())
    );

    next();
  }
}
