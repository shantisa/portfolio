import React from "react";
import {EducationModel} from "../../Data/Model/EducationModel";
import '../styles/EduStyle.scss'
import eduIcon from '../../resources/icons/eduIcon.svg'
import certIcon from '../../resources/icons/cerIcon.svg'

/**
 * Interface defining the props expected by the Education component. It
 * contains the 'Education' section data.
 */
interface EducationProps{
    data: EducationModel | null;
}

/**
 * Education Component
 *
 * This component renders the 'Education' section of the portfolio, displaying the author's
 * educational background.
 *
 * @param props - Component properties
 */
export default function Education(props : EducationProps){
    return(
     <div id="education" className="eduContainer">
         <div className="box">
             <div className="sectionLabel">
                 <div className="block"></div>
                 <h1 dangerouslySetInnerHTML={{__html:props.data !== null ? props.data.secLabel : ""}}></h1>
             </div>
         </div>
         <div className="eduGrid">
            <div className="eduContent">
                <div className="eduList">
                    {props.data !== null
                        ? props.data.education.map((edu, index) => (
                            <div key={index} className="eduItem">
                                <div className="iconContainer">
                                    <img src={eduIcon} alt="Graduation Cap"/>
                                </div>
                                <div className="eduText">
                                    <span className="date">{edu.completionDate}</span>
                                    <h4>{edu.degree}</h4>
                                    <span className="pos">{edu.institution}</span>
                                </div>
                            </div>
                        ))
                        : ""}
                </div>
            </div>
            <div className="certContent">
                <div className="certList">
                    {props.data !== null
                        ? props.data.certificates.map((cert, index) => (
                            <div key={index} className="eduItem">
                                <div className="iconContainer">
                                    <img src={certIcon} alt="Certificate"/>
                                </div>
                                <div className="eduText">
                                    <span className="date">{cert.completionDate}</span>
                                    <h4>{cert.title}</h4>
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="pos" >{cert.label}</a>
                                </div>
                            </div>
                        ))
                        : ""}
                </div>
            </div>
         </div>
     </div>
    )
}