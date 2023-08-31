import styled from 'styled-components/macro';

export const StyledMain = styled.section`
    padding-top: 180px;
    padding-bottom: 100px;
    height: 100vh;

    // Smartphones (portrait and landscape) 
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
        // Styles
        padding-top: 200px;
        padding-bottom: 70px;
        height: 100vh;
        max-height: none;
    }

    // iPads (landscape) 
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
        // Styles
        padding-top: 140px;
        padding-bottom: 70px;
        // height: 90vh;
    }

    // iPads (portrait) 
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
        // Styles
        padding-top: 100px;
        padding-bottom: 70px;
        // height: 90vh;
    }

    // Desktops and laptops 
    @media only screen and (min-width: 1224px) {
        // Styles
        padding-top: 140px;
        padding-bottom: 100px;
        height: 80vh;
    }

    // Large screens 
    @media only screen and (min-width: 1824px) {
        // Styles
        padding-top: 225px;
        padding-bottom: 100px;
        height: 80vh;
    }

    
    #background {
        position: absolute;
        z-index: -1;
        bottom: 0;
    
        // Smartphones (portrait and landscape) 
        @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
            // Styles
            top: 430px;
            right: 0;
            bottom: -50px;
            width: 1920px;
            height: 430px;
            overflow: hidden;
            svg {
                transform: translate3d(540px, 0, 0px) !important;
            }
        }

        // Smartphones (landscape) 
        @media only screen and (min-width: 321px) {
            // Styles
        }

        // Smartphones (portrait) 
        @media only screen and (max-width: 320px) {
            // Styles
        }

        // iPads (portrait and landscape) 
        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
            // Styles
        }

        // iPads (landscape) 
        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
            // Styles
            height: 65vh;
            right: 0;
            bottom: -80px;
        }

        // iPads (portrait) 
        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
            // Styles
            width: 80vh;
            right: 0;
            bottom: -70px;
        }

        // Desktops and laptops 
        @media only screen and (min-width: 1224px) {
            // Styles
            height: 65vh;
            right: 0;
            bottom: -80px;
        }

        // Large screens 
        @media only screen and (min-width: 1824px) {
            // Styles
            width: 1920px;
            height: 880px;
            right: 0;
            // bottom: -50px;

        }
    }
    > div {
        z-index: 1;
        h1 {
            color: var(--primary);

            .slogan {
                color: #000;
            }
        }
        p {
            color: var(--text-purple);
            font-weight: 500;
            line-height: 28px;
            max-width: 600px;
        }
        button {
            padding: 25px 79px;
            font-size: 20px;
            @media (max-width: 767px) {
                margin-bottom: 200px;
            }
        }
    }
`;
