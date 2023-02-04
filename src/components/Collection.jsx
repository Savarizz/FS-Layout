import Product from "./Product";
import Styles from "../styles/Collection.module.css"

export default function Collection(props) {
    return(
            <div className="container-fluid px-5 mt-5" style={{width: '1512px'}}>
                <div className="row">
                    <div className={`col-12 mb-5 text-center ${Styles.collectionHeader}`}>{props.collectionName}</div>
                    <div className="col-12 d-flex justify-content-around">
                        {props.children}
                    </div>
                </div>
            </div>
    )
}