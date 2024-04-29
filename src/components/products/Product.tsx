import BreadCrumb from "../common/Breadcrumb";
import { Category } from "../../constants/category";
import { useParams } from "react-router";
import { IProduct, productsList } from "../../store/products";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { Link } from "react-router-dom";
import { addToCart, cartState } from "../../store/cart";
import StarRating from "./StarRating";
import ProductsViewLoad from "./ProductsViewLoad";

const Product = (): JSX.Element => {
  const productsLoadable = useRecoilValueLoadable<IProduct[]>(productsList);
  const productParam = useParams();
  const [cart, setCart] = useRecoilState(cartState);

  const products: IProduct[] = "hasValue" === productsLoadable.state ? productsLoadable.contents : [];
  const product = products.filter((item) => productParam.id == item.id.toString())[0];

  if ("loading" === productsLoadable.state) {
    return <ProductsViewLoad />;
  }

  const category = Category[product.category];

  const handleAddToCart = () => {
    const updateCart: Object = addToCart(cart, product.id);
    setCart(updateCart);
  };

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb category={category} crumb={product.title} />
      <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
        <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-12 py-4 bg-white view_image">
          <img src={product.image} alt={product.title} className="object-contain w-full h-72" />
        </figure>
        <div className="card-body px-1 lg:px-12">
          <h2 className="card-title">
            {product.title}
            <span className="badge badge-accent ml-2">NEW</span>
          </h2>
          <p>{product.description}</p>
          <div className="flex items-center mt-3">
            <StarRating rate={product.rating.rate} />
            <div className="ml-2">
              {product.rating.rate} / {product.rating.count} 참여
            </div>
          </div>
          <p className="mt-2 mb-4 text-3xl">${product.price}</p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={() => handleAddToCart()}>
              장바구니에 담기
            </button>
            <Link className="btn btn-outline ml-1" to="/cart">
              장바구니로 이동
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
