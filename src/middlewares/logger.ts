import { Request, Response, NextFunction } from 'express';
import fs from 'fs';

const loggerMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const { method, originalUrl, body } = req;
  const timestamp = new Date().toISOString();

  // Logging request details
  const logMessage = `[${timestamp}] ${method} ${originalUrl} - Request Body: ${JSON.stringify(body)}\n`;
  fs.appendFileSync('logs.txt', logMessage);

  // Logging response details
  const originalSend = res.send;
  res.send = function (body): any {
    const logMessage = `[${timestamp}] ${method} ${originalUrl} - Response Body: ${JSON.stringify(body)}\n`;
    fs.appendFileSync('logs.txt', logMessage);
    originalSend.apply(res, arguments);
  };

  next();
};

export default loggerMiddleware;
