import { payment } from './module-config.js';
payment({ method: 'bikash', number: 293 });
payment({ method: "card", cardNo: 21112, exp: 323, cvc: 12 });
