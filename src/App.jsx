import React from 'react' //opcional, não é mais obrigatório usar.
import "./App.css"
import Header from "./componentes/header/header.jsx"
import Main from "./componentes/main/main.jsx"
import Footer from "./componentes/footer/footer.jsx"

function App(){
  return(
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}
//Sempre que eu criar algo que tenha mais de 1 tag, precisa estar em volta de outra tag pai.
export default App