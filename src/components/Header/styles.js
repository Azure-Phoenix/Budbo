import styled from 'styled-components/macro';


export const StyledHeader = styled.header`
    display: flex;
    position: fixed;
    z-index: 180;
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #e6e6e6; 
    }
    a {
        color: var(--text-purple);
        &.active {
            color: var(--primary);
            font-weight: bold;
        }
    }
    .header-top {
        a, span, p {
            white-space: nowrap;
            font-weight: 600;
            font-size: 12px;
            font-weight: bold;
            margin-left: 5px;
            @media (max-width: 1600px) {
                font-size: 12px;
            }
        }
        .left-list {
            a {
                &:hover {
                    svg {
                        path {
                            stroke: var(--primary);
                        }
                    }
                    span {
                        color: var(--primary);
                    }
                }
            }
        }
        .right-list {
            li {
                padding: 0 1vw;
                @media (max-width: 1600px) {
                    padding: 0 5px;
                    &:nth-child(3) {
                        padding: 0 10px !important;
                    }
                }
                &:first-child {
                    padding-left: 0;
                    border: none;
                }
                &:last-child {
                    padding-right: 0;
                }
                .progress {
                    width: 5vw;
                    height: 4px;
                    background-color: #F1EAFE;
                    position: relative;
                    border-radius: 4px;
                    div {
                        width: 84%;
                        height: 100%;
                        background-color: #01D9B1;
                        border-radius: 4px;
                    }
                }
            }
        }
    }
    .header-bottom {
        img {
            @media (max-width: 1600px) {
                max-width: 100px;
            }
            max-width: 150px;
        }
        >div:first-of-type {
            margin: 0 25px;
            @media (max-width: 1600px) {
                margin: 0 25px;
            }
        }
        a {
            @media (max-width: 1600px) {
                font-size: 14px;
            }
            &:hover {
                color: var(--primary);
            }
        }
        .btn {
            background-color: #F1EAFE;
            color: var(--primary);
            padding: 14px 3.5vw;
            font-weight: bold;
            border-radius: 8px;
            @media (max-width: 767px) {
                padding: 11px 3.5vw;
            }
            @media (max-width: 1600px) {
                padding: 9.5px 16px;
            }
            
            &:hover {
                background-color: var(--primary);
                color: #fff;
            }
        }
        .mobile {
            a {
                background-color: var(--primary);
                color: #fff;
                @media (max-width: 767px) {
                    background-color: #F1EAFE;
                    color: var(--primary);
                }
            }
        }
        .hamburger {
            width: 18px;
            height: 12px;
            position: relative;
            &-line {
                height: 2px;
                border-radius: 8px;
                background-color: #000;
                transition: all .3s ease-in-out;
                &:nth-child(1) {
                    position: absolute;
                    top: 0;
                }
                &:nth-child(3) {
                    position: absolute;
                    bottom: 0;
                }
            }
            &.active {
                .hamburger-line {
                    &:nth-child(1) {
                        top: 5px;
                        transition: all .3s ease-in-out;
                        transform: rotate(-45deg);
                        transform-origin: center;
                    }
                    &:nth-child(2) {
                        opacity: 0;
                        transition: all .3s ease-in-out;
                    }
                    &:nth-child(3) {
                        bottom: 5px;
                        transition: all .3s ease-in-out;
                        transform: rotate(45deg);
                        transform-origin: center;
                    }
                }
            }
            
        }
    }
    .header-mobile-menu {
        right: -100%;
        transition: all 0.3s ease-in-out;
        z-index: -1;
        bottom: 0;
        width: 100%;
        @media (min-width: 768px) and (max-width: 1200px) {
            border-left: 1px solid #dee2e6;
            width: 40%;
        }
        > a {
            &:first-of-type {
                @media (max-width: 767px) {
                    margin-top: 110px;
                }
            }
            &:last-of-type {
                display: none;
            }
        }
        .left-list {
            @media (max-width: 767px) {
                margin-bottom: 100px;
            }
        }
        @media (max-width: 480px) {
            overflow-y: scroll !important;
            padding: 20px 0;
        }
        &.active {
            right: 0;
            transition: all 0.3s ease-in-out;

        }
    }

    a.rounded {
        border: 1px solid #E0DBED;
        padding: 0 10px;
        padding: 2px 6px;
    }

    .text-colored-purple {
        color: #6E2DFA;
    }

    .text-colored-black {
        color: black;
    }

    .text-colored-green {
        color: #00B493;
    }

    .header-logo{
        margin-right: 50px !important;
    }

    .search input.nosubmit {
        width: 260px;
        border: 1px solid #e0dbed;
        display: block;
        padding: 10px 4px 10px 40px;
        border-radius: 8px;
        font-size: 16px;
        background: white
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
        no-repeat 13px center
    }

    .form-switch.form-switch-md .form-check-input {
        height: 1.5rem;
        width: calc(2rem + 0.75rem);
        border-radius: 3rem;
        margin-top:0;
    }

    .form-switch {
        padding-left: 3em
    }

    .form-switch .form-check-input {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='white'/%3e%3c/svg%3e");
    }

    .form-check-input {
        background-color: #e0dbed;
        border: none;
    }

    .form-check-input:checked {
        background-color: #6e2dfa;
        border-color: #6e2dfa;
    }

    .mr-5{
        margin-right: 5px;
    }

`