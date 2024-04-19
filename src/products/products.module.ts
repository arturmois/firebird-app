import { Module } from '@nestjs/common';
import { FirebirdModule } from 'src/firebird/firebird.module';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [FirebirdModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
