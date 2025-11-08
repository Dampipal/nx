import { add ,sub } from '@nx/math';

export async function GET(request: Request) {
  const result = add(5, 3);
  const result2 = sub(58, 20);

  return new Response(`Hello, from API! Add = ${result}, Sub = ${result2}`);
}
