// hmtl파일 내부에 이 app.js파일을 스캔하는 명령이 없기때문에 아직은 실행되지않는다. 
// hmtl파일 내부에 추가해주면 실행됨<script src="assets/scripts/app.js"></script>

// 계산기를 구현하기 위해선 변수와 상수를 정의해야한다 (모든 프로그래밍언어 동일)
// 변수란? 데이터 컨테이너/ 데이터 저장소
// js에서 변수 설정법은 let name = 'Max'; (let이란 js에서 여기에 새로운 변수가 있어! 라고 알려줄때만 필요. 같은 변수를 재정의할때는 let 불필요)
// 상수(고정된 숫자자)는 const totalUser = 15; (상수는 값을 변경할 수 없다. 변경하려하면 오류남)
// 즉, let으로 생성한 변수는 변할 수 있고 const로 생성한 변수는 변할 수 없다.
// 상수는 최대한 많이 사용하는게 좋다. 다른사람이 코드를 봐도 변하지 않는값에 대해 쉽게 알게되고 코드파악에 도움이된다.
 
// 네이밍은 숫자로 시작해서는안됨, 특수문자($, _ )는 네이밍 맨앞이나 뒤는 가능하지만 중간에는안된다. 다른특수문자는 그냥 안된다.
// js는 변수에 값을 할당하여 초기화할 필요는 없다.
// 문장의 마무리는 세미콜론(;)이 선택사항이다. let const a = 1; let const b = 2와 같이 한줄에 두개의 표현식이 들어가는 경우는 생략불가

// 상수 선언. 변경불가
const defaultResult = 0;

// 변수 선언. 상수를 변수에 할당 가능
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';

outputResult(currentResult, calculationDescription); 