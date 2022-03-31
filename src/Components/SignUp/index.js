import HomePage from "../../HomePageStyled"
import logo from '../../Img/logo.png'
import { Link } from "react-router-dom"

export default function SignUp() {
    return (
        <HomePage>
            <img src={logo} alt=""/>
            <form>
                <input type="email" placeholder='email' required/>
                <input type="password" placeholder='senha' required/>
                <input type="text" placeholder='nome' required/>
                <input type="text" placeholder='foto' required/>
                <button>Entrar</button>
            </form>
            <Link to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>
        </HomePage>
    )
}