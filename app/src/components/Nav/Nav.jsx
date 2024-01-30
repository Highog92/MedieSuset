import { Link } from 'react-router-dom';
import navStyle from './nav.module.scss'
import MedieSuset from '../../assets/Hero.svg'

export function Navigation() {

    return (
        <section className={navStyle.navigation}>
            <nav>
                <Link to='/homepage'><img src={MedieSuset} alt="Logo" /></Link>
                <p>4-7. juli 2024</p>
                <ul>
                    <Link to='/homepage'><li>FORSIDE</li></Link>
                    <Link to='/events'><li>EVENTS</li></Link>
                    <Link to='/camps'><li>CAMPS</li></Link>
                    <Link to='/tickets'><li>BILLETTER</li></Link>
                    <Link to='/practicalInfo'><li>PRAKTISK INFO</li></Link>
                    <Link to='/login'><li>LOGIN</li></Link>
                </ul>
            </nav>
        </section>
    )
}