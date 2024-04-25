import { Link } from "react-router-dom";
import { ICartState, cartState, removeFromCart } from "../../store/cart";
import { toCurrencyFormat } from "../../helpers/helpers";
import { useRecoilState } from "recoil";

const CartList = (): JSX.Element => {
  // Recoil을 사용해서 cart데이터를 가져오는 예제입니다.
  const [cart, setCart] = useRecoilState<ICartState>(cartState);

  // store/cart.ts를 참고하세요.
  const removeFromCartHandler = (id: string) => {
    setCart(removeFromCart(cart, id));
  };

  return (
    <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
      {/* 카트 리스트 화면을 구성 해보세요. */}
    </div>
  );
};


export default CartList;
