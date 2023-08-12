'use client'

import { useQuery } from 'react-query'
import {getTime} from "@/app/fetchingMethods/getTime";
import {getUpdatedTime} from "@/app/fetchingMethods/getTimeServerActions";



export default function TimeWindow(props: any) {
    const { data } = useQuery({
        queryKey: ['posts'],
        queryFn: getUpdatedTime,
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
