# React Shop

- 도메인 URL
  https://react-shop-ki4o.vercel.app/

## 디렉토리 구조

```
.
├── .github               # Github setting folder
├── .vscode               # VSCode setting folder
├── public                # Public folder
│   └── assets
│       └── images        # Images
├── src
│   ├── components        # all components
│   ├── pages             # Next JS pages
│   ├── styles            # PostCSS style folder with Tailwind
│   └── utils             # Utility folder
├── .eslintignore         # Ignore ESLint
├── .eslintrc             # ESLint settings
├── .gitignore            # Ignore Git commit
├── .nvmrc                # Specification of NPM
├── .prettierignore       # Ignore prettier
├── .prettierrc           # Formatting code setting
├── LICENSE               # License file
├── lint-staged.config.js # Lint information
├── next-env.d.ts         # NextJS environment definition file
├── next.config.js        # NextJS configuration
├── package-lock.json     # Same packages with others
├── package.json          # Package information
├── postcss.config.js     # PostCSS setting
├── SECURITY.md           # Security
├── README.md             # README file
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Cart

Cart 기능을 구현하면서 기록한 내용을 남깁니다.

- cartState : localStorage를 기준으로 카트의 상태를 저장합니다. 최초 저장되어 있는 CART_ITEM 값을 저장하고, localStorage에서의 값이 변경될 때마다 상태를 업데이트 합니다.

- addCart : cart에 아이템의 데이터를 추가하는 Recoil 함수 입니다. 기본적인 로직은 removeFormCart와 유사하게 작동합니다. localstorage에 저장된 CART_ITEM 값을 기준으로, 같은 아이템이 있을 경우, count 개수를 업데이트하고 장바구니 리스트에 변경된 내용을 업데이트 후 return 합니다.

## CartView

장바구니 페이지를 구현한 내용입니다.

- 장바구니에 물품이 없다면 안내 문구를 출력하고, 메인 페이지로 이동하도록 버튼을 노출합니다.

- [장바구니에 물품이 있을 경우]

- handleRemoveCart : - 버튼 클릭시, 담겨있는 제품의 count 수를 -1 한 뒤 장바구니 리스트를 업데이트 합니다. count 가 1 일 때에는 해당 상품을 삭제합니다. 모든 아이템이 삭제되면 물품이 없다는 안내 문구와 메인페이지로 이동 버튼이 노출됩니다.

- handleAddCount : + 버튼 클릭시, remove와 반대로 count 수를 증가합니다. 이 때, 동일한 아이템이 추가로 리스트를 생성하지 않도록 cart 에서 스프레드 문법으로 count 부분만 업데이트를 구현했습니다.

- totalPrice : 총 금액을 계산해서 state를 반환합니다. useEffect를 사용해서 장바구니 리스트가 업데이트 될 때마다 담겨있는 물품의 가격과 count를 곱해서 누계를 setState로 업데이트 합니다.

## Vercel

### 배포 단계

-

### 배포 주소

- vercel.json은 서버에서 CSR(Client Side Rendering) 시에 라우팅 주소를 알 수 없기 때문에 rewrite로 주소를 루트로 보내어 Client의 Routing 시스템을 사용하도록 유도합니다.
- https://react-shop-oinochoe.vercel.app/
