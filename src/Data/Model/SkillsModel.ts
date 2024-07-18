/**
 * Model class representing skills information.
 * Contains details such as section label, programming languages, web technologies,
 * industry knowledge, testing, and version control.
 */
export class SkillsModel{
    secLabel:string;
    programmingLanguages:SkillsList;
    webTechnologies:SkillsList;
    backendTechnologies: SkillsList;
    databases: SkillsList;
    industryKnowledge:SkillsList;
    testing:SkillsList;
    versionControl:Version;

    /**
     * Constructor for SkillsModel
     * @param secLabel - The label for the skills section
     * @param programmingLanguages - List of programming languages
     * @param webTechnologies - List of web technologies
     * @param backendTechnologies - List of backend technologies
     * @param databases - List of databases
     * @param industryKnowledge - List of industry knowledge
     * @param testing - List of testing skills
     * @param versionControl - Version control information
     */
    constructor(secLabel:string, programmingLanguages:SkillsList, webTechnologies:SkillsList, backendTechnologies:SkillsList, databases:SkillsList, industryKnowledge:SkillsList,
                testing:SkillsList, versionControl:Version) {
        this.secLabel = secLabel;
        this.programmingLanguages = programmingLanguages;
        this.webTechnologies = webTechnologies;
        this.backendTechnologies = backendTechnologies;
        this.databases = databases;
        this.industryKnowledge = industryKnowledge;
        this.testing = testing;
        this.versionControl = versionControl;
    }
}

/**
 * Model class representing a list of skills.
 * Contains details such as title and a list of skills.
 */
export class SkillsList{
    title: string;
    skills: string[];

    /**
     * Constructor for SkillsList
     * @param title - The title of the skills list
     * @param skills - An array of skills
     */
    constructor(title: string, skills: string[]) {
        this.title = title;
        this.skills = skills;
    }
}

/**
 * Model class representing version control information.
 * Contains details such as title and version control system.
 */
export class Version{
    title: string;
    verControl: string;

    /**
     * Constructor for Version
     * @param title - The title of the version control section
     * @param verControl - The version control system used
     */
    constructor(title: string, verControl: string) {
        this.title = title;
        this.verControl = verControl;
    }
}