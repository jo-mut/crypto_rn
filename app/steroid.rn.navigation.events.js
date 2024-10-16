goog.provide('steroid.rn.navigation.events');
var G__17494_17539 = new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312);
var G__17495_17540 = (function (view){
if(cljs.core.truth_(cljs.core.deref(steroid.rn.navigation.core.nav_ref))){
return cljs.core.deref(steroid.rn.navigation.core.nav_ref).navigate(view);
} else {
return null;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__17494_17539,G__17495_17540) : re_frame.core.reg_fx.call(null, G__17494_17539,G__17495_17540));
var G__17496_17543 = new cljs.core.Keyword(null,"navigate-back","navigate-back",1568758176);
var G__17497_17544 = (function (){
if(cljs.core.truth_(cljs.core.deref(steroid.rn.navigation.core.nav_ref))){
return cljs.core.deref(steroid.rn.navigation.core.nav_ref).goBack();
} else {
return null;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__17496_17543,G__17497_17544) : re_frame.core.reg_fx.call(null, G__17496_17543,G__17497_17544));
steroid.rn.navigation.events.navigate_to = (function steroid$rn$navigation$events$navigate_to(var_args){
var G__17505 = arguments.length;
switch (G__17505) {
case 1:
return steroid.rn.navigation.events.navigate_to.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return steroid.rn.navigation.events.navigate_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(steroid.rn.navigation.events.navigate_to.cljs$core$IFn$_invoke$arity$1 = (function (arg17499){
return (function (cofx__17444__auto__){
return steroid.rn.navigation.events.navigate_to.cljs$core$IFn$_invoke$arity$2(cofx__17444__auto__,arg17499);
});
}));

(steroid.rn.navigation.events.navigate_to.cljs$core$IFn$_invoke$arity$2 = (function (cofx__17444__auto__,view){
if(((cljs.core.map_QMARK_(cofx__17444__auto__)) && ((!((new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx__17444__auto__) == null)))))){
var _ = cofx__17444__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),cljs.core.name(view)], null);
} else {
throw (new Error(["fx/defn expects a map of cofx as first argument got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cofx__17444__auto__)," in function ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(steroid.rn.navigation.events.navigate_to)].join('')));
}
}));

(steroid.rn.navigation.events.navigate_to.cljs$lang$maxFixedArity = 2);


re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),steroid.fx.get_interceptors(cljs.core.PersistentVector.EMPTY),(function (cofx__17438__auto__,p__17516){
var vec__17518 = p__17516;
var ___17439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17518,(0),null);
var arg17499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17518,(1),null);
return steroid.rn.navigation.events.navigate_to.cljs$core$IFn$_invoke$arity$2(cofx__17438__auto__,arg17499);
}));
steroid.rn.navigation.events.navigate_back = (function steroid$rn$navigation$events$navigate_back(var_args){
var G__17523 = arguments.length;
switch (G__17523) {
case 0:
return steroid.rn.navigation.events.navigate_back.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return steroid.rn.navigation.events.navigate_back.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(steroid.rn.navigation.events.navigate_back.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (cofx__17444__auto__){
return steroid.rn.navigation.events.navigate_back.cljs$core$IFn$_invoke$arity$1(cofx__17444__auto__);
});
}));

(steroid.rn.navigation.events.navigate_back.cljs$core$IFn$_invoke$arity$1 = (function (cofx__17444__auto__){
if(((cljs.core.map_QMARK_(cofx__17444__auto__)) && ((!((new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx__17444__auto__) == null)))))){
var _ = cofx__17444__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-back","navigate-back",1568758176),null], null);
} else {
throw (new Error(["fx/defn expects a map of cofx as first argument got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cofx__17444__auto__)," in function ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(steroid.rn.navigation.events.navigate_back)].join('')));
}
}));

(steroid.rn.navigation.events.navigate_back.cljs$lang$maxFixedArity = 1);


re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"navigate-back","navigate-back",1568758176),steroid.fx.get_interceptors(cljs.core.PersistentVector.EMPTY),(function (cofx__17438__auto__,p__17534){
var vec__17535 = p__17534;
var ___17439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17535,(0),null);
return steroid.rn.navigation.events.navigate_back.cljs$core$IFn$_invoke$arity$1(cofx__17438__auto__);
}));

//# sourceMappingURL=steroid.rn.navigation.events.js.map
