import React from 'react'

export const Small = React.memo(({ value }) => {
    console.log("volvi a generar")
    return (
        <small>{value}</small>
    )
}
)