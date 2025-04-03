import { useState } from 'react';
import { auth } from './config/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';


function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const firebase_auth = async (evento) => {
    evento.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, senha)
      alert('Logado Com Sucesso!!!')
    } catch (err) {
      alert(`Erro No Processo: ${err}`)
    }
  }
  return (
  <main>
    <form onSubmit={firebase_auth()}>
    <label htmlFor="email">E-mail</label>
      <input
        id="email"
        name="e-mail"
        type="email"
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      ></input>

    <label htmlFor="senha">E-mail</label>
      <input
        id="senha"
        name="senha"
        type="senha"
        value={senha}
        onChange={(evento) => setSenha(evento.target.value)}
      ></input> 

    </form>
  </main>
  );
}

export default App;
