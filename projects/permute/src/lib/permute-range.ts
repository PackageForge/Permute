export function permuteRange(count: number, callback?: (value: number) => false | true | any): number[]
export function permuteRange(start: number, count: number, callback?: (value: number) => false | true | any): number[]
export function permuteRange(param1: number, param2?: number | ((value: number) => false | true | any), param3?: (value: number) => false | true | any) {
  const callback = param3 || (typeof (param2) === "function" ? param2 : undefined);
  const start = typeof (param2) === "number" ? param1 : 0;
  const count = typeof (param2) === "number" ? param2 : param1;
  const permutation: number[] = [];
  for (let i = 0; i < count; i++) {
    const value = start + i;
    const r = callback && callback(value);
    if (r === false)
      break;
    permutation[i] = value;
    if (r === true)
      break;
  }
  return permutation;
}