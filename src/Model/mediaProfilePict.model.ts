import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MediaProfilePictDocument = MediaProfilePict & Document;

@Schema({ timestamps: true })
export class MediaProfilePict {
  mediaID: string;
  active: boolean;
  postType: string;
  mediaType: string;
  mediaBasePath: string;
  mediaUri: string;
  originalName: string;
  fsSourceUri: string;
  fsSourceName: string;
  fsTargetUri: string;
  mediaMime: string;
  _class: string;
}

export const MediaProfilePictSchema =
  SchemaFactory.createForClass(MediaProfilePict);
