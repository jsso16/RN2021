# RN2021 - 201930231 전소진
React Native 2021

## 05월 14일
> 스타일링 소개 2
1. border 속성 지정하기
- border 속성은 크게 4가지가 있다.
```
※ 테두리 속성 4가지
- borderColor
- borderRadius
- borderStyle
- borderWidth 
→ 각 속성별 특징 및 예제는 하단의 5월 7일 readme.md 내용 참조
```
- 이 중 borderColor,borderStyle,borderWidth 속성은 속성에 방향을 추가하여 세부적인 속성을 만든다.
- 방향은 top부터 시계 방향으로 right, bottom, left순으로 지정한다.

2. borderRadius를 이용해서 모양 만들기
- borderRadius 속성은 사각형의 모서리에 대한 속성으로 방향이 top부터 시계 방향인 right, bottom, left순으로 지정된다.
- 속성 사용시에는 borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius, borderTopLeftRadius로 지정한다.
- 아래와 같이 borderRadius 속성으로 한번에 지정할 수도 있다. 
```jsx
borderRadius: [TopRight], [BottomRight], [BottomLeft], [TopLeft]
```
- Text 컴포넌트의 bounding box가 원과 겹치는 문제의 경우,  centeredText 스타일에 backgroundColor를 transparent로 지정하면 해결이 가능하다.

3. 이미지 컴포넌트 사용하기
- 이미지를 사용하기 위해서는 Image 컴포넌트를 추가로 import한다.
```jsx
import { Image, StyleSheet, View} from 'react-native'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.cardImage} 
          source={require('./user.png')} />
      </View>
    )
  }
}
```

4. 컴포넌트의 위치를 margin과 padding으로 지정하기
- 명시적으로 지정할 수도 있지만, 반응형에는 적합하지 않다.
- 각 컴포넌트의 위치는 다른 컴포넌트의 위치에 상대적으로 지정하는 것이 바람직하다.
- margin, padding, border, component 영역의 상호연관성은 아래 그림과 같다.
![상호연관성](Uploading img.png…)
<img width="193" alt="img" src="https://user-images.githubusercontent.com/62285642/118591133-a394e900-b7de-11eb-9932-99b96e5eed18.png">

- margin 속성 이용하기
```
※ margin 속성 특징
- margin을 이용해서 컴포넌트 사이의 상대적 위치를 정의한다.
- margin 속성에는 margin, marginTop, marginRight, marginBottom, marginLeft가 있다.
- 이전에는 iOS와 Android의 스타일에 차이가 있었으나 현재는 동일하게 구현이 가능하다.
```

- padding 속성 이용하기
```
※ padding 속성 특징
- padding을 이용해서 컴포넌트 테두리로부터 컴포넌트의 상대적 위치를 정의한다.
- padding 속성에는 padding, paddingLeft, paddingRight, paddingTop, paddingBottom 속성이 있다.
- 컴포넌트와 부모 컴포넌트 사이의 공간을 지정하는 margin과 달리, padding은 컴포넌트의 테두리로부터 자식 엘리먼트에 적용된다.
```

5. position을 이용해 컴포넌트 배치하기
- position 속성 이용하기
```
※ position 속성 특징
- 구현은 css와 유사하지만, css만큼 다양한 옵션을 지원하지 않는다.
- 모든 요소는 다른 요소들에 상대적으로 배치된다.
- position이 absolute로 지정되면, 해당 요소의 위치는 부모 요소의 위치를 기준으로 배치된다.
- position 속성에는 relative(상대값:기본값)과 absolute(절대값)가 있다.
- css의 static, fixed는 지원하지 않는다.
```

6. App.js의 기본 포맷
- 가끔 알 수 없는 문제로 인해 앱이 제대로 실행되지 않을 경우, 아래의 기본 포맷에 필요한 부분만 복사하여 사용하면 오류가 발생하지 않는다.
- import는 필요에 따라서 추가, 삭제한다.
```jsx
import React, { Component } from 'react' 
import { Text } from 'react-native'

class App extends Component {
  render() {
    return <Text>test</Text>
  }
}

export default App
```

## 05월 07일
> 중간고사(MidtermApp) 코드 리뷰
- 코드에서 주목해야 할 부분 
1. class 형태의 component의 선언 방법
2. 함수 형태의 component의 선언 방법
3. state 설정 및 초기화 방법
4. props의 개념 및 전달 경로
5. state에 초기화 된 값을 props로 전달하는 방법
6. 일반 변수로 초기화 된 값을 props로 전달하는 방법
7. 구조 분해(비구조화) 할당(Destructuring Assignment)을 통한 변수명 재할당
8. 필요한 component만 import하기
9. props를 전달받아 사용하기
10. index.js에 App 지정하기
```jsx
※ 시작 컴포넌트 지정 방법
import React from 'react'
import {AppRegistry} from 'react-native'
import Midterm from './app/Midterm'
import {name as MyApp} from './app.json'
AppRegistry.registerComponent(MyApp, () => Midterm)
```

- 구조 분해 할당이란?<br>
"구조 분해 할당" 구문은 배열이나 객체의 속성을 해체하여, 그 값을 개별 변수에 담을 수 있게하는 JavaScript 표현식이다.

객체에서 변수를 재할당하는 방법
```jsx
const foobar = {
  foo: 1000,
  bar: 500
}
```

ex) foobar에 있는 foo property를 woo로 바꾸고 싶을 때
```jsx
1. 구조 분해 할당 없이 변수명 재할당
const woo = foobar.foo

2. 구조 분해 할당을 이용하는 방법
const [foo:woo] = foobar 여러 개도 가능
console.log(woo)  // 1000
console.log(foobar)  // let basket = [foo: 1000, bar: 500]

3. React에서 자주 사용되는 구조 분해 할당
this.state = {
  foo: 100,
  bar: 200
}
const [foo, bar] = this.state;
```
참고 사이트 
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

#### 배열 구조 분해
1. 기본 변수 할당
```jsx
var foo = ["one", "two", "three"];

var [one, two, three] = foo;
console.log(one);  // "one"
console.log(two);  // "two"
console.log(three);  // "three"
```
2. 선언에서 분리한 할당
3. 기본값
4. 변수값 교환하기
5. 함수가 반환한 배열 분석
6. 일부 반환값 무시하기
7. 변수의 배열의 나머지를 할당하기

#### 객체 구조 분해
1. 기본 할당
```jsx
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p);  // 42
console.log(q);  // true
```
2. 선언 없는 할당
3. 새로운 변수 이름으로 할당하기

- console 연습은 chrome으로 하기!

> View 컴포넌트에 스타일 적용하기
1. background color(배경색) 설정하기

※ 지원되는 색상 형식
| 지원 색상 형식                                    | 예시                       |
|---------------------------------------------------|----------------------------|
| #rgb                                              | '#06f'                     |
| #rgba                                             | '#06fc'                    |
| #rrggbb                                           | '#0066ff'                  |
| #rrggbbaa                                         | '#ff00ff00'                |
| rgb(number, number, number)                       | 'rgb(0, 102, 255)'         |
| rgb(number, number, number, alpha)                | 'rgba(0, 102, 255, .5)'    |
| hsl(hue, saturation, lightness)                   | 'hsl(216, 100%, 50%)'      |
| hsla(hue, saturation, lightness, alpha)           | 'hsla(216, 100%, 50%, .5)' |
| 투명 배경                                         | 'transparent'              |
| CSS3에서 이름이 지정된 색상 (검정, 빨강, 파랑 등) | 'dodgerblue'               |

```
※ 색상 형식별 의미
- rgb: 각각 빨강, 녹색 및 파랑을 나타내며, 0–255(또는 16 진수 00–ff)의 눈금을 사용하여 빨강, 녹색 및 파랑에 대한 값을 지정할 수 있다. 이때 숫자가 클수록 각 색상이 더 많이 나타난다.
- alpha: 불투명도와 유사한 기능이다.(0은 투명, 1은 단색)
- hue: 색상을 의미하는 말로 360도 색상환에서 1도를 나타내며 0은 빨간색, 120은 녹색, 240은 파란색이다. 채도는 회색 음영 0%에서 풀 컬러 100 %까지 색상의 강도를 의미한다.
- lightness: 밝기를 의미하는 말로 0%에서 100% 사이의 수로 표시하며, 0%는 어둡고(검은색에 가까움) 100%는 밝다(흰색에 가까움).
```

2. border(테두리) 속성 설정하기
```
※ 테두리 속성별 역할
- borderColor: 모든 테두리의 색상을 설정해준다.
- borderRadius: 모든 테두리 경계의 꼭짓점을 둥글게 만들어준다.
- borderStyle: 모든 테두리의 스타일을 지정해준다.
- borderWidth: 모든 테두리의 너비를 지정해준다. 
```
- 다양한 테두리 예제 코드
```jsx
import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component<{}> {
    render() {
      return (
        <View style={styles.container}>
           <Example style={{borderWidth: 1}}>    
               <Text>borderWidth: 1</Text>
           </Example>
           <Example style={{borderWidth: 3, borderLeftWidth: 0}}>    
               <Text>borderWidth: 3, borderLeftWidth: 0</Text>
           </Example>
           <Example style={{borderWidth: 3, borderLeftColor: 'red'}}>    
               <Text>borderWidth: 3, borderLeftColor: 'red'</Text>
           </Example>
           <Example style={{borderLeftWidth: 3}}>    
               <Text>borderLeftWidth: 3</Text>
           </Example>
           <Example style={{borderWidth: 1, borderStyle: 'dashed'}}>    
               <Text>borderWidth: 1, borderStyle: 'dashed'</Text>
           </Example>
         </View>
      );
    }
}

const Example = (props) => (    
    <View style={[styles.example,props.style]}>
        {props.children}
    </View>
);

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    example: {
        marginBottom: 15
    }
});
```

## 04월 30일
> 스타일링 소개
1. React Native에서 스타일 적용하고 관리하기
- 스타일을 적용하는 방법은 3가지가 있다.
```
※ 앱에서 스타일 적용하기
- 인라인 스타일
- StyleSheet에 정의된 스타일 참조하기
- 스타일 파일 분리하기
```
- 중복된 property가 있을 때는 마지막으로 전달된 스타일이 이전 스타일을 재정의한다.

2. 스타일 구성하기
- React Native에서는 컴포넌트 단위로 스타일이 적용된다.
- 스타일의 적용 방법은 2가지가 있다.
```
※ 컴포넌트 내에서 스타일 적용하기
- 컴포넌트 내에 스타일시트 선언하기
→ 위 방법은 장점은 하나의 파일에 컴포넌트와 컴포넌트가 사용할 스타일을 완전히 캡슐화할 수 있다는 것이다.
- 컴포넌트 파일과는 별도의 스타일시트 선언하기
```
- 확장자는 css가 아닌 js이다.

3. 스타일시트 분리하기
- 내부 컴포넌트인 Stylesheet 컴포넌트를 import하고, 일반 컨포넌트와 마찬가지로 외부로 사용할 수 있도록 export해 준다.
```jsx
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({    
  container: {    
    marginTop: 150,
    backgroundColor: '#ededed',
    flexWrap: 'wrap'
  }
})

export {styles, buttons};
```
- 외부 스타일을 컴포넌트로 가져와 사용하는 방법 역시 import를 해주면 된다.
```jsx
import {styles, buttons} from './styles'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={buttons.primary}>
          <Text>Sample Text</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
```
4. toggle 앱 코드의 주요부분
- 반복적으로 사용하는 스타일은 spread 연산자로 불러온다.
```
※ spread 연산자 종류
[...] :  배열의 요소를 나타내는 데 사용되는 것으로 ES6(ES2015)에서 도입
{...} :객체의 속성을 나타내는 데 사용되는 것으로 ES6(ES2018)에서 도입 
```
```jsx
※ spread 연산자 예제
let num = [1, 2, 3]
let str = [a, b, c]
let merge = [...num, ...str]

merge  // [1, 2, 3, 'a', 'b', 'c']
```
- 표시할 테마에 적합한 스타일을 가져오기 위해 getStyleSheet 함수를 사용한다.
- backgroundColor를 쉽게 사용하기 위해서 StyleSheet의 flatten을 사용해서 StyleSheet객체를 JavaScript객체로 반환한다.
- flatten()메소드는 스타일 객체를 병합하여 하나의 배열로 만드는데 사용된다.

5. binding의 이해
- 객체를 외부에서 사용할 때 binding을 해서 사용해야 한다.
- React에서는 constructor에서 binding을 하는 것이 일반적이다.
```jsx
let foo = {
  props: 'Hello',
  bar: function() {
    console.log(this.props);
  }
};
foo.bar();  // 결과: "Hello"

let fooBar = foo.bar.bind(foo);
fooBar();
```

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