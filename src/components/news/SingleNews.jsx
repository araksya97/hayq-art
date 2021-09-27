import React from 'react'
import { Link } from 'react-router-dom'
import './SingleNews.scss'
export default function SingleNews(props) {
    return (
            <div className="news_card">
                <div className="img">
                    <img src={props.img} alt="" />
                </div>
                <div className="category"> news</div>
                <h4>
                    <Link
                        className="link"
                        to="/">
                        {props.title}
                    </Link>
                </h4>
                <p>
                    {props.text}
                </p>
                <span className="btn button-underline">

                    <Link
                    className="link"
                        to="/">
                        {props.button}
                    </Link>
                </span>
            </div>
 
    )
}

