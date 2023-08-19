// 変数numに0～15までのランダムな整数を代入する
let num = Math.floor(Math.random() * 16);

//確認用
//console.log(num);

//3の倍数の場合
if (0 != num) {
    if ((0 == num % 3) && (0 == num % 5)) {
        console.log("3と5の倍数です");
    } else if (0 == num % 5) {
        console.log("5の倍数です");
    } else if (0 == num % 3) {
        console.log("3の倍数です");
    } else {
        console.log(num);
    }
} else {
    console.log(num);
}