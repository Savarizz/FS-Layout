import Styles from "../styles/Promote.module.css"
import Image from 'next/image'

export default function Promote(props) {
    return(
        <div className={`${Styles.promote}`}>
            <div className={`card ${Styles.promoteCard}`}>
                <div className="card-body d-flex flex-column justify-content-between ms-3">
                    <h2 className={`${Styles.cardHeader}`}>PROMOÇÃO DE DIA DAS MÃES!</h2>
                    <p className={`mt-3 ${Styles.cardText}`}>Fique tranquilo, todos nossos produtos vão até o tamanho XGG</p>
                </div>
                <div>
                    <span className={`${Styles.discount}`}>-50%</span>
                </div>
                <div className={`${Styles.modeloPng}`}>
                </div>
            </div>
        </div>
        
    )
}