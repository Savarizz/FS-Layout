import Product from "./Product";
import Styles from "../styles/Collection.module.css"

export default function Collection(props) {
    return(
            <div className={`container-fluid mt-5 p-0 ${Styles.collectionArea}`}>
                <div className="d-flex flex-column">
                    <div className={`w-100 mb-5 text-center ${Styles.collectionHeader}`}>{props.collectionName}</div>
                    <div className={`${Styles.products}`}>
                        {props.children}
                    </div>
                </div>
            </div>
    )
}