import React, {useState, useEffect} from 'react';
import '../animatedVid/AnimatedVidStyle.scss';
import vid from '../../assets/videos/vid.mp4';


export default function AnimatedVid (){
    let [scrolling, setScrolling] = useState(true);
    let [content, setContent] = useState(true);
    
    let listenToScroll = () => {
        let boxClass = [];
        let st = true
        if (window.scrollY > 50) {
            setContent(st)
        }
         if (window.scrollY > 80) {
            setContent("cont100")
        }
        if (window.scrollY > 100) {
            setContent("cont150")
        }
        if (window.scrollY > 150) {
            setContent("cont180")
        }
        if (window.scrollY < 200) {
            setScrolling(true)
        }
        if (window.scrollY > 200) {
            boxClass.push('sm100');
            st = boxClass.join(' ')
            setScrolling(st)
        }
        if (window.scrollY > 300) {
            boxClass.push('sm200');
            st = boxClass.join(' ')
            setScrolling(st)
        }
        if (window.scrollY > 400) {
            boxClass.push('sm300');
            st = boxClass.join(' ')
            setScrolling(st)
        }
        if (window.scrollY > 500) {
            boxClass.push('sm400');
            st = boxClass.join(' ')
            setScrolling(st)
        }
        if (window.scrollY > 600) {
            boxClass.push('sm500');
            st = boxClass.join(' ')
            setScrolling(st)
        }
        if (window.scrollY > 700) {
            boxClass.push('sm600');
            st = boxClass.join(' ')
            setScrolling(st)
        }
        if (window.scrollY > 800) {
            boxClass.push('sm700');
            st = boxClass.join(' ')
            setScrolling(st)
        }
        if (window.scrollY > 900) {
            boxClass.push('sm800');
            st = boxClass.join(' ')
            setScrolling(st)
        }
        if (window.scrollY > 1000 &&  window.scrollY<1400) {
            boxClass.push('sm900');
            st = boxClass.join(' ')
            setScrolling(st)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
    }, [])


        return (
            <div className="vid_part">
                <div className= {`video ${scrolling}`}>
                    <video width="100%" height="100%" playsinline autoPlay muted loop>
                        <source src={vid} type="video/ogg" />
                    </video>
                </div>
                <div className={`vid_text ${content}`}>
                    <p>
                    The world’s most open and advanced real-time 3D creation tool
                    </p>
                   
                </div>
            </div>
        )
    
}

