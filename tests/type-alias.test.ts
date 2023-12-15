import {
  BankIndonesia,
  BankName,
  Category,
  CodeBankIndonesia,
} from "../src/type-alias";
import { PayCode, Person } from "../src/data-charge";

describe("Type Alias", function () {
  it("should must support typescript", () => {
    const category: Category = {
      id: 1,
      name: "Bank BCA",
      code: 2740,
      virtual_account: 2740230649,
    };

    const bankName: BankName = {
      id: "string",
      name: "Virtual Account BCA",
      price: "1239999",
      category: category,
    };
    console.info(category);
    console.info(bankName);
  });

  it("for code number bank in indonesia", () => {
    const bankIndonesia: BankIndonesia = {
      id: 1,
      name: "BNI",
      code_bank: "221212",
      address: "Jalan Hayam Wuruk - Jakarta",
    };
    const codeBankIndo: CodeBankIndonesia = {
      id: 1,
      code: 221212,
      bank: bankIndonesia,
    };

    console.info(bankIndonesia);
    console.info(codeBankIndo);
  });

  it("for Data Person", () => {
    const DetailNasabah: Person = {
      id: 1,
      broker_name: "Dimas Halim",
      action: "charge",
      pay_code: "BCA",
      order_id: "2223343233",
      external_id: "2223343233",
      status: "PAID",
      inf_phone: "00912324344",
    };
    const TypeCode: PayCode = {
      pay_type: "all",
      amount: "15000",
      pg_trans_id: "1",
      name_pg: "BCA VIRTUAL ACCOUNT",
      user: DetailNasabah,
    };

    console.info(DetailNasabah);
    console.info(TypeCode);
  });
});
