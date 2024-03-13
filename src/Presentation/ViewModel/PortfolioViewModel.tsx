import React, {useState, useEffect, useRef} from "react";
import {FileRepository} from "../../Data/Repository/FileRepository";
import {CallState} from "../../Data/CallData";
import {NavigationModel} from "../../Data/Model/NavigationModel";
import {combineLatest} from "rxjs";
import {IntroductionModel} from "../../Data/Model/IntroductionModel";
import {AboutModel} from "../../Data/Model/AboutModel";
import {FooterModel} from "../../Data/Model/FooterModel";
import {ContactModel} from "../../Data/Model/ContactModel";
import emailjs from "@emailjs/browser";
import {SkillsModel} from "../../Data/Model/SkillsModel";
import {EducationModel} from "../../Data/Model/EducationModel";
import {ProjectsModel} from "../../Data/Model/ProjectsModel";
import {Slide, toast} from "react-toastify";

/**
 * Enum to represent supported languages in the portfolio application.
 */
enum Langauge {
    en = 'en',
    de = 'de',
}

/**
 * PortfolioViewModel function component. This view model manages the state and
 * logic related to the portfolio application.
 */
export default function PortfolioViewModel() {

    const [isLoading, setLoading] = useState(false);
    const [error, setErrorState] = useState(false);
    const [lang, setLanguage] = useState(Langauge.en);
    const [showNavbar, setShowNavbar] = useState(false);
    const [showSummary, setShowSummary] = useState(false);
    const [showFullList, setFullList] = useState(false);
    const [sendingEmail, setSendingEmail] = useState(false);
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [selectedImg, setSelectedImg] = useState<number>(0);
    const [navData, setNavData] = useState<NavigationModel | null>(null);
    const [introData, setIntroData] = useState<IntroductionModel | null>(null);
    const [aboutData, setAboutData] = useState<AboutModel | null>(null);
    const [footerData, setFooterData] = useState<FooterModel | null>(null);
    const [contactData, setContactData] = useState<ContactModel | null>(null);
    const [skillsData, setSkillsData] = useState<SkillsModel | null>(null);
    const [eduData, setEduData] = useState<EducationModel | null>(null);
    const [projectsData, setProjectsData] = useState<ProjectsModel | null>(null);
    const rep = useRef<FileRepository | null>(null);
    const form = useRef<HTMLFormElement | null>(null);

    // useEffect hook to fetch initial data
    useEffect(() => {
        rep.current = new FileRepository('en')
        // Subscription to combineLatest observable
        const subscription = combineLatest([rep.current.getNavData(), rep.current.getIntroData(), rep.current.getAboutData(),
            rep.current.getFooterData(), rep.current.getContactData(), rep.current.getSkillsData(), rep.current.getEducationData(), rep.current.getProjectsData()])
            .subscribe((result) => {
                const stateList = result.map(res => res.state)
                const loading = stateList.find(state => state === CallState.LOADING) !== null
                const error = stateList.find(state => state === CallState.ERROR) !== null
                result.map(res => res.data).forEach(data => {
                    if (data instanceof NavigationModel) {
                        setNavData(data)
                    }
                    if (data instanceof IntroductionModel) {
                        setIntroData(data);
                    }
                    if (data instanceof AboutModel) {
                        setAboutData(data);
                    }
                    if (data instanceof FooterModel) {
                        setFooterData(data);
                    }
                    if (data instanceof ContactModel) {
                        setContactData(data);
                    }
                    if (data instanceof SkillsModel) {
                        setSkillsData(data);
                    }
                    if (data instanceof EducationModel) {
                        setEduData(data);
                    }
                    if (data instanceof ProjectsModel) {
                        setProjectsData(data);
                    }
                })
                if (loading) {
                    setLoading(true)
                } else if (error) {
                    setErrorState(true)
                } else {
                    setLoading(false)
                    setErrorState(false)
                }
            })
        // Cleanup function
        return () => {
            subscription.unsubscribe(); // Unsubscribe from observable
        };

    }, []);

    /**
     * Function to notify success to users
     */
    function notifySuccess(){
        toast.success(contactData?.contact.responseSuccess,{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
        });
    }

    /**
     * Function to notify failure to users
     */
    function notifyFail(){
        toast.error(contactData?.contact.responseFail,{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
        });
    }

    /**
     * Function to handle email submission from the contact form using emailjs.
     * @param e - React form event triggered by form submission
     */
    function sendEmail(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(sendingEmail){
            return;
        }
        setSendingEmail(true);
        if (form.current) {
            //checks if required fields are empty
            const userName = form.current.user_name.value.trim();
            const userEmail = form.current.user_email.value.trim();
            const subject = form.current.subject.value.trim();
            const message = form.current.message.value.trim();

            if (!userName || !userEmail || !subject || !message) {
                console.log('Please fill out all required fields.');
                return;
            }

            emailjs
                .sendForm('service_rvlfzhj', 'template_tmolpmo', form.current, 'DA2OeZ26k2IA3G9BL')
                .then((result) => {
                    console.log(result.text);
                    form.current!.reset();
                    notifySuccess(); // Notify success message of submission
                    setSendingEmail(false); // Reset sendingEmail state
                })
                .catch((error) => {
                    console.log(error.text);
                    notifyFail(); // Notify error message of submission failure
                    setSendingEmail(false); // Reset sendingEmail state
                });
        } else {
            console.error('Form reference is null');
        }
    }

    /**
     * Function to change the portfolio language
     */
    function changeLanguage() {
        if(rep.current == null) {
            return
        }
        if (lang === Langauge.en) {
            setLanguage(Langauge.de);
            rep.current.changeLang(Langauge.de);

        } else if (lang === Langauge.de) {
            setLanguage(Langauge.en);
            rep.current.changeLang(Langauge.en);
        } else {
            // Do nothing if the clicked language is the same as the current language
        }
    }

    /**
     * Function to handle the navigation bar visibility
     */
    function handleNavbar(){
        setShowNavbar(!showNavbar);
    }

    /**
     * Function to handle summary visibility of the 'About Me' section
     */
    function handleSummary(){
        setShowSummary(!showSummary);
    }

    /**
     * Function to handle project selection
     * @param id - The id number of the selected project
     */
    function handleProject(id: number){
        setSelectedProject(id);
    }

    /**
     * Function to close the project description
     */
    function closeDesc(){
        setSelectedProject(null);
        setSelectedImg(0);
    }

    /**
     * Function to handle image selection
     * @param imgIndex - The current picture selected index
     */
    function handleImg(imgIndex: number){
        setSelectedImg(imgIndex);
    }

    /**
     * Function to toggle full project list
     */
    function toggleProjectList(){
        setFullList(!showFullList);
    }

    return {
        isLoading,
        navData,
        introData,
        aboutData,
        footerData,
        contactData,
        skillsData,
        projectsData,
        eduData,
        form,
        lang,
        showNavbar,
        showSummary,
        showFullList,
        selectedProject,
        selectedImg,
        handleImg,
        closeDesc,
        handleProject,
        toggleProjectList,
        setShowNavbar,
        handleNavbar,
        handleSummary,
        sendEmail,
        changeLanguage
    }
}
