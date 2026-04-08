const { bubbleSort, bubbleSortOptimized } = require('./bubble-sort');

describe('冒泡排序算法测试', () => {
  describe('bubbleSort - 基础版本', () => {
    test('基本排序功能', () => {
      expect(bubbleSort([64, 34, 25, 12, 22, 11, 90])).toEqual([11, 12, 22, 25, 34, 64, 90]);
    });

    test('空数组', () => {
      expect(bubbleSort([])).toEqual([]);
    });

    test('单元素数组', () => {
      expect(bubbleSort([1])).toEqual([1]);
    });

    test('已排序数组保持不变', () => {
      expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('逆序数组', () => {
      expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
    });

    test('包含重复元素', () => {
      expect(bubbleSort([2, 1, 2])).toEqual([1, 2, 2]);
    });

    test('包含负数', () => {
      expect(bubbleSort([-5, 3, -1, 0])).toEqual([-5, -1, 0, 3]);
    });

    test('不修改原数组', () => {
      const original = [3, 1, 2];
      bubbleSort(original);
      expect(original).toEqual([3, 1, 2]);
    });
  });

  describe('bubbleSortOptimized - 优化版本', () => {
    test('基本排序功能', () => {
      expect(bubbleSortOptimized([64, 34, 25, 12, 22, 11, 90])).toEqual([11, 12, 22, 25, 34, 64, 90]);
    });

    test('已排序数组提前终止', () => {
      expect(bubbleSortOptimized([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('包含重复元素', () => {
      expect(bubbleSortOptimized([2, 1, 2])).toEqual([1, 2, 2]);
    });

    test('包含负数', () => {
      expect(bubbleSortOptimized([-5, 3, -1, 0])).toEqual([-5, -1, 0, 3]);
    });

    test('不修改原数组', () => {
      const original = [3, 1, 2];
      bubbleSortOptimized(original);
      expect(original).toEqual([3, 1, 2]);
    });
  });
});
