
type Shift<T extends unknown[]> = T extends [ infer R, ...infer Rest]?[...Rest]:never;

type res = Shift<[1,2,3,4]>;

const arr:res = [2,3,4];

