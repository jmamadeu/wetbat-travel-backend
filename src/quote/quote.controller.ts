import { Controller, Get } from '@nestjs/common';
import { QuoteService } from './quote.service';

@Controller('quotes')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get()
  async findAll() {
    const quotes = this.quoteService.findAll();
    return quotes;
  }
}
