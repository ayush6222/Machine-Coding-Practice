
"use client"

import { useEffect, useState } from "react"

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1)
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
                    `${hours} : ${minutes} : ${seconds}`
                }
            </h1>
            <p>Started : {isRunning ? "ON" : "OFF"}</p>
            <button style={{ margin: "20px" }} onClick={() => startClickHandler()}>Start</button>
            <button style={{ margin: "20px" }} onClick={() => stopClickHandler()}>Stop</button>
            <button style={{ margin: "20px" }} onClick={() => resetClickHandler()}> Reset</button>
           <button
  onClick={() => {
    window.open("https://github.com/ayush6222/main", "_blank");
  }}
>
  Open GitHub Repo
</button>

        </div>
    )
}