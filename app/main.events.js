goog.provide('main.events');
main.events.init_app_db = (function main$events$init_app_db(var_args){
var G__17502 = arguments.length;
switch (G__17502) {
case 0:
return main.events.init_app_db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return main.events.init_app_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(main.events.init_app_db.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (cofx__17444__auto__){
return main.events.init_app_db.cljs$core$IFn$_invoke$arity$1(cofx__17444__auto__);
});
}));

(main.events.init_app_db.cljs$core$IFn$_invoke$arity$1 = (function (cofx__17444__auto__){
if(((cljs.core.map_QMARK_(cofx__17444__auto__)) && ((!((new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx__17444__auto__) == null)))))){
var _ = cofx__17444__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"counter","counter",804008177),(0),new cljs.core.Keyword(null,"delta","delta",108939957),(10)], null)], null);
} else {
throw (new Error(["fx/defn expects a map of cofx as first argument got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cofx__17444__auto__)," in function ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(main.events.init_app_db)].join('')));
}
}));

(main.events.init_app_db.cljs$lang$maxFixedArity = 1);


re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"init-app-db","init-app-db",-1099028729),steroid.fx.get_interceptors(cljs.core.PersistentVector.EMPTY),(function (cofx__17438__auto__,p__17509){
var vec__17510 = p__17509;
var ___17439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17510,(0),null);
return main.events.init_app_db.cljs$core$IFn$_invoke$arity$1(cofx__17438__auto__);
}));
main.events.update_counter = (function main$events$update_counter(var_args){
var G__17515 = arguments.length;
switch (G__17515) {
case 0:
return main.events.update_counter.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return main.events.update_counter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(main.events.update_counter.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (cofx__17444__auto__){
return main.events.update_counter.cljs$core$IFn$_invoke$arity$1(cofx__17444__auto__);
});
}));

(main.events.update_counter.cljs$core$IFn$_invoke$arity$1 = (function (cofx__17444__auto__){
if(((cljs.core.map_QMARK_(cofx__17444__auto__)) && ((!((new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx__17444__auto__) == null)))))){
var map__17524 = cofx__17444__auto__;
var map__17524__$1 = cljs.core.__destructure_map(map__17524);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17524__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.inc)], null);
} else {
throw (new Error(["fx/defn expects a map of cofx as first argument got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cofx__17444__auto__)," in function ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(main.events.update_counter)].join('')));
}
}));

(main.events.update_counter.cljs$lang$maxFixedArity = 1);


re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"update-counter","update-counter",-70438766),steroid.fx.get_interceptors(cljs.core.PersistentVector.EMPTY),(function (cofx__17438__auto__,p__17526){
var vec__17527 = p__17526;
var ___17439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17527,(0),null);
return main.events.update_counter.cljs$core$IFn$_invoke$arity$1(cofx__17438__auto__);
}));

//# sourceMappingURL=main.events.js.map
