import styled from 'styled-components/macro';

export const StyledFooter = styled.footer`
    background-color: #fff;
    padding: 48px 5px 71px;
    margin-top: 100px;
    
    border-radius: 48px 0 0 0;
    @media (min-width: 768px) {
        margin-left: 48px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        p {
            white-space: nowrap;
        }
    }
    button {
        background-color:#00B493;
        
        &:hover {
            background-color: #059479;
            color: #fff;
        }
    }
    .container {
        .border-wrapper {
            @media (max-width: 1200px) {
                order: 1;
            }
        }
        .border-footer {
            display: block;
            position: absolute;
            height: 1px;
            width: 100%;
            background-color: #E0DBED;        
            bottom: -50px;
        }
    }

`