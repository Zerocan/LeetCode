/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  const occ = new Set();
  let rk = -1, max = 0;
  const len = s.length;
  for (let i = 0; i < len; ++i) {
    if (i !== 0) {
      occ.delete(s[i - 1]);
    }
    while (rk + 1 < len && !occ.has(s[rk + 1])) {
      occ.add(s[rk + 1]);
      ++rk;
    }
    max = Math.max(max, rk - i + 1);
  }
  return max;
};
// @lc code=end

