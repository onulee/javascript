/**
 * 
 */
// 2개의 숫자를 입력받아 두수를 사칙연산 결과값을 출력하시오.
// prompt("숫자를 입력하세요.","0");
var input1 = Number(prompt("1번째 숫자를 입력하세요.","0"));
var input2 = Number(prompt("2번째 숫자를 입력하세요.","0"));
document.write("<h1> 1번째 숫자 : "+ input1 +"</h1>");
document.write("<h1> 2번째 숫자 : "+ input2 +"</h1>");
document.write("<h1> 더하기 : "+ (input1+input2) +"</h1>");
document.write("<h1> 빼기 : "+ (input1-input2) +"</h1>");
document.write("<h1> 곱하기 : "+ (input1*input2) +"</h1>");
document.write("<h1> 나누기 : "+ (input1/input2) +"</h1>");
