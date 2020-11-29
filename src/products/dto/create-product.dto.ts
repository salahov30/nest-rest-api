export class CreateProductDto {
  readonly productId: number;
  readonly discount: number;
  readonly marketplace: string;
  readonly picture: string;
  readonly price: number;
  readonly url: string;
  readonly currency: string;
  readonly title: string;
}
