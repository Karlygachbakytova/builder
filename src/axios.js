import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://builder-fd7e5-default-rtdb.firebaseio.com";

export default instance;