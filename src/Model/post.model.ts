import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema({ timestamps: true })
export class Post {
  boosted: any[];
  mediaThumbEndpoint: string;
  mediaEndpoint: string;
  mediaType: string;
  createdAt: string;
  updatedAt: string;
  postID: string;
  email: string;
  postType: string;
  description: string;
  active: boolean;
  metadata: {
    duration: number;
    postRoll: number;
    postType: string;
    preRoll: number;
    midRoll: number;
    postID: string;
    email: string;
  };
  location: string;
  isOwned: boolean;
  visibility: string;
  allowComments: boolean;
  insight: {
    shares: number;
    comments: number;
    views: number;
    likes: number;
  };
}

export const PostSchema = SchemaFactory.createForClass(Post);
