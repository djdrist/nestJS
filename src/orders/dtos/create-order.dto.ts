import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID, Length, Min } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(10, 40)
  client: string;

  @IsNotEmpty()
  @IsUUID()
  @Min(0)
  productId: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
  address: string;
}
