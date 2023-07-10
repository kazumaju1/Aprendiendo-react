import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // Para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ').slice(0, 3).join(' ')
    const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=:size&color=:color`
    fetch(CAT_ENDPOINT_IMAGE_URL)
      .then(res => {
        const { url } = res
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl }
}
