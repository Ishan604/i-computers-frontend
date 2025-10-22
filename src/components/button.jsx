import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <a className="btn" href="#">Explore..</a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
   display: inline-block;
   width: 250px;
   text-align: center;
   padding: 0.9rem 1.8rem;
   font-size: 16px;
   font-weight: 700;
   color: white;
   border: 3px solid rgb(252, 70, 100);
   cursor: pointer;
   position: relative;
   background-color: transparent;
   text-decoration: none;
   overflow: hidden;
   z-index: 1;
   font-family: inherit;
  }

  .btn::before {
   content: "";
   position: absolute;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   background-color: rgb(252, 70, 100);
   transform: translateX(-100%);
   transition: all .3s;
   z-index: -1;
  }

  .btn:hover::before {
   transform: translateX(0);
  }`;

export default Button;
