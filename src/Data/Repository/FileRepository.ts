import {FileDataSource} from "../DataSource/FileDataSource";
import {NavigationModel} from "../Model/NavigationModel";
import {IntroductionModel} from "../Model/IntroductionModel";
import {AboutModel} from "../Model/AboutModel";
import {FooterModel} from "../Model/FooterModel";
import {DataHandler} from "./DataHandler";
import {ContactModel} from "../Model/ContactModel";
import {SkillsModel} from "../Model/SkillsModel";
import {EducationModel} from "../Model/EducationModel";
import {ProjectsModel} from "../Model/ProjectsModel";

/**
 * Repository class responsible for managing data retrieval from file sources.
 */
export class FileRepository{
    // Data source for retrieving data from files
    private dataSource: FileDataSource

    //Data handlers for different types of data
    private NavData : DataHandler<NavigationModel>
    private IntroData : DataHandler<IntroductionModel>
    private AboutData : DataHandler<AboutModel>
    private FooterData : DataHandler<FooterModel>
    private ContactData : DataHandler<ContactModel>
    private SkillsData : DataHandler<SkillsModel>
    private EducationData : DataHandler<EducationModel>
    private ProjectsData : DataHandler<ProjectsModel>

    /**
     * Constructor for FileRepository
     * Initializes data handlers and loads data on initialization
     * @param lang -  The language used for data retrieval
     */
    constructor(lang: string) {
        // Initialize the data source with the specified language
        this.dataSource = new FileDataSource(lang)

        // Initialize data handlers with functions to fetch data from the data source
        this.NavData = new DataHandler<NavigationModel>(() => this.dataSource.getNavInfo())
        this.IntroData = new DataHandler<IntroductionModel>(() => this.dataSource.getIntro())
        this.AboutData = new DataHandler<AboutModel>(() => this.dataSource.getAbout())
        this.FooterData = new DataHandler<FooterModel>(() => this.dataSource.getFooter())
        this.ContactData = new DataHandler<ContactModel>(() => this.dataSource.getContact())
        this.SkillsData = new DataHandler<SkillsModel>(() => this.dataSource.getSkills())
        this.EducationData = new DataHandler<EducationModel>(() => this.dataSource.getEducation())
        this.ProjectsData = new DataHandler<ProjectsModel>(() => this.dataSource.getProjects())

        // Load data on initialization
        this.loadData()
    }

    // Methods to retrieve observables for different types of data

    getNavData() {
        return this.NavData.getObservable
    }
    getIntroData() {
        return this.IntroData.getObservable
    }
    getAboutData(){
        return this.AboutData.getObservable
    }
    getFooterData(){
        return this.FooterData.getObservable
    }
    getContactData(){
        return this.ContactData.getObservable
    }

    getSkillsData(){
        return this.SkillsData.getObservable
    }

    getEducationData(){
        return this.EducationData.getObservable
    }
    getProjectsData(){
        return this.ProjectsData.getObservable
    }

    /**
     * Changes the language used for data retrieval and reloads data accordingly.
     * @param lang - The new language
     */
    changeLang(lang: string) {
        this.dataSource = new FileDataSource(lang);
        this.loadData();
    }

    /**
     * Loads data for all data handlers asynchronously.
     * Called during initialization and language change.
     */
    private loadData() {
        this.NavData.load()
        this.IntroData.load()
        this.AboutData.load()
        this.FooterData.load()
        this.ContactData.load()
        this.ProjectsData.load()
        this.SkillsData.load()
        this.EducationData.load()
    }
}