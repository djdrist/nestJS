import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID, Min } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsUUID()
  @Min(0)
  clientId: string;

  @IsNotEmpty()
  @IsUUID()
  @Min(0)
  productId: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
  address: string;
}
