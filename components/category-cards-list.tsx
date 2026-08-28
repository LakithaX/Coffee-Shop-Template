"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export type CategoryCardsListType = {
  className?: string;
  phcoffeeFill: string;
  hotCoffee?: string;

  /** Style props */
  categoryItemContainersPadding?: CSSProperties["padding"];
  hotCoffeeMinWidth?: CSSProperties["minWidth"];
};

const CategoryCardsList: NextPage<CategoryCardsListType> = ({
  className = "",
  categoryItemContainersPadding,
  phcoffeeFill,
  hotCoffee,
  hotCoffeeMinWidth,
}) => {
  const categoryItemContainersStyle: CSSProperties = useMemo(() => {
    return {
      padding: categoryItemContainersPadding,
    };
  }, [categoryItemContainersPadding]);

  const hotCoffeeStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: hotCoffeeMinWidth,
    };
  }, [hotCoffeeMinWidth]);

  return (
    <motion.div
      whileHover={{ scale: 1.1, color: "#30261c" }}
      transition={{ duration: 0.2 }}
      className={`flex flex-col items-start py-[0rem] pl-[0rem] pr-[0.375rem] text-left text-[1.125rem] text-[#544a3e] font-[Poppins] cursor-pointer ${className}`}
    >
      <div className="flex flex-col items-start gap-[0.662rem]">
        <div
          className="flex items-start py-[0rem] px-[0.437rem]"
          style={categoryItemContainersStyle}
        >
          <Image
            className="w-full relative max-h-full h-auto shrink-0"
            loading="lazy"
            width={82.3}
            height={82.3}
            sizes="100vw"
            alt=""
            src={phcoffeeFill}
          />
        </div>
        <div
          className="relative font-medium inline-block min-w-[6.069rem] shrink-0 text-center w-full"
          style={hotCoffeeStyle}
        >
          {hotCoffee}
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryCardsList;
