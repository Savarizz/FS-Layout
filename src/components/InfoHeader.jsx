import Styles from '../styles/Header.module.css'

export default function InfoHeader(props) {
    return(
        <div className={`d-flex justify-content-between align-items-center ${Styles.infoWidth} me-5`}>
            <span className={`${Styles.infoHeader}`}>SOBRE NÓS</span>
            <span className={`${Styles.infoHeader}`}>NOSSOS PRODUTOS</span>
            <span className={`${Styles.infoHeader}`}>PERFIL</span>
            <span className={`${Styles.infoHeader}`}>CONTATO</span>
        </div>
    )
}
