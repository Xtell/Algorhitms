
function binarySearch(nums, target) {
  let low = 0;
  let high = nums.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const midItem = nums[mid]
    if (target === midItem) {
      console.log(`Target item was found on ${mid} position`)
      return mid
    }
    else if (target < midItem) {
      high = mid - 1
    }
    else {
      low = mid + 1
    }
  }
  return -1
}

module.exports = {binarySearch}