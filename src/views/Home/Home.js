import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./Home.css"
import NewsArticle from "../../components/NewArticle/NewArticle.js";


function Home() {
    const [news, setNews] = useState([])
    const [searchQuery,setSearchQuery]=useState("pune")

    const loadnews = async () => {
      try{
          const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-08-03&to=2024-08-03&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`);
setNews(response.data.articles)
    }
    catch(error){
        console.log(error)
    }
}

    useEffect(() => {
        loadnews()
    }, [])

    useEffect(()=>{
        loadnews()
    },[searchQuery])

    return (
        <div>
            <h1 className="app-name">News App</h1>
             <input
             className="search-input"
             type="text"
             value={searchQuery}
             onChange={(e)=>{
                setSearchQuery(e.target.value)
             }}/>

            <div className="news-container">
            {
                news.map((newsArticle, index) => {
                    const { author, title, description, url, urlToImage, publicshedAt, content } = newsArticle

                    return (<NewsArticle author={author} title={title} description={description} url={url} urlToImage={urlToImage}
                        publicshedAt={publicshedAt} content={content} key={index} />)
                })
            }
            </div>
        </div>
    )
}
export default Home