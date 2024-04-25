import { Link } from "react-router-dom";

/**
 * 뷰페이지에는 특별한 로직이 포함되어서는 안됩니다.
 * 컴포넌트를 불러다 렌더링하는 용도로만 사용 하세요.
 */
const Error = (): JSX.Element => {
  /**
   * 해당 부분에 함수나 기타 로직등을 작성하지마세요.
   */
  return (
    <>
      <h1 className="mt-20 sm:mt-28 text-center text-4xl sm:text-9xl font-bold">404</h1>
      <p className="mt-4 mb-5 sm:mb-10 text-center text-lg sm:text-3xl">페이지를 찾을 수 없습니다.</p>
      <div className="text-center">
        <Link to="/" className="btn btn-md sm:btn-lg btn-primary sm:w-40">
          메인으로
        </Link>
      </div>
    </>
  );
};

export default Error;
