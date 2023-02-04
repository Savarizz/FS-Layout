import Styles from "../styles/Footer.module.css"
import Link from 'next/link'

export default function Footer(props) {
    return(
        <div className={`d-flex justify-content-between align-items-center px-5 ${Styles.footer}`}>
            <div className="text-wrap d-flex flex-column" style={{width: '231px'}}>
                <div className="d-flex mb-2">
                    <i class="bi bi-facebook bg-white rounded-circle fs-5 me-5 text-center"></i>
                    <i class="bi bi-instagram bg-white rounded-circle fs-5 text-center"></i>
                </div>
                <Link href="/">Avenida Paulista, 535 São Paulo- SP</Link>
            </div>
            <div className="d-flex flex-column justify-content-center h-100 lh-lg">
                <Link href="/">Perfil</Link>
                <Link href="/">Carrinho</Link>
                <Link href="/">Itens salvos</Link>
                <Link href="/">Ofertas</Link>
            </div>
            <div className="d-flex flex-column justify-content-center h-100 lh-lg">
                <Link href="/">Nossa loja física</Link>
                <Link href="/">Acompanhe seu pedido</Link>
                <Link href="/">Tire suas dúvidas</Link>
                <Link href="/">Política de devolução</Link>
            </div>
            <div className="position-relative">
                <div className="d-flex flex-column justify-content-center h-100 lh-lg position-relative" style={{bottom: '35px'}}>
                    <Link href="/">Investidores</Link>
                    <Link href="/">Nossos valores</Link>
                </div>
            </div>
        </div>
    )
}