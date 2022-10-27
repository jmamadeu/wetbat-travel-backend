import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class QuoteService {
  constructor(private prisma: PrismaService) {}

  findAll(): string[] {
    return ['Quote 1', 'Quote 2', 'Quote 4'];
  }
}
