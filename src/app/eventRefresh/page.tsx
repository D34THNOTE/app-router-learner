import React from "react";
import {revalidateTag} from "next/cache";
import RevalidateButton from "@/app/eventRefresh/revalidateButton";

const fetchTimeOnReq = async () => {
    const response = await fetch('http://worldtimeapi.org/api/timezone/Europe/Warsaw', {
        next: { tags: ['time'] },
    });

    const data = await response.json();

    const toReturn = new Date(data.datetime);


    return toReturn.toLocaleTimeString();
}


export default async function TagRevalidate() {
    const toDisplay = await fetchTimeOnReq();

    return (
        <>
            <p>Current time: {toDisplay}</p>
            <RevalidateButton />
            <h3 className="mx-5 my-5">This page makes an API call to the server and uses the revalidateTag function to update the time it displays here. Without using the alpha "Server Actions" - which I'm not doing atm - the only
                way to refresh the page that I could figure out, without making the whole thing client-side which wouldn't be reflective of ISR at all, was to refresh the whole page. Not ideal, I know. I want to test
            server actions out, but they are only an Alpha feature so even if they worked great it'd be kinda questionable whether we should use them or not</h3>
        </>
    );
}
