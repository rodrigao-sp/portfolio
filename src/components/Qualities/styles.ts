import styled from "styled-components";
import { Cores } from "../../styles/styles";

export const QualitiesCss = styled.section`
  width: 100%;
  overflow: hidden;
  padding-top: 100px;
  background-color: ${Cores.secondaryBackground};
  position: relative;
  z-index: 1;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 24px;
    color: ${Cores.primaryText};
  }

  p {
    margin-bottom: 2rem;
    font-size: 1rem;
  }

  .icons {
    display: flex;
    margin-bottom: 5rem;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
  }

  .icon-item {
    position: relative;
    display: inline-flex;
    transition: transform 0.3s;
  }

  .itemLeft,
  .itemRight,
  .tooltip {
    position: absolute;
    text-align: center;
    color: ${Cores.primaryText};
  }

  .icon-item:hover {
    transform: scale(1.2);
    filter: brightness(1.2);
  }

  .icon-item img {
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .tooltip {
    visibility: hidden;
    width: 120px;
    background-color: ${Cores.secondaryBackground};
    padding: 8px;
    border-radius: 8px;
    bottom: -80%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    transition: opacity 0.3s;
  }

  .icon-item:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }

  .wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 100px;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0)
    );
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    justify-items: center;
  }

  .itemLeft,
  .itemRight {
    width: 250px;
    height: 50px;
    background-color: #3c3c3c;
    border-radius: 8px;
    animation-timing-function: linear;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .itemLeft {
    left: max(calc(250px * 8), 100%);
    animation-name: scrollLeft;
  }

  .itemRight {
    right: max(calc(250px * 8), calc(100% + 250px));
    animation-name: scrollRight;
  }

  .item1 {
    animation-delay: calc(30s / 8 * (8 - 1) * -1);
  }

  .item2 {
    animation-delay: calc(30s / 8 * (8 - 2) * -1);
  }

  .item3 {
    animation-delay: calc(30s / 8 * (8 - 3) * -1);
  }

  .item4 {
    animation-delay: calc(30s / 8 * (8 - 4) * -1);
  }

  .item5 {
    animation-delay: calc(30s / 8 * (8 - 5) * -1);
  }

  .item6 {
    animation-delay: calc(30s / 8 * (8 - 6) * -1);
  }

  .item7 {
    animation-delay: calc(30s / 8 * (8 - 7) * -1);
  }

  .item8 {
    animation-delay: calc(30s / 8 * (8 - 8) * -1);
  }

  @keyframes scrollLeft {
    to {
      left: -200px;
    }
  }

  @keyframes scrollRight {
    to {
      right: -200px;
    }
  }
`;
