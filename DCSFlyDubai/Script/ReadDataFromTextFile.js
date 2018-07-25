function ReadData(FilePath){
    var DataObject = {};
    if(!aqFile.Exists(FilePath)){
        Log.Message("The file does not exists");
    }
    else{
        DataObject = JSON.parse(aqFile.ReadWholeTextFile(FilePath, aqFile.ctANSI));
        return DataObject;
    }
}

module.exports.ReadData = ReadData;