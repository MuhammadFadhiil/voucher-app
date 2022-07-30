import { Controller, Get } from '@nestjs/common';
import { VoucherService } from './voucher.service';

@Controller('voucher')
export class VoucherController {
  constructor(private readonly voucherService: VoucherService) {}

  @Get()
  async getAllVoucher() {
    return await this.voucherService.getAllVoucher();
  }
}
