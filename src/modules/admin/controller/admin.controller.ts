import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AdminService } from '../service/admin.service';
import { CreateAdminDto } from '../dto/create-admin.dto';
import { UpdateAdminDto } from '../dto/update-admin.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly service: AdminService) {}

  @Post()
  @ApiOperation({ summary: 'Create admin' })
  create(@Body() dto: CreateAdminDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all admins' })
  findAll() {
    return 'hello';
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update admin by ID' })
  update(@Param('id') id: string, @Body() dto: UpdateAdminDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete admin by ID' })
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
