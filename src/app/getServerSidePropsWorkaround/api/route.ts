import {getUsers} from "@/app/fetchingMethods/UserAPI";


export async function GET(request: Request) {
    const users = await getUsers();

    return new Response(JSON.stringify(users), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}
