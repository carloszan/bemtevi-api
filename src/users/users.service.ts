import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    const user_data: Prisma.UserCreateInput = {
      bio: createUserDto.bio,
      name: createUserDto.name,
      theme: createUserDto.theme,
      accent: createUserDto.accent,
      website: createUserDto.website,
      location: createUserDto.location,
      username: createUserDto.username,
      photoURL: createUserDto.photoURL,
      verified: createUserDto.verified,
      following: createUserDto.following,
      followers: createUserDto.followers,
      totalTweets: createUserDto.totalTweets,
      totalPhotos: createUserDto.totalPhotos,
      pinnedTweet: createUserDto.pinnedTweet,
      coverPhotoURL: createUserDto.coverPhotoURL,
    };

    return this.prismaService.user.create({
      data: user_data,
    });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: number) {
    return this.prismaService.user.findUnique({
      where: { id: id },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user_data: Prisma.UserUpdateInput = {
      bio: updateUserDto.bio,
      name: updateUserDto.name,
      theme: updateUserDto.theme,
      accent: updateUserDto.accent,
      website: updateUserDto.website,
      location: updateUserDto.location,
      username: updateUserDto.username,
      photoURL: updateUserDto.photoURL,
      verified: updateUserDto.verified,
      following: updateUserDto.following,
      followers: updateUserDto.followers,
      totalTweets: updateUserDto.totalTweets,
      totalPhotos: updateUserDto.totalPhotos,
      pinnedTweet: updateUserDto.pinnedTweet,
      coverPhotoURL: updateUserDto.coverPhotoURL,
    };

    return this.prismaService.user.update({
      where: { id: Number(id) },
      data: user_data,
    });
  }

  remove(id: number) {
    return this.prismaService.user.delete({
      where: { id: id },
    });
  }

  findOneByUsername(username: string) {
    return this.prismaService.user.findUnique({
      where: { username: username },
    });
  }
}
