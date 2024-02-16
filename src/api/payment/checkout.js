const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const checkout = async(req, res) => {

    const {price} = req.body;
     
    const amount = parseInt(price * 100);

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
            payment_method_types: ['card']
        });
        res.send({
            clientSecret: paymentIntent.client_secret
        })
        
    } catch (err) {
        console.log(err)
    }
}
module.exports = checkout;