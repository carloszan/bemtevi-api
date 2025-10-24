import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  IsUrl,
  IsDateString,
  IsInt,
  Min,
  IsNotEmpty,
} from 'class-validator';

export enum Theme {
  LIGHT = 'light',
  DIM = 'dim',
  DARK = 'dark',
}

export enum Accent {
  BLUE = 'blue',
  YELLOW = 'yellow',
  PINK = 'pink',
  PURPLE = 'purple',
  ORANGE = 'orange',
  GREEN = 'green',
}

export class CreateUserDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  bio?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiPropertyOptional({ enum: Theme })
  @IsOptional()
  @IsEnum(Theme)
  theme?: Theme;

  @ApiPropertyOptional({ enum: Accent })
  @IsOptional()
  @IsEnum(Accent)
  accent?: Accent;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  website?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsUrl()
  photoURL: string;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  verified?: boolean;

  @ApiPropertyOptional({ type: [String], default: [] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  following?: string[];

  @ApiPropertyOptional({ type: [String], default: [] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  followers?: string[];

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsInt()
  @Min(0)
  totalTweets?: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsInt()
  @Min(0)
  totalPhotos?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  pinnedTweet?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  coverPhotoURL?: string;
}
