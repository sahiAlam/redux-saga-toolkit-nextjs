const BASE_URL = "https://jsonplaceholder.typicode.com";


// User Apis Endpoints
export const USERS_ENDPOINT = {
    USERS: `${BASE_URL}/users`,
    USER_BY_ID: (userId: number) => `${BASE_URL}/users/${userId}` 
}