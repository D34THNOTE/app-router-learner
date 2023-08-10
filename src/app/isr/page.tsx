import React from "react";
import RefreshButton from "@/app/isr/RefreshButton";

const fetchTimeOnReq = async () => {
    const response = await fetch('http://worldtimeapi.org/api/timezone/Europe/Warsaw', { next: { revalidate: 15 }});
    const data = await response.json();

    const toReturn = new Date(data.datetime);


    return toReturn.toLocaleTimeString();
}


export default async function ISRPage() {
    const toDisplay = await fetchTimeOnReq();


    return (
        <>
            <p>Current time: {toDisplay}</p>
            <RefreshButton />
            <h3>This page gets re-rendered &quot;every 15 seconds&quot;, except that it seems that it only unlocks the option of refreshing after 15 seconds - meaning it will only happen on the next request,
            rather than every 15 seconds</h3>
        </>
    );
}
