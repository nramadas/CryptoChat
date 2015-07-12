import AsyncModel from "./AsyncModel";

class User extends AsyncModel {
    static PROPERTIES = ["id", "username"]
    static ENDPOINT = "/user"
    static KEY = "user"
}

export default User;
