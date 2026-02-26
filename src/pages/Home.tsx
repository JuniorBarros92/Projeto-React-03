import "./Home.css"
import {useState} from "react"
import Header from "../components/Header"
import { Link } from "react-router-dom"

function Home() {

  const [contador, setContador] = useState<number>(0)

  function btnClick() {
    setContador(contador + 1);
  }
  return (
    <>
    <Header title="Oi dionisio" />
      <h1 className="h1-vermelho">ola mundo tudo bem</h1>
      <button onClick={btnClick}>clique me!</button>
      <p>{contador} cliques</p>
      <Link to="/cadastro">Cadastrar link</Link>
    </>
  );
}

export default Home;
