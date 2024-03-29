import { Order } from "@prisma/client";

export type User = {
  name: string;
  email: string;
  role: string;
  address: string;
  userId: string;
  accountId: string;
  image: string;
  bank: {
    deposit: number;
  };
};
export type CartItem = {
  id: string;
  price: number;
  image: string;
  name: string;
  quantity: number;
};
export type OrderData = Order & {
  user: {
    email: string;
    name: string;
  };
};

export type ProductType = {
  price: number;
  id: string;
  name: string;
  image: string;
  quantity: number;
};
