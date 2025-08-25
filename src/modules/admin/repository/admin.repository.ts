import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Admin } from '@prisma/client';
import { CreateAdminDto } from '../dto/create-admin.dto';

@Injectable()
export class AdminRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Admin[]> {
    return this.prisma.admin.findMany();
  }

  findByEmail(email: string): Promise<Admin | null> {
    return this.prisma.admin.findUnique({ where: { email } });
  }

  create(dto: CreateAdminDto): Promise<Admin> {
    return this.prisma.admin.create({ data: dto });
  }

  update(id: string, data: Partial<Admin>): Promise<Admin> {
    return this.prisma.admin.update({ where: { id }, data });
  }

  delete(id: string): Promise<Admin> {
    return this.prisma.admin.delete({ where: { id } });
  }
}
