import Styles from '../styles/LocArea.module.css'

export default function LocInfos(props) {
    return(
        <div className={`${Styles.locInfos}`}>
                <header>Onde nos encontrar?</header>
                <p>Na melhor localização da cidade de São Paulo, estamos na avenida paulista, ao lado da FIESP.</p>
                <div className='d-flex flex-column'>
                    <div className='pb-3'>
                        <i className="bi bi-telephone-fill"></i> (11) 4524-4592
                    </div>
                    <div>
                        <i className="bi bi-envelope-fill"></i> plussize@gmail.com
                    </div>
                </div>
            </div>
    )
}