function waitingFn(timeInMs) {
    const futureTime = Date.now() +timeInMs;

    while(futureTime > Date.now()){
        //waiting
    }

}

waitingFn(3000);
debugger;
console.log("Function call has just ended");