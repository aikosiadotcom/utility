const { test,expect,describe } = require("@jest/globals");
const {exists} = require(".");
const path = require("path");

describe("check if file or folder exists",()=>{
    test("file exists",async()=>{
        expect(await exists(path.join(process.cwd(),'index.js'))).toBeTruthy();
    });

    test("folder exists",async()=>{
        expect(await exists(path.join(process.cwd(),'node_modules'))).toBeTruthy();
    });

    test("file not exists",async()=>{
        expect(await exists(path.join(process.cwd(),'index1.js'))).toBeFalsy();
    });

    test("folder not exists",async()=>{
        expect(await exists(path.join(process.cwd(),'node_modules1'))).toBeFalsy();
    });
});