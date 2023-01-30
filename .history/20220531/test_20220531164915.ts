
type Shift<T extends unknown[]> = T extends [ infer R, ...infer Rest]?[...Rest]:never;

type res = Shift<[]>;

type TrimLeft <Str extends string> = Str extends `${' '|'\t'|'\n'}${infer Rest}`?TrimLeft<Rest>:Str;

type res1 = TrimLeft<'  abc'>;


const teststr = '  abc';

const res2:TrimLeft<string> = teststr.trimStart();
console.log(res2);



