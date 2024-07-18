import {NavigationModel} from "../Model/NavigationModel";
import {IntroductionModel} from "../Model/IntroductionModel";
import {FooterModel} from "../Model/FooterModel";
import {AboutModel} from "../Model/AboutModel"
import {ContactInfoModel, ContactModel, FormInfoModel} from "../Model/ContactModel";
import {CertificateData, EducationData, EducationModel} from "../Model/EducationModel";
import {ProjectData, ProjectsModel} from "../Model/ProjectsModel";
import {SkillsList, SkillsModel, Version} from "../Model/SkillsModel";

/**
 * FileDataSource class handles data retrieval from files based on language.
 * It manages file paths and provides methods to fetch various data models.
 */
export class FileDataSource {
    // File path for data retrieval
    filePath: string = '';

    /**
     * Constructs a new FileDataSource instance based on language string given
     * @param lang - The language code used to determine the file path ('de' for German, default is 'en' for English).
     */
    constructor(lang: string) {
        switch (lang) {
            case 'de':
                this.filePath = "./resources/data/de_lang/"
                break;
            default:
                this.filePath = "./resources/data/en_lang/"
        }
    }

    /**
     * Retrieves navigation information from the specified JSON file
     * @returns Promise<NavigationModel> - Resolves to a NavigationModel object.
     */
    async getNavInfo(): Promise<NavigationModel> {
        try {
            // Use fetch to get the content of the navigation JSON file
            const response = await fetch(this.filePath + "navBarInfo.json");

            // Handle fetch errors
            if (!response.ok) {
                throw new Error(`Failed to fetch file: ${response.statusText}`);
            }

            // Parse JSON response
            const jsonData = await response.json();

            // Assign JSON data to a NavigationModel object
            let json = jsonData.navigation;

            return new NavigationModel(
                json.home,
                json.aboutMe,
                json.skills,
                json.education,
                json.projects,
                json.resume,
                json.contact
            );
        } catch (error) {
            console.error('Error reading or parsing the file:', error);
            throw error;
        }

    }

    /**
     * Retrieves introduction information from the specified JSON file
     * @returns Promise<IntroductionModel> - Resolves to a IntroductionModel object.
     */
    async getIntro(): Promise<IntroductionModel> {
        try {
            // Use fetch to get the content of the introduction JSON file
            const response = await fetch(this.filePath + "intro.json");

            // Handle fetch errors
            if (!response.ok) {
                throw new Error(`Failed to fetch file: ${response.statusText}`);
            }

            // Parse JSON response
            const jsonData = await response.json();

            // Assign JSON data to a IntroductionModel object
            let json = jsonData.intro;

            return new IntroductionModel(json.role);

        } catch (error) {
            console.error('Error reading or parsing the file:', error);
            throw error;
        }
    }

    /**
     * Retrieves about information from the specified JSON file
     * @returns Promise<AboutModel> - Resolves to a AboutModel object.
     */
    async getAbout(): Promise<AboutModel> {
        try {
            // Use fetch to get the content of the about JSON file
            const response = await fetch(this.filePath + "about.json");

            // Handle fetch errors
            if (!response.ok) {
                throw new Error(`Failed to fetch file: ${response.statusText}`);
            }

            // Parse JSON response
            const jsonData = await response.json();

            // Assign JSON data to a AboutModel object
            let json = jsonData.about;

            return new AboutModel(
                json.secLabel,
                json.aboutHeader,
                json.aboutSummary,
                json.showText,
                json.lessText,
                json.fullSummary
            );

        } catch (error) {
            console.error('Error reading or parsing the file:', error);
            throw error;
        }
    }

    /**
     * Retrieves skills information from the specified JSON file
     * @returns Promise<SkillsModel> - Resolves to a SkillsModel object.
     */
    async getSkills(): Promise<SkillsModel> {
        try {
            // Use fetch to get the content of the skills JSON file
            const response = await fetch(this.filePath + "skills.json");

            // Handle fetch errors
            if (!response.ok) {
                throw new Error(`Failed to fetch file: ${response.statusText}`);
            }

            // Parse JSON response
            const jsonData = await response.json();

            // Assign JSON data to a SkillsModel object
            let json = jsonData.skills;

            return new SkillsModel(
                json.secLabel,
                new SkillsList(json.programmingLanguages.title, json.programmingLanguages.languages),
                new SkillsList(json.webTechnologies.title,json.webTechnologies.technologies),
                new SkillsList(json.backendTechnologies.title, json.backendTechnologies.technologies),
                new SkillsList(json.databases.title, json.databases.systems),
                new SkillsList(json.industryKnowledge.title,json.industryKnowledge.architecture),
                new SkillsList(json.testing.title, json.testing.test),
                new Version(json.versionControl.title, json.versionControl.verControl)
            );

        } catch (error) {
            console.error('Error reading or parsing the file:', error);
            throw error;
        }
    }

    /**
     * Retrieves education information from the specified JSON file
     * @returns Promise<EducationModel> - Resolves to a EducationModel object.
     */
    async getEducation(): Promise<EducationModel> {
        try {
            // Use fetch to get the content of the education JSON file
            const response = await fetch(this.filePath + "education.json");

            // Handle fetch errors
            if (!response.ok) {
                throw new Error(`Failed to fetch file: ${response.statusText}`);
            }

            // Parse JSON response
            const jsonData = await response.json();

            let mapEducation: EducationData[] = jsonData.education.map((education: { degree: string; institution: string; completionDate: string; }) => (
                new EducationData(
                education.degree,
                education.institution,
                education.completionDate
            )));

            let mapCertificate: CertificateData[] = jsonData.certificates.map((certificates: { title: string; completionDate: string; link: string; label:string;}) => (
                new CertificateData(
                certificates.title,
                certificates.completionDate,
                certificates.link,
                certificates.label
            )));

            // Assign JSON data to a EducationModel object
            return new EducationModel(jsonData.secLabel, mapEducation, mapCertificate);

        } catch (error) {
            console.error('Error reading or parsing the file:', error);
            throw error;
        }
    }

    /**
     * Retrieves projects information from the specified JSON file
     * @returns Promise<ProjectsModel> - Resolves to a ProjectsModel object.
     */
    async getProjects(): Promise<ProjectsModel> {
        try {
            // Use fetch to get the content of the projects JSON file
            const response = await fetch(this.filePath + "projects.json");

            // Handle fetch errors
            if (!response.ok) {
                throw new Error(`Failed to fetch file: ${response.statusText}`);
            }

            // Parse JSON response
            const jsonData = await response.json();

            let mapProjects: ProjectData[] = jsonData.projects.map((projects: {
                id: number;
                title: string;
                completionDate: string;
                description: string;
                technologies: string[] | undefined;
                link: string;
                images: string[];
            }) => (
                new ProjectData(
                    projects.id,
                    projects.title,
                    projects.completionDate,
                    projects.description,
                    projects.technologies || [],
                    projects.link,
                    projects.images
                )));


            // Assign JSON data to a ProjectsModel object
            return new ProjectsModel(jsonData.secLabel, jsonData.btnLabelShow, jsonData.btnLabelHide, mapProjects);

        } catch (error) {
            console.error('Error reading or parsing the file:', error);
            throw error;
        }
    }

    /**
     * Retrieves contact information from the specified JSON file
     * @returns Promise<ContactModel> - Resolves to a ContactModel object.
     */
    async getContact(): Promise<ContactModel> {
        try {
            // Use fetch to get the content of the contact JSON file
            const response = await fetch(this.filePath + "contact.json");

            // Handle fetch errors
            if (!response.ok) {
                throw new Error(`Failed to fetch file: ${response.statusText}`);
            }

            // Parse JSON response
            const jsonData = await response.json();

            let contact = jsonData.contact;
            let form = jsonData.formLabel;

            let cModel = new ContactInfoModel(contact.secLabel, contact.btnLabel, contact.responseSuccess, contact.responseFail);
            let fModel = new FormInfoModel(form.name, form.email, form.subject, form.message, form.submit);

            // Assign JSON data to a ContactModel object
            return new ContactModel(cModel, fModel);

        } catch (error) {
            console.error('Error reading or parsing the file:', error);
            throw error;
        }
    }

    /**
     * Retrieves footer information from the specified JSON file.
     * @returns Promise<FooterModel> - Resolves to a FooterModel object.
     */
    async getFooter(): Promise<FooterModel> {
        try {
            // Use fetch to get the content of the footer JSON file
            const response = await fetch(this.filePath + "footer.json");

            // Handle fetch errors
            if (!response.ok) {
                throw new Error(`Failed to fetch file: ${response.statusText}`);
            }

            // Parse the JSON response
            const jsonData = await response.json();

            // Assign JSON data to a FooterModel object
            let json = jsonData.footer;

            return new FooterModel(json.message);

        } catch (error) {
            console.error('Error reading or parsing the file:', error);
            throw error;
        }
    }

}