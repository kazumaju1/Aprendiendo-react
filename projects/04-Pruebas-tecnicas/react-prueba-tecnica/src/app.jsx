import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

// const CAT_ENDPOINT_IMAGE_URL =  `https://cataas.com/cat/says/${firstWord}?size=:size&color=:color`

export function App () {
  // Estados
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1 className='titulo'>App de gatitos</h1>
      <section className='seccion'>
        {fact && <p className='texto'>{fact}</p>}
        {imageUrl && <img className='image' src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
      </section>
      <button onClick={handleClick}>Get new fact</button>
    </main>
  )
}
