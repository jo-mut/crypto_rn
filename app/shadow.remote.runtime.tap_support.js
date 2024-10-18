goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__27832,p__27833){
var map__27835 = p__27832;
var map__27835__$1 = cljs.core.__destructure_map(map__27835);
var svc = map__27835__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27835__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27835__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27835__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__27836 = p__27833;
var map__27836__$1 = cljs.core.__destructure_map(map__27836);
var msg = map__27836__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27836__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27836__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27836__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27836__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__27844,p__27845){
var map__27849 = p__27844;
var map__27849__$1 = cljs.core.__destructure_map(map__27849);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27849__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__27850 = p__27845;
var map__27850__$1 = cljs.core.__destructure_map(map__27850);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27850__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__27857,p__27858){
var map__27859 = p__27857;
var map__27859__$1 = cljs.core.__destructure_map(map__27859);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27859__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27859__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__27860 = p__27858;
var map__27860__$1 = cljs.core.__destructure_map(map__27860);
var msg = map__27860__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27860__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__27864,tid){
var map__27865 = p__27864;
var map__27865__$1 = cljs.core.__destructure_map(map__27865);
var svc = map__27865__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27865__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__27872 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__27873 = null;
var count__27874 = (0);
var i__27875 = (0);
while(true){
if((i__27875 < count__27874)){
var vec__27885 = chunk__27873.cljs$core$IIndexed$_nth$arity$2(null, i__27875);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27885,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27885,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__27911 = seq__27872;
var G__27912 = chunk__27873;
var G__27913 = count__27874;
var G__27914 = (i__27875 + (1));
seq__27872 = G__27911;
chunk__27873 = G__27912;
count__27874 = G__27913;
i__27875 = G__27914;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27872);
if(temp__5804__auto__){
var seq__27872__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27872__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__27872__$1);
var G__27915 = cljs.core.chunk_rest(seq__27872__$1);
var G__27916 = c__5525__auto__;
var G__27917 = cljs.core.count(c__5525__auto__);
var G__27918 = (0);
seq__27872 = G__27915;
chunk__27873 = G__27916;
count__27874 = G__27917;
i__27875 = G__27918;
continue;
} else {
var vec__27894 = cljs.core.first(seq__27872__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27894,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27894,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__27920 = cljs.core.next(seq__27872__$1);
var G__27921 = null;
var G__27922 = (0);
var G__27923 = (0);
seq__27872 = G__27920;
chunk__27873 = G__27921;
count__27874 = G__27922;
i__27875 = G__27923;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__27868_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__27868_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__27869_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__27869_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__27870_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__27870_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__27871_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__27871_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__27900){
var map__27902 = p__27900;
var map__27902__$1 = cljs.core.__destructure_map(map__27902);
var svc = map__27902__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27902__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27902__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
