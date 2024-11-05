import { Params } from "./Params";

export type ApiContext<T extends Params> = {
  params: Promise<T>;
};
