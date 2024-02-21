/**
 * Model class representing the contact information and form details.
 * Contains instances of ContactInfoModel and FormInfoModel.
 */
export class ContactModel{
    contact:ContactInfoModel;
    form:FormInfoModel;

    /**
     * Constructor for ContactModel
     * @param contact - The contact information model
     * @param form - The form information model
     */
    constructor(contact:ContactInfoModel, form: FormInfoModel) {
        this.contact = contact;
        this.form = form;
    }
}

/**
 * Model class representing contact information.
 * Contains details such as section label, button label, and response messages.
 */
export class ContactInfoModel{
    secLabel:string;
    btnLabel:string;
    responseSuccess:string;
    responseFail:string;

    /**
     * Constructor for ContactInfoModel
     * @param secLabel - The label for the contact section
     * @param btnLabel - The label for the contact button
     * @param responseSuccess - The success message for contact form submission
     * @param responseFail - The error message for contact form submission failure
     */
    constructor(secLabel:string, btnLabel:string, responseSuccess:string, responseFail:string) {
        this.secLabel = secLabel;
        this.btnLabel = btnLabel;
        this.responseSuccess = responseSuccess;
        this.responseFail = responseFail;
    }
}

/**
 * Model class representing form information.
 * Contains details such as input field names and submit button label.
 */
export class FormInfoModel{
    name:string;
    email:string;
    subject:string;
    message:string;
    submit:string;

    /**
     * Constructor for FormInfoModel
     * @param name - The label for the name input field
     * @param email - The label for the email input field
     * @param subject - The label for the subject input field
     * @param message - The label for the message input field
     * @param submit - The label for the submit button
     */
    constructor(name:string, email:string, subject:string, message:string, submit:string) {
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
        this.submit = submit;
    }
}