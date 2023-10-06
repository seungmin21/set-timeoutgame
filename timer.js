// setTimeout을 이용해서 일정 시간이 지난후 console.log 동작
// 반대로 생각해서 1초 후 5라는 숫자가 출력
// 5초 후 1이라는 숫자 출력 후 6초 후 시간 종료까지
setTimeout(function() {
  console.log(5);
}, 1000);
setTimeout(function() {
  console.log(4);
}, 2000);
setTimeout(function() {
  console.log(3);
}, 3000);
setTimeout(function() {
  console.log(2);
}, 4000);
setTimeout(function() {
  console.log(1);
}, 5000);
setTimeout(function() {
  console.log("시간 종료");
}, 6000);