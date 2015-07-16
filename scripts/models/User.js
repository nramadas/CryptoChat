import AsyncModel from "./AsyncModel";

class User extends AsyncModel {
    static PROPERTIES = {
        id: String,
        username: String,
        friends(response) {
            return Array.apply(null, response);
        },
    }

    static ENDPOINT = "/user"
    static KEY = "user"
}

export default User;
