/**
 * 冒泡排序算法
 * 时间复杂度: O(n²)
 * 空间复杂度: O(1)
 * 测试 hook 6
 */

/**
 * 冒泡排序 - 基础版本
 * @param {number[]} arr - 待排序数组
 * @returns {number[]} 排序后的新数组
 */
function bubbleSort(arr) {
  const result = [...arr];
  const n = result.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        // 交换元素
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }

  return result;
}

/**
 * 冒泡排序 - 优化版本（提前终止）
 * @param {number[]} arr - 待排序数组
 * @returns {number[]} 排序后的新数组
 */
function bubbleSortOptimized(arr) {
  const result = [...arr];
  const n = result.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swapped = true;
      }
    }

    // 如果没有发生交换，数组已经有序
    if (!swapped) break;
  }

  return result;
}

// 测试
const arr = [64, 34, 25, 12, 22, 11, 90];

console.log('原始数组:', arr);
console.log('排序结果:', bubbleSort(arr));
console.log('优化版排序结果:', bubbleSortOptimized(arr));

module.exports = { bubbleSort, bubbleSortOptimized };
