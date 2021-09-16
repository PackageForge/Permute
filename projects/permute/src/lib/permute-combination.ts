export function permuteCombination<T>(a: T[][], callback: (p: T[]) => false | any): undefined | false
export function permuteCombination<A, B>(a: A[], b: B[], callback: (a: A, b: B) => false | any): undefined | false
export function permuteCombination<A, B, C>(a: A[], b: B[], c: C[], callback: (a: A, b: B, c: C) => false | any): undefined | false
export function permuteCombination<A, B, C, D>(a: A[], b: B[], c: C[], d: D[], callback: (a: A, b: B, c: C, d: D) => false | any): undefined | false
export function permuteCombination<A, B, C, D, E>(a: A[], b: B[], c: C[], d: D[], e: E[], callback: (a: A, b: B, c: C, d: D, e: E) => false | any): undefined | false
export function permuteCombination(...collections: any[]) {
  const callback: (...c: any[]) => false | any = collections.pop();
  const noSpread = collections.length === 1;
  if (noSpread)
    collections = collections[0];
  const count = collections.length;
  const permutation: any[] = [];
  function dive(depth: number) {
    if (depth === count) {
      if ((noSpread ? callback(permutation.slice()) : callback(...permutation)) === false)
        return false;
    } else {
      const collection = collections[depth] as any[];
      const length = collection.length;
      for (let i = 0; i < length; i++) {
        permutation[depth] = collection[i];
        if (dive(depth + 1) === false)
          return false;
      }
    }
    return;
  }
  return dive(0);
}