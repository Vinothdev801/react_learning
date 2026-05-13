console.log("Event Loop starts.");

setTimeout(() => {
    console.log("Executing macros task from queue");
}, 1000);

Promise.resolve(() => {
    return {
        data: "sample",
        msg: "sample promise"
    }
}).then(response => console.log(response()))
 .catch(err => console.error(err))
 .finally(() => console.log("micro task queue execution finishes."))

console.log("initial call stack execution completes...");