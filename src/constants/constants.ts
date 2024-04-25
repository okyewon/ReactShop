/**
 * constants.ts와 같이 사용되는 전역 상수들을 미리 정의해두면 오타도 방지할 수 있고 가독성도 높힐 수 있습니다.
 */
const IS_DEV: boolean = "development" === import.meta.env.MODE;

const KEY = {
  ARROW_DOWN: "ArrowDown",
  ARROW_UP: "ArrowUp",
  ENTER: "Enter",
} as const;

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const LOCAL_STORAGE_KEY = {
  THEME: "theme",
} as const;

const CONSTANTS = {
  IS_DEV,
  KEY,
  THEME,
  LOCAL_STORAGE_KEY,
};

export default CONSTANTS;
