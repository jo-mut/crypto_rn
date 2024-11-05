goog.provide('re_frisk_remote.core');
if((typeof re_frisk_remote !== 'undefined') && (typeof re_frisk_remote.core !== 'undefined') && (typeof re_frisk_remote.core.send_state !== 'undefined')){
} else {
re_frisk_remote.core.send_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk_remote !== 'undefined') && (typeof re_frisk_remote.core !== 'undefined') && (typeof re_frisk_remote.core.initialized !== 'undefined')){
} else {
re_frisk_remote.core.initialized = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof re_frisk_remote !== 'undefined') && (typeof re_frisk_remote.core !== 'undefined') && (typeof re_frisk_remote.core.chsk_send !== 'undefined')){
} else {
re_frisk_remote.core.chsk_send = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk_remote !== 'undefined') && (typeof re_frisk_remote.core !== 'undefined') && (typeof re_frisk_remote.core.normalize_db_fn !== 'undefined')){
} else {
re_frisk_remote.core.normalize_db_fn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk_remote !== 'undefined') && (typeof re_frisk_remote.core !== 'undefined') && (typeof re_frisk_remote.core.ignore_events !== 'undefined')){
} else {
re_frisk_remote.core.ignore_events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
re_frisk_remote.core.send = (function re_frisk_remote$core$send(message){
if(cljs.core.truth_((function (){var and__5000__auto__ = message;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core.deref(re_frisk_remote.core.send_state);
if(cljs.core.truth_(and__5000__auto____$1)){
return cljs.core.deref(re_frisk_remote.core.chsk_send);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
var G__19228 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","message","refrisk/message",-1493324332),message], null);
var fexpr__19227 = cljs.core.deref(re_frisk_remote.core.chsk_send);
return (fexpr__19227.cljs$core$IFn$_invoke$arity$1 ? fexpr__19227.cljs$core$IFn$_invoke$arity$1(G__19228) : fexpr__19227.call(null, G__19228));
} else {
return null;
}
});
re_frisk_remote.core.get_db = (function re_frisk_remote$core$get_db(){
var db = cljs.core.deref(re_frame.db.app_db);
if(cljs.core.truth_(cljs.core.deref(re_frisk_remote.core.normalize_db_fn))){
var fexpr__19229 = cljs.core.deref(re_frisk_remote.core.normalize_db_fn);
return (fexpr__19229.cljs$core$IFn$_invoke$arity$1 ? fexpr__19229.cljs$core$IFn$_invoke$arity$1(db) : fexpr__19229.call(null, db));
} else {
return db;
}
});
re_frisk_remote.core.send_subs_delta = (function re_frisk_remote$core$send_subs_delta(){
var subs = re_frisk.utils.get_subs();
var temp__5804__auto__ = re_frisk_remote.delta.delta.delta(new cljs.core.Keyword(null,"prev-subs","prev-subs",982800397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk_remote.core.send_state)),subs);
if(cljs.core.truth_(temp__5804__auto__)){
var d = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk_remote.core.send_state,cljs.core.assoc,new cljs.core.Keyword(null,"prev-subs","prev-subs",982800397),subs);

return re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","subs-delta","refrisk/subs-delta",1998434908),d], null));
} else {
return null;
}
});
re_frisk_remote.core.send_app_db_delta = (function re_frisk_remote$core$send_app_db_delta(){
var db = re_frisk_remote.core.get_db();
var temp__5804__auto__ = re_frisk_remote.delta.delta.delta(new cljs.core.Keyword(null,"prev-app-db","prev-app-db",-402688638).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk_remote.core.send_state)),db);
if(cljs.core.truth_(temp__5804__auto__)){
var d = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk_remote.core.send_state,cljs.core.assoc,new cljs.core.Keyword(null,"prev-app-db","prev-app-db",-402688638),db);

return re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","app-db-delta","refrisk/app-db-delta",-1494883613),d], null));
} else {
return null;
}
});
re_frisk_remote.core.send_db_and_subs = (function re_frisk_remote$core$send_db_and_subs(){
re_frisk_remote.core.send_subs_delta();

return re_frisk_remote.core.send_app_db_delta();
});
if((typeof re_frisk_remote !== 'undefined') && (typeof re_frisk_remote.core !== 'undefined') && (typeof re_frisk_remote.core.init_stat_sent !== 'undefined')){
} else {
re_frisk_remote.core.init_stat_sent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
re_frisk_remote.core.send_init_stat = (function re_frisk_remote$core$send_init_stat(){
if(cljs.core.truth_(cljs.core.deref(re_frisk_remote.core.init_stat_sent))){
return null;
} else {
cljs.core.reset_BANG_(re_frisk_remote.core.init_stat_sent,true);

return re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","init-stat","refrisk/init-stat",-1295270684),re_frisk.stat.get_re_frame_handlers()], null));
}
});
re_frisk_remote.core.post_event_callback = (function re_frisk_remote$core$post_event_callback(value,queue){
if(cljs.core.truth_(cljs.core.deref(re_frisk_remote.core.send_state))){
var db = re_frisk_remote.core.get_db();
var diff = re_frisk.diff.diff.diff(new cljs.core.Keyword(null,"prev-event-app-db","prev-event-app-db",555318997).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk_remote.core.send_state)),db);
re_frisk_remote.core.send_init_stat();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk_remote.core.send_state,cljs.core.assoc,new cljs.core.Keyword(null,"prev-event-app-db","prev-event-app-db",555318997),db);

if(((cljs.core.not(cljs.core.deref(re_frisk_remote.core.ignore_events))) || (cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk_remote.core.ignore_events),cljs.core.first(value)))))){
re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","event","refrisk/event",1355100504),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",301435442),value,new cljs.core.Keyword(null,"app-db-diff","app-db-diff",709588713),diff,new cljs.core.Keyword(null,"queue","queue",1455835879),queue], null)], null));
} else {
}

return re_frisk.utils.call_and_chill(re_frisk_remote.core.send_db_and_subs,(500));
} else {
return null;
}
});
re_frisk_remote.core.send_views = (function re_frisk_remote$core$send_views(views){
if(cljs.core.seq(views)){
return re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","views","refrisk/views",396542973),views], null));
} else {
return null;
}
});
re_frisk_remote.core.trace_cb = (function re_frisk_remote$core$trace_cb(traces){
if(cljs.core.truth_(cljs.core.deref(re_frisk_remote.core.send_state))){
re_frisk_remote.core.send_init_stat();

re_frisk.utils.call_and_chill(re_frisk_remote.core.send_db_and_subs,(500));

var traces__$1 = re_frisk.trace.update_views_and_get_traces(re_frisk_remote.core.send_views,traces);
var seq__19230 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,re_frisk.trace.normalize_traces(traces__$1,cljs.core.deref(re_frisk_remote.core.ignore_events))));
var chunk__19231 = null;
var count__19232 = (0);
var i__19233 = (0);
while(true){
if((i__19233 < count__19232)){
var vec__19240 = chunk__19231.cljs$core$IIndexed$_nth$arity$2(null, i__19233);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19240,(0),null);
var trace = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19240,(1),null);
setTimeout(((function (seq__19230,chunk__19231,count__19232,i__19233,vec__19240,i,trace,traces__$1){
return (function (){
return re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","event","refrisk/event",1355100504),trace], null));
});})(seq__19230,chunk__19231,count__19232,i__19233,vec__19240,i,trace,traces__$1))
,(i * (20)));


var G__19272 = seq__19230;
var G__19273 = chunk__19231;
var G__19274 = count__19232;
var G__19275 = (i__19233 + (1));
seq__19230 = G__19272;
chunk__19231 = G__19273;
count__19232 = G__19274;
i__19233 = G__19275;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19230);
if(temp__5804__auto__){
var seq__19230__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19230__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19230__$1);
var G__19276 = cljs.core.chunk_rest(seq__19230__$1);
var G__19277 = c__5525__auto__;
var G__19278 = cljs.core.count(c__5525__auto__);
var G__19279 = (0);
seq__19230 = G__19276;
chunk__19231 = G__19277;
count__19232 = G__19278;
i__19233 = G__19279;
continue;
} else {
var vec__19243 = cljs.core.first(seq__19230__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19243,(0),null);
var trace = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19243,(1),null);
setTimeout(((function (seq__19230,chunk__19231,count__19232,i__19233,vec__19243,i,trace,seq__19230__$1,temp__5804__auto__,traces__$1){
return (function (){
return re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","event","refrisk/event",1355100504),trace], null));
});})(seq__19230,chunk__19231,count__19232,i__19233,vec__19243,i,trace,seq__19230__$1,temp__5804__auto__,traces__$1))
,(i * (20)));


var G__19280 = cljs.core.next(seq__19230__$1);
var G__19281 = null;
var G__19282 = (0);
var G__19283 = (0);
seq__19230 = G__19280;
chunk__19231 = G__19281;
count__19232 = G__19282;
i__19233 = G__19283;
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
if((typeof re_frisk_remote !== 'undefined') && (typeof re_frisk_remote.core !== 'undefined') && (typeof re_frisk_remote.core.event_msg_handler !== 'undefined')){
} else {
/**
 * Sente `event-msg`s handler
 */
re_frisk_remote.core.event_msg_handler = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__19246 = cljs.core.get_global_hierarchy;
return (fexpr__19246.cljs$core$IFn$_invoke$arity$0 ? fexpr__19246.cljs$core$IFn$_invoke$arity$0() : fexpr__19246.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("re-frisk-remote.core","event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
re_frisk_remote.core.event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__19247){
var map__19248 = p__19247;
var map__19248__$1 = cljs.core.__destructure_map(map__19248);
var msg = map__19248__$1;
var vec__19249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19248__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var map__19252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19249,(0),null);
var map__19252__$1 = cljs.core.__destructure_map(map__19252);
var was_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19252__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var map__19253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19249,(1),null);
var map__19253__$1 = cljs.core.__destructure_map(map__19253);
var now_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19253__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(was_open_QMARK_,now_open_QMARK_)){
return cljs.core.reset_BANG_(re_frisk_remote.core.send_state,null);
} else {
return null;
}
}));
re_frisk_remote.core.enabled = (function re_frisk_remote$core$enabled(){
if(cljs.core.truth_(cljs.core.deref(re_frisk_remote.core.send_state))){
re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","subs","refrisk/subs",-1488398437),new cljs.core.Keyword(null,"prev-subs","prev-subs",982800397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk_remote.core.send_state))], null));

return re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","app-db","refrisk/app-db",-194545484),new cljs.core.Keyword(null,"prev-app-db","prev-app-db",-402688638).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk_remote.core.send_state))], null));
} else {
var db = re_frisk_remote.core.get_db();
var subs = re_frisk.utils.get_subs();
cljs.core.reset_BANG_(re_frisk_remote.core.send_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prev-event-app-db","prev-event-app-db",555318997),db,new cljs.core.Keyword(null,"prev-app-db","prev-app-db",-402688638),db,new cljs.core.Keyword(null,"prev-subs","prev-subs",982800397),subs], null));

re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","subs","refrisk/subs",-1488398437),subs], null));

return re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","app-db","refrisk/app-db",-194545484),db], null));
}
});
re_frisk_remote.core.event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__19254){
var map__19255 = p__19254;
var map__19255__$1 = cljs.core.__destructure_map(map__19255);
var vec__19256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19255__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19256,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19256,(1),null);
var G__19259 = type;
var G__19259__$1 = (((G__19259 instanceof cljs.core.Keyword))?G__19259.fqn:null);
switch (G__19259__$1) {
case "refrisk/enable":
return re_frisk_remote.core.enabled();

break;
case "refrisk/disable":
return cljs.core.reset_BANG_(re_frisk_remote.core.send_state,null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19259__$1)].join('')));

}
}));
re_frisk_remote.core.event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (msg){
return null;
}));
re_frisk_remote.core.start_socket_and_router = (function re_frisk_remote$core$start_socket_and_router(host){
taoensso.timbre.merge_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["taoensso.sente","taoensso.sente.*"], null)], null));

var map__19260 = taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic("/chsk",null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"host","host",-1558485167),host,new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"re-frisk-remote","re-frisk-remote",-396545212)], null),new cljs.core.Keyword(null,"packer","packer",66077544),taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlerForForeign","handlerForForeign",-44914005),(function (){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((function (){
return "ForeignType";
}),(function (){
return "";
}));
})], null),cljs.core.PersistentArrayMap.EMPTY)], null)], 0));
var map__19260__$1 = cljs.core.__destructure_map(map__19260);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19260__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19260__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
cljs.core.reset_BANG_(re_frisk_remote.core.chsk_send,send_fn);

return taoensso.sente.start_client_chsk_router_BANG_(ch_recv,re_frisk_remote.core.event_msg_handler);
});
re_frisk_remote.core.patch_reagent_BANG_ = (function re_frisk_remote$core$patch_reagent_BANG_(){
day8.reagent.impl.component.patch_wrap_funs();

return day8.reagent.impl.batching.patch_next_tick();
});
re_frisk_remote.core.enable_re_frisk_remote_BANG_ = (function re_frisk_remote$core$enable_re_frisk_remote_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19285 = arguments.length;
var i__5727__auto___19286 = (0);
while(true){
if((i__5727__auto___19286 < len__5726__auto___19285)){
args__5732__auto__.push((arguments[i__5727__auto___19286]));

var G__19287 = (i__5727__auto___19286 + (1));
i__5727__auto___19286 = G__19287;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return re_frisk_remote.core.enable_re_frisk_remote_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(re_frisk_remote.core.enable_re_frisk_remote_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19262){
var vec__19263 = p__19262;
var map__19266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19263,(0),null);
var map__19266__$1 = cljs.core.__destructure_map(map__19266);
var opts = map__19266__$1;
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19266__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
if(cljs.core.truth_(cljs.core.deref(re_frisk_remote.core.initialized))){
return null;
} else {
cljs.core.reset_BANG_(re_frisk_remote.core.initialized,true);

cljs.core.reset_BANG_(re_frisk_remote.core.normalize_db_fn,new cljs.core.Keyword(null,"normalize-db-fn","normalize-db-fn",37787892).cljs$core$IFn$_invoke$arity$1(opts));

cljs.core.reset_BANG_(re_frisk_remote.core.ignore_events,new cljs.core.Keyword(null,"ignore-events","ignore-events",1864684934).cljs$core$IFn$_invoke$arity$1(opts));

re_frisk_remote.core.start_socket_and_router((function (){var or__5002__auto__ = host;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "localhost:4567";
}
})());

if(re_frame.trace.is_trace_enabled_QMARK_()){
re_frisk_remote.core.patch_reagent_BANG_();

return re_frame.trace.register_trace_cb(new cljs.core.Keyword(null,"re-frisk-trace","re-frisk-trace",912949928),re_frisk_remote.core.trace_cb);
} else {
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1(re_frisk_remote.core.post_event_callback);
}
}
}));

(re_frisk_remote.core.enable_re_frisk_remote_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frisk_remote.core.enable_re_frisk_remote_BANG_.cljs$lang$applyTo = (function (seq19261){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19261));
}));

re_frisk_remote.core.enable = (function re_frisk_remote$core$enable(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19288 = arguments.length;
var i__5727__auto___19289 = (0);
while(true){
if((i__5727__auto___19289 < len__5726__auto___19288)){
args__5732__auto__.push((arguments[i__5727__auto___19289]));

var G__19290 = (i__5727__auto___19289 + (1));
i__5727__auto___19289 = G__19290;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return re_frisk_remote.core.enable.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(re_frisk_remote.core.enable.cljs$core$IFn$_invoke$arity$variadic = (function (p__19268){
var vec__19269 = p__19268;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19269,(0),null);
return re_frisk_remote.core.enable_re_frisk_remote_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0));
}));

(re_frisk_remote.core.enable.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frisk_remote.core.enable.cljs$lang$applyTo = (function (seq19267){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19267));
}));


//# sourceMappingURL=re_frisk_remote.core.js.map
