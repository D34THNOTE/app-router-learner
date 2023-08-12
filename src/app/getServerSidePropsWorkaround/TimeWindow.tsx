'use client'

import { useQuery } from 'react-query'
import {getTime} from "@/app/fetchingMethods/getTime";

export default function TimeWindow(props) {
    const { data } = useQuery({
        queryKey: ['posts'],
        queryFn: getTime,
        initialData: props.toDisplay,
    })

    return (
        <>
            <p className="rounded-lg border-4 border-green-500 bg-blue-300 p-4">
                Current time: {data}
            </p>
        </>
    );
}
