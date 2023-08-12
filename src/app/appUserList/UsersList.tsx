'use client'

import {useQuery} from "react-query";
import {getUsersServerAction} from "@/app/fetchingMethods/UserAPIServerActions";



export default function UsersList( props ) {

    const { data } = useQuery({
        queryKey: ['users'],
        queryFn: getUsersServerAction,
        initialData: props.toDisplay,
    })


    return (
        <table className="w-full border-collapse">
            <thead>
            <tr>
                <th className="border px-4 py-2 text-left">Email</th>
                <th className="border px-4 py-2 text-left">Password</th>
            </tr>
            </thead>
            <tbody>
            {data.map((user, index) => (
                <tr key={index}>
                    <td className="border px-4 py-2">{user.email}</td>
                    <td className="border px-4 py-2">{user.password}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}