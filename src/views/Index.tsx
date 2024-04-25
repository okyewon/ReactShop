import Slider from "../components/common/Slider";
import ProductsLoad from "../components/products/ProductsLoad";
import { MENUS } from "../constants/category";

const Index = (): JSX.Element => {
  return (
    <>
      <Slider />
      <div className="mt-10 mb-20">
        {Object.entries(MENUS).map((menu, idx) => {
          if (menu[0] !== "HOME")
            return (
              <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
                <ProductsLoad title={menu[1]} limit={4} />
              </section>
            );
        })}
      </div>
    </>
  );
};

export default Index;
