import Styles from '../styles/LocArea.module.css'
import LocInfos from './LocInfos'
import LocMap from './LocMap'

export default function LocArea(props) {
    return(
        <div className={`d-flex align-items-center justify-content-center ${Styles.locArea}`}>
            <div  className={`${Styles.locComponent}`} style={{width: '1512px'}}>
                <LocInfos />
                <LocMap />
            </div>
        </div>
    )
}