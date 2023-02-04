import React from "react";
import { render } from "react-dom";
import Styles from '../styles/SearchComponent.module.css'
import DropdownMenu from "./DropdownMenu";

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          top: '-385px'
        }
      }

    aplicarFiltro = () => {
        if(this.state.top === '-385px') {
            this.setState({top: '213px'})
        } else {
            this.setState({top: '-385px'})
        }
    }


    render() {
        return(
            <div className="d-flex flex-column align-items-center">
                <DropdownMenu className={`${Styles.dropdownTab} ${Styles.posPadrao}`} style={{ top: this.state.top, position: 'absolute', width: '1512px', zIndex: 10}}/>
                <div className={`${Styles.searchSection}`}>
                    <button className={`${Styles.filterButton}`} onClick={() => this.aplicarFiltro()}>
                        <i className={`bi bi-filter-left me-2`}></i><span>Categorias</span>
                    </button>
                    <div className={`input-group flex-nowrap ${Styles.inputArea} ms-4`}>
                        <input type="text" className={`form-control rounded-0`} placeholder="Ex: Blusas femininas" aria-label="Username" aria-describedby="addon-wrapping"/>
                        <button style={{ color: 'white'}} className="input-group-text rounded-0" id="addon-wrapping">Pesquisar</button>
                    </div> 
                </div>
            </div>
        )
    }
}