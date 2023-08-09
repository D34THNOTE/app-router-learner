import React from "react";

const fetchTimeStatic = async () => {
    const response = await fetch('http://worldtimeapi.org/api/timezone/Europe/Warsaw', {
        cache: 'force-cache',
    });
    const data = await response.json();

    const toReturn = new Date(data.datetime);


    return toReturn.toLocaleTimeString();
}


export default async function StaticPage() {
    const toDisplay = await fetchTimeStatic();

    return (
        <>
            <p>Current time: {toDisplay}</p>
            <h3>This static page gets rendered and cached once, if you run the project in dev mode it will get cached the first time you run the app and then never again - not by itself anyway, maybe if you remove the
            cached file or smg it actually will re-render</h3>
        </>
    );
}
