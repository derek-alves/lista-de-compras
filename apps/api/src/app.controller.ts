import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Health')
@Controller()
export class AppController {
  @Get()
  @ApiOperation({ summary: 'Status e saúde da API' })
  getStatus() {
    return {
      status: 'online',
      project: 'Feira & Cia API',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
    };
  }
}
