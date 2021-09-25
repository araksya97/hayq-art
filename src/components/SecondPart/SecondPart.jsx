import React from 'react'
import SecondPartCard from './SecondPartCard'
import  './SecondPart.scss'

export default function SecondPart() {
    return (
        <section className='second_part'>
            <div className="container">
                <div className="head">
                    <h3>
                        Create without limits</h3>
                    <p>
                        With Unreal Engine, you can bring amazing real-time experiences to life using the world’s most advanced real-time 3D creation tool. <br>
                        </br>
                        From first projects to the most demanding challenges, our free and accessible resources and inspirational community empower everyone to realize their ambitions.
                    </p>
                </div>
                <div className='card_part'>
                    <SecondPartCard
                    className="card"
                        title="Learn Unreal Engine"
                        text="With over 160 hours of free online learning content, an extensive library of webinars, and options for instructor-led training, we have a way to learn that's right for you."
                        button="Start learning"
                    />
                    <SecondPartCard
                        title="Join the community"
                        text="Unreal creators are the true power behind Unreal Engine. Be part of a community that builds cutting-edge experiences, and supports each other along the way."
                        button="visit community"
                    />
                    <SecondPartCard
                        title="Get support"
                        text="Explore comprehensive reference documentation, instructional guides, community-based support, and options for dedicated professional support."
                        button="see support options"
                    />
                </div>
            </div>
        </section>

    )
}
