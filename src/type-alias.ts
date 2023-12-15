//TODO: Contoh Type Alias
// bisa menggunakan 2 tipe data yaitu string dan number
export type ID = string | number;

export type Category = {
  id: ID;
  name: string;
  code: number;
  virtual_account: number;
};

export type BankName = {
  id: ID;
  name: string;
  price: string;
  category: Category;
};

export type BankIndonesia = {
  id: ID;
  name: string;
  code_bank: string;
  address: string;
};

export type CodeBankIndonesia = {
  id: ID;
  code: number;
  bank: BankIndonesia;
};
