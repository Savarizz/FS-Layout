import Link from 'next/link'
import Styles from '../styles/Header.module.css'


export default function DropdownMenu(props) {
    const settings = 'className={`${props.divClass}`} id={props.divId}'

    return(
        <div style={props.style} className={`${props.className}`}> 
            <div className="card card-body d-flex justify-content-around flex-row border-top-0">
                <div className="d-flex flex-column">
                    <div>
                        <h3>Masculino</h3>
                    </div>
                    <div className={`d-flex flex-column flex-wrap ${Styles.peçasDeRoupa}`} style={{height: '310px'}}>
                        <Link className={`${Styles.link} pe-3`} href="/">Calças</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Camisetas</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Bermudas</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Sungas</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Cuecas</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Tênis</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Camisas</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Jaquetas</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Óculos</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Bonés</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Meias</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Moletons</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Blazers</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Blusas</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Pijamas</Link>
                    </div> 
                </div>

                <div className="d-flex flex-column">
                    <div>
                        <h3>Feminino</h3>
                    </div>
                    <div className={`d-flex flex-column flex-wrap ${Styles.peçasDeRoupa}`} style={{height: '310px'}}>
                        <Link className={`${Styles.link} pe-3`} href="/">Calças</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Camisetas</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Bermudas</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Sungas</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Cuecas</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Tênis</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Camisas</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Jaquetas</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Óculos</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Bonés</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Meias</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Moletons</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Blazers</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Blusas</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">mijamas</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Sutiã</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Calcinhas</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Vestidos</Link>
                    </div>
                </div>

                <div className="d-flex flex-column">
                    <div>
                        <h3>Infantil</h3>
                    </div>
                    <div className={`d-flex flex-column flex-wrap ${Styles.peçasDeRoupa}`} style={{height: '310px'}}>
                        <Link className={`${Styles.link} pe-3`} href="/">Calças</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Camisetas</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Bermudas</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Sungas</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Cuecas</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Tênis</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Camisas</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Jaquetas</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Óculos</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Bonés</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Meias</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Moletons</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Blazers</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Saias</Link>
                        <Link className={`${Styles.link} pe-3`} href="/">Bikinis</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}