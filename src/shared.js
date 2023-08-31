import { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components/macro'

import GilroyBoldWoff from './assets/fonts/Gilroy-Bold.woff';
import GilroyBoldWoff2 from './assets/fonts/Gilroy-Bold.woff2';
import GilroyMediumWoff from './assets/fonts/Gilroy-Medium.woff';
import GilroyMediumWoff2 from './assets/fonts/Gilroy-Medium.woff2';
import GilroyMediumItalicWoff from './assets/fonts/Gilroy-MediumItalic.woff';
import GilroyMediumItalicWoff2 from './assets/fonts/Gilroy-MediumItalic.woff2';
import GilroySBoldWoff from './assets/fonts/Gilroy-Semibold.woff';
import GilroySBoldWoff2 from './assets/fonts/Gilroy-Semibold.woff2';
import connectBgMob from './assets/images/connect-bg-mob.png';
import { ReactComponent as Facebook } from './assets/images/facebook-icon.svg';
import { ReactComponent as Instagram } from './assets/images/instagram-icon.svg';
import token from './assets/images/token.svg';
import { ReactComponent as Twitter } from './assets/images/twitter-icon.svg';
import { ReactComponent as Youtube } from './assets/images/youtube-icon.svg';

export const mockSocialLinks = [
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/budboapp',
        icon: <Instagram />,
    },
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/budboapp',
        icon: <Facebook />,
    },
    {
        name: 'Twitter',
        link: 'https://twitter.com/budboapp',
        icon: <Twitter />,
    },
    {
        name: 'YouTube',
        link: 'https://www.youtube.com/budboapp',
        icon: <Youtube />,
    }
]

export const mockFooterLinks = [
    {
        title: 'About',
        links: [
            {
                name: 'Company',
                link: '/company',
            },
            {
                name: 'History',
                link: '/history',
            },
            {
                name: 'Careers',
                link: '/careers',
            },
        ],
    },
    {
        title: 'Support',
        links: [
            {
                name: 'FAQ',
                link: '/faq',
            },
            {
                name: 'Help Center',
                link: '/help-center',
            },
            {
                name: 'Support',
                link: '/support',
            }
        ]
    },
    {
        title: 'Budbo Token',
        links: [
            {
                name: 'Exchanges',
                link: '/exchanges',
            },
            {
                name: 'Coinmarketcap',
                link: 'https://coinmarketcap.com/currencies/budbo/',
            },
            {
                name: 'CoinGecko',
                link: 'https://www.coingecko.com/en/coins/budbo',
            }
        ]
    },
    {
        title: 'Dispensary Solutions',
        links: [
            {
                name: 'Add your dispensary',
                link: '/add-your-dispensary',
            },
            {
                name: 'E-commerce',
                link: '/e-commerce',
            },
            {
                name: 'Fleet Tracking',
                link: '/fleet-tracking',
            },
            {
                name: 'Blockchain',
                link: '/blockchain',
            },
        ],
    }
]
export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Gilroy';
        src: url(${GilroyBoldWoff2}) format('woff2'), url(${GilroyBoldWoff}) format('woff');
        font-weight: bold;
        font-style: normal;
    }
    @font-face {
        font-family: 'Gilroy';
        src: url(${GilroySBoldWoff2}) format('woff2'), url(${GilroySBoldWoff}) format('woff');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Gilroy';
        src: url(${GilroyMediumWoff2}) format('woff2'), url(${GilroyMediumWoff}) format('woff');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Gilroy';
        src: url(${GilroyMediumItalicWoff2}) format('woff2'), url(${GilroyMediumItalicWoff}) format('woff');
        font-weight: 500;
        font-style: italic;
    }
    html {
        scroll-padding: 300px;
    }
    :root {
        --primary: #6E2DFA;
        --text-purple: #736B8E;
        --orange: #FF9644;
        --aqua: #30C6FF;
    }
    body {
        font-family: 'Gilroy';
        background-color: #F3F1F8;
        color: #000;
        font-weight: 500;
    }
    h1 {
        font-size: 72px;
        line-height: 88px;
        @media (max-width: 992px) {
            font-size: 32px;
            line-height: 38px;
        }
    }
    h2 {
        font-size: 56px;
        @media (max-width: 992px) {
            font-size: 32px;
        }
    }
    h3 {
        font-size: 32px;
        line-height: 38px;
        @media (max-width: 992px) {
            font-size: 24px;
            line-height: 28px;
        }
    }
    h4 {
        @media (max-width: 992px) {
            font-size: 20px;
            line-height: 28px;
        }
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        font-weight: bold;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
           &:hover {
            color: var(--primary);
        }
    }
    .text-body {
        color: #000 !important;
    }
    .btn {
        border: none !important;
        img {
            transition: 0.3s ease-in-out;
        }
        &:hover {
            background-color: #059479;
            color: #fff;
            img {
                transform: translateX(15px);
                transition: 0.3s ease-in-out;
            }
        }
        &-primary {
            &:hover {
                background-color: #5413df;
            }
        }
    }
    p {
        margin: 0;
        font-size: 20px;
        line-height: 28px;
        @media (max-width: 992px) {
            font-size: 16px;
            line-height: 24px;
        }
    }
    .container {
        @media (max-width: 767px) {
            padding: 16px;
            margin: 0;
        }
    }
    .text-primary {
        color: var(--primary) !important;
    }
    .text-colored {
        color: var(--text-purple);
        font-weight: 500;
    }
    .btn-primary {
        background-color: var(--primary);
        border-radius: 8px !important;
    }
    .rounded {
        border-radius: 8px !important;
    }
    .width-wrapper {
        margin: 0 auto;
    }
    .cursor-pointer {
        cursor: pointer;
    }
    .table {
        margin: 31px 0 50px;
        max-width: 1120px;
        @media (min-width: 1600px) {
            &.second {
                width: calc(100% + 15vw);
                transform: translateX(-8vw);
            }
        }
    }
    .with-indent {
        position: relative;
        margin-left: 40px;
        &::before {
            content: '';
            background-color: var(--text-purple);
            position: absolute;
            top: 9px;
            left: -20px;
            box-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px;
            width: 5px;
            height: 5px;
            border-radius: 50%;
        }
    }
    .container {
        @media (min-width: 1600px) {
            max-width: 1520px;
        }
    }
`

export const StyledWhiteWrapper = styled.div`
    background-color: #fff;
    position: relative;
    width: calc(100vw - 64px);
    margin: 0 32px;
    padding: 54px;
    border-radius: 48px;
    margin-bottom: 90px;
    @media (max-width: 767px) {
        width: 100%;
        .container {
            padding: 0;
            margin: 0;
            max-width: none;
        }
    }
    .width-wrapper {
        &.video {
            width: 100%;
            @media (max-width: 992px) {
                width: 100%;
            }
            @media (min-width: 1920px) {
                margin: 0 auto;
            }
            .video-container {
                
            }
        }
    }
    .notification-wrapper {
        top: -50%;
        transform: translateY(-50%);
    }
    .video-container {
        position: relative;
        z-index: 1;
        width: 100%;
        iframe {
            width: 100%;
            border-radius: 24px;
            @media (max-width: 767px) {
                height: 191px !important;
                margin-top: 40px;
            }
            @media (max-width: 992px) {
                height: 300px;
            }
            @media (max-width: 1600px) {
                height: 400px;
            }
        }   
        @media (min-width: 992px) {
            &::before {
                content: '';
                display: block;
                width: 109px;
                height: 120px;
                background: url(${token}) center center/cover no-repeat;
                position: absolute;
                left: 100px;
                top: -150px;
                z-index: -1;
            }         
        }
    }
    &.exception-mobile {
        @media (max-width: 767px) {
            padding: 0;
            background-color: transparent;
        }
    }
    @media (max-width: 767px) {
        padding: 0 16px;
        margin: 0;
    }
`

export const StyledColoredWrapper = styled.div`
    margin-bottom: 185px;
    position: relative;
    z-index: 1;
    .mobile-image {
        @media (max-width: 767px) {
            width: 100%;
            height: 340px;
            position: relative;
            &::after {
                content: '';
                display: block;
                position: absolute;
                top: -80px;
                left: -16px;
                width: calc(100% + 32px);
                height: 110%;
                background: url(${connectBgMob}) center center/cover no-repeat;
            }
        }
    }
    @media (max-width: 1600px) {
        margin: 0 auto 145px;
    }
    @media (max-width: 1600px) {
        margin: 0 auto 145px;
    }
    h3 {
        @media (max-width: 992px) {
            font-size: 32px !important;
            line-height: 38px;
        }
    }
    p {
        &.text {
            margin: 25px 0 100px;
            @media (max-width: 767px) {
                margin: 32px 0 25px;
            }
        }
    }
    .uma-img {
        width: 86%;
        margin: 0 auto 66px;
    }
    .with-indent {
        &::before {   
            box-shadow: none;
        }
    }
    .connect-img {
        transform: translateY(-35%);
    }
    > .width-wrapper {
        @media (min-width: 1600px) {
            width: 83%;
        }
    }
    &.connect {
        padding-top: 0;
        margin-bottom: 290px;
        @media (min-width: 992px) {
            margin-top: 260px;
        }
        @media (max-width: 1200px) {
            margin-bottom: 148px;
        }
        @media (max-width: 767px) {
            margin-bottom: 48px;
        }
        h3 {
            span {
                color: var(--orange);
            }
        }
        .width-wrapper {
            >div {
                &::before {
                    background-color: #FFF5EC;
                }
            }
        }
    }
    &.trax {
        padding-top: 0;
        margin: 350px 0 300px;
        @media (max-width: 1600px) {
            margin: 200px auto 150px;
        }
        @media (max-width: 767px) {
            margin: 136px auto 94px;
        }
        h3 {
            span {
                color: var(--aqua);
            }
        }
        .transformed {
            margin-top: -110px;
            @media (min-width: 1600px) {
                margin-top: -220px;
            }
            
        }
        .trax-img {
            width: calc(100% + 32px);
            transform: translate3d(-16px, -15%, 0);
            margin-bottom: 50px;
            @media (min-width: 768px) {
                margin-bottom: 160px;
                width: 90%;
                margin: 0 auto 0;
                transform: translateY(-35%);    
            }
        }
        .what-inside-title {
            margin-top: 80px;
        }
        @media (max-width: 767px) {
            .content {
                li {
                    &:nth-of-type(5),
                    &:nth-of-type(6),
                    &:nth-of-type(7) {
                        display: none !important; 
                    }
                }   
            }
        }
        .width-wrapper {
            >div {
                &::before {
                    background-color: #EAF9FF;
                }
            }
        } 
    }   
    .width-wrapper {
        > div {
            position: relative;
            &::before {
                content: '';
                position: absolute;
                top: -6vw;
                z-index: -1;
                left: -6vw;
                width: calc(100% + 12vw);
                height: calc(100% + 6vw);
                background-color: #F1EAFE;
                border-radius: 48px;
                @media (max-width: 768px) {
                    width: calc(100% + 32px);
                    left: -16px;
                }
            }
        }
    }
    
`

export const StyledInsideUl = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    margin-top: 32px;
    @media (min-width: 992px) {
        margin-bottom: 200px;
    }
    li {
        height: auto;
        border-radius: 16px;
        margin-bottom: 32px;
        padding: 32px 24px;
        width: 100%;
        @media (min-width: 992px) {
            height: 170px;
            padding: 0 5px 0 24px;
            padding: 0 48px;
            width: calc(50% - 16px);
        }
    }
    &.trax {
        margin-bottom: 10px;
    }
    .preloader_coin .coin {
        animation-name: rotateY;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-duration: 1.5s;
        transform: rotateY(0);
        transform-style: preserve-3d;
    }
    .preloader {
        background: rgb(233 240 246 / 95%);
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 50;
    }
    .preloader_coin {
        width: 100px;
        height: 100px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -50px 0 0 -50px;
        border-radius: 50%;
    }
    .coin {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 50px;
        transform: rotateY(0);
        transform-style: preserve-3d;
        transition: 1s;
    }
    .preloader_coin .coin {
        animation-name: rotation;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-duration: 1.5s;
        transform: rotateY(0);
        transform-style: preserve-3d;
    }
    .face {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        backface-visibility: hidden;
    }
    .heads {
        background-color: green;
        z-index: 2;
        transform: rotateY(0);
        color: transparent;
        background: url(https://grigorievd.github.io/budbo/images/coin-icon.png) no-repeat center center/cover;
    }
    .tails {
        background: url(https://grigorievd.github.io/budbo/images/coin-icon.png) no-repeat center center/cover;
        z-index: 1;
        transform: rotateY(180deg);
        color: transparent;
    }
    .preloader_coin::after {
        content: '';
        width: 100px;
        height: 1px;
        display: block;
        box-shadow: -30px 54px 32px 4px #000;
        transform: skewX(27deg);
        z-index: -1;
        position: relative;
        border-radius: 50%;
        top: -29px;
    }
    @keyframes coin {
        0% {
            transform: translate3d(0,700px,0)
        }

        100% {
            transform: translate3d(0,0,0)
        }
    }

    @keyframes rotation {
        0% {
            transform: rotate3d(0,1,0,0deg)
        }

        20% {
            transform: translateY(-20px) rotate3d(0,1,0,180deg)
        }

        40% {
            transform: translateY(-20px) rotate3d(0,1,0,360deg)
        }

        60% {
            transform: translateY(-20px) rotate3d(0,1,0,360deg)
        }

        100% {
            transform: rotate3d(0,1,0,360deg)
        }
    }
`

export const getClassNames = (...args) =>
    args.filter(Boolean).join(' ');

export const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
};

export function useMobileMode() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowWidth < 768;
}

export function useTabletMode() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowWidth < 1024;
}

export function useWindowResize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
}