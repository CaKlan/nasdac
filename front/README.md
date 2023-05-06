# 프로젝트 규칙

# 폴더 구조
```
src
 ├ components/   <!-- 재사용 가능한 모듈 (ex Header, Footer) -->
    └ Header/
        ├ index.tsx
        └ styles.css
 ├ pages/        <!-- 각각 독립된 페이지 (ex Home, Login) -->
    └ Home/
        ├ index.tsx
        └ styles.css
 ├ services/     <!-- 데이터 베이스 등 외부 서비스 연결 (ex database )-->
 ├ App.css       
 ├ App.tsx       <!-- 라우터, 네비게이션 설정 -->
 ├ index.css
 └ index.tsx     <!-- 건드릴 필요 X -->
```

# 명명 규칙
함수형 컴포넌트
ex) 
```
// Header/index.tsx

import "./styles.css";

// 컴포넌트 이름과 동일한 className 지정 함수 및 className 이름은 PascalCase, 맨 앞글자 대문자

/**
 * <함수 설명>
 *
*/
function Header(props : IHeader) { // 인터페이스는 I<이름>

    <!-- 내부 함수는 camelCase -->
    function getComponent(){ 
        console.log("getComponent");
    }

    return (
        <div className="Header">
            <div className="sub_class"> <!-- 하위 클래스 이름은 snake_case -->

            </div>
            ...
        </div>
    );
}

in Header/styles.css

.Header {
    ...
}

//css 같은 이름 충돌을 피하기 위해 앞에 .Header 붙이기
.Header .sub_class {
    ...
}
```