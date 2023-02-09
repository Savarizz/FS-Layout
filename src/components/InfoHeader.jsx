import Styles from '../styles/Header.module.css'

export default function InfoHeader(props) {
    return(
        <div className={`${Styles.infoArea}`}>
            <span className={`${Styles.infoHeader}`}>SOBRE NÓS</span>
            <span className={`${Styles.infoHeader}`}>NOSSOS PRODUTOS</span>
            <span className={`${Styles.infoHeader}`}>PERFIL</span>
            <span className={`${Styles.infoHeader}`}>CONTATO</span>
        </div>
    )
}
