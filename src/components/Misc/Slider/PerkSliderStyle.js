import styled from 'styled-components/macro';

export const PerkSliderStyle = styled.div`
  padding-left: 18px;
  .slick-slider {
    overflow: hidden;
  }

  .slick-list{
    margin: 0 -41%;
  }
  .slick-track {
    display: flex !important;
    margin: 0 22%;
  }
  .slick-slide {
    height: auto;
  }
  .slick-slide > div {
    height: 100%;
    margin: 0 4px;
  }
  
  @media(max-width: 767px){
    padding-left: 15px;
    
    .slick-slide > div {
      margin: 0 4px;
    }
    .slick-list{
      margin: 0 -20px;
    }
    .slick-track {
      margin: 0 18px;
    }
  }
`