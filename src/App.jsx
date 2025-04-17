import './styles/style.css'
import { useState } from 'react';
import { auth } from './config/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { SignJWT } from 'jose';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate()

  const firebase_auth = async (evento) => {
    evento.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, senha)

      const secretkey = new TextEncoder().encode('Skolpion_o_poderoso')

      const token = await new SignJWT({ user: 'admin'})
        .setProtectedHeader({ alg: 'HS256'})
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(secretkey)

      localStorage.setItem('token', token)
      navigate('/')
      alert('Logado Com Sucesso!!!')
    } catch (err) {
      alert(`Erro No Processo: ${err}`)
    }
  }
  return (
  <main>
    <form onSubmit={firebase_auth}>
    <h1>Entrar</h1>
    <label htmlFor="email">E-mail</label>
      <input
        id="email"
        name="e-mail"
        type="email"
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      ></input>

    <label htmlFor="senha">Senha</label>
      <input
        id="senha"
        name="senha"
        type="senha"
        value={senha}
        onChange={(evento) => setSenha(evento.target.value)}
      ></input> 
      <button type='submit'>Enviar</button>
      <Link to='/register'>Ainda não possui uma conta? Cadastre-se gratuitamente</Link>
    </form>
  </main>
  );
}

export default App;
