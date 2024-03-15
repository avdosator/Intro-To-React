import { useEffect, useState } from "react";

const URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
    let [quote, setQuote] = useState({text: "", author: ""});

    useEffect(() => {
        fetchQuote();
    }, [])

    async function fetchQuote() {
        const response = await fetch(URL);
        const jsonRes = await response.json();
        const quote = jsonRes.quote;
        setQuote(quote);
    }
    return (
        <div>
            <h2>{quote.text}</h2>
            <h3>{quote.author}</h3>
            <button onClick={fetchQuote}> New quote</button>
        </div>
    )
}