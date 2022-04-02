import styled from 'styled-components'

const HomePage = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img {
    width:180px;
    height: 178.38px;
    margin-bottom: 32.62px;
}

form {
    width:303px;


    input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        margin-bottom: 6px;
        font-size: 19px;
        font-weight: 400;
        padding-left: 11px;

        &::placeholder {
            width: 54px;
            height: 25px;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #DBDBDB;
        }
    }

    button{
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: 0;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        color: #FFFFFF;
        margin-bottom: 25px;
    }
}

p {
    width: 232px;
    height: 17px;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
}

.opacity {
    opacity: 0.7;

    input {
        background: #f2f2f2;
        color: #AFAFAF;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }
}
`

export default HomePage