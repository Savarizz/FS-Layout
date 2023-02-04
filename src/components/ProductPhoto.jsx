import Image from "next/image"
import React from "react"

export default function ProductPhoto(props){
        return(
            <div id={props.id} className="carousel carousel-dark slide position-relative" style={{width: '100%', height: '310px'}}>
                <div className="carousel-inner w-100 h-100">
                    <div className="carousel-item active position-relative w-100 h-100" data-bs-interval="10000">
                        <Image src={props.firstImage}  fill priority alt={props.alt}/>
                    </div>
                    <div className="carousel-item position-relative w-100 h-100" data-bs-interval="10000">
                        <Image src={props.secondImage} fill priority alt={props.alt}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#${props.id}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-black rounded-2" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#${props.id}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-black rounded-2" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
        </div>
        )
}