import { Cabecalho } from "./styled"

export default function CabecalhoDireito() {
    return (
        <Cabecalho>
            <div className="lado-esquerdo">
                <div className="foto-usuario"> <img src="/assets/images/Bruno.svg" alt="" /></div>
                <div className="boas-vindas">Olá nome</div>
            </div>

            <div className="lado-direito">
                <div className="carregar"><img src="" alt="" /></div>
                <div className="sair"><img src="" alt="" /></div>
            </div>
            </Cabecalho>
    )
}