import { Injectable } from '@nestjs/common';

@Injectable()
export class QuoteService {
  findAll(): string[] {
    return ['Quote 1', 'Quote 2', 'Quote 4'];
  }
}
