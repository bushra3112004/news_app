import React from "react";
import"./NewArticle.css"

  
function NewsArticle({author,title,description,url,urlToImage,publicshedAt,content}){
    return(
        <div className="news-article-card" >
            <img src={urlToImage} alt="" className="news-article-img" />
            <h1 className="article-title">{title}</h1>
            <div className="article-info">
                <p className="article-author">{author}</p>
                <p className="article-publicshedAt">{publicshedAt}</p>
            </div>
            <p className="article-description">{description}</p>
            <a href={url} target="blank" className="btn-read-more">Read More</a>
        </div>
    )
}
export default NewsArticle