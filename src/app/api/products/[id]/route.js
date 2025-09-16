import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(req, { params }) {
    try {
        const { id } = params;

        const product = await stripe.products.retrieve(id, {
            expand: ["default_price"],
        });

        return new Response(JSON.stringify(product), { status: 200 });
    } catch (error) {
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 500 }
        );
    }
}