function ReadCredentails(){
    var CredObject = {};
    var FilePath = "C:\\Users\\pramati\\Desktop\\DCSCredentials.txt";
    if(!aqFile.Exists(FilePath)){
        Log.Message("The file does not exists");
    }
    else{
        CredObject = JSON.parse(aqFile.ReadWholeTextFile(FilePath, aqFile.ctANSI));
        return CredObject;
    }
}
module.exports.ReadCredentails = ReadCredentails;