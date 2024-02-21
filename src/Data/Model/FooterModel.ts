/**
 * Model class representing footer information.
 * Contains details such as the footer message.
 */
export class FooterModel{
    message:string;

    /**
     * Constructor for FooterModel
     * @param message - The message to be displayed in the footer
     */
    constructor(message : string) {
        this.message = message;
    }
}