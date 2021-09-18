import { Cabecalho } from "./styled"

  import 'react-toastify/dist/ReactToastify.css';

export default function CabecalhoDireito() {
    
    
    
    return (
        <Cabecalho>
            
            
            <div className="lado-esquerdo">
                <div className="foto-usuario"> <img src="/assets/images/Bruno.svg" alt="" /></div>
                <div className="boas-vindas">Olá, nome</div>
            </div>

            <div className="lado-direito">
                <div className="carregar"><img src="/assets/images/recarregar devschool.PNG" alt="" /></div>
                <div className="sair"><img src="/assets/images/sair devschool.PNG" alt="" /></div>
            </div>
            </Cabecalho>
    )
}