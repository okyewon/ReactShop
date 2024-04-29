import { Link } from "react-router-dom";
import BreadCrumb from "../common/Breadcrumb";
import Confirm from "../common/Confirm";
import { CART_ITEM } from "../../constants/category";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { ICartState, addToCart, cartState, removeFromCart } from "../../store/cart";
import { IProduct, productsList } from "../../store/products";
import { useEffect, useState } from "react";

const CartView = (): JSX.Element => {
  const productsLoadable = useRecoilValueLoadable<IProduct[]>(productsList);
  const products: IProduct[] = "hasValue" === productsLoadable.state ? productsLoadable.contents : [];

  const [cartItems, setCartItems] = useRecoilState(cartState);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let reducePrice = 0;

    Object.entries(cartItems.items || {}).forEach(([key, value]) => {
      const product = products.find((product) => product.id === value.id);

      if (product) {
        reducePrice += product.price * value.count;
      }
    });

    setTotalPrice(reducePrice);
  }, [cartItems]);

  const handleRemoveCart = (id) => {
    const removeCart = removeFromCart(cartItems, id);
    setCartItems(removeCart);
  };

  const handleAddCount = (id) => {
    const addCount: Object = addToCart(cartItems, id);
    setCartItems(addCount);
  };

  return (
    <>
      <div className="w-full xl:m-auto pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <BreadCrumb category="홈" crumb="장바구니" />
        <div className="mt-6 md:mt-14 px-2 lg:px-0">
          {cartItems.items ? (
            Object.entries(cartItems.items || {}).map(([key, value], idx) => {
              const product = products.find((product) => product.id === value.id);

              return (
                <div key={key} className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
                  <Link to={`/product/:${value.id}`}>
                    <figure className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
                      <img src={product?.image} alt={product?.title} className="object-contain w-full h-48" />
                    </figure>
                  </Link>
                  <div className="card-body px-1 lg:px-12">
                    <h2 className="card-title">
                      <Link className="link link-hover" to={`/product/${product?.id}`}>
                        {product?.title}
                      </Link>
                    </h2>
                    <p className="mt-2 mb-4 text-3xl">
                      {" "}
                      ${product?.price} <span className="text-2xl">(${`${product?.price}`})</span>
                    </p>
                    <div className="card-actions">
                      <div className="btn-group">
                        <button className="btn btn-primary" onClick={() => handleRemoveCart(product?.id)}>
                          -
                        </button>
                        <button className="btn btn-ghost no-animation">{value.count}</button>
                        <button className="btn btn-primary" onClick={() => handleAddCount(product?.id)}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
              <Link to="/" className="btn btn-primary mt-10">
                담으러 가기
              </Link>
            </div>
          )}
          <div className="lg:flex justify-end mb-20">
            <div className="self-start shrink-0 flex items-center mt-10 mb-20">
              <span className="text-xl md:text-2xl">총 : ${totalPrice.toFixed(2)}</span>
              <label htmlFor="confirm-modal" className="modal-button btn btn-primary ml-5">
                구매하기
              </label>
            </div>
          </div>
        </div>
        <Confirm />
      </div>
    </>
  );
};

export default CartView;
