import styled from 'styled-components/macro';

import token from '../../assets/images/token.svg';
import tokenMirror from '../../assets/images/token-mirror.svg';

export const StyledBlockChainTechnology = styled.div`
    margin: 82px 0 300px;
    .container {
        > div {
            @media (max-width: 1440px) {
                margin: 0 auto;
            }
        }
    }
    .blockchain-list {
        li {
            margin-bottom: 57px;
            position: relative;
            .logo {
                max-height: 40px ;
            }
            h6 {
                /* font-size: 24px; */
                line-height: 32px;
                font-weight: 700;
            }
            img {
                &:not(.logo) {
                    margin: 48px 0;
                    border-radius: 48px;
                    @media (max-width: 768px) {
                        margin: 32px 0;
                        border-radius: 24px;
                        max-width: 550px;
                    }
                }
            }
            &:first-child {
                >div {
                    position: relative;
                    @media (min-width: 992px) {
                        &::before {
                            content: '';
                            display: block;
                            width: 109px;
                            height: 120px;
                            background: url(${tokenMirror}) center center/contain no-repeat;
                            position: absolute;
                            right: -30px;
                            top: 130px;
                            z-index: 1;
                        }                          
                    }
       
                }
                &::after {
                        content: '';
                        display: block;
                        width: 109px;
                        height: 120px;
                        background: url(${token}) center center/contain no-repeat;
                        position: absolute;
                        left: -164px;
                        bottom: -10px;
                        z-index: 1;
                    }  
            }
            &:nth-child(2) {
                >div {
                    position: relative;
                    &::before {
                        @media (min-width: 1200px) {
                            content: '';
                            display: block;
                            width: 59px;
                            height: 65px;
                            background: url(${tokenMirror}) center center/contain no-repeat;
                            position: absolute;
                            right: -109px;
                            top: 120px;
                            z-index: 1;   
                        }
                    }  
                    &::after {
                        content: '';
                        display: block;
                        width: 40px;
                        height: 44px;
                        background: url(${token}) center center/contain no-repeat;
                        position: absolute;
                        left: -24px;
                        bottom: 270px;
                        z-index: -1;
                    }  
                }
            }
        }
    }
`