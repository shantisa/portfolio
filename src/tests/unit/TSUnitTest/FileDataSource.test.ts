import {FileDataSource} from "../../../Data/DataSource/FileDataSource";

describe("test FileDataSource", () => {
    let englishFile : FileDataSource;
    let deutschFile : FileDataSource;
    beforeEach(() => {
        englishFile = new FileDataSource('en');
        deutschFile = new FileDataSource('de');
    });

    it('checks if english navigation bar info is correct ', async () => {
        const data = await englishFile.getNavInfo();
        expect(data).toEqual({
            home: 'Home',
            aboutMe: 'About Me',
            skills: 'Skills',
            education: 'Education',
            projects: 'Projects',
            resume: 'Resume',
            contact: 'Contact',
        });
    })

    it('checks if deutsch navigation bar info is correct ', async () => {
        const data = await deutschFile.getNavInfo();
        expect(data).toEqual({
            home: "Startseite",
            aboutMe: "Über mich",
            skills: "Fähigkeiten",
            education: "Bildung",
            projects: "Projekte",
            resume: "Lebenslauf",
            contact: "Kontakt",
        });
    })

})