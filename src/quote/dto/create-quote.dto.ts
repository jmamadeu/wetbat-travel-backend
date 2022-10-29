import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateQuoteDto {
  @IsNotEmpty()
  @IsString()
  readonly from: string;

  @IsNotEmpty()
  @IsString()
  readonly destination: string;

  @IsNotEmpty()
  readonly depart_date: Date;

  @IsNotEmpty()
  readonly return_date: Date;

  @IsNotEmpty()
  @IsNumber()
  readonly travelers: number;

  @IsNotEmpty()
  @IsString()
  readonly transportation: string;

  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
