import React, { useState } from "react";
import SearchFom from "../components/SearchForm";
import Link from 'next/link'

const HomeContainer = (props) => {

    const[formInputs, setFormInputs] = useState()
    const[searchTerm, setSearchTerm] = useState('cats')
    const[searchResults, setSearchResults] = useState([])

    const handleInputs = (event) => {
        let {value} = event.target
        setFormInputs(value)
        console.log(formInputs);
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        let giphys = await fetch(`https://api.giphy.com/v1/gifs/search?q=${formInputs}&api_key=nFR45YvPhD3AR8iV1IPOZle5m0c1sApv&limit=10`)
        giphys = await giphys.json()
        setSearchResults(giphys.data)
        setSearchTerm(formInputs)
    }

    useState(() => {
      setSearchResults(props.data)
    },[formInputs])
    
    

    return (
      <>
        <h1>Gyphy Search App: {searchTerm}</h1>
        <SearchFom className="searchterm" actionHandler={handleInputs} handleSubmit={handleSubmit} />
        <h2>Most popular gamers requests</h2>
        <div className="bigdiv">
          <button className="divbtn">
            <Link href="/search/Minecraft">Minecraft</Link>
          </button> 
          <button className="divbtn">
            <Link href="/search/Asssassins">Asssassins Creed</Link>
          </button> 
          <button className="divbtn">
            <Link href="/search/Days Gone">Days Gone</Link>
          </button> 
          <button className="divbtn">
            <Link href="/search/Venom">Venom</Link>
          </button> 
          <button className="divbtn">
            <Link href="/search/Orphanage">Orphanage</Link>
          </button> 
        </div>   
        <div className="giphy-search-results-grid">
            {
              searchResults.map((item, idx)=> {
                return(
                  <div key={idx}>
                    <h3>{item.title}</h3>
                    <img src={item.images.original.url} alt={item.title} />
                  </div>
                )
              })
            }
        </div>
      </>
    ) 
}


export default HomeContainer