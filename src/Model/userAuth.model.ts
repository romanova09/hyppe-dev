import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserAuthDocument = UserAuth & Document;

@Schema({ timestamps: true })
export class UserAuth {
  username: string;
  password: string;
  userID: string;
  email: string;
  regSrc: string;
  isExpiryPass: boolean;
  isEmailVerified: boolean;
  otpRequestTime: number;
  otpAttempt: number;
  otpNextAttemptAllow: number;
  isEnabled: boolean;
  isAccountNonExpired: boolean;
  isAccountNonLocked: boolean;
  isCredentialsNonExpired: boolean;
  roles: string[];
  devices: {
    $ref: string;
    $id: string;
    $db: string;
  }[];
  _class: string;
}

export const UserAuthSchema = SchemaFactory.createForClass(UserAuth);
