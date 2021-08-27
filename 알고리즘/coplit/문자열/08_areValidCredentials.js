// 문제
// 이름과 비밀번호를 입력받아 이름이 3글자보다 크고 비밀번호가 8글자 이상이면 true를 리턴해야 합니다.

// 입력
// 인자 1 : name
// string 타입의 알파벳 문자열
// name.length는 10 이하
// 인자 2 : password
// string 타입의 알파벳 문자열
// password.length는 20 이하
// 출력
// boolean 타입을 리턴해야 합니다.

function areValidCredentials(name, password) {
    if((name.length>3)&&(password.length>=8)){
      return true;
    }
    return false;
  }