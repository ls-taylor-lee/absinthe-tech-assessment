"use client";

import classNames from "classnames";
import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "../icons/svgs";
import { AbsButton } from "../button";
import { ICarousel } from "../../types/global";

const Carousel = ({ items, itemRenderer, showDetail = false, detailRenderer }: ICarousel) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(0);
  const carouselRef = useRef(null);

  const slideWidth = 176;

  useEffect(() => {
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

  const handlePrev = useCallback(() => {
    if (currentWidth) setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  }, [currentWidth]);

  const handleNext = useCallback(() => {
    if (currentWidth) setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  }, [currentWidth]);

  const translateX = useMemo(() => {
    if (!currentWidth) return `translateX(calc(50% - ${slideWidth / 2}px))`;
    return `translateX(${-(currentIndex * slideWidth) + currentWidth / 2 - slideWidth / 2}px)`;
  }, [currentIndex, slideWidth, currentWidth]);

  const getScaleValue = (dist) => {
    switch (dist) {
      case 1:
        return "scale-[0.7]";
      case 2:
        return "scale-[0.6]";
      case 3:
        return "scale-[0.5]";
      case 4:
      default:
        return "scale-[0.4]";
    }
  };

  return (
    <div>
      <div className="flex space-x-4">
        <AbsButton optionalClass={classNames("w-12 h-64", "flex justify-center items-center")} handler={handlePrev}>
          {ChevronLeft}
        </AbsButton>

        <div className="relative w-full overflow-hidden" ref={carouselRef}>
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: translateX }}>
            {items.map((item, index) => {
              const isActive = index === currentIndex;
              const scaleValue = getScaleValue(Math.abs(index - currentIndex));
              const itemClass = classNames(
                "flex items-center",
                "w-44 h-64 flex-shrink-0 cursor-pointer transition-transform duration-500 ease-in-out",
                {
                  "animate-pulse blur-md": currentWidth === 0,
                },
                isActive ? "scale-100" : scaleValue
              );

              return (
                <div key={index} className={itemClass} onClick={() => setCurrentIndex(index)}>
                  {itemRenderer(item, isActive)}
                </div>
              );
            })}
          </div>
        </div>
        <AbsButton optionalClass={classNames("w-12 h-64", "flex justify-center items-center")} handler={handleNext}>
          {ChevronRight}
        </AbsButton>
      </div>
      <div className="mt-4">{showDetail && detailRenderer(items[currentIndex])}</div>
    </div>
  );
};

export default Carousel;
