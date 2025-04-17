import { Link, Navigate, Outlet } from "react-router-dom";
import { jwtVerify } from "jose";
import { useState, useEffect } from "react";
import { verifyBeforeUpdateEmail } from "firebase/auth";

const AuthMiddleware = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null)
    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem('token')
            const secretkey =  new TextEncoder().encode('Skolpion_o_poderoso')
            const isAuthenticated= await jwtVerify(token, secretkey)
            if(isAuthenticated){
                setIsAuthenticated(true)
            }
        }
        verifyToken()
    }, [])
    if (isAuthenticated === null) {
        return <Link to='/login'>Você não está autenticado!</Link>
    }
    return isAuthenticated == true ? <Outlet /> : <Navigate to='login'/>
}

export default AuthMiddleware