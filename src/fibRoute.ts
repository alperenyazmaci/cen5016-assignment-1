// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (req: Request, res: Response) : void => {
  const num: string = req.params.num;

  const fibN: number = fibonacci(parseInt(num));
  let result: string = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
