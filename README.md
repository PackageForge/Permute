# @packageforge/permute

Function to permute collections.
* `permuteCombination` Iterate over combinations of elements in multiple arrays.
* `permuteSample` Iterate over samples of an array in every combination.
* `permuteOrder` Iterate over every order of elements in an array.
* `permuteRange` Iterate over a numeric range and return an array of the range.


## `permuteCombination`
###### Iterate over combinations of elements in two or more arrays.
* Return `false` from the callback to exit the iteration.
```typescript
import { permuteCombination } from '@packageforge/permute';

permuteCombination(["Lear", "Fool"], [true, false], (name, state) => {
  console.log(name, state);
});
```
Output:
```
Lear, true
Lear, false
Fool, true
Fool, false
```

## `permuteSample`
###### Iterate over samples of an array in every combination.
* Return `false` from the callback to exit the iteration.
```typescript
import { permuteSample } from '@packageforge/permute';

permuteSample(["Lear", "Cordelia", "Goneril", "Regan", "Fool"], 2, names => {
  console.log(names.join(', '));
});
```
Output:
```
Lear, Cordelia
Lear, Goneril
Lear, Regan
Lear, Fool
Cordelia, Goneril
Cordelia, Regan
Cordelia, Fool
Goneril, Regan
Goneril, Fool
Regan, Fool
```

## `permuteOrder`
###### Iterate over every order of elements in an array.
* Return `false` from the callback to exit the iteration.
```typescript
import { permuteOrder } from '@packageforge/permute';

permuteOrder(["Cordelia", "Goneril", "Regan"], names => {
  console.log(names.join(', '));
});
```
Output:
```
Cordelia, Goneril, Regan
Cordelia, Regan, Goneril
Goneril, Cordelia, Regan
Goneril, Regan, Cordelia
Regan, Cordelia, Goneril
Regan, Goneril, Cordelia
```

## `permuteRange`
###### Iterate over a numeric range and return an array of the range.
* The callback parameter is optional.
* Return `false` from the callback to exit the iteration and truncate the returned range without the value (exclusive).
* Return `true` from the callback to exit the iteration and truncate the returned range with the value (inclusive).
```typescript
import { permuteRange } from '@packageforge/permute';

const rangeOne = permuteRange(3, index => {
  console.log(index);
});
console.log("rangeOne", rangeOne);

const rangeTwo = permuteRange(3, 3, index => {
  console.log(index);
});
console.log("rangeTwo", rangeTwo);
```
Output:
```
0
1
2
rangeOne, 0,1,2
3
4
5
rangeTwo, 3,4,5
```
