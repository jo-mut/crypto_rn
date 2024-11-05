goog.provide('main.events');
main.events.app_db = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-app-db","init-app-db",-1099028729)], null)], null),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),main.events.app_db], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (p__18382){
var vec__18383 = p__18382;
var screen__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18383,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18383,(1),null);
console.log(["ste ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(screen__$1)].join(''));

if(cljs.core.truth_(react_native.navigation.core.navigation_ref.isReady())){
return react_native.navigation.core.navigation_ref.navigate(screen__$1,cljs.core.clj__GT_js(params));
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),(function (_,p__18386){
var vec__18387 = p__18386;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18387,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18387,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18387,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,params], null)], null);
}));

//# sourceMappingURL=main.events.js.map
