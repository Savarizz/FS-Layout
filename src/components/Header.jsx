import Styles from '../styles/Header.module.css'
import InfoHeader from './InfoHeader'
import ActionSection from './ActionSection'

export default function Header(props) {
    return(
        <div className={`d-flex justify-content-between px-5 text-white ${Styles.backgroundHeader} overflow-show`}>
            <span className={`${Styles.logo}`}>PS</span>
            <InfoHeader />
            <ActionSection/>
        </div>
    )
}