import { FC } from "react";
import { Start } from "../star";
import "./style.css";

export const StarButton: FC<{ onClick: VoidFunction }> = ({ onClick }) => {
  return (
    <button className="star-button" onClick={onClick}>
      <Start /> <span className="star-button__text">Star</span>
    </button>
  );
};
