import style from './Footer.module.scss'
import { Button } from '../Button/Button'
import MailSVG from '../../assets/IcOutlineMail.svg'
import Hancock from '../../assets/Hancock.svg'
export const Footer = () => {

    return (
        <footer className={style.footerStyle}>
            <article>

                <h2>TILMELD NYHEDSBREV</h2>
                <p>Få de seneste nyheder sendt til din indbakke</p>
                <div>
                    <img src={MailSVG} alt="" />
                    <input type="text" placeholder='Indtast din mailadresse'/>
                    <Button></Button>
                </div>

            </article>
            <img src={Hancock} alt="Sponsor" />
        </footer>
    )
}