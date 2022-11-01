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
    return this.prismaService.quote.create({
      data: createQuoteDto,
    });
  }

  findOneById(id: string) {
    return this.prismaService.quote.findFirst({
      where: {
        id,
      },
    });
  }
}
