import React from 'react'
import { Link } from 'react-router-dom'
import './SecondPartCard.scss'
export default function SecondPartCard(props) {
    return (
      
            <div className="card">
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
                <div className="btn button-border-gradient">
                    <Link
                        className="link"
                        to="/">
                        {props.button}
                    </Link>
                </div>
            </div>
 
    )
}
