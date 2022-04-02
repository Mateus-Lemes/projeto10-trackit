import HomePage from "../../HomePageStyled";
import logo from '../../Img/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function SignUp() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const data = {
        email,
        name,
        image,
        password
    }
    const navigate = useNavigate()

    function DataSignUp(event) {
        
        event.preventDefault()
        
        setLoading(true)

        const required = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", data)
        required.then(() => {
            navigate("/")
        })
        required.catch(() => {alert("Não foi possível fazer o cadastro, tente novamente."); document.location.reload(true) && setLoading(false)})
    }

    return loading === false ? (
        <HomePage>
            <img src={logo} alt=""/>
            <form onSubmit={DataSignUp}>
                <input type="email" placeholder='email' value = {email} onChange={(e) => setEmail(e.target.value)} required/>
                <input type="password" placeholder='senha' value = {password} onChange={(e) => setPassword(e.target.value)} required/>
                <input type="text" placeholder='nome' value = {name} onChange={(e) => setName(e.target.value)} required/>
                <input type="text" placeholder='foto' value = {image} onChange={(e) => setImage(e.target.value)} required/>
                <button type="submit">Entrar</button>
            </form>
            <Link to="/"><p>Já tem uma conta? Faça login!</p></Link>
        </HomePage>
    ) : (
        <HomePage>
            <img src={logo} alt=""/>
            <form className="opacity">
                <input type="email" placeholder='email' value = {email} onChange={(e) => setEmail(e.target.value)} disabled/>
                <input type="password" placeholder='senha' value = {password} onChange={(e) => setPassword(e.target.value)} disabled/>
                <input type="text" placeholder='nome' value = {name} onChange={(e) => setName(e.target.value)} disabled/>
                <input type="text" placeholder='foto' value = {image} onChange={(e) => setImage(e.target.value)} disabled/>
                <button type="submit"><ThreeDots color="#FFFFFF" width={303} height={15} /></button>
            </form>
            <p>Já tem uma conta? Faça login!</p>
        </HomePage>
    )
}




