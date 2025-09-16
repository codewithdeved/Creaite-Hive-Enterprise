import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    try {
        const { priceId } = await req.json();

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card"],
            line_items: [{ price: priceId, quantity: 1 }],
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
        });

        return NextResponse.json({ url: session.url });
    } catch (err) {
        console.error("Stripe checkout error:", err.message);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}