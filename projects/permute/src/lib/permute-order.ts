export function permuteOrder<T>(collection: T[], callback: (permutation: T[]) => false | any): undefined | false {
  const count = collection.length;
  if (count === 0)
    return;
  const indeces: (number | null)[] = collection.map((v, i) => i);
  const permutation: number[] = [];
  function dive(d: number) {
    if (permutation.length === count) {
      if (callback(permutation.map(i => collection[i])) === false)
        return false;
    } else
      for (let i = 0; i < count; i++)
        if (indeces[i] !== null) {
          permutation.push(i);
          indeces[i] = null;
          if (dive(d + 1) === false)
            return false;
          indeces[i] = permutation.pop()!;
        }
    return;
  }
  return dive(0);
}
