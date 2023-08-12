import { getUsers } from "@/app/fetchingMethods/UserAPI";
import UsersList from "@/app/appUserList/UsersList";


export default async function ProductList() {
    const listOfUsers = await getUsers();

    return (
        <main>
            <div className="bg-blue-500 h-1 w-full mb-4"></div>
            <h2 className="text-lg font-semibold mb-2">Users</h2>
            <UsersList toDisplay={listOfUsers} />
        </main>
    )
}
