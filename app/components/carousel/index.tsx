"use client";

import classNames from "classnames";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "../icons/svgs";
import { AbsButton } from "../button";
import { ICarousel } from "../../types/global";

const Carousel = ({ items, itemRenderer }: ICarousel) => {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(items.length / 2));
  const [currentWidth, setCurrentWidth] = useState(0);
  const carouselRef = useRef(null);

  const slideWidth = 208; // Tailwind w-52 / 13rem, 208px

  useEffect(() => {
    // Calculate the number of slides that can be shown
    const updateSlidesToShow = () => {
      if (carouselRef.current) {
        const carouselWidth = carouselRef.current.offsetWidth;
        setCurrentWidth(carouselWidth);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const translateX = useMemo(() => {
    if (!currentWidth) return 0;
    return -(currentIndex * slideWidth) + currentWidth / 2 - slideWidth / 2;
  }, [currentIndex, slideWidth, currentWidth]);

  return (
    <div className="flex space-x-4">
      <AbsButton optionalClass={classNames("w-12 h-64", "flex justify-center items-center")} handler={handlePrev}>
        {ChevronLeft}
      </AbsButton>

      <div className="relative w-full overflow-hidden" ref={carouselRef}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {items.map((item, index) => {
            const scaleForItem = `scale-[${Math.max(0.8 - Math.abs((index - currentIndex) * 0.1), 0.5).toFixed(1)}]`;

            return (
              <div
                key={index}
                className={classNames(
                  "w-52 h-64 flex-shrink-0 cursor-pointer transition-transform duration-500 ease-in-out",
                  {
                    "animate-pulse blur-md": currentWidth === 0,
                  },
                  {
                    "scale-100": index === currentIndex,
                    [scaleForItem]: index !== currentIndex,
                  }
                )}
                onClick={() => setCurrentIndex(index)}
              >
                {itemRenderer(item)}
              </div>
            );
          })}
        </div>
      </div>
      <AbsButton optionalClass={classNames("w-12 h-64", "flex justify-center items-center")} handler={handleNext}>
        {ChevronRight}
      </AbsButton>
    </div>
  );
};

export default Carousel;
