const { test,expect,describe } = require("@jest/globals");
const {exists,Logger} = require(".");
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

    test("log",async()=>{
        let t = new Logger();
        t.info({"message":"test"});
        t.info(1);
        t.info("a");
        t.info(["a"]);
        t.info("a",["c"],{"message":"test"},1,"gabung");
    });
});