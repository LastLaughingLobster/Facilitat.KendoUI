import API_CONFIG from "../config/api.js";

const schedulerService = {
    getAllSchedulesByTower: function(towerId) {
        const token = localStorage.getItem('jwt_token');
        return $.ajax({
            url: API_CONFIG.BASE_URL + API_CONFIG.SCHEDULE_BY_TOWER_ENDPOINT + towerId,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
    },
    getAllSchedulesByTowerForGrid: function(towerId) {
        const token = localStorage.getItem('jwt_token');
        return $.ajax({
            url: API_CONFIG.BASE_URL + API_CONFIG.SCHEDULE_BY_TOWER_FOR_GRID_ENDPOINT + towerId,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
    },
    getAllSchedulesByUser: function(userId) {
        const token = localStorage.getItem('jwt_token');
        console.log(token);
        return $.ajax({
            url: API_CONFIG.BASE_URL + API_CONFIG.SCHEDULE_BY_USER_ENDPOINT + userId,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
    },
    deleteSchedule: function(scheduleId) {
        const token = localStorage.getItem('jwt_token');
        return $.ajax({
            url: API_CONFIG.BASE_URL + API_CONFIG.SCHEDULE_DELETE_ENDPOINT + scheduleId,
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
    },
    createSchedule: function(scheduleOrderDTO) {
        const token = localStorage.getItem('jwt_token');
        const data = JSON.stringify(scheduleOrderDTO);
        console.log(data);
        console.log(API_CONFIG.BASE_URL + API_CONFIG.SCHEDULE_CREATE_ENDPOINT);
        return $.ajax({
            url: API_CONFIG.BASE_URL + API_CONFIG.SCHEDULE_CREATE_ENDPOINT, // Add the create endpoint
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(scheduleOrderDTO)
        });
    },
    updateSchedule: function(scheduleOrderDTO) {
        const token = localStorage.getItem('jwt_token');
        const data = JSON.stringify(scheduleOrderDTO);
        console.log(data);
        console.log(API_CONFIG.BASE_URL + API_CONFIG.SCHEDULE_UPDATE_ENDPOINT);
        return $.ajax({
            url: API_CONFIG.BASE_URL + API_CONFIG.SCHEDULE_UPDATE_ENDPOINT, // Add the create endpoint
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(scheduleOrderDTO)
        });
    },
};

export default schedulerService;
