import XMLHttpRequest from "xhr2";

function xhrApiRequester() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
    console.log("Opened ... ", xhr.readyState);

    xhr.onProgress = function () {
        console.log('Loading ... ', xhr.readyState);
    }

    xhr.onload = function() {

        console.log("Done ... ", xhr.readyState);
        if(xhr.status === 200){
            // document.getElementById(elementId).textContent = JSON.stringify(JSON.parse(xhr.responseText), null, 2);
            console.log(JSON.stringify(JSON.parse(xhr.responseText), null, 2));
        } else {
            // document.getElementById(elementId).textContent = `Error in Api call: \n API call Status code: ${xhr.status} \n Error message: ${xhr.statusText}`;
            console.log(`Error in Api call: \n API call Status code: ${xhr.status} \n Error message: ${xhr.statusText}`);
        }
    }

    xhr.onerror = function() {
        // document.getElementById(elementId).textContent = "Network Error ....";
        console.log("Network Error ....");
    }

    xhr.send();

    
}

xhrApiRequester();