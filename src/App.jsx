import { useState ,  useEffect } from "react"
export function App () {

    const firstWord = ''

    const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
    const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=white&json=true`

    const [fact, setFact] = useState('Datos sobre gatos')

    useEffect(()=>{
        //consulta de fact de gato
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => setFact(data.fact))
    }, []) // se ejecutara solo una vez cuando iniciemes la app 

    return ( 
        <h1>App de gatitos</h1>
    )
}