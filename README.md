# DarkMode 제작하기

## Prettier 설정하기
root폴더에 `.prettierrc`파일을 생성한다.
```
{
    "arrowParens": "always",
    "semi": true,
    "singleQuote": true,
    "useTabs": false,
    "trailingComma": "all",
    "tabWidth": 2,
    "printWidth": 80
}
```

## Json파일을 활용하여 import 설정하기
root폴더에 `jsconfig.json`파일을 생성한다.
```
{
    "compilerOptions": {
        "target": "es6",
        "baseUrl": "src"
    },
    "include": ["src"]
}
```

## src폴더 내에 `index.css`에서 폰트 설정 및 여백 설정을 한다.
```
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');

body {
  margin: 0;
  padding: 0;
  font-family: 'Black Han Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
```

## src폴더 내에 `theme.js`파일을 만든다.
```
export const lightTheme = {
    bgColor : "#fff",
    textColor : "#000",
    headerColor : "#000",
    headerTextColor : "#fff"
}

export const darkTheme = {
    bgColor : "#000",
    textColor : "#fff",
    headerColor : "#fff",
    headerTextColor : "#000"
}
```

## ThemeProvider를 이용하여 테마를 전체 감싸서 다크모드 효과 적용
상단에 import
```javascript
<ThemeProvider theme={toggle ? darkTheme : lightTheme}>
      <DarkMode onToggle={onToggle} toggle={toggle}/>
    </ThemeProvider>
```

## 스타일컴포넌트 작성 시 태그 이외의 스타일을 적용 시켜줄 때는 소괄호를 사용
```javascript
const DarkButton = styled(MdDarkMode)`
    cursor: pointer;
    color: ${(props) => props.theme.headerTextColor};
    font-size: 30px;
`;
const LightButton = styled(MdOutlineDarkMode)`
    cursor: pointer;
    color: ${(props) => props.theme.headerTextColor};
    font-size: 30px;
`;
```

### 깃 페이지 만드는 순서
1. 터미널 yarn add gh-pages
2. package.json 파일에서 `homepage` 추가
```
https://본인계정.github.io/리퍼지스토리이름
```
```javascript
    "name": "darkmode",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://ssoa1111.github.io/darkmode"
```

3. package.json 파일에서 `scripts`추가
```javascript
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

4. git push 완료하기

5. 터미널에서 yarn deploy

6. 시간이 지나면 알아서 깃 허브 페이지에 생성됨 
(F5눌러서 새로고침하여 확인)