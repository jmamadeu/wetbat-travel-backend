import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { QuoteService } from './quote.service';

@Controller('api/v1/quotes')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get()
  async findAll() {
    const quotes = this.quoteService.findAll();
    return quotes;
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(
    @Body()
    { depart_date, return_date, ...createQuoteDto }: CreateQuoteDto,
  ) {
    const response = await this.quoteService.create({
      depart_date: new Date(depart_date),
      return_date: new Date(return_date),
      ...createQuoteDto,
    });

    return response;
  }
}
