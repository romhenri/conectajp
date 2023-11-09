declare interface Product {
  id: number;
  name: string;
  desc?: string;
  price: number;
  stars?: number;
  image?: string;
  store: {
    name: string;
    address: string;
    phone: string;
  };
}