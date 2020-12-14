export function permuteSample<T>(collection: T[], sampleSize: number, callback: (permutation: T[]) => false | any): undefined | false {
  if (sampleSize === 0 || collection.length < sampleSize)
    return;
  const permutation: T[] = [];
  function dive(start: number, end: number, index: number) {
    if (index === sampleSize) {
      if (callback(permutation) === false)
        return false;
    } else
      while (start <= end) {
        permutation[index] = collection[start++];
        if (dive(start, end + 1, index + 1) === false)
          return false;
      }
      return;
    }
  return dive(0, collection.length - sampleSize, 0);
}
