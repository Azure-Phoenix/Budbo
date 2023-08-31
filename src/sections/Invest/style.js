import styled from 'styled-components/macro';

export const StyledForm = styled.form`
    background: #FFFFFF;
	box-shadow: 0px 9px 9px rgba(0, 0, 0, 0.25);
	border-radius: 15px;
	width: 375px;
	height: 650px;
	
	position:absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;

    
    button{
    	margin: 30px 0;
    }
    
    .container{
    	padding: 20px;
    }

    .inner-container {
        background: #F9F8FC;
		border: 1px solid #E0DBED;
		border-radius: 16px;
		margin: 20px 0;
		padding: 12px;
    }

    hr{
    	margin: 16px 0 16px;
    }

    input{
        width: 100%;
        padding: 13px 0;
        font-size:16px;
        border-radius:8px;
        margin-bottom:16px;

        &::placeholder {
            opacity: 0.7;
            font-size: 16px;
        }

        &:focus-visible{
            outline:none;
        }
    }
    .info{
        color: var(--text-purple);
        font-weight: 500;
        line-height: 16px;
        font-size: 12px !important;
        padding: 8px 16px;
        text-align:center
    }

`