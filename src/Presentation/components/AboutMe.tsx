import React from "react";
import '../styles/AboutStyle.scss'
import {AboutModel} from "../../Data/Model/AboutModel";
import aboutPhoto from '../../resources/images/aboutPhoto.jpg'
import upArrow from '../../resources/icons/arrowUp.svg'
import downArrow from '../../resources/icons/arrowDown.svg'

/**
 * Interface defining the props expected by the AboutMe component. It
 * contains the 'About' section data, a callback function to control summary visibility,
 * and a boolean flag for indicating whether the full summary is displayed.
 */
interface AboutProps{
    data: AboutModel | null;
    handleSummary: () => void;
    showSummary: boolean;
}

/**
 * About Me Component
 *
 * This component renders the 'About' section of the portfolio, displaying the author's biography
 * and providing a toggle for showing/hiding additional details.
 *
 * @param props - Component properties
 */
export default function AboutMe(props : AboutProps){
    return(
        <div id="about" className="aboutContainer">
            <div className="box">
                <div className="sectionLabel">
                     <div className="block"></div>
                     <h1 dangerouslySetInnerHTML={{__html:props.data !== null ? props.data.secLabel : ""}}></h1>
                </div>
            </div>
            <div className="aboutGrid">
                <div className="imgContainer">
                    <img src={aboutPhoto} className="aboutPhoto" alt="Shantisa About Me Section" />
                </div>
                <div className="aboutContent">
                    <p id="aboutHeader" dangerouslySetInnerHTML={{__html:props.data !== null ? props.data.aboutHeader : ""}}></p>
                    <p id="aboutBrief" dangerouslySetInnerHTML={{__html:props.data !== null ? props.data.aboutSummary : ""}}></p>
                    <p id="summaryText" dangerouslySetInnerHTML={{__html:props.data !== null && props.showSummary ? props.data.fullSummary : ""}}></p>
                    <div role="button" id="textLabel" onClick={props.handleSummary} aria-expanded={props.showSummary}>
                        {props.showSummary ? props.data?.lessText : props.data?.showText}
                        <img id="arrowImg" src={props.showSummary ? upArrow : downArrow} alt="Arrow Icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
