import { Category } from "../../constants/category";

interface IBreadCrumbsPros {
  readonly category?: string;
  readonly crumb?: string;
}
/**
 * 자주사용되는 부분은 BreadCrumb와 같은 공통 컴포넌트를 활용 해보세요.
 */
const BreadCrumb = ({ category = "", crumb = "" }: IBreadCrumbsPros): JSX.Element => {
  const resolveCategory = Category[category] || category;

  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>{resolveCategory}</li>
        <li>{crumb}</li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
