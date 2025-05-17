import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentSeccionDto } from './dto/payments-session.dto';
import { Request, Response } from 'express';
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}
   
  @Post('create-payment-session')
  createPaymenstSession(@Body () paymentSessionDto : PaymentSeccionDto){
    return this.paymentsService.createPaymenstSession(paymentSessionDto)
  }

  @Get("success")
  sucess(){
    return {
      ok:false,
      message : "Payment Sucefull"
    }
  }

  @Get("cansel")
  cancel(){
    return {
      ok : false , 
      message : "Payment cancelled"
    }
  }



     @Post('webhook')
  async stripeWebhook(@Req() req: Request, @Res() res: Response) {
    return this.paymentsService.stripeWebhook(req, res);
  }
  
}
