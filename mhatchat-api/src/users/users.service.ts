import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getMyUser(id: string, req: any) {
    const decodedUserInfo = req.user as { id: string; username:string; email: string };

    const foundUser = await this.prisma.user.findUnique({ where: { id } });

    if (!foundUser) {
      throw new NotFoundException();
    }

    if (foundUser.id !== decodedUserInfo.id) {
      throw new ForbiddenException();
    }

    delete foundUser.password;

    return { user: foundUser };
  }

  async getUsers() {
    const users = await this.prisma.user.findMany({
      select: { id: true, email: true },
    });

    return { users };
  }
}
