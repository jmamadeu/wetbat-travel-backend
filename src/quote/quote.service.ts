import { Injectable } from '@nestjs/common';
import { Quote } from 'prisma/prisma-client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class QuoteService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.quote.findMany();
  }

  create(createQuoteDto: Omit<Quote, 'id'>): Promise<Quote> {
    console.log(createQuoteDto);
    return this.prismaService.quote.create({
      data: createQuoteDto,
    });
  }
}
