/*
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 要求时间复杂度为 O(n)
 * 
 * 示例:
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */
function testSign(s) {
    let arr = []
    for (let i = 0; i < s.length; i++){
        const c=s.charAt(i)
        if (i===0) {
            arr.push(c)
        }
        else if (c === arr[-1]) {
            arr.pop()
        }
        else(arr.push(c))
        console.log(arr)
    }
    console.log(arr.length?true:false)

}
testSign('#$$%%#')