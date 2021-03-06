## SPA (Single Page Application)

CSR과 SSR을 알아보기 전에 먼저 SPA가 무엇인지 알아보고 가자.

SPA는 한개의 페이지를 가진 어플리케이션을 말한다.

SPA 개발의 장점이 몇가지 있는데,

- 사용자 친화적이다
- 초기 렌더링 후 데이터만 받아오기 때문에 상대적으로 서버 요청이 적다
- Virtual DOM
- 프론트엔드와 백엔드의 분리로 개발업무 분업화 및 협업이 용이하다
- 개발이 상대적으로 효율적이다

이 정도의 장점이 있다.

기본적으로 SPA는 CSR (Client Side Renderring)이다.

하지만 무조건 SPA가 CSR인 것은 아니다.

## SSR (Server Side Rendering)

SSR은 Server Side Rendering의 약자로,

Rendering이 Server 쪽에서 일어난다.

웹 사이트에서 페이지를 이동할 때마다 서버에 새로운 페이지에 대한 요청을 보내고,

그 요청을 받으면 Server에서 Rendering을 마치고 Data가 결합된

HTML 파일을 내려준다.

페이지를 이동할 때마다 Server에 요청을 보내고, 페이지를 받아오기 때문에

그 과정 동안 페이지가 깜빡거리는 현상이 일어난다.

## CSR (Client Side Rendering)

CSR은 Client Side Rendering의 약자로,

Rendering이 Client 쪽에서 일어난다.

요청을 받은 Server가 Client에 HTML과 JS를 보내주면,

Client에서 Rendering을 하는 것이다.

최초 요청으로 HTML과 JS, CSS 등의 리소스를 받아와

최초로 Rendering 해주고, 그 후로는 Server에 Data만 요청하고, JS로 뷰를 컨트롤 한다.

최초 Rendering시 더 많은 리소스를 요청해 받아오기 때문에

SSR에 비해 Rendering 속도가 느리다.

하지만 최초 Rendering을 제외하고 다른 페이지로 이동할 때는

SSR보다 빠른 페이지 전환과 더 나은 UX를 제공한다.

## SSR과 CSR의 차이 및 장단점

![](https://velog.velcdn.com/images/richard/post/f809f524-bb1c-4f91-b09c-58da5dcea332/image.png)

1. SSR은 Server에서, CSR은 Client에서 Rendering 된다
2. 초기 요청 리소스가 많은 CSR이 SSR에 비해 최초 렌더링 속도가 느리다
3. SSR은 렌더링마다 Server에 요청을 보내기 때문에 이후 렌더링 속도가 CSR에 비해 느리다
4. 렌더링마다 Server에 요청을 보내기 때문에 SSR이 서버 자원 사용률이 많다

## SSR은 언제? CSR은 언제?

- SSR을 사용해야할 때

  - 네트워크 속도가 느릴때
    (각 페이지마다 나눠서 불러오기 때문)
  - SEO (Search Engine Optimization, 검색 엔진 최적화)가 필요한 경우
  - 최초 로딩 속도가 빠를 필요가 있는 서비스를 개발할 경우
  - 상호작용이 적은 서비스를 개발할 경우

- CSR을 사용해야할 때
  - 네트워크 속도가 빠를때
    (최초 리소스 요청시 많은 리소스를 불러와야 하기 때문에,
    네트워크 속도가 느릴 경우 사용자는 빈 페이지를 보고 있어야 해서 나쁜 UX를 제공)
  - SEO가 필요하지 않은 경우
  - 상호작용이 많은 서비스를 개발할 경우
