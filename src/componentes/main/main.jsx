import React, {useState} from 'react'
import paofrances from "./Main - Assets/pão francês.jpeg"
import paodemel from "./Main - Assets/paodemel.jpg"
import bolinhodechuva from "./Main - Assets/bolinho-de-chuva.jpg"
import sonho from "./Main - Assets/sonho.jpg"
import carrinho from "./Main - Assets/carrinho.png"

function Main(){
//1° criar uam const (constante)
//2° criar uma array [] que vai criar duas coisas, dois parâmetros.
// [estado, setEstado]
//3° Receber = o hook useState()
//4° dentro do () colocar o valor inicial
const [numero, setNumero] = useState(0)
const [numero1, setNumero1] = useState(0)
const [numero2, setNumero2] = useState(0)
const [numero3, setNumero3] = useState(0)

//arrow function -Não precisam se prender nisso agora.
//Adicionar = ()=>{}

//Sem Condição
//const Adicionar = ()=>{
//    setNumero(numero+1)
//}

//COM CONDIÇÃO

const Adicionar = ()=>{
    if(numero <10) {
        setNumero (numero+1)
    }

}

const Adicionar1 = ()=>{
    if(numero1 <10) {
        setNumero1 (numero1+1)
    }

}

const Adicionar2 = ()=>{
    if(numero2 <10) {
        setNumero2 (numero2+1)
    }

}

const Adicionar3 = ()=>{
    if(numero3 <10) {
        setNumero3 (numero3+1)
    }

}
    return(
        <main>
        <div className="pao1">
            <img className="galeria" src={paofrances} alt=""/>
            <h3>Pão Francês</h3>
            <h4>R$0,40 a unidade</h4>
            <button onClick={Adicionar}><img className='carrinho' src={carrinho}alt="" /> <h2>{numero}</h2> </button>
        </div>
        <div className="pao2">
            <img className="galeria" src={paodemel} alt=""/>
            <h3>Pão de Mel</h3>
            <h4>R$3,50 a unidade</h4>
            <button onClick={Adicionar1}><img className='carrinho' src={carrinho}alt="" /> <h2>{numero1}</h2> </button>
        </div>
        <div className="pao3">
            <img className="galeria" src={bolinhodechuva} alt=""/>
            <h3>Bolinho de Chuva</h3>
            <h4>R$1,00 a unidade</h4>
            <button onClick={Adicionar2}><img className='carrinho' src={carrinho}alt="" /> <h2>{numero2}</h2> </button>
            </div>
        <div className="pao4">
            <img className="galeria" src={sonho} alt=""/>
            <h3>Sonho</h3>
            <h4>R$4,00 a unidade</h4>
            <button onClick={Adicionar3}><img className='carrinho' src={carrinho}alt="" /> <h2>{numero3}</h2> </button>
        </div>
            </main>
    )
}
export default Main