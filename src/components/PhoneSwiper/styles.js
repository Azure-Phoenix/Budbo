import styled from 'styled-components/macro';

import phoneBumper from '../../assets/images/r2-phone1.png';

export const StyledPhoneSwiper = styled.ul`
    margin-top: 50px;
    @media (min-width: 1024px) {
        margin-top: 80px;
    }
    ul {
        li {
            &:not(:nth-child(2)) {
                width: 250px;
                max-height: 500px;
                align-self: end;
                @media (min-width: 768px) and (max-width: 992px) {
                    justify-content: center;
                    img {
                        width: 75% !important;
                    }
                }
            }
        }
    }
    .react-player {
        position: relative;
        z-index: 1;
        margin-bottom: 20px;
        @media (min-width: 768px) and (max-width: 992px) {
            width: 200px !important;
            height: 425px !important;
            margin-bottom: 5px;
        }
        video {
            border-radius: 30px;
        }
        &::after {
            content: '';
            display: block;
            width: 107%;
            height: 108%;
            background-color: #000;
            position: absolute;
            left: -9px;
            top: -19px;
            z-index: -1;
            background: url(${phoneBumper}) center center / contain no-repeat;
        }
        &::before {
            content: '';
            display: block;
            width: 55%;
            height: 25px;
            background-color: #fdfdfe;
            position: absolute;
            z-index: 1;
            top: 0;
            left: 48%;
            border-radius: 0 0 15px 15px;
            transform: translateX(-50%);
        }

    }
    > div {
        img {
            /* width: calc(100% - 64px); */
            width: 100%;
            margin: 0 auto;
            display: block;
            @media (max-width: 767px) {
                width: 80%;
            }
            @media (min-width: 768px) {
                height: 87%;
                width: 87%;
            }
        }
        &:nth-child(2) {
            img {
                width: 100%;
            }
        }
    }
    p {
        font-size: 14px;
        color: var(--text-purple);
        font-weight: 500;
        bottom: -50px;
        span {
            text-decoration: underline;
        }
    }
`