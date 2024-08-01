const { Router } = require('express');
const Stripe = require('stripe');

const stripe = Stripe('sk_test_51PcswSCSdnd4jNhfIeGkb48gDq1DkVAr0Jiabm60AcsXjVUVpbpVAwWGwJVmosrTc4O31S7w0D3odq2Vhfn2s0B200dzgzW1ro');


const checkOut = Router();

checkOut.post('/', async (req, res) => {
    const {products} = req.body;

    const lineItems = products.map((product) => ({
        price_data: {
            currency: 'eur', 
            product_data: {
                name: product.title,
                images: [product.image],
            },
            unit_amount: Math.round(product.price * 100),
        },
        quantity: product.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items:lineItems,
        mode: 'payment',
        success_url: 'http://localhost:5173/',
        cancel_url: 'http://localhost:5173/',
    });

    res.json({ id: session.id });
})

module.exports = {checkOut}