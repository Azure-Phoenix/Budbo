import styled from 'styled-components/macro';

import workImageMob from '../../assets/images/work-bg-mob.png';
export const StyledBudboWork = styled.div`
    h2 {
        margin-top: 148px;
    }
    .work-image {
        margin: 100px 0;
        transform: translateX(-20px);
        @media (min-width: 992px) {
            transform: translateX(-100px) ;
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
            background: url(${workImageMob}) center center /contain no-repeat;
        }
    } 
    p {
        color: var(--text-purple);
        font-weight: 500;
        @media (max-width: 767px) {
            font-size: 16px;
        }
    }
    .benefits {
        li {
            padding: 32px 24px;
            border-radius: 16px;
            margin-bottom: 32px;
            @media (min-width: 992px) {
                width: calc(50% - 16px);
                padding: 40px 48px;
            }
            img {
                width: 30px;
                height: 30px;
            }
            p {
                font-size: 16px;
                line-height: 24px;
            }
        }
    }
    .company-logos {
        gap: 50px;
        margin-top: 60px;
        padding-bottom: 60px;
        @media (min-width: 768px) {
            margin-top: 133px;
            padding-bottom: 0;
        }
        img {
            width: 180px;
            &:nth-child(1) {
                width: 121px;
            }
            &:nth-child(2) {
                width: 142px;
            }
            &:nth-child(3) {
                width: 173px;
            }
            
            &:nth-child(5) {
                width: 176px;
            }
        }
    }
    
`