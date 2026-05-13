// import XMLHttpRequest from "xhr2";

// function xhrApiRequester() {
//     const xhr = new XMLHttpRequest();

//     return new Promise( (resolve, reject) => {
//         xhr.open("GET", "https://jsonplaceholder.typicode.com/post/1", true);
//         console.log("Opened ... ", xhr.readyState);

//         xhr.onProgress = function () {
//             console.log('Loading ... ', xhr.readyState);
//         }

//         xhr.onload = function() {

//             console.log("Done ... ", xhr.readyState);
//             if(xhr.status === 200){
//                 // document.getElementById(elementId).textContent = JSON.stringify(JSON.parse(xhr.responseText), null, 2);
//                 // console.log(JSON.stringify(JSON.parse(xhr.responseText), null, 2));
//                 resolve(JSON.stringify(JSON.parse(xhr.responseText), null, 2));
//             } else {
//                 // document.getElementById(elementId).textContent = `Error in Api call: \n API call Status code: ${xhr.status} \n Error message: ${xhr.statusText}`;
//                 // console.log(`Error in Api call: \n API call Status code: ${xhr.status} \n Error message: ${xhr.statusText}`);
//                 reject(`Error in Api call: \n API call Status code: ${xhr.status} \n Error message: ${xhr.statusText}`);
//             }
//         }

//         xhr.onerror = function() {
//             // document.getElementById(elementId).textContent = "Network Error ....";
//             console.log("Network Error ....");
//         }

//         xhr.send();
//     })

   

    
// }

// xhrApiRequester()
//     .then(data => console.log(data))
//     .catch(err => console.log(`Promise Rejection Error: ${err}`));


class test {
    promiseExample(){
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                resolve("promise resolved ... ");
            }, 2000);
            //reject("promise rejected ... ")
        })
    }
}

let obj = new test();
obj.promiseExample().then( data => console.log(data)).catch(err => console.error(err));