gdjs.HomeCode = {};
gdjs.HomeCode.GDlogoObjects1= [];
gdjs.HomeCode.GDlogoObjects2= [];
gdjs.HomeCode.GDNewObjectObjects1= [];
gdjs.HomeCode.GDNewObjectObjects2= [];

gdjs.HomeCode.conditionTrue_0 = {val:false};
gdjs.HomeCode.condition0IsTrue_0 = {val:false};
gdjs.HomeCode.condition1IsTrue_0 = {val:false};


gdjs.HomeCode.eventsList0 = function(runtimeScene) {

{


gdjs.HomeCode.condition0IsTrue_0.val = false;
{
gdjs.HomeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.HomeCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "web", "https://apps.code4freedom.net/android/categories.html", gdjs.evtTools.window.getWindowInnerWidth(), gdjs.evtTools.window.getWindowInnerHeight(), 0, 0, true, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.HomeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HomeCode.GDlogoObjects1.length = 0;
gdjs.HomeCode.GDlogoObjects2.length = 0;
gdjs.HomeCode.GDNewObjectObjects1.length = 0;
gdjs.HomeCode.GDNewObjectObjects2.length = 0;

gdjs.HomeCode.eventsList0(runtimeScene);
return;

}

gdjs['HomeCode'] = gdjs.HomeCode;
