import nameLogo from "../../Img/nameLogo.png"
import styled from "styled-components"

export default function Header() {
    return (
        <Cabeçalho>
            <img src={nameLogo} />
            <img src="https://i.pinimg.com/736x/1d/4d/69/1d4d69c694c8ba1034c0e9552f457ecf.jpg" />
        </Cabeçalho>
    )
}

const Cabeçalho = styled.header`
        width: 375px;
        height: 70px;
        background: #126BA5;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 18px;

        img:first-child {
            width: 97px;
            height: 30px;
            color: #FFFFFF;
        }

        img:last-child{
            width: 51px;
            height: 51px;
            border-radius: 98.5px;
        }

`