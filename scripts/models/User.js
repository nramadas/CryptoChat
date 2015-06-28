import AsyncModel from "./AsyncModel";

class User extends AsyncModel {}
User.prototype.ENDPOINT = "/user";
User.prototype.PROPERTIES = ["id", "username"];

export default User;
