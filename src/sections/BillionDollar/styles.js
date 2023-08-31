import styled from 'styled-components/macro';

export const StyledBillionDollar = styled.div`
    .width-wrapper {
        p {
            &.text {
                font-weight: 500;
                margin: 32px 0 106px;
                span {
                    color: #000;
                }
            }
        }
        >div {
            > h2 {
                margin-top: 150px;
            }
        }
        >div {
            > img {
                margin: 25px 0; 
                @media (min-width: 768px) {
                    margin: 55px 0; 
                    transform: scale(1.10) translateX(10px);    
                }
            }
        }
    }
`