const fs = require('fs-extra');

const exists = async(location)=>{
    try{
        await fs.access(location,fs.constants.F_OK);
        return true;
    }catch(err){
        return false;
    }
}

module.exports = {
    exists
}