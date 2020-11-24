import {createGlobalStyle} from 'styled-components'



const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    background: #2e2e2e;
    font-family: font-family: 'Roboto', sans-serif;
}
* {
    box-sizing: border-box;
}
p {
    color: white;
    font-family: 'Roboto', sans-serif;
}

span {
    color: white;
}

label {
    color: black;
}


h1, h2, h3, h4, h5 {
    color: white;
}

`

export default GlobalStyle;