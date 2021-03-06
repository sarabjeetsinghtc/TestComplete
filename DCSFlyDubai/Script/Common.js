﻿function SafeClickObject(Object,MaxTimeoutInSeconds){
             if(IsObjectVisibleOnScreen(Object,MaxTimeoutInSeconds)){             
               if(Object.WaitProperty("Enabled",true)){
                      Object.Click();
                      Log.Message("The object "+ Object.FullName+" has been clicked successfully");
               }
               else{
                      Log.Message("The object " + Object.FullName+" is disabled, unable to perform click operation");
               }
            } 
}

function IsObjectVisibleOnScreen(Object, MaxTimeoutInSeconds){
              var sFlag=false;              
              if(Object.WaitProperty("VisibleOnScreen",true,MaxTimeoutInSeconds*1000)){
                   Log.Message("Required Object "+Object.FullName+" is visible on the screen");
                   sFlag=true;                  
              }
              else{
                      Log.Message(MaxTimeoutInSeconds+" seconds elapsed but the object "+Object.FullName+" does not exist ");
              }
              return sFlag;
}      


function WaitForObject(Object,MaxTimeoutInSeconds){
      try{
        Object.WaitProperty("VisibleOnScreen",true,MaxTimeoutInSeconds*1000);        
      }catch(e){
        Log.Message(e.message);
      }      
}

function SelectDropDownValue(DropDownObject,Value){
        
          if(DropDownObject.VisibleOnScreen && DropDownObject.Enabled){
                DropDownObject.DropDown();
                aqUtils.Delay(1000);
                DropDownObject.ClickItem(Value);
                DropDownObject.CloseUp();
                Log.Message(Value +" is selected from the "+DropDownObject.FullName+" dropdown");
          }
          else{
                Log.Message("Unable to select value from the dropdown"+DropDownObject.FullName);
          }
          aqUtils.Delay(1000);
}

function SafeSetText(TextBoxField,TimeoutInSeconds,EnterString){
    if(IsObjectVisibleOnScreen(TextBoxField,TimeoutInSeconds))
         if(TextBoxField.WaitProperty("Enabled",true)){
             TextBoxField.Clear();
             TextBoxField.SetText(EnterString);
             Log.Message("Text has been entered into the textbox "+TextBoxField.FullName);
         }
         else{
              Log.Message("Unable to enter text in "+TextBoxField.FullName+" field");
         }
}

function SafeKeys(Field,TimeoutInSeconds,EnterString){
      if(IsObjectVisibleOnScreen(Field,TimeoutInSeconds)){
          if(Field.WaitProperty("Enabled",true)){
              Field.Clear();
              Field.Keys(EnterString);
              Log.Message("Password has been entered in "+Field.FullName);
          }
          else{
              Log.Message("Unable to enter the password in "+Field.FullName);
          }
      }
}

//returns string with multiple seat/seq numbers separated by / which can be used while boarding multiple passengers
//Array containing seat numbers to be given as input  
function GetSeatOrSeqNumbersFromArray(SeatArray){
    var s = "";
    for(var i=0;i<SeatArray.length;i++){
        if(i != SeatArray.length-1){
            s=s+SeatArray[i]+"/";
        }
        else{
           s=s+SeatArray[i]; 
        }
    }
   return s;
}

function GetGenericFilePath(){
  if(ProjectSuite.Variables.FilePath.length<=0){
    ProjectSuite.Variables.FilePath = aqFileSystem.GetFolderInfo(Project.Path).ParentFolder.Path + "Data\\";
  }
  return ProjectSuite.Variables.FilePath;
}

module.exports.IsObjectVisibleOnScreen = IsObjectVisibleOnScreen;
module.exports.SafeSetText = SafeSetText;
module.exports.SafeKeys = SafeKeys;
module.exports.SafeClickObject = SafeClickObject;
module.exports.SelectDropDownValue = SelectDropDownValue;
module.exports.IsObjectVisibleOnScreen = IsObjectVisibleOnScreen;
module.exports.WaitForObject = WaitForObject;
module.exports.GetSeatOrSeqNumbersFromArray=GetSeatOrSeqNumbersFromArray;
module.exports.GetGenericFilePath = GetGenericFilePath; 