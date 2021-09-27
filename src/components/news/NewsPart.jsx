import React from 'react'
import SingleNews from './SingleNews'
import { Link } from 'react-router-dom'
import './NewsPart.scss'

import img1 from '../../assets/image/image1.webp'
import img2 from '../../assets/image/image2.webp'
import img3 from '../../assets/image/image3.webp'
export default function NewsPart() {
    return (
        <section className='news'>
            <div className="container">
                <div className="title_part">
                    <h3>The latest from Unreal Engine</h3>
                    <div className="btn button-underline">
                        <Link
                        className="link"
                            to="/"
                        >see all news & events
                        </Link>
                    </div>

                </div>
                <div className="news_cards">
                    <SingleNews
                        img={img1}
                        title="Unreal Engine 4.27 is released!"
                        text="Creators across all industries have something to celebrate with this release: In‑camera VFX goes next-level with a slew of improvements, while other highlights include path tracing for stunning final images, out-of-the-box access to Oodle and Bink, production-ready Pixel Streaming, and much more."
                        button="find out more"
                    />
                    <SingleNews
                        img={img2}
                        title="Unreal Engine 5 Early Access is out!"
                        text="Ready to get your hands on Lumen, Nanite, and much more? If you're a game developer who likes to live on the bleeding edge, this Early Access build is for you. Start testing features, prototyping your future next-gen games, and sending us your feedback today!"
                        button="find out more"
                    />
                    <SingleNews
                        img={img3}
                        title="MetaHuman Creator Early Access now available!"
                        text="Have you been waiting to get your hands on MetaHuman Creator? Now’s your opportunity to join the Early Access program and start creating your own unique high-fidelity digital humans in minutes. Plus, get over 50 free, ready-made MetaHumans on Quixel Bridge!"
                        button="request access"
                    />
                </div>
            </div>
        </section>
    )
}
