goog.provide('main.core');
main.core.main_screens = (function main$core$main_screens(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.react_native.navigation.core.bottom_tabs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screenOptions","screenOptions",1514606713),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tabBarActiveTintColor","tabBarActiveTintColor",1347110361),"#5cb85c",new cljs.core.Keyword(null,"tabBarInactiveTintColor","tabBarInactiveTintColor",-1165384062),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"headerShown","headerShown",-825459264),false,new cljs.core.Keyword(null,"showLabel","showLabel",-1355105431),true], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Home",new cljs.core.Keyword(null,"component","component",1555936782),main.screens.home.view.view,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabBarIcon","tabBarIcon",443817016),(function (p__19114){
var map__19115 = p__19114;
var map__19115__$1 = cljs.core.__destructure_map(map__19115);
var focused = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19115__$1,new cljs.core.Keyword(null,"focused","focused",1851572115));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19115__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19115__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.icons.m_icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null));
})], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Portfolio",new cljs.core.Keyword(null,"component","component",1555936782),main.screens.portfolio.view.view,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabBarIcon","tabBarIcon",443817016),(function (p__19116){
var map__19117 = p__19116;
var map__19117__$1 = cljs.core.__destructure_map(map__19117);
var focused = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19117__$1,new cljs.core.Keyword(null,"focused","focused",1851572115));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19117__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19117__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.icons.m_icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"wallet","wallet",1450743621),new cljs.core.Keyword(null,"size","size",1098693007),(24)], null)], null));
})], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Transactions",new cljs.core.Keyword(null,"component","component",1555936782),main.screens.transactions.view.view,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabBarIcon","tabBarIcon",443817016),(function (p__19118){
var map__19119 = p__19118;
var map__19119__$1 = cljs.core.__destructure_map(map__19119);
var focused = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19119__$1,new cljs.core.Keyword(null,"focused","focused",1851572115));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19119__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19119__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.icons.m_icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"swap-horizontal","swap-horizontal",1799136773),new cljs.core.Keyword(null,"size","size",1098693007),(24)], null)], null));
})], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Prices",new cljs.core.Keyword(null,"component","component",1555936782),main.screens.prices.view.view,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabBarIcon","tabBarIcon",443817016),(function (p__19120){
var map__19121 = p__19120;
var map__19121__$1 = cljs.core.__destructure_map(map__19121);
var focused = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19121__$1,new cljs.core.Keyword(null,"focused","focused",1851572115));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19121__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19121__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.icons.m_icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"chart-timeline-variant","chart-timeline-variant",1424708289),new cljs.core.Keyword(null,"size","size",1098693007),(24)], null)], null));
})], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Settings",new cljs.core.Keyword(null,"component","component",1555936782),main.screens.settings.view.view,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabBarIcon","tabBarIcon",443817016),(function (p__19122){
var map__19123 = p__19122;
var map__19123__$1 = cljs.core.__destructure_map(map__19123);
var focused = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19123__$1,new cljs.core.Keyword(null,"focused","focused",1851572115));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19123__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19123__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.icons.m_icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"size","size",1098693007),(24)], null)], null));
})], null)], null)], null)], null);
});
main.core.app_root = (function main$core$app_root(){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.react_native.navigation.core.navigation_container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.react_native.navigation.core.stack,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screenOptions","screenOptions",1514606713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headerShown","headerShown",-825459264),false], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"component","component",1555936782),main.core.main_screens], null)], null)], null)], null);
});
main.core.init = (function main$core$init(){
return main.react_native.core.register_component("crypto_rn",main.core.app_root);
});

//# sourceMappingURL=main.core.js.map
