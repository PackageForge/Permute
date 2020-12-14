export function permuteCombination<A, B>(a: A[], b: B[], callback: (a: A, b: B) => false | any): undefined | false
export function permuteCombination<A, B, C>(a: A[], b: B[], c: C[], callback: (a: A, b: B, c: C) => false | any): undefined | false
export function permuteCombination<A, B, C, D>(a: A[], b: B[], c: C[], d: D[], callback: (a: A, b: B, c: C, d: D) => false | any): undefined | false
export function permuteCombination<A, B, C, D, E>(a: A[], b: B[], c: C[], d: D[], e: E[], callback: (a: A, b: B, c: C, d: D, e: E) => false | any): undefined | false
export function permuteCombination(...collections: any[]) {
  const callback: (...c: any[]) => false | any = collections.pop();
  const count = collections.length;
  const permutation: any[] = [];
  function dive(depth: number) {
    if (depth === count) {
      if (callback(...permutation) === false)
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