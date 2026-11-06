export function payment(p) {
    if (p.method === "bikash") {
        console.log(`send your bikash ${p.number}`);
    }
    if (p.method === "card") {
        console.log(`pay your bill with ${p.cardNo} and provide your ${p.cvc} `);
    }
}
