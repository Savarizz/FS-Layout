import Styles from '../styles/LocArea.module.css'
import Image from 'next/image'

export default function LocMap(props) {
    return(
            <div className='d-flex justify-content-end align-items-center'>
                <div className={`${Styles.map} position-relative`}>
                    <Image src="/assets/imgs/MapLoc.jpg" fill priority/>
                </div>
            </div>
    )
}