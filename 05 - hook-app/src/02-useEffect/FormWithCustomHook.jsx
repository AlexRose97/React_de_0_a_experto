import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
    const { formState, onInputChange, onResetForm, email, username, password } = useForm({
        username: "",
        email: "",
        password: ""
    });

    //const { username, email, password } = formState;
    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input
                type="text"
                className="form-control mt-2"
                placeholder="UserName"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="correo@correo.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            <button onClick={onResetForm}>Borrar</button>
            {
                (username === "strider2") && <Message />
            }
        </>
    )
}
