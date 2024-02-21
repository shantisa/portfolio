import '../styles/SkillStyle.scss';
import {SkillsModel} from "../../Data/Model/SkillsModel";
import React from "react";
import codeIcon from '../../resources/icons/codeIcon.svg'
import webIcon from '../../resources/icons/webIcon.svg'
import industryIcon from '../../resources/icons/industryIcon.svg'
import testIcon from '../../resources/icons/testIcon.svg'
import verIcon from '../../resources/icons/versionIcon.svg'

/**
 * Interface defining the props expected by the Skills component. It
 * contains the 'Skills' section data.
 */
interface SkillsProps{
    data: SkillsModel | null;
}

/**
 * Skills Component
 *
 * This component renders the 'Skills' section of the portfolio, displaying the author's
 * skills information.
 *
 * @param props - Component properties
 */
export default function Skills(props : SkillsProps){
    return(
      <div id="skills" className="skillsContainer">
          <div className="box">
              <div className="sectionLabel">
                  <div className="block"></div>
                  <h1 dangerouslySetInnerHTML={{__html:props.data !== null ? props.data.secLabel : ""}}></h1>
              </div>
          </div>
          <div className="skills-list">
                <div>
                    <img src={codeIcon} alt="Programming Language"/>
                    <h2>{props.data !== null ? props.data.programmingLanguages.title : ""}</h2>
                    <p>
                        {props.data !== null
                            ? props.data.programmingLanguages.skills.map((language, index) => {
                                if(index+1 === props.data?.programmingLanguages.skills.length){
                                    return <span key={index}>{language}</span>
                                } else{
                                    return <span key={index}>{language}, </span>
                                }

                            }) : ""}
                    </p>
                </div>
              <div>
                  <img src={webIcon} alt="Frameworks"/>
                  <h2>{props.data !== null ? props.data.webTechnologies.title : ""}</h2>
                  <p>
                      {props.data !== null
                      ? props.data.webTechnologies.skills.map((language, index) => {
                          if(index+1 === props.data?.webTechnologies.skills.length){
                              return <span key={index}>{language}</span>
                          } else{
                              return <span key={index}>{language}, </span>
                          }

                      }) : ""}
                  </p>
              </div>
              <div>
                  <img src={industryIcon} alt="Industry Logo"/>
                  <h2>{props.data !== null ? props.data.industryKnowledge.title : ""}</h2>
                  <p>
                      {props.data !== null
                          ? props.data.industryKnowledge.skills.map((language, index) => {
                              if(index+1 === props.data?.industryKnowledge.skills.length){
                                  return <span key={index}>{language}</span>
                              } else{
                                  return <span key={index}>{language}, </span>
                              }

                          }) : ""}
                  </p>
              </div>
              <div>
                  <img src={testIcon} alt="Testing Logo"/>
                  <h2>{props.data !== null ? props.data.testing.title : ""}</h2>
                  <p>
                      {props.data !== null
                          ? props.data.testing.skills.map((language, index) => {
                              if(index+1 === props.data?.testing.skills.length){
                                  return <span key={index}>{language}</span>
                              } else{
                                  return <span key={index}>{language}, </span>
                              }

                          }) : ""}
                  </p>
              </div>
              <div>
                  <img src={verIcon} alt="Github"/>
                  <h2>{props.data !== null ? props.data.versionControl.title : ""}</h2>
                  <p> {props.data !== null ? props.data.versionControl.verControl : ""}</p>
              </div>
          </div>
      </div>
    );
}