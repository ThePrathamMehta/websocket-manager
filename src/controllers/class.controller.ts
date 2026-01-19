import type { NextFunction, Request, Response } from 'express';
import { ClassModel } from '../entities/class.entity';

export const CreateClass = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    if (!name) {
      return;
    }
    const newClass = await ClassModel.create(req.body);
  } catch (error) {
    next(error);
  }
};

export const addStudent = (req: Request, res: Response, next: NextFunction) => {
  try {
    const {studentId} = req.body;
    if(!studentId) {

    }

  } catch (error) {
    next(error);
  }
};



export const GetStudents = (req : Request , res : Response, next : NextFunction) => {
    try {

    } catch(error) {
        next(error);
    }
}