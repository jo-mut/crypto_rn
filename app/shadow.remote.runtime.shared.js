goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14357){
var map__14361 = p__14357;
var map__14361__$1 = cljs.core.__destructure_map(map__14361);
var runtime = map__14361__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14361__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14618 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14618)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14371 = runtime;
var G__14372 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14618);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14371,G__14372) : shadow.remote.runtime.shared.process.call(null, G__14371,G__14372));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14395,res){
var map__14399 = p__14395;
var map__14399__$1 = cljs.core.__destructure_map(map__14399);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14399__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14399__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14408 = res;
var G__14408__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14408,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14408);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14408__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14408__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14420 = arguments.length;
switch (G__14420) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14427,msg,handlers,timeout_after_ms){
var map__14428 = p__14427;
var map__14428__$1 = cljs.core.__destructure_map(map__14428);
var runtime = map__14428__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14428__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5726__auto___14621 = arguments.length;
var i__5727__auto___14622 = (0);
while(true){
if((i__5727__auto___14622 < len__5726__auto___14621)){
args__5732__auto__.push((arguments[i__5727__auto___14622]));

var G__14623 = (i__5727__auto___14622 + (1));
i__5727__auto___14622 = G__14623;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14445,ev,args){
var map__14446 = p__14445;
var map__14446__$1 = cljs.core.__destructure_map(map__14446);
var runtime = map__14446__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14446__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14447 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14450 = null;
var count__14451 = (0);
var i__14452 = (0);
while(true){
if((i__14452 < count__14451)){
var ext = chunk__14450.cljs$core$IIndexed$_nth$arity$2(null, i__14452);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14624 = seq__14447;
var G__14625 = chunk__14450;
var G__14626 = count__14451;
var G__14627 = (i__14452 + (1));
seq__14447 = G__14624;
chunk__14450 = G__14625;
count__14451 = G__14626;
i__14452 = G__14627;
continue;
} else {
var G__14628 = seq__14447;
var G__14629 = chunk__14450;
var G__14630 = count__14451;
var G__14631 = (i__14452 + (1));
seq__14447 = G__14628;
chunk__14450 = G__14629;
count__14451 = G__14630;
i__14452 = G__14631;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14447);
if(temp__5804__auto__){
var seq__14447__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14447__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14447__$1);
var G__14632 = cljs.core.chunk_rest(seq__14447__$1);
var G__14633 = c__5525__auto__;
var G__14634 = cljs.core.count(c__5525__auto__);
var G__14635 = (0);
seq__14447 = G__14632;
chunk__14450 = G__14633;
count__14451 = G__14634;
i__14452 = G__14635;
continue;
} else {
var ext = cljs.core.first(seq__14447__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14636 = cljs.core.next(seq__14447__$1);
var G__14637 = null;
var G__14638 = (0);
var G__14639 = (0);
seq__14447 = G__14636;
chunk__14450 = G__14637;
count__14451 = G__14638;
i__14452 = G__14639;
continue;
} else {
var G__14640 = cljs.core.next(seq__14447__$1);
var G__14641 = null;
var G__14642 = (0);
var G__14643 = (0);
seq__14447 = G__14640;
chunk__14450 = G__14641;
count__14451 = G__14642;
i__14452 = G__14643;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14437){
var G__14441 = cljs.core.first(seq14437);
var seq14437__$1 = cljs.core.next(seq14437);
var G__14442 = cljs.core.first(seq14437__$1);
var seq14437__$2 = cljs.core.next(seq14437__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14441,G__14442,seq14437__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14473,p__14474){
var map__14475 = p__14473;
var map__14475__$1 = cljs.core.__destructure_map(map__14475);
var runtime = map__14475__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14475__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14476 = p__14474;
var map__14476__$1 = cljs.core.__destructure_map(map__14476);
var msg = map__14476__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14476__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14482 = cljs.core.deref(state_ref);
var map__14482__$1 = cljs.core.__destructure_map(map__14482);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14482__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14482__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14493,msg){
var map__14495 = p__14493;
var map__14495__$1 = cljs.core.__destructure_map(map__14495);
var runtime = map__14495__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14495__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14506,key,p__14507){
var map__14509 = p__14506;
var map__14509__$1 = cljs.core.__destructure_map(map__14509);
var state = map__14509__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14509__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14511 = p__14507;
var map__14511__$1 = cljs.core.__destructure_map(map__14511);
var spec = map__14511__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14511__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14511__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14514,key,spec){
var map__14515 = p__14514;
var map__14515__$1 = cljs.core.__destructure_map(map__14515);
var runtime = map__14515__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14515__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___14673 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___14673 == null)){
} else {
var on_welcome_14674 = temp__5808__auto___14673;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14674.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14674.cljs$core$IFn$_invoke$arity$0() : on_welcome_14674.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14525_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14525_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14526_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14526_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14529_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14529_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14532_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14532_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14533_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14533_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14561,key){
var map__14563 = p__14561;
var map__14563__$1 = cljs.core.__destructure_map(map__14563);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14563__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14568,msg){
var map__14569 = p__14568;
var map__14569__$1 = cljs.core.__destructure_map(map__14569);
var runtime = map__14569__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14569__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14576,p__14577){
var map__14578 = p__14576;
var map__14578__$1 = cljs.core.__destructure_map(map__14578);
var runtime = map__14578__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14578__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14580 = p__14577;
var map__14580__$1 = cljs.core.__destructure_map(map__14580);
var msg = map__14580__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14580__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14580__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__14585 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14587 = null;
var count__14588 = (0);
var i__14589 = (0);
while(true){
if((i__14589 < count__14588)){
var map__14594 = chunk__14587.cljs$core$IIndexed$_nth$arity$2(null, i__14589);
var map__14594__$1 = cljs.core.__destructure_map(map__14594);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14594__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14718 = seq__14585;
var G__14719 = chunk__14587;
var G__14720 = count__14588;
var G__14721 = (i__14589 + (1));
seq__14585 = G__14718;
chunk__14587 = G__14719;
count__14588 = G__14720;
i__14589 = G__14721;
continue;
} else {
var G__14722 = seq__14585;
var G__14723 = chunk__14587;
var G__14724 = count__14588;
var G__14725 = (i__14589 + (1));
seq__14585 = G__14722;
chunk__14587 = G__14723;
count__14588 = G__14724;
i__14589 = G__14725;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14585);
if(temp__5804__auto__){
var seq__14585__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14585__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14585__$1);
var G__14726 = cljs.core.chunk_rest(seq__14585__$1);
var G__14727 = c__5525__auto__;
var G__14728 = cljs.core.count(c__5525__auto__);
var G__14729 = (0);
seq__14585 = G__14726;
chunk__14587 = G__14727;
count__14588 = G__14728;
i__14589 = G__14729;
continue;
} else {
var map__14601 = cljs.core.first(seq__14585__$1);
var map__14601__$1 = cljs.core.__destructure_map(map__14601);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14601__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14730 = cljs.core.next(seq__14585__$1);
var G__14731 = null;
var G__14732 = (0);
var G__14733 = (0);
seq__14585 = G__14730;
chunk__14587 = G__14731;
count__14588 = G__14732;
i__14589 = G__14733;
continue;
} else {
var G__14734 = cljs.core.next(seq__14585__$1);
var G__14735 = null;
var G__14736 = (0);
var G__14737 = (0);
seq__14585 = G__14734;
chunk__14587 = G__14735;
count__14588 = G__14736;
i__14589 = G__14737;
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
