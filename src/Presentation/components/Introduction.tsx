import '../styles/IntroductionStyle.scss'
import React from "react";
import {IntroductionModel} from "../../Data/Model/IntroductionModel";

/**
 * Interface defining the props expected by the Introduction component. It
 * contains the 'Introduction' section data.
 */
interface IntroductionProps{
    data: IntroductionModel | null ;
}

/**
 * Introduction Component
 *
 * This component renders the 'Introduction' section of the portfolio, displaying the author's
 * name and career role.
 *
 * @param props - Component properties
 */
export default function Introduction(props : IntroductionProps){
    return(
      <div className="introContainer" id="homeView">
          <div className="box">
            <div className="title">
                <div className="block"></div>
                <h1>Shantisa Strowder<span>.</span></h1>
            </div>
              <div className="role">
                  <div className="block"></div>
                  <p>{props.data !== null ? props.data.role : ""}</p>
              </div>
          </div>
      </div>
    );
}