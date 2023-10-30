import React, { FC, ReactNode, Children, isValidElement } from "react";
import s from "./ProductSlider.module.css";
import { useKeenSlider } from "keen-slider/react";

interface LayoutProps {
  children: ReactNode;
}

const ProductSlider: FC<LayoutProps> = ({ children }) => {
  const [sliderRef, _] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      console.log("changing to slide: ", s.details().relativeSlide);
    },
  });

  return (
    <div className={s.root}>
      <div
        ref={sliderRef as any}
        className="keen-slider h-full transition-opacity"
      >
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
