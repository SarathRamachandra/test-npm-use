const util = require("@SarathRamachandra/test-npm-repo");
console.log("Addition of two numbers 10 and 5 = "+util.add(10, 5));
console.log("Subtraction of two numbers 10 and 5 = "+util.sub(10, 5));

const umd = require("@SarathRamachandra/test-npm-umd");
console.info("umd = ",umd);
console.log("umd version = "+umd.Constants.version);
console.log("umd client fetch indentifier = "+new umd.Client("Test").fetchUniqueNumber());