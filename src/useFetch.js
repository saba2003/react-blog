import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    //showing that the data is being loaded
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
// used to stop fetching when clicked to other route
        const abortCont = new AbortController()
        //associating the abort controller with fetch
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
            .catch((error) => {
                if(error.name !== 'AbortError'){
                    setIsPending(false)
                    setError(error.message) 
                }
            })

        return () => abortCont.abort()
    }, [url])

    return {data, isPending, error}
}

export default useFetch