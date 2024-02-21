import React from "react";
import '../styles/FooterStyle.scss'
import {FooterModel} from "../../Data/Model/FooterModel";

/**
 * Interface defining the props expected by the Footer component. It
 * contains the 'Footer' section data.
 */
interface FooterProps{
    data: FooterModel | null;
}

/**
 * Footer Component
 *
 * This component renders the 'Footer' section of the portfolio.
 *
 * @param props - Component properties
 */
export default function Footer(props : FooterProps){
    return(
        <footer className="footer">
            <p className="logo">S
                <span id="logoDot">.</span>
            </p>
            <p>{props.data !== null ? props.data.message : ""}</p>
        </footer>

    )
}