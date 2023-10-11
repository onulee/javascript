/**
 * 1부터 입력한 값까지의 합
 */
var input = Number(prompt("숫자를 입력하세요."));
var sum = 0;
for(var i=1;i<=input;i++){
	sum = sum + i; // sum += i;
}
document.write("1부터 "+input+"까지 합 : "+sum,"<br>");