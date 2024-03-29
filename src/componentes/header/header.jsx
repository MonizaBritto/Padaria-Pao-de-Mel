import Logo from "./padaria.png"

function Header(){
    return(
        <header>
            <nav>
            <img className="logo" src={Logo} alt="Logo da Padaria" />
            <ul>
                <li>Cardápio</li>
                <li>Contatos</li>
                <li>Encomendas</li>
                <li>Unidades</li>
            </ul>
        </nav>
        </header>
    )
    }
export default Header