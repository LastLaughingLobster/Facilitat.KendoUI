export class UserDTO {
    constructor(firstName, lastName, email, document, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.document = document;
        this.password = password;
    }
}