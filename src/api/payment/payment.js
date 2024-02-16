const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// const payment = async (req, res) => {
//     let { price } = req.body;
//     console.log(price)
//     // If price is undefined, wait for it to be defined before proceeding


//     let amount = 1000;
//     if (price === 'basic') {
//         amount = 1600;
//     }

//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: 100,
//         currency: "usd",
//         automatic_payment_methods: {
//             enabled: true,
//         },
//     });

//     res.send({
//         clientSecret: paymentIntent.client_secret,
//     });
// }

const payment = async (req, res) => {
    // const { goru } = req.body;
    // console.log(req.body)
    // const amount = parseInt(price * 100);
    //  console.log(amount)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 200,
        currency:'usd',
        payment_method_types: ['card']
    })
    res.send({
        clientSecret: paymentIntent.client_secret,
    });
}

module.exports = payment;
