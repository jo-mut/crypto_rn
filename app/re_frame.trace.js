goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = true;
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__10961){
var map__10962 = p__10961;
var map__10962__$1 = cljs.core.__destructure_map(map__10962);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10962__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10962__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10962__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10962__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5002__auto__ = child_of;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__10965_10994 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__10966_10995 = null;
var count__10967_10996 = (0);
var i__10968_10997 = (0);
while(true){
if((i__10968_10997 < count__10967_10996)){
var vec__10981_10998 = chunk__10966_10995.cljs$core$IIndexed$_nth$arity$2(null, i__10968_10997);
var k_10999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10981_10998,(0),null);
var cb_11000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10981_10998,(1),null);
try{var G__10985_11001 = cljs.core.deref(re_frame.trace.traces);
(cb_11000.cljs$core$IFn$_invoke$arity$1 ? cb_11000.cljs$core$IFn$_invoke$arity$1(G__10985_11001) : cb_11000.call(null, G__10985_11001));
}catch (e10984){var e_11002 = e10984;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_10999,"while storing",cljs.core.deref(re_frame.trace.traces),e_11002], 0));
}

var G__11003 = seq__10965_10994;
var G__11004 = chunk__10966_10995;
var G__11005 = count__10967_10996;
var G__11006 = (i__10968_10997 + (1));
seq__10965_10994 = G__11003;
chunk__10966_10995 = G__11004;
count__10967_10996 = G__11005;
i__10968_10997 = G__11006;
continue;
} else {
var temp__5804__auto___11007 = cljs.core.seq(seq__10965_10994);
if(temp__5804__auto___11007){
var seq__10965_11008__$1 = temp__5804__auto___11007;
if(cljs.core.chunked_seq_QMARK_(seq__10965_11008__$1)){
var c__5525__auto___11009 = cljs.core.chunk_first(seq__10965_11008__$1);
var G__11010 = cljs.core.chunk_rest(seq__10965_11008__$1);
var G__11011 = c__5525__auto___11009;
var G__11012 = cljs.core.count(c__5525__auto___11009);
var G__11013 = (0);
seq__10965_10994 = G__11010;
chunk__10966_10995 = G__11011;
count__10967_10996 = G__11012;
i__10968_10997 = G__11013;
continue;
} else {
var vec__10986_11014 = cljs.core.first(seq__10965_11008__$1);
var k_11015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10986_11014,(0),null);
var cb_11016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10986_11014,(1),null);
try{var G__10990_11017 = cljs.core.deref(re_frame.trace.traces);
(cb_11016.cljs$core$IFn$_invoke$arity$1 ? cb_11016.cljs$core$IFn$_invoke$arity$1(G__10990_11017) : cb_11016.call(null, G__10990_11017));
}catch (e10989){var e_11018 = e10989;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_11015,"while storing",cljs.core.deref(re_frame.trace.traces),e_11018], 0));
}

var G__11019 = cljs.core.next(seq__10965_11008__$1);
var G__11020 = null;
var G__11021 = (0);
var G__11022 = (0);
seq__10965_10994 = G__11019;
chunk__10966_10995 = G__11020;
count__10967_10996 = G__11021;
i__10968_10997 = G__11022;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null, ));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
