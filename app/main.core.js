goog.provide('main.core');
main.core.main_screens = (function main$core$main_screens(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.navigation.core.bottom_tabs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screenOptions","screenOptions",1514606713),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tabBarActiveTintColor","tabBarActiveTintColor",1347110361),"#5cb85c",new cljs.core.Keyword(null,"tabBarInactiveTintColor","tabBarInactiveTintColor",-1165384062),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"headerShown","headerShown",-825459264),false,new cljs.core.Keyword(null,"showLabel","showLabel",-1355105431),true], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Home",new cljs.core.Keyword(null,"component","component",1555936782),main.screens.home.view.view,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabBarIcon","tabBarIcon",443817016),(function (p__22150){
var map__22151 = p__22150;
var map__22151__$1 = cljs.core.__destructure_map(map__22151);
var focused = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22151__$1,new cljs.core.Keyword(null,"focused","focused",1851572115));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22151__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22151__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.icons.m_icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"size","size",1098693007),(24)], null)], null));
})], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Portfolio",new cljs.core.Keyword(null,"component","component",1555936782),main.screens.portfolio.view.view,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabBarIcon","tabBarIcon",443817016),(function (p__22152){
var map__22153 = p__22152;
var map__22153__$1 = cljs.core.__destructure_map(map__22153);
var focused = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22153__$1,new cljs.core.Keyword(null,"focused","focused",1851572115));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22153__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22153__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.icons.m_icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"wallet","wallet",1450743621),new cljs.core.Keyword(null,"size","size",1098693007),(24)], null)], null));
})], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Transactions",new cljs.core.Keyword(null,"component","component",1555936782),main.screens.transactions.view.view,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabBarIcon","tabBarIcon",443817016),(function (p__22154){
var map__22155 = p__22154;
var map__22155__$1 = cljs.core.__destructure_map(map__22155);
var focused = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22155__$1,new cljs.core.Keyword(null,"focused","focused",1851572115));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22155__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22155__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.icons.m_icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"swap-horizontal","swap-horizontal",1799136773),new cljs.core.Keyword(null,"size","size",1098693007),(24)], null)], null));
})], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Prices",new cljs.core.Keyword(null,"component","component",1555936782),main.screens.prices.view.view,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabBarIcon","tabBarIcon",443817016),(function (p__22156){
var map__22157 = p__22156;
var map__22157__$1 = cljs.core.__destructure_map(map__22157);
var focused = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22157__$1,new cljs.core.Keyword(null,"focused","focused",1851572115));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22157__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22157__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.icons.m_icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"chart-timeline-variant","chart-timeline-variant",1424708289),new cljs.core.Keyword(null,"size","size",1098693007),(24)], null)], null));
})], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Settings",new cljs.core.Keyword(null,"component","component",1555936782),main.screens.settings.view.view,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabBarIcon","tabBarIcon",443817016),(function (p__22158){
var map__22159 = p__22158;
var map__22159__$1 = cljs.core.__destructure_map(map__22159);
var focused = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22159__$1,new cljs.core.Keyword(null,"focused","focused",1851572115));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22159__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22159__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.icons.m_icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"cog","cog",1782475608),new cljs.core.Keyword(null,"size","size",1098693007),(24)], null)], null));
})], null)], null)], null)], null);
});
main.core.app_root = (function main$core$app_root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.navigation.core.navigation_container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.navigation.core.stack,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screenOptions","screenOptions",1514606713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headerShown","headerShown",-825459264),false], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"component","component",1555936782),main.core.main_screens], null)], null)], null)], null);
});
main.core.init = (function main$core$init(){
return react_native.core.register_component("crypto_rn",main.core.app_root);
});

//# sourceMappingURL=main.core.js.map
