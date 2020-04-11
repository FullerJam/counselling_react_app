import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

body {
    font-family: ${({theme}) => theme.typography.font};
    font-family: 'Poppins', sans-serif;
    background-color:#FFFBF7;
}

input {
    font-family: 'Poppins', sans-serif;

}

h1 {
    font-size: ${({theme}) => theme.typography.h1.fontSize};
    font-family: 'Poppins', sans-serif;
}

h2 {
    font-size: ${({theme}) => theme.typography.h2.fontSize};
    font-family: 'Poppins', sans-serif;
}


h3 {
    font-size: ${({theme}) => theme.typography.h3.fontSize};
    font-family: 'Poppins', sans-serif;
    
}


h4 {
    font-size: ${({theme}) => theme.typography.h4.fontSize};
    font-family: 'Poppins', sans-serif;
}

h6 {
    font-size: ${({theme}) => theme.typography.h6.fontSize};
    font-weight: ${({theme}) => theme.typography.h6.fontWeight};
    font-family: 'Poppins', sans-serif;
}

em {
    font-size: ${({theme}) => theme.typography.em.fontSize};
}

input[type="text"], input[type="email"], input[type="password"] {
    width: 100%;
    height: 44px;
    border: 1px solid ${({theme}) => theme.colors.darkShade[10]};
    box-sizing: border-box;
    border-radius: 4px;
    margin-bottom: 2%;
    font-size: 22px;
}

textarea {
    border: 1px solid ${({theme}) => theme.colors.darkShade[10]};
    border-radius: 4px;
}

label {
    font-size: 12px;
    font-weight: bold;
    line-height: 15px;
    text-transform: uppercase;
    margin-bottom: 20;
    color: #1F2041;
}

`


export default GlobalStyles;


