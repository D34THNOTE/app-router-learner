import React from "react";
import { testDbConnection } from "@/lib/postgres";
import { User } from "@/models/User";

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
    await testDbConnection();

    // try {
    //     const newUser = await User.create({
    //         email: "example@example.com",
    //         password: "hashedPassword"
    //     });
    //     console.log("New user created:", newUser.toJSON());
    // } catch (error) {
    //     console.error("Error creating user:", error);
    // }

    return (
        <>
            <p>Current time: {toDisplay}</p>
            <h3>This page gets re-rendered for you on every new request. Without manually refreshing it doesn&apos;t actually refresh for me, but that may be the browser caching the page - not sure </h3>
        </>
    );
}
