/**
 * Model class representing education information.
 * Contains details such as section label, education data, and certificate data.
 */
export class EducationModel{
    secLabel:string;
    education:EducationData[];
    certificates:CertificateData[];

    /**
     * Constructor for EducationModel
     * @param secLabel - The label for the education section
     * @param education - An array of education data
     * @param certificates - An array of certificates data
     */
    constructor(secLabel:string, education: EducationData[], certificates:CertificateData[]) {
        this.secLabel = secLabel;
        this.education = education;
        this.certificates = certificates;
    }
}

/**
 * Model class representing education data.
 * Contains details such as degree, institution, and completion date.
 */
export class EducationData{
    degree:string;
    institution:string;
    completionDate:string;

    /**
     * Constructor for EducationData
     * @param degree - The degree earned
     * @param institution - The institution attended
     * @param completionDate - The date of completion
     */
    constructor(degree:string, institution:string, completionDate:string) {
        this.degree = degree;
        this.institution = institution;
        this.completionDate = completionDate;
    }
}

/**
 * Model class representing certificate data.
 * Contains details such as title, completion date, link, and label.
 */
export class CertificateData{
    title:string;
    completionDate:string;
    link:string;
    label:string;

    /**
     * Constructor for CertificateData
     * @param title - The title of the certificate
     * @param completionDate - The date of completion
     * @param link - The link to the certificate
     * @param label - The label for the certificate link
     */
    constructor(title:string, completionDate:string, link:string, label:string) {
        this.title = title;
        this.completionDate = completionDate;
        this.link = link;
        this.label = label;
    }
}