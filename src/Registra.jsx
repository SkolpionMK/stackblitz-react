import './styles/style.css'
import { useState, useEffect } from 'react';
import { auth } from './config/firebaseConfig.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';


function Registra() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirma, setConfirma] = useState('')
  const [aviso, setAviso] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    if(confirma != senha) {
      setAviso('As senhas não coincidem')
    }
    else{
      setAviso('')
    }
  }, [senha, confirma])

  const handleRegister = async (e) => {
    e.preventDefault();

    if (senha !== confirmacao) {
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      alert('Usuário criado com sucesso!')
      navigate('/login')
    } catch (error) {
      console.error(error);
      setAviso(error.message);
    }
  }
  return (
  <main>
    <form onSubmit={handleRegister}>
    <h1>Registrar-se</h1>
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

      <label htmlFor="confirma">Confime sua Senha</label>
      <input
        id="confirma"
        name="confirma"
        type="senha"
        value={confirma}
        onChange={(evento) => setConfirma(evento.target.value)}
      ></input> 
        <p>{aviso}</p>
      <button type='submit' disabled={aviso != ''}>Enviar</button>
      <Link to='/login'>Ja possui uma conta?</Link>
    </form>
  </main>
  );
}

export default Registra;
