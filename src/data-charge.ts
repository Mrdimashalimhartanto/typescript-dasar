export type Person = {
  id: number;
  broker_name: string;
  action: string;
  pay_code: string;
  order_id: string;
  external_id: string;
  status: string;
  inf_phone?: string;
};

export type PayCode = {
  pay_type: string;
  amount: string;
  pg_trans_id: string;
  name_pg: string;
  user: Person;
};
