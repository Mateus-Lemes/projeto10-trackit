import HomePage from "../../HomePageStyled"
import logo from '../../Img/logo.png'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";


export default function Login() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const data = {
        email,
        password
    }
    const navigate = useNavigate()

    function DataLogin(event) {

        event.preventDefault()
    
        setLoading(true)

        const required = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", data);
        required.then((response) => { navigate("/hoje"); console.log(response.data)});
        required.catch(() => {alert("Email e/ou senha inválidos! Tente novamente."); document.location.reload(true) && setLoading(false)})
    }

    return loading === false ? (
        <HomePage>
            <img src={logo} alt=""/>
            <form onSubmit={DataLogin}>
                <input type="email" placeholder='email' value = {email} onChange={(e) => setEmail(e.target.value)} required/>
                <input type="password" placeholder='senha' value = {password} onChange={(e) => setPassword(e.target.value)} required/>
                <button>Entrar</button>
            </form>
            <Link to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>
        </HomePage>
    ) : (
        <HomePage>
            <img src={logo} alt=""/>
            <form className="opacity">
                <input type="email" placeholder='email' value = {email} onChange={(e) => setEmail(e.target.value)} disabled/>
                <input type="password" placeholder='senha' value = {password} onChange={(e) => setPassword(e.target.value)} disabled/>
                <button type="submit"><ThreeDots color="#FFFFFF" width={303} height={15} /></button>
            </form>
            <p>Já tem uma conta? Faça login!</p>
        </HomePage>
    )
}





