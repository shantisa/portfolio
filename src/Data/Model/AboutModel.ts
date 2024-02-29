/**
 * Model class representing information about the 'About' section.
 * Contains details such as section label, summary, and text for showing/hiding content.
 */
export class AboutModel{
    secLabel:string;
    aboutHeader:string;
    aboutSummary:string;
    showText:string;
    lessText:string;
    fullSummary:string;

    /**
     * Constructor for AboutModel
     * @param secLabel - The label for the 'About' section
     * @param aboutHeader - A brief introduction about the author
     * @param aboutSummary - The brief description about the author
     * @param showText - A text display to show more content
     * @param lessText - A text display to show less content
     * @param fullSummary - The full summary about the author
     */
    constructor(secLabel:string, aboutHeader:string, aboutSummary:string, showText:string, lessText:string, fullSummary:string) {
        this.secLabel = secLabel;
        this.aboutHeader = aboutHeader;
        this.aboutSummary = aboutSummary;
        this.showText = showText;
        this.lessText = lessText;
        this.fullSummary = fullSummary;
    }
}