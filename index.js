const fs = require('fs-extra');
const Log = require('log-to-file');
const path = require("path");

const exists = async(location)=>{
    try{
        await fs.access(location,fs.constants.F_OK);
        return true;
    }catch(err){
        return false;
    }
}

class Logger{
    constructor(opts = {}){
        let {saveTo} = opts;

        if(!saveTo){
            this.saveTo = path.join(process.cwd(),'app.log');
        }else{
            this.saveTo = saveTo;
        }
    }

    info(...message){
        message = JSON.stringify(message);

        Log(message,this.saveTo);
    }
}

module.exports = {
    exists,Logger
}