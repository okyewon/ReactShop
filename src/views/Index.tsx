import { useRecoilValueLoadable } from "recoil";
import Slider from "../components/common/Slider";
import ProductsLoad from "../components/products/ProductsLoad";
import ProductsViewLoad from "../components/products/ProductsViewLoad";
import { MENUS } from "../constants/category";
import { IProduct, productsList } from "../store/products";

const Index = (): JSX.Element => {
  const productsLoadable = useRecoilValueLoadable<IProduct[]>(productsList);

  return (
    <>
      <Slider />
      <div className="mt-10 mb-20">
        {Object.entries(MENUS).map((menu) => {
          if (menu[0] !== "HOME")
            return (
              <section key={menu[0]} className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
                {"loading" === productsLoadable.state ? (
                  <ProductsViewLoad />
                ) : (
                  <ProductsLoad title={menu[1]} limit={4} />
                )}
              </section>
            );
        })}
      </div>
    </>
  );
};

export default Index;
