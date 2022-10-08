import { Injectable } from '@nestjs/common';
import { CreateAmazonDto } from './dto/create-amazon.dto';
import { UpdateAmazonDto } from './dto/update-amazon.dto';

@Injectable()
export class AmazonService {
  create(createAmazonDto: CreateAmazonDto) {
    return 'This action adds a new amazon';
  }

  findAll() {
    return `This action returns all amazon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} amazon`;
  }

  update(id: number, updateAmazonDto: UpdateAmazonDto) {
    return `This action updates a #${id} amazon`;
  }

  remove(id: number) {
    return `This action removes a #${id} amazon`;
  }
}
