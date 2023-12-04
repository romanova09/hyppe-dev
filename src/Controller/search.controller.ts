import { Controller, Get, Query } from '@nestjs/common';
import { Search } from '../Service/search.service';
import { parseResponseDto } from 'src/Dto/search.dto';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: Search) {}

  @Get()
  async searchUser(@Query('keyword') keyword: string) {
    try {
      const result = await Promise.all([
        this.searchService.SearchUser(keyword),
        this.searchService.SearchPost(keyword, 'pic'),
        this.searchService.SearchPost(keyword, 'vid'),
        this.searchService.SearchPost(keyword, 'diary'),
      ]);
      const parseResponse = parseResponseDto(result);
      return parseResponse;
    } catch (error) {
      return { error: error.message };
    }
  }
}
