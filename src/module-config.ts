export type BikashPay = {
  method: "bikash";
  number: number;
};

export type CardPay = {
  method: "card";
  cardNo: number;
  exp: number;
  cvc: number;
};

export type CashPay = {
  method: "cash";
};

type Pay = BikashPay | CardPay | CashPay;

export function payment(p: Pay) {
  if (p.method === "bikash") {
    console.log(`send your bikash ${p.number}`);
  }

  if (p.method === "card") {
    console.log(`pay your bill with ${p.cardNo} and provide your ${p.cvc} `);
  }

}

