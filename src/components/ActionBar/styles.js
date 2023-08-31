import styled from 'styled-components/macro';

import sideBarImg from '../../assets/images/sidebar-img.png';
import swiperArrow from '../../assets/images/swiper-arrow.svg';
import tokenMirror from '../../assets/images/token-mirror.svg';

export const StyledActionBar = styled.div`
        border-radius: 16px;
        @media (min-width: 768px) {
            height: 100%;    
            width: 350px;
            position: absolute;
            right: 70px;
            top: 54px;
        }
        .tip {
            color: var(--text-purple);
            font-size: 12px !important;
            font-weight: 500;
            line-height: 17px;
            @media (max-width: 1600px) {
                font-size: 10px !important;
            }
            span:first-child {
                color: var(--bs-danger);
                padding-right: 5px;
                font-size: 11px !important;
            }
        }
        @media (min-width: 768px) and (max-width: 1600px) {
            width: 280px;
            right: 92px;
        }
        .side-bar-container {
            background-color: #f9f8fc;
            z-index: 99;
            border-radius: 16px;
            @media (min-width: 768px) {
                transform: translateX(50px);
                margin-bottom: 355px !important;
                top: 144px;
            }
            @media (min-width: 1600px) {
                top: 150px;
                transform: translateX(30px);
            }
            @media (min-width: 1800px) {
                transform: translateX(-70px);
            }
            @media (max-width: 1280px) {
                position: relative !important;
            }
            .top-content {
                padding: 0 10px 0;
                z-index: 5;
                position: relative;
                color: var(--text-purple);
                h6 {
                    font-weight: 500;
                }
                ul {
                    padding: 23px 38px 16px;
                    @media (min-width: 768px) and (max-width: 1600px) {
                        padding: 16px 7px 0px;
                    }
                    @media (max-width: 767px) {
                        padding-top: 40px;
                    }
                    
                    li {
                        margin-bottom: 16px;
                        width: 50%;
                        span {
                            display: block;
                            &:first-of-type {
                                font-size: 14px;
                            }
                            &:last-of-type {
                                font-size: 16px;
                                color: #000;
                            }
                        }
                        &:nth-child(5), &:nth-child(6) {
                            margin-bottom: 0 !important;;  
                        }
                    }
                }  
                .offering-max {
                    display: block;
                    font-size: 10px;
                    color: var(--primary);
                    bottom: 10px;
                    left: 50%;
                    transform: translateX(-50%);
                }              
            }
            .hover-trigger {
                padding: 16px calc(0.5rem + 10px) 0px calc(0.5rem + 10px);
                @media (max-width: 767px) {
                    position: relative;
                    z-index: 10;
                }
                > div {
                    &:first-of-type {
                        img {
                            height: 20px;
                            width: 20px;
                            transform: translateY(-2px);
                        }
                        span {
                            font-weight: 600;
                            color: var(--primary);
                        }
                    } 
                    &:nth-of-type(2) {
                        @media (max-width: 1600px) {
                            overflow-x: scroll;
                            &::-webkit-scrollbar {
                                display: none;
                            }
                        }
                        span {
                            background-color: #F3F1F8;
                        }
                    }  
                }
                .pin-wrapper {
                    span {
                        border-radius: 4px;
                        padding: 8px;
                        font-size: 14px;
                    }
                }
                &:hover  {
                    .earn-perks {
                        @media (min-width: 768px) {
                            display: block;   
                        }
                    }
                }   
            }
            .invest-wrapper {
                padding: 0 calc(0.5rem + 10px) 0 calc(0.5rem + 10px);
                .cards-wrapper {
                    overflow-y: hidden;
                    overflow-x: auto;
                    width: calc(100% + 16px);
                    &::-webkit-scrollbar {
                        display: none;
                    }
                    >div {
                        min-width: 295px;
                        margin-right: 8px;
                        &:last-child {
                            margin-right: 0;
                        }
                        @media (max-width: 767px) {
                            min-width: 180px;
                            padding: 24px 5px 24px 24px;
                        }
                        .all-the-above {
                            @media (min-width: 768px) {
                                display: none;
                            }
                        }
                    }
                }
                .input-wrapper {
                    width: calc(100% - 85px);
                    position: relative;
                    overflow: hidden;
                    border-radius: 8px 0 0 8px;
                    input {
                        width: calc(100% - 55px);
                        @media (min-width: 1200px) {
                            width: calc(100% - 35px);
                        }
                        @media (min-width: 1600px) {
                            width: calc(100% - 55px);
                        }
                        padding: 13px 0;
                        @media (max-height: 1050px) and (min-width: 768px) {
                            padding: 11px 0;
                        }
                        font-size: 16px;
                        border-radius: 8px 0 0 8px;
                        border-right: none !important;
                        &:focus-visible {
                            outline: none;
                        }
                        &::placeholder {
                            opacity: 0.2;
                            font-size: 16px;
                        }
                    }
                    > div {
                        width: 55px;
                        @media (min-width: 1200px) {
                            width: 35px;
                        }
                        @media (min-width: 1600px) {
                            width: 55px;
                        }
                        border-radius: 0 8px 8px 0;
                        background-color: #F5F5F7;
                        right: 0;
                        top: 0;
                        height: 100%;
                        span {
                            font-size: 16px;
                            color: #9D98B0;
                        }

                    }
                }
                a {
                    color: #fff;
                    font-weight: bold;
                    background-color: #00B493;
                    padding: 16px 0;
                    border-radius: 8px;
                    @media (max-height: 1050px) and (min-width: 768px) {
                        padding: 12px 0; 
                    }
                    &:hover {
                        background-color: #059479;
                    }
                }
                .invest {
                    @media (max-height: 1050px) and (min-width: 768px) {
                        display: flex;
                        flex-flow: wrap;
                        > div {
                            display: flex;
                            &:first-of-type {
                                margin-right: 10px;
                            }
                        }
                    }
                    @media (max-width: 767px) {
                        .invest-title {
                            max-width: 80px;
                        }
                    }
                }
            }
            &::after {
                content: '';
                position: absolute;
                top: 10%;
                right: 0;
                width: 100px;
                height: 300px;
                background: url(${sideBarImg}) center right/contain no-repeat;
                z-index: -1;
                @media (max-width: 767px) {
                    z-index: 5;
                    top: 14%;
                }
            }   
            &::before {
                @media (min-width: 1601px) {
                    content: '';
                    position: absolute;
                    top: 235px;
                    left: 20px;
                    width: 320px;
                    height: 1px;
                    background-color: #dee2e6;   
                    z-index: -2;
                }
            }
        }
        .earn-perks {
            position: absolute;
            top: 0;
            left: calc(-350px - 1rem);
            display: none;
            .core {
                padding: 14px 24px 16px 24px;
                max-width: 350px;
                border-radius: 16px;
                font-weight: 500;
                background-color: #f9f8fc;
                overflow-y: scroll;
                max-height: calc(100vh - 165px);
                @media (min-width: 1600px) {
                }
                &::-webkit-scrollbar {
                    display: none;
                }
                &-logo {
                    width: 28px;
                    height: 28px;
                }
                span, p {
                    font-size: 16px;
                }
                p {
                    margin-bottom: 20px;
                    line-height: 24px;
                    &:last-of-type {
                        margin-bottom: 0;
                    }
                }
                .price {
                    color: #6E2DFA;
                }
            }
            .vertical-perks {
                &:not(:last-of-type) {
                    margin-bottom: 16px;
                }
            }
        }
        .ghost-container {
            top: 54px;
            z-index: 0;
            height: calc(100% - 108px);
            width: 350px;
            @media (max-width: 1600px) {
                width: 300px;
            }
            &::before {
                content: '';
                position: absolute;
                top: 450px;
                right: -60px;
                z-index: -1;
                width: 109px;
                height: 120px;
                background: url(${tokenMirror}) center right/contain no-repeat;
                @media (min-width: 1600px) {
                    right: 30px;
                }
            }
             
        }





        // line deleted  from react-select
        .css-319lph-ValueContainer {
            padding: 2px 0 2px 20px;
            cursor: pointer;
        }
        .css-4ljt47-MenuList {
            height: 200px;
            overflow: auto;
        }
        .css-1okebmr-indicatorSeparator {
            display: none;
        }
        .css-tlfecz-indicatorContainer,
        .css-1gtu0rj-indicatorContainer {
            transform: scale(0.7) translateX(-5px);
            cursor: pointer;
        }
        .css-1s2u09g-control,
        .css-1pahdxg-control {
            border-color: hsl(0, 0%, 80%) !important;
            box-shadow: none !important;
            background-color: #FCFBFF;
        }
        .css-26l3qy-menu {
            z-index: 2;
            overflow: hidden;
        }
        .css-9gakcf-option {
            background-color: #fff;
            border-bottom: 1px solid hsl(0, 0%, 80%);
            &:active {
                background-color: #fff;
            }
        }
        .css-9gakcf-option {
            cursor: pointer;
            &:hover {
                background-color: #f0f0f0;
            }
        }
        .css-4ljt47-MenuList {
            padding: 0;
        }
        
`

export const StyledSwiper = styled.div`
    padding: 24px 24px 14px;
    border-radius: 0 0 16px 16px;
    .swiper {
        padding-bottom: 34px;
        p {
            font-size: 16px;
            line-height: 24px;
            max-height: 120px;
            overflow-y: scroll;
        }
        .swiper-pagination-bullet-active {
            background-color: var(--primary);
        }
        &-pagination {
            &-bullet {
                width: 10px;
                height: 10px;
            }
        }
    }
    .swiper-button-prev,
    .swiper-button-next {
        top: auto;
        bottom: -8px;
        &::after {
            content: '';
            width: 20px;
            height: 10px;
        }
    }
    .swiper-button-prev {
        left: 75px;
        @media (max-width: 1600px) {
            left: 55px;
        }
        &::after {
            background: url(${swiperArrow}) center center/contain no-repeat;
            transform: rotate(180deg);
        }
    }

    .swiper-button-next {
        right: 75px;
        @media (max-width: 1600px) {
            right: 55px;    
        }
        &::after {
            background: url(${swiperArrow}) center center/contain no-repeat;
        }
    }
    
`

export const StyledOptions = styled.p`
    color: var(--text-purple);
    font-size: 14px;
    span {
        font-size: 12px;
        border-radius: 8px;
        padding: 0 5px;
        height: 25px;
        background-color: #F3F1F8;
    }

`

export const StyledCard = styled.div`
    background-color: #fff;
    padding: 9.2px 16px;
    border-radius: 8px;
    font-size: 14px;
    color: var(--text-purple);
    height:100%;
    
    .card-content {
        width: calc(100% - 77px);
        @media (max-width: 767px) {
            width: 100%;
            margin-top: 5px;
        }
        .title {
            font-size: 16px;
            span {
                color: var(--bs-danger);
                padding-left: 3px;
                font-size: 16px;
            }
        }
        p, span {
            font-size: 14px !important;
            line-height: 16px !important;
        }
        span {
            font-style: italic;
            opacity: 0.5;
        }
    }
`

export const StyledForm = styled.form`
    margin: 0 15px;
    border-radius: 15px;
   
    button{
        margin: 0px 0 30px 0;
    }
    
    .container{
        padding: 20px;
    }

    .inner-container {
        background: #F9F8FC;
        border: 1px solid #E0DBED;
        border-radius: 16px;
        margin: 20px 0;
        padding: 12px;
    }

    hr{
        margin: 16px 0 16px;
    }

    input{
        width: 100%;
        padding: 13px 0;
        font-size:16px;
        border-radius:8px;
        margin-bottom:16px;

        &::placeholder {
            opacity: 0.7;
            font-size: 16px;
        }

        &:focus-visible{
            outline:none;
        }
    }

    .info{
        color: var(--text-purple);
        font-weight: 500;
        line-height: 16px;
        font-size: 12px !important;
        padding: 8px 16px;
        text-align:center
    }

`
