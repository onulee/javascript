/**
 * 두수를 입력하여 첫번째 숫자부터 두번째 숫자까지의 합
 * 2,7 -> 2+3+4+5+6+7
 */
var input = Number(prompt("숫자를 입력하세요."));
var input2 = Number(prompt("숫자를 입력하세요."));
var sum = 0;
for(var i=input;i<=input2;i++){
	sum = sum + i; // sum += i;
}
document.write(input+"부터 "+input2+"까지 합 : "+sum,"<br>");

/*
var b=5;
b++;
a = b;

var c=5;
++c;
a = c;
*/
