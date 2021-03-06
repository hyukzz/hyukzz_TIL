## useState

클래스형 컴포넌트에서는 this.state의 값을 this.setState를 이용해 state를 변경해 줬지만,

함수형 컴포넌트에서는 useState라는 Hook을 이용해 상태를 관리한다.

예제를 보면서 살펴보자.

```jsx
import React, { useState } from "react";

const [name, setName] = useState("namhun");

console.log(name); // "namhun"

setName("kim");

console.log(name); // "kim"
```

위와 같이 useState를 사용하게 되는데,

name은 state 값,

setName은 state를 변경하는 함수,

useState의 인자는 state의 초기값이다.

state를 사용하고 싶으면 name을 사용하고,

이 state를 변경하고 싶다면 setName(원하는 값)을 사용해 변경한다.

react에서, state가 변경되면 리렌더링 된다는 것을 배웠었다.

그렇다면, set 함수가 여러번 된다면 어떻게 될까?

```jsx
setName("kim");
setAge(20);
setSex("male");
setEmail("skagns211@gmail.com");
```

위 예제와 같이 4번의 set 함수가 실행됐으니, 4번의 리렌더링이 일어날까?

아니다, 렌더링은 1번만 일어난다. 고로, set 함수는 비동기이다.

## useEffect

useEffect 함수는 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook이다.

즉, 컴포넌트가 mount, unmount, update 됐을 때 특정 작업을 처리할 수 있다.

`useEffect( func, deps )`

수행할 작업이 첫번째 인자 func로 들어가고, 조건이 deps에 들어간다.

```jsx
import React, { useEffect }, "react";

useEffect(() => {
  console.log("최초 렌더링 시에만 출력");
}, []);
```

위 예제와 같이 deps에 빈배열이 들어가면, 최초 렌더링 시에만 함수 안의 작업이 처리된다.

```jsx
useEffect(() => {
	console.log("렌더링 될 때마다 출력");
});
```

위 예제와 같이 deps를 생략하면, 렌더링 될 때마다 작업이 처리된다.

```jsx
useEffect(() => {
	console.log("업데이트 될 때 출력");
}, [name]);
```

위 예제와 같이 배열에 검사할 값을 넣어주면, 해당 값이 변할 때마다 작업이 처리된다.

(최초 렌더링 시에도 실행됨)
