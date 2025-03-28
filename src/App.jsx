import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export function App () {

    
    const {fact , refreshFact} = useCatFact()
    const {imageUrl} = useCatImage({fact})
    
    console.log(imageUrl)

    const handleClick = async () =>{
        refreshFact()
    }

    console.log(imageUrl)

    return ( 
        <main>
            <h1>App de gatitos</h1>
            
            <button onClick={handleClick}>New Fact</button>

            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
        </main>
    )
}