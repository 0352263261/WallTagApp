import { AppServer } from "../common/Constants";

class APIManager {
    login(username, password, loginCallback) {
        let baseUrl = AppServer.SERVER_HTTP + AppServer.SERVER_HTTP_URL + AppServer.API_LOGIN
        fetch(baseUrl, {
            "method": "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                'phoneOrEmail': username,
                'password': password
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                loginCallback(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

const apiManager = new APIManager();
export default apiManager;