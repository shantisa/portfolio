import React from 'react'
import '../styles/NavigationStyle.scss'
import {NavigationModel} from '../../Data/Model/NavigationModel'
import menuIcon from '../../resources/icons/menuIcon.svg'
import closeIcon from '../../resources/icons/closeBtn.svg'
import {Link} from 'react-scroll'

/**
 * Interface defining the props expected by the Navigation Bar component. It
 * contains the 'Navigation Bar' section data, a callback function to handle language
 * changes, the current selected language, a callback function to handle the navigation
 * bar toggling, and a boolean flag ndicating whether the navigation bar is displayed.
 */
interface NavigationProps{
    data: NavigationModel | null ;
    onClick: () => void;
    currentLang: string;
    handleNavBar: () => void;
    showNavbar: boolean;
}

const activeButtonStyle = {
    color: '#950740',
    fontWeight: 'bold',
}

/**
 * Navigation Bar Component
 *
 * This component renders the navigation bar for the portfolio application.
 *
 * @param props - Component properties
 */
export default function NavigationBar (props : NavigationProps){

    return(
        <header>
            <nav className={`navContainer ${props.showNavbar ? 'showNavbar' : ''}`}>
                <input type="checkbox" id="check" checked={props.showNavbar}/>
                <label htmlFor="check" className="checkBtn" onClick={props.handleNavBar}>
                    <img src={props.showNavbar ? closeIcon : menuIcon} alt="Menu Icon" />
                </label>
                <ul className="navStyle" >
                    <Link to="homeView" spy={true} smooth={true} duration={500} offset={-80} className="navLink">
                        <li className="logo">S
                            <span id="logoDot">.</span>
                        </li>
                    </Link>
                    {props.data !== null ?
                        (
                            <>
                                <li>
                                    <Link to="homeView" spy={true} smooth={true} duration={500} offset={-80}>{props.data.home}</Link>
                                </li>
                                <li>
                                    <Link to="about" spy={true} smooth={true} duration={500} offset={-80}>{props.data.aboutMe}</Link>
                                </li>
                                <li>
                                    <Link to="education" spy={true} smooth={true} duration={500} offset={-80}>{props.data.education}</Link>
                                </li>
                                <li>
                                    <Link to="skills" spy={true} smooth={true} duration={500} offset={-80}>{props.data.skills}</Link>
                                </li>
                                <li>
                                    <Link to="project" spy={true} smooth={true} duration={500} offset={-80}>{props.data.projects}</Link>
                                </li>
                                <li>
                                    <Link to="contact" spy={true} smooth={true} duration={500} offset={-79}>{props.data.contact}</Link>
                                </li>
                            </>
                        )
                    : ""}
                    <li>
                        <button onClick={props.currentLang !== 'en' ? props.onClick : undefined} style={props.currentLang === 'en' ? activeButtonStyle : {}}>EN</button><span id="divider">|</span>
                        <button onClick={props.currentLang !== 'de' ? props.onClick : undefined} style={props.currentLang === 'de' ? activeButtonStyle : {}}>DE</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}