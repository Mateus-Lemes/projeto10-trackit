import {BrowserRouter, Routes, Route} from "react-router-dom"
import GeneralStyle from "../../GeneralStyle"
import Login from "../Login"
import SignUp from  "../SignUp"

export default function App() {
    return (
        <BrowserRouter>
            <GeneralStyle />
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/cadastro" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
        
    )
}