import React from 'react';
import { PureComponent } from 'react';
import '../animatedVid/AnimatedVidStyle.scss';
import vid from '../../assets/videos/vid.mp4';


export default class AnimatedVid extends PureComponent {
    state = {
        scrolling: true,
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        if (window.scrollY < 200) {
            this.setState({ scrolling: true });
        }
        if (window.scrollY > 200) {
            this.setState({ scrolling: "sm100" });
        }
        if (window.scrollY > 300) {
            this.setState({ scrolling: "sm200" });
        }
        if (window.scrollY > 400) {
            this.setState({ scrolling: "sm300" });
        }
        if (window.scrollY > 500) {
            this.setState({ scrolling: "sm400" });
        }
        if (window.scrollY > 600) {
            this.setState({ scrolling: "sm500" });
        }
        if (window.scrollY > 700) {
            this.setState({ scrolling: "sm600" });
        }
        if (window.scrollY > 800) {
            this.setState({ scrolling: "sm700" });
        }
        if (window.scrollY > 900) {
            this.setState({scrolling: "sm800"});
        }
        if (window.scrollY > 1000) {
            this.setState({scrolling: "sm900"});
        }
    }

    render() {
        return (
            <div className="vid_part">
                <div className={`video ${this.state.scrolling}`}>
                    <video width="100%" height="100%" playsinline autoPlay muted loop>
                        <source src={vid} type="video/ogg" />
                    </video>
                </div>
            </div>
        )
    }
}

