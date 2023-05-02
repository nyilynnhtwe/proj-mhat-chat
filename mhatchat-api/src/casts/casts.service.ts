import { Injectable } from '@nestjs/common';
import { CreateCastDto } from './dto/create-cast.dto';
import { UpdateCastDto } from './dto/update-cast.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CastsService {

  constructor(private prisma:PrismaService)
  {

  }

  create(createCastDto: CreateCastDto) {
    return this.prisma.cast.create(
      {
        data: createCastDto
      }
    );
  }

  findAll() {
    return this.prisma.cast.findMany();
  }

  findOne(id: string) {
    return this.prisma.cast.findFirstOrThrow(
      {
        where:{
          id
        }
      }
    );
  }

  update(id: string, updateCastDto: UpdateCastDto) {
    return `This action updates a #${id} cast`;
  }

  remove(id: string) {
    return `This action removes a #${id} cast`;
  }
}
