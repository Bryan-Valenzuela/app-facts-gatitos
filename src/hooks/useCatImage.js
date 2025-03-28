import {useState, useEffect} from 'react'
export function useCatImage({fact}) {
    const [imageUrl, setImageUrl] = useState()
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
    
    return {imageUrl:`${imageUrl}`}
}
