import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  
  
const api = process.env.REACT_APP_API_KEY; 
let url = `https://pixabay.com/api/?key=${api}&q=${query}`

 


  const fetchImages = async () => {
    //let headers = new Headers();
    //headers.set("Authorization", "Basic " + btoa(api+ ":" + ""));
    
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json();
      const results = data.hits
      console.log(data.hits)
//id pageURL tags previewURL largeImageURL views downloads, likes
      if(results) {
        const newHits = results.map((hit) =>{
          const { id, pageURL, tags, previewURL, largeImageURL, views, downloads, likes } = hit
          return {
            id:id,
            pageURL:pageURL,
            tags:tags,
            preview:previewURL,
            large:largeImageURL,
            views:views,
            downloads:downloads,
            likes:likes
          }

        })
        setImages(newHits)
      }
      else {
        setImages([])
      }

       setLoading(false);

    }catch (error){
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() =>{
    fetchImages();
  },[query])

  return <AppContext.Provider 
  value={{
    loading, 
    images,
    searchTerm,
    query,
    setQuery, 
    setSearchTerm,
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

 export { AppContext, AppProvider }
