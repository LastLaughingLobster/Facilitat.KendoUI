import { UserDTO } from "../dtos/UserDTO.js";
import { LoginDTO } from "../dtos/LoginDTO.js";
import API_CONFIG from "../config/api.js";

const authService = {
    login: function(email, password) {
        const loginDto = new LoginDTO(email, password);
        return $.ajax({
            url: API_CONFIG.BASE_URL + API_CONFIG.LOGIN_ENDPOINT,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(loginDto),
        });
    },
    register: function(user) {
        const userDto = new UserDTO(user.firstName, user.lastName, user.email, user.document, user.password);
        console.log(userDto);
        return $.ajax({
            url: API_CONFIG.BASE_URL + API_CONFIG.REGISTER_ENDPOINT,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(userDto),
        });
    }
};

export default authService;
