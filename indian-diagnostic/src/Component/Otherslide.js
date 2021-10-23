import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

const slideImages = [
    slide1,
    slide2,
    slide3
];

const Slideshow = () => {
    return (
        <div class="about-slide-container">
            <Slide>
                <div class="every-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[0]})` }} class="about-image">
                    </div>
                </div>
                <div class="every-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[1]})` }} class="about-image">
                    </div>
                </div>
                <div class="every-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[2]})` }} class="about-image">
                    </div>
                </div>
            </Slide>
        </div>
    )
}
export default Slideshow;
