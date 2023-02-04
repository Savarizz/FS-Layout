import Styles from '../styles/LocArea.module.css'
import LocInfos from './LocInfos'
import LocMap from './LocMap'

export default function LocArea(props) {
    return(
        <div className='d-flex justify-content-center align-items-center'>
            <div className="d-flex justify-content-around align-items-center postition-relative" style={{width: '1512px'}}>
                <LocInfos />
                <LocMap />
            </div>
        </div>
    )
}