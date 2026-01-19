import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserModel } from '../entities/user.entity';
import type { JwtToken } from '../common/types';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authToken = req.headers.authorization?.split(' ')[1];
    if (!authToken) {
      return;
    }
    const userInfo = jwt.verify(authToken, process.env.JWT_SECRET!) as JwtToken;
    if (!userInfo) {
      return;
    }
    const user = await UserModel.findById(userInfo.id);
    if(!user) {
        return ;
    }
    req.user = user;
  } catch (error) {
    next(error);
  }
};
