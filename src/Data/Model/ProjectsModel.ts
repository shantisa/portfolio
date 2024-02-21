/**
 * Model class representing projects information.
 * Contains details such as section label, button labels, and project data.
 */
export class ProjectsModel{
    secLabel:string;
    btnLabelShow:string;
    btnLabelHide:string;
    projects:ProjectData[];

    /**
     * Constructor for ProjectsModel
     * @param secLabel - The label for the projects section
     * @param btnLabelShow - The label for the button to show projects
     * @param btnLabelHide - The label for the button to hide projects
     * @param projects - An array of project data
     */
    constructor(secLabel:string, btnLabelShow:string, btnLabelHide:string, projects:ProjectData[]) {
        this.secLabel = secLabel;
        this.btnLabelShow = btnLabelShow;
        this.btnLabelHide = btnLabelHide;
        this.projects = projects;
    }
}

/**
 * Model class representing project data.
 * Contains details such as project ID, title, completion date, description, technologies used, link, and images.
 */
export class ProjectData{
    id:number;
    title:string;
    completionDate:string;
    description:string;
    technologies:string[];
    link:string;
    images:string[];

    /**
     * Constructor for ProjectData
     * @param id - The ID of the project
     * @param title - The title of the project
     * @param completionData - The completion date of the project
     * @param description - The description of the project
     * @param technologies - An array of technologies used in the project
     * @param link - The link to the project
     * @param images - An array of image URLs
     */
    constructor(id:number, title:string, completionData:string, description:string, technologies:string[], link:string, images:string[]) {
        this.id = id;
        this.title = title;
        this.completionDate = completionData;
        this.description = description;
        this.technologies = technologies;
        this.link = link;
        this.images = images;
    }
}