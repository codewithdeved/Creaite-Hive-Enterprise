import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET() {
    try {
        // Fetch your products and their default prices
        const products = await stripe.products.list({
            ids: [
                process.env.PRODUCT_ONE_ID,
                process.env.PRODUCT_TWO_ID,
                process.env.PRODUCT_THREE_ID,
            ],
            expand: ["data.default_price"],
        });

        return new Response(JSON.stringify(products.data), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}