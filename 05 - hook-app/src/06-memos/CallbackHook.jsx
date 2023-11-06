import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    // const incremetFather = () => {
    //     setCounter(counter + 1)
    // }

    const incremetFather = useCallback(
        (value = 1) => {
            setCounter((c) => c + value)
        },
        [],
    )
    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={incremetFather} />
        </>
    )
}
