import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { QuoteController } from './quote.controller';
import { QuoteService } from './quote.service';

@Module({
  controllers: [QuoteController],
  providers: [PrismaService, QuoteService],
})
export class QuoteModule {}
