goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null, re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__14823 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__14824 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__14824);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___15039 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___15039)){
var new_db_15040 = temp__5804__auto___15039;
var fexpr__14825_15041 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__14825_15041.cljs$core$IFn$_invoke$arity$1 ? fexpr__14825_15041.cljs$core$IFn$_invoke$arity$1(new_db_15040) : fexpr__14825_15041.call(null, new_db_15040));
} else {
}

var seq__14827 = cljs.core.seq(effects_without_db);
var chunk__14828 = null;
var count__14829 = (0);
var i__14830 = (0);
while(true){
if((i__14830 < count__14829)){
var vec__14839 = chunk__14828.cljs$core$IIndexed$_nth$arity$2(null, i__14830);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14839,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14839,(1),null);
var temp__5802__auto___15042 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___15042)){
var effect_fn_15043 = temp__5802__auto___15042;
(effect_fn_15043.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15043.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15043.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15044 = seq__14827;
var G__15045 = chunk__14828;
var G__15046 = count__14829;
var G__15047 = (i__14830 + (1));
seq__14827 = G__15044;
chunk__14828 = G__15045;
count__14829 = G__15046;
i__14830 = G__15047;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14827);
if(temp__5804__auto__){
var seq__14827__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14827__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14827__$1);
var G__15048 = cljs.core.chunk_rest(seq__14827__$1);
var G__15049 = c__5525__auto__;
var G__15050 = cljs.core.count(c__5525__auto__);
var G__15051 = (0);
seq__14827 = G__15048;
chunk__14828 = G__15049;
count__14829 = G__15050;
i__14830 = G__15051;
continue;
} else {
var vec__14845 = cljs.core.first(seq__14827__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14845,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14845,(1),null);
var temp__5802__auto___15052 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___15052)){
var effect_fn_15053 = temp__5802__auto___15052;
(effect_fn_15053.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15053.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15053.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15054 = cljs.core.next(seq__14827__$1);
var G__15055 = null;
var G__15056 = (0);
var G__15057 = (0);
seq__14827 = G__15054;
chunk__14828 = G__15055;
count__14829 = G__15056;
i__14830 = G__15057;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__10939__auto___15058 = re_frame.interop.now();
var duration__10940__auto___15059 = (end__10939__auto___15058 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10940__auto___15059,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__10939__auto___15058);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__14823);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___15062 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___15062)){
var new_db_15063 = temp__5804__auto___15062;
var fexpr__14850_15064 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__14850_15064.cljs$core$IFn$_invoke$arity$1 ? fexpr__14850_15064.cljs$core$IFn$_invoke$arity$1(new_db_15063) : fexpr__14850_15064.call(null, new_db_15063));
} else {
}

var seq__14852 = cljs.core.seq(effects_without_db);
var chunk__14853 = null;
var count__14854 = (0);
var i__14855 = (0);
while(true){
if((i__14855 < count__14854)){
var vec__14878 = chunk__14853.cljs$core$IIndexed$_nth$arity$2(null, i__14855);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14878,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14878,(1),null);
var temp__5802__auto___15066 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___15066)){
var effect_fn_15067 = temp__5802__auto___15066;
(effect_fn_15067.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15067.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15067.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15068 = seq__14852;
var G__15069 = chunk__14853;
var G__15070 = count__14854;
var G__15071 = (i__14855 + (1));
seq__14852 = G__15068;
chunk__14853 = G__15069;
count__14854 = G__15070;
i__14855 = G__15071;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14852);
if(temp__5804__auto__){
var seq__14852__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14852__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14852__$1);
var G__15072 = cljs.core.chunk_rest(seq__14852__$1);
var G__15073 = c__5525__auto__;
var G__15074 = cljs.core.count(c__5525__auto__);
var G__15075 = (0);
seq__14852 = G__15072;
chunk__14853 = G__15073;
count__14854 = G__15074;
i__14855 = G__15075;
continue;
} else {
var vec__14894 = cljs.core.first(seq__14852__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14894,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14894,(1),null);
var temp__5802__auto___15076 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___15076)){
var effect_fn_15077 = temp__5802__auto___15076;
(effect_fn_15077.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15077.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15077.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15078 = cljs.core.next(seq__14852__$1);
var G__15079 = null;
var G__15080 = (0);
var G__15081 = (0);
seq__14852 = G__15078;
chunk__14853 = G__15079;
count__14854 = G__15080;
i__14855 = G__15081;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__14906){
var map__14907 = p__14906;
var map__14907__$1 = cljs.core.__destructure_map(map__14907);
var effect = map__14907__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14907__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14907__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__14928 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__14929 = null;
var count__14930 = (0);
var i__14931 = (0);
while(true){
if((i__14931 < count__14930)){
var effect = chunk__14929.cljs$core$IIndexed$_nth$arity$2(null, i__14931);
re_frame.fx.dispatch_later(effect);


var G__15082 = seq__14928;
var G__15083 = chunk__14929;
var G__15084 = count__14930;
var G__15085 = (i__14931 + (1));
seq__14928 = G__15082;
chunk__14929 = G__15083;
count__14930 = G__15084;
i__14931 = G__15085;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14928);
if(temp__5804__auto__){
var seq__14928__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14928__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14928__$1);
var G__15086 = cljs.core.chunk_rest(seq__14928__$1);
var G__15087 = c__5525__auto__;
var G__15088 = cljs.core.count(c__5525__auto__);
var G__15089 = (0);
seq__14928 = G__15086;
chunk__14929 = G__15087;
count__14930 = G__15088;
i__14931 = G__15089;
continue;
} else {
var effect = cljs.core.first(seq__14928__$1);
re_frame.fx.dispatch_later(effect);


var G__15090 = cljs.core.next(seq__14928__$1);
var G__15091 = null;
var G__15092 = (0);
var G__15093 = (0);
seq__14928 = G__15090;
chunk__14929 = G__15091;
count__14930 = G__15092;
i__14931 = G__15093;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__14998 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__14999 = null;
var count__15000 = (0);
var i__15001 = (0);
while(true){
if((i__15001 < count__15000)){
var vec__15018 = chunk__14999.cljs$core$IIndexed$_nth$arity$2(null, i__15001);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15018,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15018,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___15094 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___15094)){
var effect_fn_15095 = temp__5802__auto___15094;
(effect_fn_15095.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15095.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15095.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__15096 = seq__14998;
var G__15097 = chunk__14999;
var G__15098 = count__15000;
var G__15099 = (i__15001 + (1));
seq__14998 = G__15096;
chunk__14999 = G__15097;
count__15000 = G__15098;
i__15001 = G__15099;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14998);
if(temp__5804__auto__){
var seq__14998__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14998__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14998__$1);
var G__15101 = cljs.core.chunk_rest(seq__14998__$1);
var G__15102 = c__5525__auto__;
var G__15103 = cljs.core.count(c__5525__auto__);
var G__15104 = (0);
seq__14998 = G__15101;
chunk__14999 = G__15102;
count__15000 = G__15103;
i__15001 = G__15104;
continue;
} else {
var vec__15027 = cljs.core.first(seq__14998__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15027,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15027,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___15107 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___15107)){
var effect_fn_15108 = temp__5802__auto___15107;
(effect_fn_15108.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15108.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15108.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__15109 = cljs.core.next(seq__14998__$1);
var G__15110 = null;
var G__15111 = (0);
var G__15112 = (0);
seq__14998 = G__15109;
chunk__14999 = G__15110;
count__15000 = G__15111;
i__15001 = G__15112;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__15031 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__15032 = null;
var count__15033 = (0);
var i__15034 = (0);
while(true){
if((i__15034 < count__15033)){
var event = chunk__15032.cljs$core$IIndexed$_nth$arity$2(null, i__15034);
re_frame.router.dispatch(event);


var G__15113 = seq__15031;
var G__15114 = chunk__15032;
var G__15115 = count__15033;
var G__15116 = (i__15034 + (1));
seq__15031 = G__15113;
chunk__15032 = G__15114;
count__15033 = G__15115;
i__15034 = G__15116;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15031);
if(temp__5804__auto__){
var seq__15031__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15031__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15031__$1);
var G__15117 = cljs.core.chunk_rest(seq__15031__$1);
var G__15118 = c__5525__auto__;
var G__15119 = cljs.core.count(c__5525__auto__);
var G__15120 = (0);
seq__15031 = G__15117;
chunk__15032 = G__15118;
count__15033 = G__15119;
i__15034 = G__15120;
continue;
} else {
var event = cljs.core.first(seq__15031__$1);
re_frame.router.dispatch(event);


var G__15122 = cljs.core.next(seq__15031__$1);
var G__15123 = null;
var G__15124 = (0);
var G__15125 = (0);
seq__15031 = G__15122;
chunk__15032 = G__15123;
count__15033 = G__15124;
i__15034 = G__15125;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__15035 = cljs.core.seq(value);
var chunk__15036 = null;
var count__15037 = (0);
var i__15038 = (0);
while(true){
if((i__15038 < count__15037)){
var event = chunk__15036.cljs$core$IIndexed$_nth$arity$2(null, i__15038);
clear_event(event);


var G__15134 = seq__15035;
var G__15135 = chunk__15036;
var G__15136 = count__15037;
var G__15137 = (i__15038 + (1));
seq__15035 = G__15134;
chunk__15036 = G__15135;
count__15037 = G__15136;
i__15038 = G__15137;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15035);
if(temp__5804__auto__){
var seq__15035__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15035__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15035__$1);
var G__15138 = cljs.core.chunk_rest(seq__15035__$1);
var G__15139 = c__5525__auto__;
var G__15140 = cljs.core.count(c__5525__auto__);
var G__15141 = (0);
seq__15035 = G__15138;
chunk__15036 = G__15139;
count__15037 = G__15140;
i__15038 = G__15141;
continue;
} else {
var event = cljs.core.first(seq__15035__$1);
clear_event(event);


var G__15142 = cljs.core.next(seq__15035__$1);
var G__15143 = null;
var G__15144 = (0);
var G__15145 = (0);
seq__15035 = G__15142;
chunk__15036 = G__15143;
count__15037 = G__15144;
i__15038 = G__15145;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
