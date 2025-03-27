import './App.css'
import { useState ,  useEffect } from "react"
export function App () {

    
    
    const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
   /*  const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=white&json=true` */
    
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()
    
    //para recuperar la informacion al cargal la pagina 
    useEffect(()=>{
        //consulta de fact de gato
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const { fact } = data
            setFact(fact)
            
        })
    }, []) // se ejecutara solo una vez cuando iniciemes la app 
    
    
    //para recuperar la imagen cada vez que tengamos informacion nueva
    useEffect(() => {
        if (!fact) return

        //obtenemos la primera palabra del fact
        const threeFirstWord = fact.split(' ', 3).join(' ')//fact.split(' ').slice(0,3).join(' ') separa toma los que indicamos y junta
        
        fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=white&json=true`)
        .then(res => res.json())
        .then(res => {
            const {url} = res
            setImageUrl(url)
        })
    }, [fact])


    return ( 
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
        </main>
    )
}