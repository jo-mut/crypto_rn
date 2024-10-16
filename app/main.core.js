goog.provide('main.core');
main.core.tab_icons = new cljs.core.PersistentArrayMap(null, 5, ["home","home","portfolio","portfolio","transactions","transactions","prices","prices","settings","settings"], null);
main.core.screen_options = (function main$core$screen_options(options){
var map__21227 = cljs_bean.core.__GT_clj(options);
var map__21227__$1 = cljs.core.__destructure_map(map__21227);
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21227__$1,new cljs.core.Keyword(null,"route","route",329891309));
return ({"tabBarIcon": (function (data){
var map__21228 = cljs_bean.core.__GT_clj(data);
var map__21228__$1 = cljs.core.__destructure_map(map__21228);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21228__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(main.core.tab_icons,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(route));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.react_native.core.ion_icons,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),icon,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"size","size",1098693007),(30)], null)], null));
})});
});
main.core.main_screens = (function main$core$main_screens(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.navigation.bottom_tabs.bottom_tab,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"screenOptions","screenOptions",1514606713),main.core.screen_options,new cljs.core.Keyword(null,"tabBarOptions","tabBarOptions",-837723538),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"activeTintColor","activeTintColor",1211486730),"#5cb85c",new cljs.core.Keyword(null,"inactiveTintColor","inactiveTintColor",-583273431),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"showLabel","showLabel",-1355105431),true], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"component","component",1555936782),main.home.view.view], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"portfolio","portfolio",957568598),new cljs.core.Keyword(null,"component","component",1555936782),main.views.basic_screen], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"transactions","transactions",-1425846118),new cljs.core.Keyword(null,"component","component",1555936782),main.views.ui_screen], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.Keyword(null,"component","component",1555936782),main.views.list_screen], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"component","component",1555936782),main.views.storage_screen], null)], null)], null);
});
main.core.root_stack = (function main$core$root_stack(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.navigation.safe_area.safe_area_provider,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"initialState","initialState",-1307412411).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-ready","on-ready",628441937),(function (){
var G__21229 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-app-db","init-app-db",-1099028729)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21229) : re_frame.core.dispatch.call(null, G__21229));
})], null));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-ready","on-ready",628441937),(function (){
var G__21230 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-app-db","init-app-db",-1099028729)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21230) : re_frame.core.dispatch.call(null, G__21230));
})], null));
}
})())){
cljs.core.reset_BANG_(steroid.rn.reloader.state,(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"initialState","initialState",-1307412411).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-ready","on-ready",628441937),(function (){
var G__21231 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-app-db","init-app-db",-1099028729)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21231) : re_frame.core.dispatch.call(null, G__21231));
})], null));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-ready","on-ready",628441937),(function (){
var G__21232 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-app-db","init-app-db",-1099028729)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21232) : re_frame.core.dispatch.call(null, G__21232));
})], null));
}
})());
} else {
}

return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),steroid.rn.navigation.core.create_mount_handler((function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-ready","on-ready",628441937).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-ready","on-ready",628441937),(function (){
var G__21233 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-app-db","init-app-db",-1099028729)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21233) : re_frame.core.dispatch.call(null, G__21233));
})], null)))){
var fexpr__21235 = new cljs.core.Keyword(null,"on-ready","on-ready",628441937).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-ready","on-ready",628441937),(function (){
var G__21236 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-app-db","init-app-db",-1099028729)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21236) : re_frame.core.dispatch.call(null, G__21236));
})], null));
return (fexpr__21235.cljs$core$IFn$_invoke$arity$0 ? fexpr__21235.cljs$core$IFn$_invoke$arity$0() : fexpr__21235.call(null, ));
} else {
return null;
}
})),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.navigation.core.navigation_container,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-ready","on-ready",628441937),(function (){
var G__21237 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-app-db","init-app-db",-1099028729)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21237) : re_frame.core.dispatch.call(null, G__21237));
})], null),new cljs.core.Keyword(null,"on-ready","on-ready",628441937)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__21056__21057__auto__){
steroid.rn.navigation.core.nav_ref_handler(p1__21056__21057__auto__);

if(cljs.core.truth_(new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-ready","on-ready",628441937),(function (){
var G__21238 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-app-db","init-app-db",-1099028729)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21238) : re_frame.core.dispatch.call(null, G__21238));
})], null)))){
var fexpr__21240 = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-ready","on-ready",628441937),(function (){
var G__21241 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-app-db","init-app-db",-1099028729)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21241) : re_frame.core.dispatch.call(null, G__21241));
})], null));
return (fexpr__21240.cljs$core$IFn$_invoke$arity$1 ? fexpr__21240.cljs$core$IFn$_invoke$arity$1(p1__21056__21057__auto__) : fexpr__21240.call(null, p1__21056__21057__auto__));
} else {
return null;
}
})], null),(cljs.core.truth_(steroid.rn.core.debug_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initialState","initialState",-1307412411),cljs.core.deref(steroid.rn.reloader.state),new cljs.core.Keyword(null,"onStateChange","onStateChange",853276564),steroid.rn.reloader.on_state_change(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-ready","on-ready",628441937),(function (){
var G__21242 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-app-db","init-app-db",-1099028729)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21242) : re_frame.core.dispatch.call(null, G__21242));
})], null))], null):null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.navigation.stack.stack,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"header-mode","header-mode",-678453826),new cljs.core.Keyword(null,"none","none",1333468478)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"component","component",1555936782),main.core.main_screens], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"component","component",1555936782),main.views.modal_screen], null)], null)], null)], null),(cljs.core.truth_(steroid.rn.core.debug_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.reloader.reload_view], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["root",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(steroid.rn.core.cnt))].join('')], null));
})], null));
})()
], null)], null);
});
main.core.init = (function main$core$init(){
return steroid.rn.core.register_comp("crypto_rn",main.core.root_stack);
});

//# sourceMappingURL=main.core.js.map
