import styled from 'styled-components/macro';

import buildings from '../../assets/images/buildings.png';

export const StyledBuildings = styled.div`
    margin: 150px 0 850px;
    @media (max-width: 767px) {
        margin: 80px 0;
    }
    h1 {
        @media (max-width: 768px) {
            font-size: 48px;
            line-height: 56px;
        }
    }
    h3 {
        margin-top: 20px;
    }
    @media (min-width: 768px) {
        h3 {
            margin-top: 48px;    
        }
        &::after {
            content: '';
            display: block;
            position: absolute;
            right: 0;
            z-index: -1;
            bottom: 50%;
            width: 100vw;
            transform: translateY(75%);
            height: 1700px;
            background: url(${buildings}) right center/contain no-repeat;
            @media (min-width: 992px) {
                transform: translateY(65%);
                height: 2300px;
            }
        }   
    }
`