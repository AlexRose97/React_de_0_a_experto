import { useEffect } from "react"

export const Message = () => {
    useEffect(() => {
        console.log("message mounted")
        return () => {
            console.log("message un-mounted")
        }
    }, [])

    return (
        <>
            <h3>Usuario Ya Existe</h3>
        </>
    )
}
