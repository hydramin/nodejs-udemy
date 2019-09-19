const events = require('events');
const inherits = require('util').inherits;

function ParserMulti() {
}

inherits(ParserMulti, events.EventEmitter);

ParserMulti.prototype.parser = function(req) {

    const stream = [];
    req.on("data", (chunk) => {
        stream.push(chunk);        
    })

    const body = {};

    req.on("end", () => {
        const buff = Buffer.concat(stream); 

        const str = buff.toString().split('&');
        str.forEach((pair) => {
            console.log(pair);
            pair = pair.replace(/\+/g," ");            
            pair = decodeURIComponent(pair);
            const s = pair.split('=');
            body[s[0]] = s[1];
        });
       this.emit('body', body);  
    })
    
}



module.exports = {parser: new ParserMulti()}
