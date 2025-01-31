import { React, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import music from "../../images/music.mp3";

const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 15rem;
  top: 1.5vmax;
  z-index: 1;

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.8s;
  }
  @media (max-width: 600px) {
    top: 6rem;
  }
`;

const play = keyframes`
0%{
    transform: scaleY(1);
}
50%{
    transform: scaleY(2);
}
100%{
    transform: scaleY(1);
}
`;

const Line = styled.span`
  border: 1px solid #fff;
  color: #fff;
  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) => (props.click ? "running" : "paused")};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;
`;

const Soundbar = () => {
  const ref = useRef(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };
  return (
    <Box onClick={() => handleClick()}>
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />

      <audio ref={ref} src={music} loop />
    </Box>
  );
};

export default Soundbar;
