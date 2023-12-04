import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type UserBasicDocument = UserBasic & Document;

@Schema()
export class UserBasic {
  @Prop({ type: SchemaTypes.ObjectId })
  _id: string;

  profileID: string;
  email: string;
  fullName: string;
  dob: string;
  gender: string;
  mobileNumber: string;
  status: string;
  event: string;
  idProofName: string;
  idProofNumber: string;
  idProofStatus: string;
  isComplete: boolean;
  isCelebrity: boolean;
  isIdVerified: boolean;
  isPrivate: boolean;
  isFollowPrivate: boolean;
  isPostPrivate: boolean;
  createdAt: string;
  updatedAt: string;
  bio: string;
  profilePict: {
    $ref: string;
    $id: string;
    $db: string;
  };
  proofPict: {
    $ref: string;
    $id: string;
    $db: string;
  };
  insight: {
    $ref: string;
    $id: string;
    $db: string;
  };

  @Prop({ type: [{ $ref: String, $id: { $oid: String }, $db: String }] })
  userInterests: Array<{
    $ref: string;
    $id: {
      $oid: string;
    };
    $db: string;
  }>;
  userAuth: {
    $ref: string;
    $id: {
      $oid: string;
    };
    $db: string;
  };
  countries: {
    $ref: string;
    $id: {
      $oid: string;
    };
    $db: string;
  };
  languages: {
    $ref: string;
    $id: {
      $oid: string;
    };
    $db: string;
  };
  _class: string;
  statusKyc: string;
}

export const UserBasicSchema = SchemaFactory.createForClass(UserBasic);
