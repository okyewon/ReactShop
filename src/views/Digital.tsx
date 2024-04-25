import BreadCrumb from "../components/common/Breadcrumb";
import ProductsLoad from "../components/products/ProductsLoad";
import { MENUS } from "../constants/category";
/**
 * 뷰페이지에는 특별한 로직이 포함되어서는 안됩니다.
 * 컴포넌트를 불러다 렌더링하는 용도로만 사용 하세요.
 */
const Digital = (): JSX.Element => {
  /**
   * 해당 부분에 함수나 기타 로직등을 작성하지마세요.
   */
  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb category={MENUS.HOME} crumb={MENUS.DIGITAL} />
      <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        <ProductsLoad title={MENUS.DIGITAL} />
      </article>
    </section>
  );
};

export default Digital;
