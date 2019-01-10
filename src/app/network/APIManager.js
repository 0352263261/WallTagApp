import { AppServer } from "../common/Constants";

class APIManager {
    login(username, password, loginCallback) {
        let baseUrl = AppServer.SERVER_HTTP_URL + AppServer.API_LOGIN
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

    register(registerCallBack, email, password) {
        let baseUrl = AppServer.SERVER_HTTP_URL + AppServer.API_REGISTER
        fetch(baseUrl, {
            "method": "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                'emailOrPhone': email,
                'password': password
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                registerCallBack(responseJson)
            })
            .catch((error) => {
                console.error(error);
            })
    }
    
    approve_place(id_user, id_place, start_date, end_date, note, posterURL, contract_callback){
        let baseUrl = AppServer.SERVER_HTTP_URL + AppServer.API_CONTRACT
        fetch(baseUrl,{
            "method" : "POST",
            headers:{
                'Authorization': id_user,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                'endDate': end_date,
                'idPlace': id_place,
                'note': note,
                'posterUrl': posterURL,
                'startDate': start_date
            })
        })
        .then((response) => response.json())
        .then((responseJson)=>{
            contract_callback(responseJson)
        })
        .catch((error)=>{
            console.error(error);
        })
    }

    request_poster(getPosterCallBack) {
        let baseUrl = AppServer.SERVER_HTTP_URL + AppServer.API_REQUEST_POSTER
        fetch(baseUrl, {
            "method": "GET",
            headers: {
                'Authorization': 10000,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                getPosterCallBack(responseJson)
            })
            .catch((error => {
                console.error(error)
            }))
    }

    change_favorite_poster(posterID, changePosterCallBack, method) {
        let baseUrl = AppServer.SERVER_HTTP_URL + AppServer.API_FAVORITE_POSTER + posterID
        fetch(baseUrl, {
            "method": method,
            headers: {
                'Authorization': 10000,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                changePosterCallBack(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    refresh_favorite_poster(favoritePosterCallback) {
        let baseUrl = AppServer.SERVER_HTTP_URL + AppServer.API_REFRESH_FAVORITE
        fetch(baseUrl, {
            "method": "GET",
            headers: {
                'Authorization': 10000,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                favoritePosterCallback(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    find_place(findPlaceCallback, search_style) {
        let baseUrl = AppServer.SERVER_HTTP_URL + AppServer.API_FIND_PLACE + search_style;
        fetch(baseUrl, {
            "method": "GET",
            headers: {
                'Authorization': 10000,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                findPlaceCallback(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

const apiManager = new APIManager();
export default apiManager;