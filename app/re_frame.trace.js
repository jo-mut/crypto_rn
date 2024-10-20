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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__13706){
var map__13707 = p__13706;
var map__13707__$1 = cljs.core.__destructure_map(map__13707);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13707__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13707__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13707__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13707__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__13711_13749 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__13712_13750 = null;
var count__13713_13751 = (0);
var i__13714_13753 = (0);
while(true){
if((i__13714_13753 < count__13713_13751)){
var vec__13728_13755 = chunk__13712_13750.cljs$core$IIndexed$_nth$arity$2(null, i__13714_13753);
var k_13756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13728_13755,(0),null);
var cb_13757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13728_13755,(1),null);
try{var G__13732_13759 = cljs.core.deref(re_frame.trace.traces);
(cb_13757.cljs$core$IFn$_invoke$arity$1 ? cb_13757.cljs$core$IFn$_invoke$arity$1(G__13732_13759) : cb_13757.call(null, G__13732_13759));
}catch (e13731){var e_13760 = e13731;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_13756,"while storing",cljs.core.deref(re_frame.trace.traces),e_13760], 0));
}

var G__13764 = seq__13711_13749;
var G__13765 = chunk__13712_13750;
var G__13766 = count__13713_13751;
var G__13767 = (i__13714_13753 + (1));
seq__13711_13749 = G__13764;
chunk__13712_13750 = G__13765;
count__13713_13751 = G__13766;
i__13714_13753 = G__13767;
continue;
} else {
var temp__5804__auto___13770 = cljs.core.seq(seq__13711_13749);
if(temp__5804__auto___13770){
var seq__13711_13771__$1 = temp__5804__auto___13770;
if(cljs.core.chunked_seq_QMARK_(seq__13711_13771__$1)){
var c__5525__auto___13772 = cljs.core.chunk_first(seq__13711_13771__$1);
var G__13774 = cljs.core.chunk_rest(seq__13711_13771__$1);
var G__13775 = c__5525__auto___13772;
var G__13776 = cljs.core.count(c__5525__auto___13772);
var G__13777 = (0);
seq__13711_13749 = G__13774;
chunk__13712_13750 = G__13775;
count__13713_13751 = G__13776;
i__13714_13753 = G__13777;
continue;
} else {
var vec__13733_13778 = cljs.core.first(seq__13711_13771__$1);
var k_13779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13733_13778,(0),null);
var cb_13780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13733_13778,(1),null);
try{var G__13737_13781 = cljs.core.deref(re_frame.trace.traces);
(cb_13780.cljs$core$IFn$_invoke$arity$1 ? cb_13780.cljs$core$IFn$_invoke$arity$1(G__13737_13781) : cb_13780.call(null, G__13737_13781));
}catch (e13736){var e_13782 = e13736;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_13779,"while storing",cljs.core.deref(re_frame.trace.traces),e_13782], 0));
}

var G__13783 = cljs.core.next(seq__13711_13771__$1);
var G__13784 = null;
var G__13785 = (0);
var G__13786 = (0);
seq__13711_13749 = G__13783;
chunk__13712_13750 = G__13784;
count__13713_13751 = G__13785;
i__13714_13753 = G__13786;
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
