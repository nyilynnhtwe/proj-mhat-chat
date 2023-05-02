import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MoviesService {

  constructor(private prisma:PrismaService)
  {

  }

  create(createMovieDto: CreateMovieDto) {
    return this.prisma.movie.create(
      {
        data: createMovieDto
      }
    );
  }

  findAll() {
    return this.prisma.movie.findMany();
  }

  findOne(id: string) {
    return this.prisma.movie.findFirstOrThrow(
      {
        where : { id }
      }
    );
  }

  update(id: string, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: string) {
    return `This action removes a #${id} movie`;
  }
}
