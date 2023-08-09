import React from "react";

const fetchTimeOnReq = async () => {
    const response = await fetch('http://worldtimeapi.org/api/timezone/Europe/Warsaw', {
        cache: 'no-cache',
    });
    const data = await response.json();

    const toReturn = new Date(data.datetime);


    return toReturn.toLocaleTimeString();
}


export default async function AlwaysRenderedPage() {
    const toDisplay = await fetchTimeOnReq();

    return (
        <>
            <p>Current time: {toDisplay}</p>
            <h3>This page gets re-rendered for you on every new request. Without manually refreshing it doesn&apos;t actually refresh for me, but that may be the browser caching the page - not sure </h3>
        </>
    );
}
