import React, { useState } from "react";
import '../styles/ProjectStyle.scss'
import { ProjectData, ProjectsModel } from "../../Data/Model/ProjectsModel";
import openPort from "../../resources/icons/openPortfolio.svg"
import closeDesc from "../../resources/icons/closePortfolio.svg"
import maxPhoto from "../../resources/icons/maxIcon.svg"
import extLink from "../../resources/icons/extLinkIcon.svg"

/**
 * Interface defining the props expected by the Projects component.
 * It contains the 'Projects' section data, callback functions to toggle the project list, handle project selection,
 * handle image selection, close project descriptions, and a boolean flag indicating
 * whether the full project list is displayed.
 */
interface ProjectProps {
    data: ProjectsModel | null;
    toggleProjectList: () => void;
    handleProject: (id: number) => void;
    handleImg: (imgIndex: number) => void;
    closeDesc: () => void;
    selectedProject: number | null;
    selectedImg: number;
    showFullList: boolean;
}

/**
 * Projects Component
 *
 * This component renders the 'Projects' section of the portfolio, displaying the project information and images.
 *
 * @param props - Component properties
 */
export default function Projects(props: ProjectProps) {

    //get list of projects, the first three projects should show
    const NUM_PROJECTS = 3;
    let projectList = props.data?.projects;

    if (!props.showFullList) {
        projectList = props.data?.projects.slice(0, NUM_PROJECTS);
    }

    //get the selectedProject index
    let selectedProject = props.data?.projects.find((project) => project.id === props.selectedProject) || null;

    return (
        <div id="project" className={`projContainer ${selectedProject !== null ? 'showProjectDesc' : ''}`}>

            {selectedProject !== null ?
                <>
                    <input type="checkbox" id="check" checked={true} />
                    <label htmlFor="check" className="checkBtn" onClick={props.closeDesc}>
                        <img src={closeDesc} alt="Close Portfolio Description Button" />
                    </label>
                </>
                : ""}
            <div className="box">
                <div className="sectionLabel">
                    <div className="block"></div>
                    <h1 dangerouslySetInnerHTML={{ __html: props.data !== null ? props.data.secLabel : "" }}></h1>
                </div>
            </div>
            {selectedProject !== null ?
                <div className="projDescContent">
                    <div className="portSummary">
                        <h1>{selectedProject.title}</h1>
                        <p id="date">{selectedProject.completionDate}</p>
                        <p id="description">{selectedProject.description}</p>
                        {selectedProject.technologies.map((tech, index) =>
                            <p id="technologies">{tech}</p>
                        )}
                        <a href={selectedProject.link} target="_blank" id="projLink"><img src={extLink}
                            alt="External Link" /></a>
                    </div>
                    <div className="portGallery">
                        {selectedProject.images.map((imgUrl, index) => (
                            <div key={index} className="gridItem" onClick={() => props.handleImg(index)}>
                                <img
                                    src={imgUrl}
                                    alt={`${selectedProject?.title} Cover ${index}`}
                                    className="tabImage"
                                />
                                {props.selectedImg !== index ?
                                    <div className="overlay" onClick={() => props.handleImg(index)}>
                                        <img src={maxPhoto} alt="Hover Icon" />
                                    </div>
                                    : ""}
                            </div>
                        ))}
                        <div className="expandedImg">
                            <img src={selectedProject.images[props.selectedImg]} className="expanded"
                                alt="Expanded Project Image" />
                        </div>
                    </div>
                </div>
                :
                <div className="projGrid">
                    {props.data !== null
                        ?
                        projectList?.map((project, index) => {
                            return (
                                <div className="projContent" onClick={() => props.handleProject(project.id)}>
                                    <img className="projectCover" src={project.images[0]}
                                        alt={`Project ${project.title} Cover`} />
                                    <div className="layer">
                                        <h3>{project.title}</h3>
                                        <img src={openPort}
                                            alt="Plus Sign Icon to open project description page"
                                            onClick={() => props.handleProject(project.id)} />
                                    </div>
                                </div>
                            )
                        })
                        : ""}
                </div>
            }

            {selectedProject !== null ? " " : <button className="projBtn"
                onClick={props.toggleProjectList}>{props.showFullList ? props.data?.btnLabelHide : props.data?.btnLabelShow}</button>}
        </div>
    )
}