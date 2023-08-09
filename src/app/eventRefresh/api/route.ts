import {Request} from "next/dist/compiled/@edge-runtime/primitives";
import {revalidateTag} from "next/cache";

export async function POST(request: Request) {

    revalidateTag('time')

    return new Response(JSON.stringify({ message: 'Revalidated' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}