// 카운트라는 변수에 5를 대입
let count = 5

// timeoutId라는 상수에 setInterval 메서드를 도입
const timeoutId = setInterval(function() {
  // 콘솔 실행
  console.log(count)
  // 만약 카운트 증감 연산자가 1과 일치할 경우
  if(count-- === 1) {
    // clearInterval을 실행
    clearInterval(timeoutId)
  }
}, 1000)