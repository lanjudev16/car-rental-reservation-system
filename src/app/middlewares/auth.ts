import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import { TUserRole } from '../constant';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../config';
import userModel from '../model/user/user.model';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const bearerToken = req.headers.authorization;
    const bearerTokenSplit=bearerToken?.split(' ')
    let token;
    if(bearerTokenSplit){
      token=bearerTokenSplit[1]
    }
    if(!token){
      throw new AppError(httpStatus.UNAUTHORIZED,"Mama tomar token nai")
    }
    const decoded=jwt.verify(token,config.jwt_access_secret as string) as JwtPayload
    const user=await userModel.findOne({email:decoded.email})
    if(!user){
      throw new AppError(httpStatus.UNAUTHORIZED,"Mama tomar khuj pawa jai nai")
    }
    if(requiredRoles && !requiredRoles.includes(decoded.role)){
      throw new AppError(httpStatus.UNAUTHORIZED,"Mama tomar access nai")
    }
    req.user=decoded
    next();
  });
};

export default auth;