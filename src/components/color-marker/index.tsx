import { FC } from "react";
import "./style.css";

export const ColorMarker: FC<{ color: string }> = ({ color }) => {
  return <div className={`marker marker--${color || "other"}`} />;
};
