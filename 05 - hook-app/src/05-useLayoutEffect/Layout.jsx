import { useFetch, useCounter } from "../hooks"
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {
    const { counter, incremet } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    // console.log({ data, isLoading, hasError })
    const { quote, author } = !!data && data[0];
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
                (isLoading) ?
                    (
                        <LoadingQuote />
                    ) : (
                        data.map((x, i) => {
                            return (<Quote author={x.author} quote={x.quote} key={i + 1} />)
                        })
                    )
            }
            <button
                className="btn btn-primary"
                onClick={() => { incremet(1) }}
                disabled={isLoading}
            >
                Mas Frases
            </button>


        </>
    )
}
