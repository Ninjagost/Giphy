import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Search(initProps) {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>Search</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/style.css" />
                <meta name="description" content={initProps.giphys.map((each, index)=> each.title + '  ')} />
            </Head>
            <h1>Search {router.query.searchTerm}</h1>
            <div className="bigdiv">
              <button className="divbtn">
                <Link href="/search/minecraft">Minecraft</Link>
              </button> 
              <button className="divbtn">
                <Link href="/search/assassins">Asssassins Creed</Link>
              </button> 
              <button className="divbtn">
                <Link href="/search/daysgone">Days Gone</Link>
              </button> 
              <button className="divbtn">
                <Link href="/search/venom">Venom</Link>
              </button> 
              <button className="divbtn">
                <Link href="/search/Orphanage">Orphanage</Link>
              </button> 
            </div>   
            <div className="giphy-search-results-grid">
                {initProps.giphys.map((item, idx) => {
                    return(
                        <div key={idx}>
                            <h3>{item.title}</h3>
                            <img src={item.images.original.url} alt={item.title} />
                        </div>
                    )    
                })}
            </div>

        </div>
    )
}

export async function getServerSideProps(context){
    const searchTerm = context.query.searchTerm;
    let giphys = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=nFR45YvPhD3AR8iV1IPOZle5m0c1sApv&limit=10`)
    giphys = await giphys.json()
    return {props: {giphys: giphys.data}}
}