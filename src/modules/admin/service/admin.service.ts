import { Injectable } from '@nestjs/common';
import { AdminRepository } from '../repository/admin.repository';
import { CreateAdminDto } from '../dto/create-admin.dto';
import { UpdateAdminDto } from '../dto/update-admin.dto';

@Injectable()
export class AdminService {
  constructor(private readonly repo: AdminRepository) {}

  create(dto: CreateAdminDto) {
    return this.repo.create(dto);
  }

  findAll() {
    return this.repo.findAll();
  }

  update(id: string, dto: UpdateAdminDto) {
    return this.repo.update(id, dto);
  }

  delete(id: string) {
    return this.repo.delete(id);
  }
}
