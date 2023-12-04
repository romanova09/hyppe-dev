import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserAuth, UserAuthSchema } from '../Model/userAuth.model';
import { UserBasic, UserBasicSchema } from '../Model/userBasic.model';
import { SearchController } from '../Controller/search.controller';
import { Search } from '../Service/search.service';
import { Post, PostSchema } from '../Model/post.model';
import {
  MediaProfilePict,
  MediaProfilePictSchema,
} from '../Model/mediaProfilePict.model';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: UserAuth.name, schema: UserAuthSchema },
        { name: UserBasic.name, schema: UserBasicSchema },
        { name: Post.name, schema: PostSchema },
        { name: MediaProfilePict.name, schema: MediaProfilePictSchema },
      ],
      'hyppe-dev',
    ),
  ],
  controllers: [SearchController],
  providers: [Search],
})
export class SearchModule {}
