import React, { ReactNode } from "react";
import MultiCarousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type CustomCarouselProps = {
  children?: ReactNode;
  responsive: ResponsiveType;
  infinite?: boolean;
  autoPlay?: boolean;
  swipeable?: boolean;
  draggable?: boolean;
  showDots?: boolean;
  autoPlaySpeed?: number;
  keyBoardControl?: boolean;
  customTransition?: string;
  transitionDuration?: number;
  containerClass?: string;
  minimumTouchDrag?: number;
  renderButtonGroupOutside?: boolean;
  renderDotsOutside?: boolean;
};

function CustomCarousel({ children, ...props }: CustomCarouselProps) {
  return (
    <MultiCarousel
      {...props}
      ssr={true}
      dotListClass="custom-dot-list-style experience"
      itemClass="carousel-item-padding-40-px"
    >
      {children}
    </MultiCarousel>
  );
}

export default CustomCarousel;
