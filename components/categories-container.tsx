import type { NextPage } from "next";
import Image from "next/image";
import CategoryCardsList from "./category-cards-list";

export type CategoriesContainerType = {
  className?: string;
};

const CategoriesContainer: NextPage<CategoriesContainerType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex items-start pt-[0rem] px-[0rem] pb-[2.312rem] box-border max-w-full ${className}`}
    >
      <header className="flex-1 bg-[#e2d9c8] flex items-start justify-center pt-[3rem] pb-[2.937rem] pl-[1.312rem] pr-[1.25rem] box-border max-w-full text-left text-[1.125rem] text-[#544a3e] font-[Poppins]">
        <div className="h-[13.75rem] w-[120rem] relative bg-[#e2d9c8] hidden max-w-full shrink-0" />
        <div className="w-[52.813rem] flex items-end justify-between flex-wrap content-end gap-[1.25rem] max-w-full z-[1] shrink-0">
          <CategoryCardsList
            phcoffeeFill="/ph-coffee-fill.svg"
            hotCoffee="Hot Coffee"
          />
          <CategoryCardsList
            categoryItemContainersPadding="0rem 1.125rem 0rem 0.5rem"
            phcoffeeFill="/cib-buy-me-a-coffee.svg"
            hotCoffee="Cold Coffee"
            hotCoffeeMinWidth="6.769rem"
          />
          <div className="flex flex-col items-start gap-[0.662rem]">
            <div className="flex items-start py-[0rem] px-[0.812rem]">
              <Image
                className="w-full relative max-h-full h-auto shrink-0"
                loading="lazy"
                width={82.3}
                height={82.3}
                sizes="100vw"
                alt=""
                src="/streamline-coffee-takeaway-cup-solid.svg"
              />
            </div>
            <div className="relative font-medium inline-block min-w-[6.769rem] shrink-0">
              {" "}
              Cup Coffee
            </div>
          </div>
          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.306rem]">
            <div className="flex flex-col items-start gap-[0.206rem]">
              <Image
                className="w-[5.144rem] relative max-h-full"
                loading="lazy"
                width={82.3}
                height={82.3}
                sizes="100vw"
                alt=""
                src="/bx-cake.svg"
              />
              <div className="flex items-start py-[0rem] pl-[0.187rem] pr-[0.25rem]">
                <div className="relative font-medium inline-block min-w-[4.663rem]">
                  Dessert
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default CategoriesContainer;
