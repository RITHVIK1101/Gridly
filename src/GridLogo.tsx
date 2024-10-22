import React from "react";
import styled, { keyframes } from "styled-components";
import { Grid } from "lucide-react";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const revolve = keyframes`
  from {
    transform: rotate(0deg) translateX(8px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(8px) rotate(-360deg);
  }
`;

const LogoContainer = styled.div`
  position: relative;
  width: 80px;
  margin-left: 55px;
  margin-right: -20px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RotatingGrid = styled(Grid)`
  position: absolute;
  animation: ${rotate} 10s linear infinite;
`;

const GridLogo: React.FC = () => {
  return (
    <LogoContainer>
      <RotatingGrid size={56} />
    </LogoContainer>
  );
};

export default GridLogo;