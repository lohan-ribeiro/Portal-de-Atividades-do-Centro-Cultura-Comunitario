import styled from 'styled-components';

const FacebookIcon = ({ as: Component = "button", ...props }) => {
  return (
    <StyledWrapper>
      <Component className="button" {...props} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    width: 45px;
    height: 45px;
    background-color: #3b5998;
    border: none;
    border-radius: 50%;
    position: relative;
    z-index: 1;
    overflow: hidden;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.185),
      0px 3px 3px rgba(255, 255, 255, 0.178) inset,
      0px -3px 3px rgba(0, 0, 0, 0.281) inset;
    transition: all .3s;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding-bottom: 3px;
  }

  .button::before {
    background-color: transparent;
    content: "f";
    font-size: 1.1em;
    font-weight: 700;
    color: white;
    z-index: 5;
    transition: all .3s;
    font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  }

  .button::after {
    content: "acebook";
    background-color: transparent;
    font-size: 0;
    opacity: 0;
    font-weight: 700;
    color: white;
    z-index: 5;
    transition: all .3s;
    transform: translateX(60px);
    font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  }

  @media (hover: hover) and (pointer: fine) {
    .button:hover {
      width: 140px;
      border-radius: 30px;
    }

    .button:hover::after {
      opacity: 1;
      font-size: 1em;
      transform: translateX(0px);
    }
  }

  @media (hover: none) and (pointer: coarse) {
    .button {
      width: 45px !important;
      border-radius: 50% !important;
      transition: none !important;
    }

    .button::after {
      display: none;
    }
  }
`;

export default FacebookIcon;
