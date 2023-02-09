import Styles from '../styles/Header.module.css'

export default function ActionSection(props) {
    return(
        <div className={`${Styles.actionSection}`}>
            <div>
                <i className="bi bi-cart3"></i>
                <i className="bi bi-heart"></i>
            </div>
            <i className="bi bi-list"></i>
        </div>
    )
}