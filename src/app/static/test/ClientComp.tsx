"use client"

import {useEffect} from "react";

export default function ClientComp() {

    useEffect(() => {
        throw Error("AAAAAAAAAAAAAAA");
    }, []);

    return (
        <p>Guwniarzu zasrany</p>
    )
}