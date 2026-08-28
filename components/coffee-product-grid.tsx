"use client";
import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import CoffeeCardItems from "./coffee-card-items";

export type CoffeeProductGridType = {
  className?: string;
  coffeeCardItemsProductImage: string;
  coffeeCardItemsProductImage1: string;
  coffeeCardItemsProductImage2: string;
  coffeeCardItemsProductImage3: string;
};

const CoffeeProductGrid: NextPage<CoffeeProductGridType> = ({
  className = "",
  coffeeCardItemsProductImage,
  coffeeCardItemsProductImage1,
  coffeeCardItemsProductImage2,
  coffeeCardItemsProductImage3,
}) => {
  const [coffeeCardItemsItems] = useState([
    {
      productImageBackgrounds: coffeeCardItemsProductImage,
    },
    {
      productImageBackgrounds: coffeeCardItemsProductImage1,
    },
    {
      productImageBackgrounds: coffeeCardItemsProductImage2,
    },
    {
      productImageBackgrounds: coffeeCardItemsProductImage3,
    },
  ]);
  return (
    <div
      className={`self-stretch flex items-start gap-[4.437rem] max-w-full mq450:gap-[1.125rem] mq900:gap-[2.188rem] ${className}`}
    >
      <div className="flex flex-col items-start pt-[15.562rem] px-[0rem] pb-[0rem] mq900:hidden">
        <Image
          className="w-full h-[4.438rem] relative"
          loading="lazy"
          width={71}
          height={71}
          sizes="100vw"
          alt=""
          src="/Group-11.svg"
        />
      </div>
      <div className="flex-1 flex items-start justify-center gap-[0.25rem] max-w-[calc(100%_-_284px)] mq900:grid-cols-[minmax(274px,_1fr)] mq900:max-w-full mq1350:my-[0px] mq1350:mx-[auto] mq1350:grid-cols-[repeat(2,_minmax(274px,_476px))] mq1800:flex-wrap">
        {coffeeCardItemsItems.map((item, index) => (
          <CoffeeCardItems
            key={index}
            productImageBackgrounds={item.productImageBackgrounds}
          />
        ))}
      </div>
      <div className="flex flex-col items-start pt-[15.562rem] px-[0rem] pb-[0rem] mq900:hidden">
        <Image
          className="w-full h-[4.438rem] relative"
          loading="lazy"
          width={71}
          height={71}
          sizes="100vw"
          alt=""
          src="/Group-11.svg"
        />
      </div>
    </div>
  );
};

export default CoffeeProductGrid;
