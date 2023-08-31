import styled from 'styled-components/macro';

import whatChangedImgMob from '../../assets/images/what-changed-image-mob.png'

export const StyledWhatChanged = styled.div`
    .width-wrapper {
        >div {
            > h2 {
                margin-top: 70px;
                @media (min-width: 768px) {
                    margin-top: 169px;
                }
            }
        }
    }   
    .mob-img {
        height: 520px;
        position: relative;
        margin: 20px 0;
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: -16px;
            width: 100vw;
            height: 100%;
            background: url(${whatChangedImgMob}) center center /contain no-repeat;
        }
    } 
    >div {
        h3 {
            margin-bottom: 48px;
        }
    }
    
    .what-changed-img {
        margin: 90px 0 70px;
        @media (min-width: 1280px) {
            margin: 200px 0 180px;
            transform: translateX(50px) scale(1.3);
        }
    }
    p {
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        color: var(--text-purple);
        span {
            color: #000;
            font-weight: 700;
        }
        @media (max-width: 767px) {
            font-size: 16px;
        }
    }
    .offers {
        margin: 56px 0;
        @media (min-width: 992px) {
            margin: 96px 0;
        }
        
        li {
            margin-bottom: 48px;  
        }
    }
    .text {
        margin-bottom: 104px;
    }
   
`