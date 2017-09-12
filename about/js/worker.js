onmessage = function (message) {

    console.log("Got message: ", JSON.stringify(message.data));
    postMessage("Got the message: " + message.data);
};
