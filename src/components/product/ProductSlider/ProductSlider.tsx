import React, {
  FC,
  ReactNode,
  Children,
  isValidElement,
  useState,
} from "react";
import s from "./ProductSlider.module.css";
import { useKeenSlider } from "keen-slider/react";
import cn from "classnames";

interface LayoutProps {
  children: ReactNode;
}

const ProductSlider: FC<LayoutProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <div className={s.root}>
      <div
        ref={sliderRef as React.RefObject<HTMLDivElement>}
        className="keen-slider h-full transition-opacity"
      >
        <button
          onClick={slider?.prev}
          className={cn(s.leftControl, s.control)}
        />
        <button
          onClick={slider?.next}
          className={cn(s.rightControl, s.control)}
        />
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${
                  child.props.className ? `${child.props.className}` : ""
                } keen-slider__slide`,
              },
            };
          }

          return child;
        })}
      </div>
    </div>
  );
};

export default ProductSlider;
