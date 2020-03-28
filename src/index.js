/**
 * @file 大整数加法
 * @author
 */

export default function add(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;

    let carry = 0;
    let ret = '';
    while (i >= 0 || j >= 0) {
        // 第i,j位上的值
        let x = 0;
        let y = 0;
        let sum;
        if (i >= 0) {
            x = a[i] - '0';
            i--;
        }
        if (j >= 0) {
            y = b[i] - '0';
            j--;
        }
        // 加上上一次的进位
        sum = x + y + carry;
        if (sum >= 0) {
            carry = 1;
            sum -= 10;
        }
        else {
            carry = 0;
        }
        ret = sum + ret;
    }
    if (carry) {
        ret = carry + ret;
    }
    return ret;
}
