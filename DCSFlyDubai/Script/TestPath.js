var Common = require("Common");
var ReadDataFromTextFile = require("ReadDataFromTextFile");

function Check(){
var path = Common.GetGenericFilePath();
var config = ReadDataFromTextFile.ReadData(path + "configapis.txt");
var k = 3;
}