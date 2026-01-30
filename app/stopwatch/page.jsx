
"use client"

import { useEffect, useState } from "react"
import Button from "../components/button"

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000)
        }


        return (() => { clearInterval(interval) })
    }, [isRunning])
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    function startClickHandler() {
        setIsRunning(true)
    }

    function stopClickHandler() {
        setIsRunning(false)
    }

    function resetClickHandler() {
        setTime(0)
    }


    return (
        <div >
            <p>Stopwatch Implementation</p>
            <h1>
                {
                    `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`
                }
            </h1>
            <p>Started : {isRunning ? "ON" : "OFF"}</p>
            <button style={{ margin: "20px" }} onClick={() => startClickHandler()}>Start</button>
            <button style={{ margin: "20px" }} onClick={() => stopClickHandler()}>Stop</button>
            <button style={{ margin: "20px" }} onClick={() => resetClickHandler()}> Reset</button>

            <Button url="https://github.com/ayush6222/Machine-Coding-Practice/blob/main/app/stopwatch/page.jsx"/>

        </div>
    )
}