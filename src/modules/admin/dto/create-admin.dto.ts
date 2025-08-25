import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {
  @ApiProperty({ example: 'admin@example.com' })
  email: string;

  @ApiProperty({ example: 'securepassword' })
  password: string;
}
