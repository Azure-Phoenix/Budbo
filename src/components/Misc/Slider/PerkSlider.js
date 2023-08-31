import React from 'react';
import Slider from 'react-slick';

import Card from '../../../components/ActionBar/Card';
import { useWindowResize } from '../../../shared';
import { PerkSliderStyle } from './PerkSliderStyle';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function PerkSlider({ sliderRef }) {
    const { width } = useWindowResize()
    const getSettings = () => {
        if (width < 768) {
            return {
                speed: 200,
                slidesToShow: 2,
                slidesToScroll: 1,
                adaptiveHeight: true,
            }
        }

        return {
            speed: 200,
            slidesToShow: 2,
            slidesToScroll: 1,
            adaptiveHeight: true
        }
    }
    return (
        <PerkSliderStyle>
            <Slider {...getSettings()} ref={sliderRef}>
                <Card
                    title='5,000  - 9,999'
                    description='Red badge on your Budbo profile'
                    color='red'
                />
                <Card
                    title='10,000  -  49,999'
                    description='Purple badge'
                    
                    
                    color='purple'
                />

                <Card
                    title='50,000  -  99,999'
                    description='Green badge'
                    
                   
                    color='green'
                />
                <Card
                    title='100,000  -  249,999'
                    description='Bronze badge + 2% Reward tokens'
                    
                
                    color='bronze'
                />
                <Card
                    title='250,000  -  499,999'
                    description='Silver badge + 5% Reward tokens'
                   
                    
                    color='grey'
                />
                <Card
                    title='500,000+'
                    description='Gold badge + 10% Reward tokens'
                   
                    
                    color='yellow'
                />
            </Slider>
        </PerkSliderStyle>
    );
}