import { Injectable } from "@nestjs/common";
import { CreateAmazonDto } from "./dto/create-amazon.dto";
import { UpdateAmazonDto } from "./dto/update-amazon.dto";

const SellingPartnerAPI = require("amazon-sp-api");

@Injectable()
export class AmazonService {
  constructor() {

  }

  create(createAmazonDto: CreateAmazonDto) {
    return "This action adds a new amazon";
  }

  async findAll(): Promise<any> {
    const sellingPartner = new SellingPartnerAPI({
      region: "eu",
      refresh_token: "Atzr|IwEBIEMj6s_hgMOWE_5Dyk-I6gV5B7piw8J6nRYPx9F9CpmlGXlcfWWQEohAJeByjTvE_MFVKoQmCvNNLwjeQYnBft20C4T0r1AazPp81JA5m8diQW05Kh1bP8iotq2QBdx-U1klugGfQm5kuT8IaGAvDX8u894E0zn5qx-htJvIlkmOLcvPihfAY0Q-FTLPzWyhNapTc_VBO0Zoi7jB_qeJ_oxF0RdZTGMHt-jsyanij-Ygv_I_-gXe16oTwemtNWSEofVvI7uFbmh2_HLRpA5uYw8C6CdxgwKYggNWe4TwJTzvbLMpxxhACH1eb6dDxDaQweg",
      credentials: {
        SELLING_PARTNER_APP_CLIENT_ID: process.env.SELLING_PARTNER_APP_CLIENT_ID,
        SELLING_PARTNER_APP_CLIENT_SECRET: process.env.SELLING_PARTNER_APP_CLIENT_SECRET,
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
        AWS_SELLING_PARTNER_ROLE: process.env.AWS_SELLING_PARTNER_ROLE
      },
      options: {
        debug_log: true
      }
    });
    console.log(process.env.SELLING_PARTNER_APP_CLIENT_ID);
    // console.log(sellingPartner);
    const token = await sellingPartner.access_token;
    // const role = await sellingPartner.refreshRoleCredentials();
    // let res = await sellingPartner.callAPI({
    //   operation: "getMarketplaceParticipations",
    //   endpoint: "sellers"
    // });
    let res = await sellingPartner.callAPI({
      operation: "getMarketplaceParticipations",
      endpoint: ""
    });

    // console.log(res);

    console.log(token);
    return res;
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
