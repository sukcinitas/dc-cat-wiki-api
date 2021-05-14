
export class AppError extends Error {
  constructor(message: string, statusCode: number) {
    super(message);

    this.statusCode = statusCode;
    this.success = false;
    this.isOperational = true;
    
    Error.captureStackTrace(this, this.constructor); // prevents from showing up in the error stack trace
  }
}