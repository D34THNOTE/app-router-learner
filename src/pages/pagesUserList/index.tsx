import {getUsers} from "@/app/fetchingMethods/UserAPI";
import {InferGetServerSidePropsType} from "next";
import '../../app/globals.css'
import Navbar from "@/app/Navbar";

export const getServerSideProps = async () => {
    const users = await getUsers();

    return {
        props: {
            users
        }
    }
}


export default function ProductList({ users }: InferGetServerSidePropsType<typeof getServerSideProps> ) {
    const listOfUsers = users;

    return (
        <main>
            <Navbar />
            <div className="bg-blue-500 h-1 w-full mb-4"></div>
            <h2 className="text-lg font-semibold mb-2">Users</h2>
            <table className="w-full border-collapse">
                <thead>
                <tr>
                    <th className="border px-4 py-2 text-left">Email</th>
                    <th className="border px-4 py-2 text-left">Password</th>
                </tr>
                </thead>
                <tbody>
                {listOfUsers.map((user: any, index: any) => (
                    <tr key={index}>
                        <td className="border px-4 py-2">{user.email}</td>
                        <td className="border px-4 py-2">{user.password}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </main>
    )
}
