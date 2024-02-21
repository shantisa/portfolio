/**
 * Model class representing navigation bar information.
 * Contains labels for different sections in the navigation bar.
 */
export class NavigationModel {
    home: string;
    aboutMe: string;
    skills: string;
    education: string;
    projects: string;
    resume: string;
    contact: string;

    /**
     * Constructor for NavigationModel
     * @param home - Label for the home section
     * @param aboutMe - Label for the about me section
     * @param skills - Label for the skills section
     * @param education - Label for the education section
     * @param projects - Label for the projects section
     * @param resume - Label for the resume section
     * @param contact - Label for the contact section
     */
   constructor(home:string,aboutMe: string, skills: string, education: string,
    projects: string, resume: string, contact: string ) {
       this.home = home;
       this.aboutMe = aboutMe;
       this.skills = skills;
       this.education = education;
       this.projects = projects;
       this.resume = resume;
       this.contact = contact
   }

}