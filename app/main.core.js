goog.provide('main.core');
main.core.app_root = (function main$core$app_root(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.navigation.core.navigation_container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),react_native.navigation.core.navigation_ref], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.navigation.core.stack,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"screenOptions","screenOptions",1514606713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headerShown","headerShown",-825459264),false], null),new cljs.core.Keyword(null,"initialRouteName","initialRouteName",-1045007445),new cljs.core.Keyword(null,"tabs","tabs",-779855354)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Buy",new cljs.core.Keyword(null,"component","component",1555936782),main.screens.buy.view.view], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Trade",new cljs.core.Keyword(null,"component","component",1555936782),main.screens.trade.view.view], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"component","component",1555936782),main.screens.core.main_screens], null)], null)], null)], null);
});
main.core.init = (function main$core$init(){
return react_native.core.register_component("crypto_rn",main.core.app_root);
});

//# sourceMappingURL=main.core.js.map
