import styled from "styled-components";
import { useState } from "react";

const Btn = styled.button`
  border: none;
  color: white;
  background-color: #ea8aa0;
  width: 16.18em;
  height: 2.618em;
  font-size: 1em;
  &.active {
    background-color: #eb4d72;
  }
`;

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button: React.VFC<ButtonProps> = ({ label, onClick }) => {
  const [onMouseHover, setOnMouseHover] = useState(false);

  return (
    <Btn
      onClick={onClick}
      onMouseEnter={() => setOnMouseHover(true)}
      onMouseLeave={() => setOnMouseHover(false)}
      className={onMouseHover ? "active" : ""}
    >
      {label}
    </Btn>
  );
};
