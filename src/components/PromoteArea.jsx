import Styles from "../styles/Promote.module.css"
import Image from 'next/image'

export default function Promote(props) {
    return(
        <div className="d-flex justify-content-center">
            <div className={`card ${Styles.promoteCard}`}>
                <div className="card-body d-flex flex-column justify-content-between ms-3">
                    <h2 className={`${Styles.cardHeader} mt-3`} style={{width: '500px'}}>PROMOÇÃO DE DIA DAS MÃES!</h2>
                    <p className="mt-3" style={{fontFamily: 'Noto Sans', fontSize: '19px', width: '470px'}}>Fique tranquilo, todos nossos produtos vão até o tamanho XGG</p>
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