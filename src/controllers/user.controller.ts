import type { NextFunction, Request, Response } from 'express';
import { UserModel } from '../entities/user.entity';
import bcrypt from 'bcryptjs';

export const SignUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password, role } = req.body;
    const isUser = await UserModel.find({ email });
    if (isUser) {
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      name,
      email,
      role,
      password: hashedPassword,
    });
  } catch (error) {
    next(error);
  }
};

export const SignIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password, role } = req.body;
    const isUser = await UserModel.find({ email });
    if (isUser) {
      return;
    }
    const user = await UserModel.create(req.body);
  } catch (error) {
    next(error);
  }
};

export const me = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password, role } = req.body;
    const isUser = await UserModel.find({ email });
    if (isUser) {
      return;
    }
    const user = await UserModel.create(req.body);
  } catch (error) {
    next(error);
  }
};
