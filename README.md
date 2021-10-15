# FE_toy_project

React를 이용해 토이프로젝트 진행, 백엔드는 나중에 만들 것
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
<br> <></> 의미
<br>redux-saga 알아보기