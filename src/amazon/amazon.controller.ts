import { Body, Controller, Delete, Get, Header, Headers, Param, Patch, Post } from "@nestjs/common";
import { AmazonService } from "./amazon.service";
import { CreateAmazonDto } from "./dto/create-amazon.dto";
import { UpdateAmazonDto } from "./dto/update-amazon.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Amazon")
@Controller("api/amazon")
export class AmazonController {
  constructor(private readonly amazonService: AmazonService) {
  }

  @Post()
  create(@Body() createAmazonDto: CreateAmazonDto) {
    return this.amazonService.create(createAmazonDto);
  }

  @Get()
  @Header('content-type', 'application/x-www-form-urlencoded')
  findAll() {
    return this.amazonService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.amazonService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAmazonDto: UpdateAmazonDto) {
    return this.amazonService.update(+id, updateAmazonDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.amazonService.remove(+id);
  }
}


