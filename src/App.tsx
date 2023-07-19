import { createGlobalStyle } from "styled-components";
import Router from "./Router";

// 전체에(global) 스타일 적용
// head에 주입함
const GlobalStyle = createGlobalStyle`
    body {
        color:goldenrod;
    }
`;

// <></> => fragment
function App() {
    return (
        <>
            <GlobalStyle></GlobalStyle>
            <Router></Router>
        </>
    );
}

export default App;
