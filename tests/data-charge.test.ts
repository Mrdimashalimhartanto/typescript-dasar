import { PayCode, Person } from "../src/data-charge";

describe("Data charge", function () {
  it("Testing untuk data charge", () => {
    const DetailPerson: Person = {
      id: 1,
      broker_name: "Dimas Halim Hartanto",
      action: "charge",
      pay_code: "all",
      order_id: "11123234334",
      external_id: "11123234334",
      status: "paid",
      inf_phone: "009294485",
    };
    const DetailPaycode: PayCode = {
      pay_type: "VA",
      amount: "150000",
      pg_trans_id: "11234",
      name_pg: "BCA Virtual Account",
      user: DetailPerson,
    };

    console.info(DetailPerson);
    console.info(DetailPaycode);
  });
});
