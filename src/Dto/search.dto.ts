import { ObjectId, DBRef } from 'mongodb';

class AvatarDto {
  _id: string;
  mediaType: string;
  mediaBasePath: string;
  mediaUri: string;
  originalName: string;
  fsSourceUri: string;
  fsSourceName: string;
  fsTargetUri: string;
  mediaEndpoint: string;
}

class UserDto {
  _id: ObjectId;
  fullName: string;
  profilePict?: DBRef;
  username: string;
  email: string;
  avatar?: AvatarDto[];
}

export class ResponseSearchDto {
  user: UserDto[];
  pict: any[];
  vid: any[];
  diary: any[];
}

function parseAvatarDto(avatar: any): AvatarDto {
  return {
    _id: avatar._id,
    mediaType: avatar.mediaType,
    mediaBasePath: avatar.mediaBasePath,
    mediaUri: avatar.mediaUri,
    originalName: avatar.originalName,
    fsSourceUri: avatar.fsSourceUri,
    fsSourceName: avatar.fsSourceName,
    fsTargetUri: avatar.fsTargetUri,
    mediaEndpoint: avatar.mediaEndpoint,
  };
}

function parseUserDto(
  id: ObjectId,
  fullName: string,
  username: string,
  email: string,
  profilePict?: DBRef,
  avatar?: AvatarDto[],
): UserDto {
  const response: UserDto = {
    _id: id,
    fullName,
    username,
    email,
  };

  if (profilePict && avatar) {
    response.profilePict = profilePict;
    response.avatar = avatar.map((ava: any) => {
      return parseAvatarDto(ava);
    });
  }
  return response;
}

export function parseResponseDto(response: any): ResponseSearchDto {
  const userDtos: UserDto[] = response[0].map((user: any) => {
    return parseUserDto(
      user._id,
      user.fullName,
      user.username,
      user.email,
      user.profilePict,
      user.avatar,
    );
  });

  return {
    user: userDtos,
    pict: response[1],
    vid: response[2],
    diary: response[3],
  };
}
