import { BUY_CAKE } from "./cakeTypes";

//Action to buy cake
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};
