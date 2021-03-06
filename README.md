# FE_toy_project

<br> 전체 구조

![전체구조](https://user-images.githubusercontent.com/59908043/138862656-00f2de94-a857-434c-a802-ecd933eb8cbb.PNG)

<br>page

React를 이용해 토이프로젝트 진행
<br> 프로젝트하면서 궁금한 점 정리
<br>styled의 의미: JS 안에 CSS를 작성하는 것
<br>&:hover의 의미: 마우스 올려져 있을 때
<br>...props 의미: 객체의 모든 값을 복사
<br>redux: 계층적인 컴포넌트의 상태들을 업데이트하려면 많이 거쳐가므로 글로벌한 저장소를 만들어서 거기에서 관리
<br> immer: 불변성을 유지할때 복잡한 코드가 요구되는데 immer가 간단하게 불변성을 유지한 객체를 생성(produce 사용)
<br> react-redux의 Provider: 리듀서 store를 손쉽게 연동할 수 있도록 도와주는 컴포넌트
<br> useSelector: 리덕스의 state를 조회 가능
<br> useEffect: 리액트 컴포넌트가 랜더링될 때마다 특정 작업을 수행하도록 만듬
<br> useDispatch: 생성한 action을 발생시킬 수 있다.
<br> withRouter: 라우터에 의해서 호출된 컴포넌트가 아니여도 match,location,history 객체에 접근할 수 있도록 해줌, history.push('/') 는 홈으로 돌아가는 뜻
<br>페이지 이동방법에는 withRouter또는 Link 컴포넌트 사용하는 방법이 있는데 Link 컴포넌트 사용하는 것을 권장
<br>yield: 제너레이터 함수(function*) 를 중지하거나 재개하는데 사용 
<br>redux-saga: 리덕스의 미들웨어, 리덕스가 액션을 수행하면 redux-saga에서 디스패치하여 redux의 액션을 가로챈 뒤, 액션의 역할을 수행 하고 다시 액션을 발행하여 데이터를 저장하거나 다른 이벤트를 수행
<br> takeLatest: 기존에 진행 중이던 작업이 있다면 취소처리하고 가장 마지막으로 실행된 작업만 수행(두번 디스패치해도 마지막 디스패치만 실행)
<br> useRef: DOM 선택 용도 또는 컴포넌트 안에서 조회 및 수정 가능한 변수를 관리하는 용도(변수가 업데이트 된다고 해서 컴포넌트가 리렌더링 되지 않음)
<br>rem: HTML 루트 요소의 폰트 사이즈가 계산의 기반값
<br>useCallback: 특정 함수를 새로 만들지 않고 재사용하여 불필요한 렌더링을 방지
<br>React.memo: 특정 값이 바뀌었을 때만 연산을 실행, 원하는 값이 바뀌지 않았다면 이전 결과를 재사용
<br>{children}은 해당 컴포넌트를 사용하게 될때 그 컴포넌트를 부르는 태그안의 내용이 children에 삽입
<br>axios: HTTP 요청을 Promisse기반으로 처리
<br>제너레이터 함수: 함수를 특정구간에 멈춰 놓을 수 있고 다시 돌아가게 할 수도 있다.
<br>sanitize-html: html을 제거하는 것 뿐 아니라 특정 HTML만 허용하는 기능도 있다.
<br>모달: 페이지 내용 위에 새로운 레이어로 창을 보여주는 것
