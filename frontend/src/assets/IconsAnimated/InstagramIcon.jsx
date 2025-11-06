// InstagramIcon.jsx
import { FaInstagram } from "react-icons/fa";
import styled from "styled-components";

const InstagramIcon = ({ as: Component = "button", ...props }) => {
  return (
    <StyledWrapper>
      <Component className="instagram-btn" {...props}>
        <FaInstagram className="icon" />
      </Component>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .instagram-btn {
    width: 45px;
    height: 45px;
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    border: none;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.185),
      0px 3px 3px rgba(255, 255, 255, 0.178) inset,
      0px -3px 3px rgba(0, 0, 0, 0.281) inset;
  }

  .icon {
    font-size: 1.3em;
    color: white;
    z-index: 5;
    transition: opacity 0.3s;
  }

  .instagram-btn::after {
    content: "Instagram";
    position: absolute;
    color: white;
    font-weight: 600;
    font-size: 0;
    opacity: 0;
    transform: translateX(60px);
    transition: all 0.3s ease;
    font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Helvetica, Arial, sans-serif;
  }

  @media (hover: hover) and (pointer: fine) {
    .instagram-btn:hover {
      width: 140px;
      border-radius: 30px;
    }

    .instagram-btn:hover::after {
      opacity: 1;
      font-size: 1em;
      transform: translateX(0px);
    }

    .instagram-btn:hover .icon {
      opacity: 0;
    }
  }

  @media (hover: none) and (pointer: coarse) {
    .instagram-btn {
      width: 45px !important;
      border-radius: 50% !important;
      transition: none !important;
    }

    .instagram-btn::after {
      display: none;
    }

    .icon {
      opacity: 1;
    }
  }
`;

export default InstagramIcon;
