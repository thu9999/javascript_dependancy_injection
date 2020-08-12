class Payment {
    paymentProcessor: StripeProcessor;
    constructor(paymentProcessor: StripeProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    cash(amount: number) {
        this.paymentProcessor.pay(amount * 1000);
    }
}

class PaypalProcessor {
    user: string;
    constructor(user: string) {
        this.user = user;
    }

    pay(amount: number) {
        console.log(`${this.user} has paid ${amount}$`);
    }
}

class StripeProcessor {
    user: string;
    currency: string;
    constructor(user: string, currency: string) {
        this.user = user;
        this.currency = currency;
    }

    pay(amount: number) {
        console.log(`${this.user} has paid ${amount} in ${this.currency}`);
    }
}

const paypal = new PaypalProcessor('Jack');
const stripe = new StripeProcessor('Doe', 'VND');

const payment = new Payment(stripe);
payment.cash(100);



