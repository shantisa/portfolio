/**
 * Model class representing introduction information.
 * Contains details such as the role.
 */
export class IntroductionModel{
    role:string;

    /**
     * Constructor for IntroductionModel
     * @param role - The position role of the author
     */
    constructor(role: string) {
        this.role = role;
    }
}