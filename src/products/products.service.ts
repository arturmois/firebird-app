import { Injectable } from '@nestjs/common';
import { FirebirdService } from 'src/firebird/firebird.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  convertArrayOfArraysToObjects,
  convertArrayToObject,
} from './utils/converter';

@Injectable()
export class ProductsService {
  constructor(private readonly firebird: FirebirdService) {}
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll() {
    const db = await this.firebird.connect();
    const data = await this.firebird.executeQuery(
      db,
      'SELECT * FROM PRODUTOS ORDER BY CODIGO',
    );

    return convertArrayOfArraysToObjects(data as []);
  }

  async findOne(id: number) {
    const db = await this.firebird.connect();
    const data = await this.firebird.executeQuery(
      db,
      `SELECT * FROM PRODUTOS WHERE CODIGO = ${id}`,
    );
    return convertArrayToObject(data[0]);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
