import React, {useEffect} from "react";
import NavigationBar from "../components/NavigationBar";
import Introduction from "../components/Introduction";
import Footer from "../components/Footer";
import 'normalize-scss'
import '../styles/ViewStyle.scss'
import PortfolioViewModel from "../ViewModel/PortfolioViewModel";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import {ToastContainer} from "react-toastify";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Projects from "../components/Projects";

/**
 * PortfolioView component
 *
 * This component represents the main view of the portfolio application. It renders
 * each section(e.g., Introduction, About Me, Education, ...) of the portfolio.
 */
export default function PortfolioView() {

    const viewModel = PortfolioViewModel();

    useEffect(() => {
        const handleResize = () => {
            // Adjust overflow based on showNavbar
            if (viewModel.showNavbar) {
                // Set showNavbar to false when the window is resized
                viewModel.setShowNavbar(false);
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = ''; // Enable scroll when showNavbar is false
            }
        };

        // Initial check on mount
        handleResize();

        // Attach the event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up: remove event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
            document.body.style.overflow = ''; // Ensure scroll is enabled when component is unmounted
        };
    }, [viewModel.setShowNavbar]);

    return (
        <main className="portView">
            <NavigationBar data={viewModel.navData} onClick={viewModel.changeLanguage} currentLang={viewModel.lang}
                           handleNavBar={viewModel.handleNavbar} showNavbar={viewModel.showNavbar}/>
            <Introduction data={viewModel.introData}/>
            <AboutMe data={viewModel.aboutData} handleSummary={viewModel.handleSummary}
                     showSummary={viewModel.showSummary}/>
            <Education data={viewModel.eduData}/>
            <Skills data={viewModel.skillsData}/>
            <Projects data={viewModel.projectsData} toggleProjectList={viewModel.toggleProjectList}
                      showFullList={viewModel.showFullList} handleProject={viewModel.handleProject}
                      selectedProject={viewModel.selectedProject} closeDesc={viewModel.closeDesc}
                      handleImg={viewModel.handleImg} selectedImg={viewModel.selectedImg}
            />
            <Contact data={viewModel.contactData} form={viewModel.form} sendEmail={viewModel.sendEmail}/>
            <Footer data={viewModel.footerData}/>
            <ToastContainer/>
        </main>
    );
}