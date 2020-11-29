import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  productId: number;
  @Prop()
  iscount: number;
  @Prop()
  marketplace: string;
  @Prop()
  picture: string;
  @Prop()
  price: number;
  @Prop()
  url: string;
  @Prop()
  currency: string;
  @Prop()
  title: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
