import React from "react"
import Styles from "../styles/Home.module.css"
import Header from "../components/Header"
import SearchCompoent from "../components/SearchCompoent"
import PromoteArea from "../components/PromoteArea"
import Collection from "../components/Collection"
import LocArea from "../components/LocArea"
import Footer from "../components/Footer"
import Product from "../components/Product"


export default function Home() {
  return (
    <div className={`${Styles.body}`}>
        <Header className={`${Styles.header}`}/>
        {/* <DropdownMenu divClass="collapse" divId="collapseExample"/> */}
        <SearchCompoent className={`${Styles.search}`}/>
        <PromoteArea/>
        <div className="productsArea">
            <Collection collectionName="Moda casual">
                    <Product firstImage="/assets/imgs/CalçaAdidasEssentials.jpg" secondImage="/assets/imgs/CalçaAdidas.jpg" alt="Calça Adidas Essentials" id="carouselPhoto5"/>
                    <Product firstImage="/assets/imgs/LeggingAdidas.jpg" secondImage="/assets/imgs/LeggingAdidas2.jpg" alt="Legging Adidas" id="carouselPhoto6"/>
                    <Product firstImage="/assets/imgs/CalçaMoletomFeminina.jpeg" secondImage="/assets/imgs/CalçaMoletom.jpeg" alt="Calça Moletom Feminina" id="carouselPhoto7"/>
                    <Product firstImage="/assets/imgs/ShortsAdidas.jpg" secondImage="/assets/imgs/ShortsAdidas2.jpg" alt="Shorts Adidas 3 Stripes" id="carouselPhoto8"/>
            </Collection>

            <Collection collectionName="Coleção verão">
                    <Product firstImage="/assets/imgs/AdidasTactel.jpg" secondImage="/assets/imgs/AdidasTactel2.jpg" alt="Shorts Adidas Tactel Colorblue" id="carouselPhoto1"/>
                    <Product firstImage="/assets/imgs/BlusaAishty.jpg" secondImage="/assets/imgs/BlusaAishty2.jpg" alt="Blusa Aishty" id="carouselPhoto2"/>
                    <Product firstImage="/assets/imgs/Nike.jpg" secondImage="/assets/imgs/Nike2.jpg" alt="Camiseta Nike Logo" id="carouselPhoto3"/>
                    <Product firstImage="/assets/imgs/CamisetaNike.jpg" secondImage="/assets/imgs/CamisetaNike2.jpg" alt="Camiseta Nike Get Your Kicks" id="carouselPhoto4"/>
            </Collection>

        </div>
        <LocArea className={`${Styles.locArea}`}/>
        <Footer className={`${Styles.footer}`}/>
    </div>
  )
}
