import styled from 'styled-components/macro';

export const StyledBudboTeam = styled.div`
    padding: 86px 0 0;
    @media (max-width: 992px) {
        padding: 56px 0 0;
    }
    .roadmap {
        margin: 65px 0 135px;
        @media (max-width: 767px) {
            margin: 85px 16px;
        }
        &::after {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 1px;
            background-color: #E0DBED;
        }
        li {
            position: relative;
            padding-left: 45px;
            margin-bottom: 105px;
            @media (max-width: 767px) {
                margin-bottom: 55px;
            }
            h3 {
                color: var(--primary);
                @media (max-width: 767px) {
                    font-size: 32px;
                }
            }
            p {
                color: var(--text-purple);
                position: relative;
                @media (max-width: 767px) {
                    font-size: 16px;
                }
                 &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    z-index: 1;
                    top: 9px;
                    left: -44.5px;
                    transform: translateX(-50%);
                    width: 9px;
                    height: 9px;
                    background-color: #dee2e6;
                    border-radius: 50%;
                    @media (max-width: 767px) {
                        top: 5px;
                    }
                }
            }
            &::after {
                content: '';
                display: block;
                position: absolute;
                z-index: 1;
                top: 9px;
                left: 0;
                transform: translateX(-50%);
                width: 13px;
                height: 13px;
                background-color: var(--primary);
                border-radius: 50%;
            }
        }
    }
    h2 {
        span {
            color: var(--primary);
        }
        @media (max-width: 767px) {
            margin: 0 16px;
        }
    }
    p {
        span {
            color: var(--primary);
        }
    }
    .team-wrapper {
        @media (max-width: 767px) {
            background-color: #fff;
            padding: 64px 0;
            border-radius: 48px;
            margin-bottom: 64px;
            ul {
                margin-bottom: 0;
            }
        }
    }
    .team {
        margin: 54px 0 100px;
        h4 {
            font-size: 20px;
        }
        .image-wrapper {
            border-radius: 50%;
            width: 100px;
            height: 100px;
            margin: 0 auto 20px auto;
            &::after {
                content: '';
                position: absolute;
                width: 120%;
                height: 120%;
                border-radius: 50%;
                border: 1px solid #dee2e6;
                left: -10%;
                top: -10%;
            }
        }
        span {
            font-size: 16px;
            margin: 0px 0 16px;
            color: var(--text-purple);
        }
        p {
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: var(--text-purple);
        }
        li {
            padding: 32px 24px;
            @media (max-width: 767px) {
                margin-bottom: 24px;
            }
            @media (min-width: 768px) and (max-width: 991px) {
                width: calc((100% / 2) - 1.8vw);
                margin-bottom: 1.5vw;

                &:nth-of-type(2n)
                 {
                    margin-left: 2.3vw !important;
                }
            }
            @media (min-width: 992px) {
                width: calc((100% / 3) - 1.8vw);
                padding: 20px 0 46px;
                margin-bottom: 2.3vw;
                &:nth-of-type(2),
                &:nth-of-type(4),
                &:nth-of-type(6),
                &:nth-of-type(8),
                &:nth-of-type(10),
                &:nth-of-type(12),
                &:nth-of-type(14),
                &:nth-of-type(16),
                &:nth-of-type(18),
                &:nth-of-type(20),
                &:nth-of-type(22),
                &:nth-of-type(24)
                 {
                    margin-left: 1.3vw !important;
                    margin-right: 1.3vw !important;
                }
            }
            @media (min-width: 1440px) {
                padding: 32px 0 86px;
            }
            @media (min-width: 1600px) {
                width: calc((100% / 4) - 1.8vw);
            }
        }
    }
    .team-width-container {
        max-width: 960px;
        @media (min-width: 1600px) {
            max-width: 1220px;
        }
    }
    .faq {
        margin-top: 70px;
        @media (max-width: 767px) {
            margin-top: 30px;
        }
        li {
            p {
                max-height: 0;
                overflow: hidden;
                padding-bottom: 0;
                transition: cubic-bezier(0.39, 0.575, 0.565, 1) 0.5s;
            }
            img {
                transform: rotate(0);
                transition: cubic-bezier(0.39, 0.575, 0.565, 1) 0.2s;
            }
            &.active {
                p {
                    max-height: 300px;
                    padding-bottom: 20px;
                    padding-top: 20px;
                    transition: cubic-bezier(0.39, 0.575, 0.565, 1) 0.5s;
                    @media (max-width: 767px) {
                        max-height: 300px;
                    }
                }
                img {
                    transform: rotate(-180deg);
                    transition: cubic-bezier(0.39, 0.575, 0.565, 1) 0.2s;
                }
            }
        }
    }
`