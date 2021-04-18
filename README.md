# RN2021 - 201930231 전소진
React Native 2021

## 04월 16일
1. Todo 컴포넌트 만들기
- TodoList는 todo 목록을 랜더링하고, 각각의 todo에 대해서는 Todo 컴포넌트를 사용하여 2개의 컴포넌트를 만들어 랜더링을 해준다.

2. TodoList 컴포넌트 만들기
- todos 배열을 매핑해서 각각의 todo에 대해 새로운 Todo 컴포넌트를 만들고, 각 Todo 컴 포넌트에 속성으로 todo 객체를 전달한다.

3. TodoList 컴포넌트 가져오기

4. toggleComplete와 deleteTodo 메소드 추가하기
- toggleComplete는 todo가 완료되었는지를 전달해주고, deleteTodo는 todo를 제거한다.

5. TodoButton.js파일 작성하기

6. toggleComplete와 deleteTodo를 TodoList에 props로 전달하기

7. Todo.js를 갱신해 TodoButton과 기능을 적용하기
- TodoButton.js파일에 정의한 onPress로 deleteTodo, toggleComplete 메소드를 호출하여 전달한다.

8. setType 메소드 추가하기
- setType 메소드는 인수로 type을 가지며, state인 type을 갱신해준다.

9. TabBar 컴포넌트 만들기
- TabBar 컴포넌트는 setType과 type을 props로 갖는다.

10. TabBarItem 컴포넌트 만들기 
- TabBarItem 컴포넌트는 props가 title, type, setType 3가지이다.

11. TabBar 컴포넌트 구현하기
- state에서 type을 구조분해할당하고, 이것을 TabBar와 TodoList 컴포넌트에 전달한다.
- todo들을 필터링할 때 이 type 변수를 사용한다.

12. TodoList 컴포넌트 갱신하기
- todos 변수를 getVisibleTodos가 반환한 값으로 지정한다.

## 04월 09일
> 처음 만드는 React Native 앱 - todo 앱 만들기
1. todo 앱 레이아웃 작성하기
- 앱의 구조를 판단하기 위해 view를 구성해본다.

2. 앱의 동작 방법 알아보기

3. todo 앱 코드 작성하기
- 프로젝트를 생성하고, index.js의 기본 코드를 주석처리한다.

4. index.js의 코드의 주요부분 분석하기
- 현재 root에 있는 App.js를 사용하지 않고, app이라는 폴더를 만들고 그곳에 새로 App.js를 생성할 예정이므로 import 경로를 바꿔준다.

5. App.js 코드 작성하기

6. .app/App.js의 코드 주요부분 분석하기
- 이곳에서는 Scroll View 컴포넌트를 사용하고 있는데, 이 컴포넌트는 스크롤이 가능한 View를 만들어주는 컴포넌트이다.
- props인 keyboardShouldPersistTaps가 'always'로 지정되어 있는 것은, 키보드가 열려있을 경우 이를 닫고 난 후에 onPress 이벤트를 처리하게 한다.
- container를 보면 flex:1을 확인할 수 있는데, 이 element는 상위 컨테이너 영역 전체를 채워주게 하므로 ScrollView 컴포넌트도 style flex:1을 적용하기 때문에 상위의 View 컴포넌트 영역을 꽉 채우게 된다.

7. 초기 state의 설정
- 초기화 설정은 render() 함수 위에 하면 된다.
- inputValue는 TextInput의 현재 상태를 저장한다.
- Type은 현재 보고 있는 todo의 타입, 즉 All, Current, Active인지를 저장한다.

8. Heading 컴포넌트 만들기

9. Heading 컴포넌트를 App으로 가져와 사용하기

10. TextInput 컴포넌트 만들기

11. 개발자 메뉴 열기
- 개발자 메뉴에서 console의 내용을 확인한다.

12. inputChange 메서드 작성하기
- inputChange 메서드는 인수가 하나로 TextInput의 값을 전달한다.
- inputChange 메서드는 TextInput에서 반환된 값으로 state인 inputValue를 갱신한다.

13. inputChange와 inputValue를 TextInput에 추가하기
- TextInput의 값이 변경되면 inputChange 메서드가 호출되고, 이 값은 부모 컴포넌트로 전달되어 inputValue의 state를 지정하게 된다.
- onChangeText 메서드는 TextInput 컴포넌트의 값이 변경될 때마다 이 메서드가 호출되고 TextInput의 값이 전달된다.

14. submitTodo 메서드 추가하기
- inputValue의 값이 state로 지정되어 있으므로 버튼에 submitTodo 메서드를 바인딩하여 todo 목록에 항목을 추가해준다.

15. todoIndex 변수 생성하기

16. Button 컴포넌트 만들고 가져오기
- HTML의 button과 유사하며, TouchableHighlight를 사용하면 뷰들을 감쌀 수 있으며, 이들 view가 터치 이벤트에 적절히 대응하게 해준다.


## 04월 02일
3. props와 state의 구조분해할당
- 같은 코드가 반복되면 DRY(Don’t Repeat Yourself)원칙에 위배되므로 이를 피하기 위해 사용하는 방법이다.
- 이는 코드가 복잡해져도 코드의 가독성을 좋게 할 수 있다.

```
※ 구조분해할당이란?
- 자바스크립트의 새로운 특징으로 ES2015 스팩에 추가되었으며, React Native 앱에서도 사용할 수 있다.
- 객체에서 속성들을 가져와서 앱에서 변수로 사용하는 것이다.
```

4. state가 없는 컴포넌트에서의 props
- 재사용해야하는 컴포넌트를 만들 때 유용하다.

5. 배열과 개체를 props로 전달하기
- 다른 데이터 타입에서도 props의 처리는 동일하게 작동한다.

> React 컴포넌트 스펙
- 컴포넌트를 만들 때 몇가지 스펙과 생명주기를 연결해서, 컴포넌트가 수행하는 동작을 제어할 수 있다.
- 컴포넌트의 스펙은 기본적으로 컴포넌트의 생명주기동안 일어나는 여러 상황에 대해 컴포넌트가 대응하는 방식을 제공한다.

```
※ 컴포넌트의 스펙
- render 메서드
- constructor 메서드
- statics 객체(클래스에서 사용할 수 있는 메서드를 정의할 때 사용)
```

1. render 메서드로 UI 만들기
- 컴포넌트가 생성될 때 필수적으로 필요한 유일한 메서드이다.
- 하나의 자식요소나 null 혹은 false만을 반환한다.
- 자식요소는 View나 Text처럼 이미 선언된 컴포넌트이거나, 개발자가 만들어 파일로부터 가져온 사용자 정의 컴포넌트이다.
- 다른 곳에서 정의한 컴포넌트를 반환할 수도 있다.
- 조건문을 확인하고, 로직을 수행하고, 값에 따라 다른 컴포넌트를 반환할 수 있다.

2. 속성 초기화와 생성자 사용하기
- state는 생성자에서 만들거나, 속성 초기화를 사용해서 만들수도 있다.
- 생성자에서 다른 속성들도 this.property의 형식으로 설정할 수 있다.
- 생성자를 이용할 때에는 반드시 super키워드를 this키워드 전에 사용해야한다.
- 생성자 안에 있는 특정 속성에 접근해야 한다면 생성자와 super호출 시에 인수(파라미터)로 전달해야 한다.
- props를 이용해서 state를 지정하는 것은 좋은 방법이 아니다.

> React 생명주기 메서드
- 다양한 메서드들이 컴포넌트 생명주기동안 특정 시점에 실행되는데 이를 생명주기 메서드라고 한다.
- 생명주기는 생성(Mount), 갱신, 파기(Unmount)의 세가지로 나뉜다.

1. **static getDerivedStateFronProps 메서드**
- static클래스 메서드로 컴포넌트가 생성될 때와 컴포넌트가 새 props를 전달받을 때 모두 호출된다.
- 새로운 props와 가장 최근의 state를 인수로 전달받아서 하나의 객체를 반환한다.
- 객체의 데이터는 컴포넌트의 state로 갱신된다.

2. **componentDidMount 메서드**
- 컴포넌트가 로딩되고나서 바로 한번만 호출된다.
- Ajax호출로 가져온 데이터를 처리한다.
- 지정된 실행 후에 실행되는 setTimeout을 처리하거나, 다른 자바스크립트 프레임워크들과 통합하기에 적절한 위치이다.

3. **shouldComponentUpdate 메서드**
- Boolean을 반환하며, 컴포넌트의 랜더링할 것인지를 결정할 수 있다.

4. **componentWillUpdate 메서드**
- 컴포넌트가 갱신되면서 재랜더링된 후에 바로 호출된다.
- 이전 state와 props를 인수로 갖는다.

5. **componentWillUnmount 메서드**
- 앱에서 컴포넌트가 파기되기 전에 호출된다.
- 설정된 값을 정리하고, 리스너를 삭제하고, 타이머를 제거하도록 지정할 수 있다.


## 03월 26일
> state를 사용해 컴포넌트 데이터 다루기
- 데이터를 만들고 다루는 방식중 하나이다.
- state는 컴포넌트가 생성될 때 선언된다.
- state는 단순한 구조의 자바스크립트 객체일 뿐이다.
- setState함수 호출을 통해 컴포넌트 내에서 갱신할 수 있다.

1. 컴포넌트의 상태 제대로 조작하기
- state는 컴포넌트가 다루는 값들의 집합체이다.
- 컴포넌트가 setState함수를 이용해서 state를 변경하게 되면, 리액트는 컴포넌트를 다시 랜더링하게 된다.
- 부모 컴포넌트의 state를 props로 받아서 사용하게 되면,부모 컴포넌트의 state가 변경될 때 자식 컴포넌트도 다시 렌더링된다.
- 컴포넌트의 state는 컴포넌트로 하여금 동적이면서, 인터렉티브하게 해준다.
- state는 props와 달리 변경 가능하다.

```
※ 초기 state 지정하기
- 컴포넌트가 생성될 때 생성자 혹은 속성 초기화를 이용해서 초기화한다.
- 초기화된 state는 컴포넌트 내에서 this.state.를 통해서 사용할 수 있다.
```

2. state 갱신하기
- state는 this.setState()함수의 호출을 통해서 갱신된다.
- state를 갱신하려면 반드시 setState()메소드를 이용해야한다.

> props를 사용해 컴포넌트 데이터 다루기
- 데이터를 다루는 또 다른 방식이다.
- 컴포넌트가 생성될 때 매개변수로 props가 전달된다.
- state와는 다르게 props는 컴포넌트 내에서 갱신되지 않는다.
- props(properties)는 부모 컴포넌트로부터 전달된 속성값이거나, 컴포넌트가 상속받은 값이다.
- 컴포넌트가 선언될 때는 고정된 값이나 동적인 값일수 있지만, 상속되고 나면 props는 변경이 불가능하다.

※ props와 state의 공통점과 차이점 한눈에 알아보기
| props                         | state                       |
|-------------------------------|-----------------------------|
| 외부 데이터                   | 내부 데이터                 |
| 변경 불가능                   | 변경 가능                   |
| 부모로부터 상속               | 컴포넌트에서 생성           |
| 부모 컴포넌트가 변경          | 컴포넌트에서만 갱신         |
| props로 전달받을 수 있음      | props로 전달받을 수 있음    |
| 컴포넌트 내부에서 변경 불가능 | 컴포넌트 내부에서 변경 가능 |

1. 정적 props
- props로 전달받은 값은 자식 컴포넌트에서 this.props로 사용할 수 있다.
- 중괄호와 문자열 값을 사용하여, 변수를 다룰 때처럼 리터럴을 전달할 수도 있다.

2. 동적 props
- 동적 props는 외부에서 변경하는 속성이다.
- let변수를 통해 변환하면 된다.

```
※ 변수의 종류와 특징
- var : 변수 재선언 가능
- let : 변수 재선언 불가능 / 변수 재할당 가능
- const: 변수 재선언, 재할당 불가능
```