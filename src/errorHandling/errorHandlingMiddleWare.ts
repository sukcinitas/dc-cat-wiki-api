import { Request, Response } from 'express';
import { AppError } from './errorClasses';

const sendErrorDev = (err: AppError, res: Response) => {
  const { message, statusCode, success, isOperational } = err;
  if (isOperational) {
    res.status(statusCode).json({
      success,
      error: err,
      message,
      stack: err.stack
    });
  } else {
    console.error('💥: ', err);
    res.status(statusCode).json({
      success,
      error: err,
      message: 'Something went wrong!',
      stack: err.stack
    });
  }
};

const sendErrorProd = (err: AppError, res: Response) => {
  const { message, statusCode, success, isOperational } = err;
  if (isOperational) {
    res.status(statusCode).json({
      success,
      message
    });
  } else {
    console.error('💥: ', err);

    res.status(500).json({
      success,
      message: 'Something went wrong!'
    });
  }

};

export default (err: AppError, req: Request, res: Response): void => {
  err.statusCode = err.statusCode || 500;
  err.success = err.success || false;

  if (process.env.NODE_ENV === 'production') {
    sendErrorProd(err, res);
  } else {
    sendErrorDev(err, res);
  }
};