goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__21178){
var map__21179 = p__21178;
var map__21179__$1 = cljs.core.__destructure_map(map__21179);
var runtime = map__21179__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21179__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_21295 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_21295)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__21188 = runtime;
var G__21189 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_21295);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__21188,G__21189) : shadow.remote.runtime.shared.process.call(null, G__21188,G__21189));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__21192,res){
var map__21193 = p__21192;
var map__21193__$1 = cljs.core.__destructure_map(map__21193);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21193__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21193__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__21196 = res;
var G__21196__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21196,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__21196);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21196__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__21196__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__21202 = arguments.length;
switch (G__21202) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__21203,msg,handlers,timeout_after_ms){
var map__21204 = p__21203;
var map__21204__$1 = cljs.core.__destructure_map(map__21204);
var runtime = map__21204__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21204__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21313 = arguments.length;
var i__5727__auto___21314 = (0);
while(true){
if((i__5727__auto___21314 < len__5726__auto___21313)){
args__5732__auto__.push((arguments[i__5727__auto___21314]));

var G__21315 = (i__5727__auto___21314 + (1));
i__5727__auto___21314 = G__21315;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__21216,ev,args){
var map__21217 = p__21216;
var map__21217__$1 = cljs.core.__destructure_map(map__21217);
var runtime = map__21217__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21217__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__21218 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__21221 = null;
var count__21222 = (0);
var i__21223 = (0);
while(true){
if((i__21223 < count__21222)){
var ext = chunk__21221.cljs$core$IIndexed$_nth$arity$2(null, i__21223);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__21316 = seq__21218;
var G__21317 = chunk__21221;
var G__21318 = count__21222;
var G__21319 = (i__21223 + (1));
seq__21218 = G__21316;
chunk__21221 = G__21317;
count__21222 = G__21318;
i__21223 = G__21319;
continue;
} else {
var G__21320 = seq__21218;
var G__21321 = chunk__21221;
var G__21322 = count__21222;
var G__21323 = (i__21223 + (1));
seq__21218 = G__21320;
chunk__21221 = G__21321;
count__21222 = G__21322;
i__21223 = G__21323;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21218);
if(temp__5804__auto__){
var seq__21218__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21218__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21218__$1);
var G__21324 = cljs.core.chunk_rest(seq__21218__$1);
var G__21325 = c__5525__auto__;
var G__21326 = cljs.core.count(c__5525__auto__);
var G__21327 = (0);
seq__21218 = G__21324;
chunk__21221 = G__21325;
count__21222 = G__21326;
i__21223 = G__21327;
continue;
} else {
var ext = cljs.core.first(seq__21218__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__21328 = cljs.core.next(seq__21218__$1);
var G__21329 = null;
var G__21330 = (0);
var G__21331 = (0);
seq__21218 = G__21328;
chunk__21221 = G__21329;
count__21222 = G__21330;
i__21223 = G__21331;
continue;
} else {
var G__21332 = cljs.core.next(seq__21218__$1);
var G__21333 = null;
var G__21334 = (0);
var G__21335 = (0);
seq__21218 = G__21332;
chunk__21221 = G__21333;
count__21222 = G__21334;
i__21223 = G__21335;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq21207){
var G__21208 = cljs.core.first(seq21207);
var seq21207__$1 = cljs.core.next(seq21207);
var G__21209 = cljs.core.first(seq21207__$1);
var seq21207__$2 = cljs.core.next(seq21207__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21208,G__21209,seq21207__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__21232,p__21233){
var map__21234 = p__21232;
var map__21234__$1 = cljs.core.__destructure_map(map__21234);
var runtime = map__21234__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21234__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__21235 = p__21233;
var map__21235__$1 = cljs.core.__destructure_map(map__21235);
var msg = map__21235__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21235__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__21238 = cljs.core.deref(state_ref);
var map__21238__$1 = cljs.core.__destructure_map(map__21238);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21238__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21238__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__21241,msg){
var map__21242 = p__21241;
var map__21242__$1 = cljs.core.__destructure_map(map__21242);
var runtime = map__21242__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21242__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__21255,key,p__21256){
var map__21258 = p__21255;
var map__21258__$1 = cljs.core.__destructure_map(map__21258);
var state = map__21258__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21258__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__21259 = p__21256;
var map__21259__$1 = cljs.core.__destructure_map(map__21259);
var spec = map__21259__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21259__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21259__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__21263,key,spec){
var map__21264 = p__21263;
var map__21264__$1 = cljs.core.__destructure_map(map__21264);
var runtime = map__21264__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21264__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___21342 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___21342 == null)){
} else {
var on_welcome_21343 = temp__5808__auto___21342;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_21343.cljs$core$IFn$_invoke$arity$0 ? on_welcome_21343.cljs$core$IFn$_invoke$arity$0() : on_welcome_21343.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__21266_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__21266_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__21267_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__21267_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__21268_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__21268_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__21269_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__21269_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__21270_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__21270_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__21273,key){
var map__21274 = p__21273;
var map__21274__$1 = cljs.core.__destructure_map(map__21274);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21274__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__21275,msg){
var map__21276 = p__21275;
var map__21276__$1 = cljs.core.__destructure_map(map__21276);
var runtime = map__21276__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21276__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__21277,p__21278){
var map__21279 = p__21277;
var map__21279__$1 = cljs.core.__destructure_map(map__21279);
var runtime = map__21279__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21279__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__21280 = p__21278;
var map__21280__$1 = cljs.core.__destructure_map(map__21280);
var msg = map__21280__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21280__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21280__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__21281 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__21283 = null;
var count__21284 = (0);
var i__21285 = (0);
while(true){
if((i__21285 < count__21284)){
var map__21292 = chunk__21283.cljs$core$IIndexed$_nth$arity$2(null, i__21285);
var map__21292__$1 = cljs.core.__destructure_map(map__21292);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21292__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__21346 = seq__21281;
var G__21347 = chunk__21283;
var G__21348 = count__21284;
var G__21349 = (i__21285 + (1));
seq__21281 = G__21346;
chunk__21283 = G__21347;
count__21284 = G__21348;
i__21285 = G__21349;
continue;
} else {
var G__21350 = seq__21281;
var G__21351 = chunk__21283;
var G__21352 = count__21284;
var G__21353 = (i__21285 + (1));
seq__21281 = G__21350;
chunk__21283 = G__21351;
count__21284 = G__21352;
i__21285 = G__21353;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21281);
if(temp__5804__auto__){
var seq__21281__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21281__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21281__$1);
var G__21354 = cljs.core.chunk_rest(seq__21281__$1);
var G__21355 = c__5525__auto__;
var G__21356 = cljs.core.count(c__5525__auto__);
var G__21357 = (0);
seq__21281 = G__21354;
chunk__21283 = G__21355;
count__21284 = G__21356;
i__21285 = G__21357;
continue;
} else {
var map__21293 = cljs.core.first(seq__21281__$1);
var map__21293__$1 = cljs.core.__destructure_map(map__21293);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21293__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__21358 = cljs.core.next(seq__21281__$1);
var G__21359 = null;
var G__21360 = (0);
var G__21361 = (0);
seq__21281 = G__21358;
chunk__21283 = G__21359;
count__21284 = G__21360;
i__21285 = G__21361;
continue;
} else {
var G__21362 = cljs.core.next(seq__21281__$1);
var G__21363 = null;
var G__21364 = (0);
var G__21365 = (0);
seq__21281 = G__21362;
chunk__21283 = G__21363;
count__21284 = G__21364;
i__21285 = G__21365;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
