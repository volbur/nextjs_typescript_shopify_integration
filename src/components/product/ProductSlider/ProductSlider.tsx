import { FC, ReactNode } from "react";
import s from "./ProductSlider.module.css";

interface LayoutProps {
    children: ReactNode;
}

const ProductSlider: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={s.root}>
      <div className="h-full transition-opacity">{children}</div>
    </div>
  );
};

export default ProductSlider;
