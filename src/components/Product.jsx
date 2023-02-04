import Styles from "../styles/Collection.module.css"
import Image from "next/image"
import ProductPhoto from "./ProductPhoto"

export default function Product(props) {
    return(
        <div style={{width: '313px', height: '490px'}} className="text-white shadow d-flex flex-column">
            <ProductPhoto firstImage={props.firstImage} alt={props.alt} id={props.id} secondImage={props.secondImage}/>
            <div className={`${Styles.infoBody} flex-grow-1 w-100`}>
                <div className={`${Styles.productName} text-start px-3 text-black align-self-center`} style={{fontFamily: "Outfit", fontSize: '18px'}}>
                    {props.alt}
                </div>
                <div className={`${Styles.sizes} d-flex justify-content-between text-black px-3`}>
                    <div style={{fontFamily: 'noto-sans', color: '#828282'}} className="fw-lighter">
                        Tamanhos
                    </div>
                    <div style={{fontFamily: 'noto-sans'}}>
                        G, GG, XGG
                    </div>
                </div>
                <div className={`${Styles.colors} text-black d-flex justify-content-between px-3`}>
                    <div style={{fontFamily: 'noto-sans', color: '#828282'}} className="fw-lighter">
                        Cores
                    </div>
                    <div style={{fontFamily: 'noto-sans'}} className="d-flex">
                        <div style={{height: '17px', width: '17px'}} className="bg-primary rounded-circle mx-1"></div>
                        <div style={{height: '17px', width: '17px'}} className="bg-danger rounded-circle mx-1"></div>
                        <div style={{height: '17px', width: '17px'}} className="bg-warning rounded-circle mx-1"></div>
                        <div style={{height: '17px', width: '17px'}} className="bg-black rounded-circle mx-1"></div>
                        <div style={{height: '17px', width: '17px'}} className="bg-primary rounded-circle mx-1"></div>
                    </div>
                </div>
                <div className={`${Styles.price} px-3 text-black d-flex flex-column`}>
                    <div className="text-decoration-line-through" style={{fontFamily: 'noto sans', color: '#B1B1B1', fontSize: '14px'}}>
                        200,00R$
                    </div>
                    <button type="button" className="btn text-white rounded-0 d-flex justify-content-around align-items-center" style={{width: '125px', backgroundColor: '#15616D'}}>
                        <i className="bi bi-cart2"></i>
                        <div className="px-1">
                            |
                        </div>
                        <span className="fw-semibold text-center" style={{fontSize: '14px'}}>120,00 R$</span>
                    </button>
                </div>
                <div className={`${Styles.favorite} text-black d-flex justify-content-end align-items-end`}>
                    <i className="bi bi-heart p-3 fs-5"></i>
                </div>
            </div>
        </div>
    )
}