import './styles/style.css'
import { useState } from 'react';
import { auth } from './config/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';


function Registra() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirma, setConfirma] = useState('')
  return (
  <main>
    <form>
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

      <button type='submit'>Enviar</button>
      <Link to='login'>Ja possui uma conta?</Link>
    </form>
  </main>
  );
}

export default Registra;
