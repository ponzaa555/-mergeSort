//test

import { merge } from "../src/merge";

describe('merge function' , () => {
  test(
    'merges 3 sorted arrays correctly' , () => {
      const collection_1 = [1, 3, 5, 7];
      const collection_2 = [9, 8, 6, 4, 2];
      const collection_3 = [0, 2, 4, 6, 8];

      const result = merge(collection_1, collection_2, collection_3);
      expect(result).toEqual([0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9]);
    }
  );
  test('handles empty arrays correctly' , () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([]);
  });

  test('handles single-element arrays correctly' , () => {
    const collection_1: number[] = [1];
    const collection_2: number[] = [5];
    const collection_3: number[] = [3];

    const result = merge(collection_1 ,collection_2 , collection_3);
    expect(result).toEqual([1,3,5])
  })
});
