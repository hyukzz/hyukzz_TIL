## 조건

- 증가 속도가 느려지는 효과를 숫자에 넣어야 합니다.
- 각각의 숫자 모두 2초동안 증가하고, 동시에끝나야합니다.
- 각 숫자는 0부터 각각의 지정된 숫자까지 count됩니다.

### 1. 증가 속도 느려지는 효과
```
  function easeOutQuartEffect(x) {
    return 1 - Math.pow(1 - x, 4)
  }
```
Easing 함수는 시간 흐름에 따른 매개변수의 변화율을 지정합니다.

https://easings.net/ko#easeOutQuint

### 2. 각각의 숫자 모두 2초동안 증가

setInterval을 통해 숫자를 count하고 setTimeout으로 2초가 지나면 clearInterval로 강제로 종료되게 했습니다.

### 3. 각각의 숫자가 동시에 끝나야함

변수를 하나 새로 할당해서 countup이 되는 부분에 Easing 함수를 사용했을 때 값이 약 1에 수렴하는 값을 만들었다. 

이렇게 만든 값은 각각의 숫자가 약 1이라는 동일한 시간에 끝날 수 있게 도와줍니다.

### 4. 각 숫자는 0부터 각각의 지정된 숫자까지 count됨

위에서 만든 동시에 끝나고, 마지막에 느려지는 효과를 주는 변수를 각각 끝나기 원하는 숫자에 곱해주면서 기능을 완성시킬 수 있습니다. 하지만 이렇게 하게되면 약 1에 수렴하는 값이기 때문에 0.99xx와 같은 값이 곱해집니다. 이를 int값으로 변환시킬 수 있는 Math.ceil 메서드를 통해 화면상에 int값으로 랜더링되게 합니다.




