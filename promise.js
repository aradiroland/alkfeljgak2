function writer(msg){
    console.log(msg);
}

setTimeout(() => writer('kill me'), 1000);

function waitAndWrite(ms){
    return new Promise(function(resolve, reject){
        setTimeout(resolve,ms);
        if (1 == 1){
            reject(uzi);
        }
    })
};

waitAndWrite(1000).then(() => writer('kill me pls'), () => writer('nem sikerült megölni magad'));   