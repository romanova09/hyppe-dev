import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from 'src/Model/post.model';
import { UserBasic, UserBasicDocument } from 'src/Model/userBasic.model';

@Injectable()
export class Search {
  constructor(
    @InjectModel(UserBasic.name, 'hyppe-dev')
    private readonly userBasicModel: Model<UserBasicDocument>,
    @InjectModel(Post.name, 'hyppe-dev')
    private readonly postModel: Model<PostDocument>,
  ) {}

  async SearchUser(keyword: string) {
    const pipeline = [
      {
        $lookup: {
          from: 'userauths',
          localField: 'profileID',
          foreignField: 'userID',
          as: 'userAuth',
        },
      },
      {
        $lookup: {
          from: 'mediaprofilepicts',
          localField: 'profilePict.$id',
          foreignField: '_id',
          as: 'avatar',
        },
      },
      {
        $match: {
          'userAuth.username': { $regex: new RegExp(keyword, 'i') },
        },
      },
      {
        $limit: 5,
      },
      {
        $project: {
          _id: 1,
          fullName: 1,
          profilePict: 1,
          username: { $arrayElemAt: ['$userAuth.username', 0] },
          email: { $arrayElemAt: ['$userAuth.email', 0] },
          avatar: 1,
        },
      },
    ];

    return await this.userBasicModel.aggregate(pipeline);
  }

  async SearchPost(keyword: string, postType: string) {
    const pipeline = [
      {
        $match: {
          description: { $regex: new RegExp(keyword, 'i') },
          postType,
        },
      },
      {
        $limit: 5,
      },
      {
        $project: {
          _id: 1,
          mediaThumbEndpoint: 1,
          mediaEndpoint: 1,
          mediaType: 1,
          createdAt: 1,
          updatedAt: 1,
          postID: 1,
          email: 1,
          postType: 1,
          description: 1,
          active: 1,
          metadata: 1,
          location: 1,
          isOwned: 1,
          visibility: 1,
          allowComments: 1,
          insight: {
            shares: '$shares',
            comments: '$comments',
            views: '$views',
            likes: '$likes',
          },
        },
      },
    ];

    return await this.postModel.aggregate(pipeline);
  }
}
