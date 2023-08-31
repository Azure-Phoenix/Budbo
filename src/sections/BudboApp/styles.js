import styled from 'styled-components/macro';

import budboBgMob from '../../assets/images/budbo-bg-mob.png';
export const StyledBudboApp = styled.div`
    .budbo-img {
        transform: translateY(-130%);
        width: 100%;
    }
    .budbo-title {
        margin-top: -500px;
        color: var(--primary);
        @media (max-width: 767px) {
            margin-top: -180px;
        }
    }
    .budbo-badge {
        display: block;
        font-size: 16px;
        color: var(--primary);
        margin-top: 65px; 
    }
    .what-inside-title {
        margin-top: 145px;
    }
    .mob-img {
        height: 396px;
        position: relative;
        margin: 120px 0;
        &::after {
            content: '';
            position: absolute;
            top: -110px;
            left: -16px;
            width: 100vw;
            height: 110%;
            background: url(${budboBgMob}) center center /cover no-repeat;
        }
    } 
`