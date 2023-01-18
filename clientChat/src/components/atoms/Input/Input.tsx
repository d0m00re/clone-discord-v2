import styled from "styled-components";

const Input = styled.input`
    background-color: white;
    color : black;
    padding : 5px;

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: grey;
        opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: grey;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: grey;
    }
`;

export default Input;