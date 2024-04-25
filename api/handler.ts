import type { VercelRequest, VercelResponse } from "@vercel/node";
/**
 * vercel에서 Serverless를 사용하고 싶다면 사용하실 수 있는 옵션에 해당하는 코드 입니다.
 * 반드시 구현해야되는 내용에는 포함되지는 않습니다.
 */
export default function handler(request: VercelRequest, response: VercelResponse) {
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
    env: `${process.env.VITE_FAKE_STORE_API}/products`,
  });
}
