function LaunchFlyDubaiDCSApp(){
        var OpenFlyDubaiApp = TestedApps.flydubai_DCS_UI.Run(1,false,5000);
        if(OpenFlyDubaiApp.Exists && OpenFlyDubaiApp.VisibleOnScreen){
                Log.Message("Application has been launched successfully");
        }
        else{
                Log.Message("Problem launching the application");
        }
}
function TerminateFlyDubaiDCSApp(){
      var CloseFlyDubai = TestedApps.flydubai_DCS_UI.Terminate();
      aqUtils.Delay(2000);
      if(!CloseFlyDubai.Exists){
            Log.Message("App has been closed");
      }
      else{
            Log.Message("Unable to close the application");
      }
}
module.exports.LaunchFlyDubaiDCSApp = LaunchFlyDubaiDCSApp;
module.exports.TerminateFlyDubaiDCSApp = TerminateFlyDubaiDCSApp;