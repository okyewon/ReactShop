import { useRecoilValueLoadable } from "recoil";
import { IProduct, productsList } from "../../store/products";
import { Link } from "react-router-dom";
import { Category } from "../../constants/category";
import ProductsViewLoad from "./ProductsViewLoad";

/**
 * API 통신을 할 때 로딩중인지를 탐색하고 로딩 중이라면 Skeleton UI를 노출 시켜 보세요.
 */
const ProductsLoad = ({ title, limit = 20 }): JSX.Element => {
  let productsLoadable = useRecoilValueLoadable(productsList);
  const products: IProduct[] = "hasValue" === productsLoadable.state ? productsLoadable.contents : [];
  const productsCards = products.filter((item) => {
    return Category[item.category] === title;
  });

  if ("loading" === productsLoadable.state) return <ProductsViewLoad />;

  return (
    <>
      <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">{title}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list overflow-x-auto">
        {0 < limit && productsCards ? (
          productsCards.slice(0, limit).map((item) => {
            return (
              <Link
                to={`/product/${item.id}`}
                key={item.id}
                className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
              >
                <figure className="flex items-center h-80 bg-white overflow-hidden">
                  <img className="transition-transform duration-300" src={item.image} alt={item.title} />
                </figure>
                <div className="card-body bg-gray-100 dark:bg-gray-700">
                  <h2 className="card-title text-base">{item.title}</h2>
                  <p className="text-base">${item.price}</p>
                </div>
              </Link>
            );
          })
        ) : (
          <div>제품이 없습니다.</div>
        )}
      </div>
    </>
  );
};

export default ProductsLoad;
