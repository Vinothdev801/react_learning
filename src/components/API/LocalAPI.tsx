
const BASE_URL = "http://localhost:3000";

export const getApi = (endpoint: String) => {
    const xhr = new XMLHttpRequest();

    return new Promise<any>((resolve, reject) => {

        xhr.open("GET", `${BASE_URL}/${endpoint}`, true);

        xhr.onload = function() {
            
                if(xhr.status === 200){
                    resolve ({
                        httpStatus: xhr.status,
                        httpMsg: xhr.statusText,
                        data: JSON.stringify(JSON.parse(xhr.responseText)),
                        resoponseType: xhr.responseType,
                        responseXML: xhr.responseXML,
                        responseURL: xhr.responseURL
                    })
                } else {
                    reject(`Error Occured in Api call \n Http-code: ${xhr.status} | Http-status: ${xhr.statusText}`)
                }
            }

        xhr.onerror = function() {
            console.log("Network Error...");
        }

        xhr.send();
    })
}