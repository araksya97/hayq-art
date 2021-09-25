import React from 'react';
import { Component } from 'react';
import '../animatedVid/AnimatedVidStyle.scss';
import vid from '../../assets/videos/vid.mp4';


export default class AnimatedVid extends Component {
    state = {
        scrolling: true,
        content: true,
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        let boxClass = [];
        if (window.scrollY > 50) {
            this.setState({ content: true});
        }
         if (window.scrollY > 80) {
            this.setState({ content: "cont100"});
        }
           if (window.scrollY > 100) {
            this.setState({ content: "cont150"});
        }
        if (window.scrollY > 150) {
            this.setState({ content: "cont180"});
        }
        if (window.scrollY < 200) {
            this.setState({ scrolling: true});
        }
        if (window.scrollY > 200) {
            boxClass.push('sm100');
            this.setState({ scrolling: boxClass.join(' ') });
            this.setState({ content: "cont200"});
        }
        if (window.scrollY > 300) {
            boxClass.push('sm200');
            this.setState({ scrolling: boxClass.join(' ') });
            // this.setState({ scrolling: "sm200"});
        }
        if (window.scrollY > 400) {
            boxClass.push('sm300');
            this.setState({ scrolling: boxClass.join(' ') });
            // this.setState({ scrolling: "sm300"});
        }
        if (window.scrollY > 500) {
            boxClass.push('sm400');
            this.setState({ scrolling: boxClass.join(' ') });
            // this.setState({ scrolling: "sm400"});
        }
        if (window.scrollY > 600) {
            boxClass.push('sm500');
            this.setState({ scrolling: boxClass.join(' ') });
            // this.setState({ scrolling: "sm500"});
        }
        if (window.scrollY > 700) {
            boxClass.push('sm600');
            this.setState({ scrolling: boxClass.join(' ') });
            // this.setState({ scrolling: "sm600"});
        }
        if (window.scrollY > 800) {
            boxClass.push('sm700');
            this.setState({ scrolling: boxClass.join(' ') });
            // this.setState({ scrolling: "sm700"});
        }
        if (window.scrollY > 900) {
            boxClass.push('sm800');
            this.setState({ scrolling: boxClass.join(' ') });
            // this.setState({ scrolling: "sm800"});
        }
        if (window.scrollY > 1000) {
            boxClass.push('sm900');
            this.setState({ scrolling: boxClass.join(' ') });
        }
    }

    render() {
        return (
            <div className="vid_part">
                <div className= {`video ${this.state.scrolling}`}>
                    <video width="100%" height="100%" playsinline autoPlay muted loop>
                        <source src={vid} type="video/ogg" />
                    </video>
                </div>
                <div className={`vid_text ${this.state.content}`}>
                    <p>
                    The world’s most open and advanced real-time 3D creation tool
                    </p>
                   
                </div>
            </div>
        )
    }
}

