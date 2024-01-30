import { Link } from 'react-router-dom';
import navStyle from './nav.module.scss'


export function Navigation() {

    return (
        <section className={navStyle.navigation}>
            <nav>
                <img src="" alt="" />
                <ul>
                    <Link to='/homepage'><li>FORSIDE</li></Link>
                    <Link to='/events'><li>EVENTS</li></Link>
                    <Link to='/camps'><li>CAMPS</li></Link>
                    <Link to='/tickets'><li>BILLETTER</li></Link>
                    <Link to='/practicalInfo'><li>PRAKTISK INFO</li></Link>
                    <Link to='/login'><li>Login</li></Link>
                </ul>
            </nav>
        </section>
    )
}