import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController()

        fetch(url, { signal: abortCont.signal })
            .then(response => {
                if(!response.ok){
                    throw Error('couldnt fetch data')
                }
                return response.json()
            })
            .then((data) => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch((e) => {
                if(e.name !== 'AbortError'){
                    setIsPending(false)
                    setError(e.message) 
                }
            })

        return () => abortCont.abort()
    }, [url])

    return {data, isPending, error}
}

export default useFetch