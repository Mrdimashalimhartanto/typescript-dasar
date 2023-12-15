// todo:
//  ENUM TYPEDATA
//  adalah sebuah nilai yang sudah pasti dan tidak berubah nilainya dia bisa juga di konversi jadi number atau string,
//  enum tidak di miliki oleh javascript

export enum CustomerType {
  REGULAR,
  GOLD,
  PLATINUM,
}

export type Customer = {
  id: number;
  name: string;
  type: CustomerType;
};
