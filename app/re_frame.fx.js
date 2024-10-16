goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null, re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
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
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__10054 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__10055 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__10055);

try{try{var seq__10057 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10058 = null;
var count__10059 = (0);
var i__10060 = (0);
while(true){
if((i__10060 < count__10059)){
var vec__10071 = chunk__10058.cljs$core$IIndexed$_nth$arity$2(null, i__10060);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10071,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10071,(1),null);
var temp__5802__auto___10165 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___10165)){
var effect_fn_10166 = temp__5802__auto___10165;
(effect_fn_10166.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10166.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10166.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10167 = seq__10057;
var G__10168 = chunk__10058;
var G__10169 = count__10059;
var G__10170 = (i__10060 + (1));
seq__10057 = G__10167;
chunk__10058 = G__10168;
count__10059 = G__10169;
i__10060 = G__10170;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10057);
if(temp__5804__auto__){
var seq__10057__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10057__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10057__$1);
var G__10173 = cljs.core.chunk_rest(seq__10057__$1);
var G__10174 = c__5525__auto__;
var G__10175 = cljs.core.count(c__5525__auto__);
var G__10176 = (0);
seq__10057 = G__10173;
chunk__10058 = G__10174;
count__10059 = G__10175;
i__10060 = G__10176;
continue;
} else {
var vec__10075 = cljs.core.first(seq__10057__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10075,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10075,(1),null);
var temp__5802__auto___10177 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___10177)){
var effect_fn_10178 = temp__5802__auto___10177;
(effect_fn_10178.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10178.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10178.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10179 = cljs.core.next(seq__10057__$1);
var G__10180 = null;
var G__10181 = (0);
var G__10182 = (0);
seq__10057 = G__10179;
chunk__10058 = G__10180;
count__10059 = G__10181;
i__10060 = G__10182;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__9507__auto___10186 = re_frame.interop.now();
var duration__9508__auto___10187 = (end__9507__auto___10186 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__9508__auto___10187,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__9507__auto___10186);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__10054);
}} else {
var seq__10078 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10079 = null;
var count__10080 = (0);
var i__10081 = (0);
while(true){
if((i__10081 < count__10080)){
var vec__10088 = chunk__10079.cljs$core$IIndexed$_nth$arity$2(null, i__10081);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10088,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10088,(1),null);
var temp__5802__auto___10191 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___10191)){
var effect_fn_10194 = temp__5802__auto___10191;
(effect_fn_10194.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10194.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10194.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10197 = seq__10078;
var G__10198 = chunk__10079;
var G__10199 = count__10080;
var G__10200 = (i__10081 + (1));
seq__10078 = G__10197;
chunk__10079 = G__10198;
count__10080 = G__10199;
i__10081 = G__10200;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10078);
if(temp__5804__auto__){
var seq__10078__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10078__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10078__$1);
var G__10201 = cljs.core.chunk_rest(seq__10078__$1);
var G__10202 = c__5525__auto__;
var G__10203 = cljs.core.count(c__5525__auto__);
var G__10204 = (0);
seq__10078 = G__10201;
chunk__10079 = G__10202;
count__10080 = G__10203;
i__10081 = G__10204;
continue;
} else {
var vec__10092 = cljs.core.first(seq__10078__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10092,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10092,(1),null);
var temp__5802__auto___10205 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___10205)){
var effect_fn_10206 = temp__5802__auto___10205;
(effect_fn_10206.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10206.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10206.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10207 = cljs.core.next(seq__10078__$1);
var G__10208 = null;
var G__10209 = (0);
var G__10210 = (0);
seq__10078 = G__10207;
chunk__10079 = G__10208;
count__10080 = G__10209;
i__10081 = G__10210;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__10098 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__10099 = null;
var count__10100 = (0);
var i__10101 = (0);
while(true){
if((i__10101 < count__10100)){
var map__10117 = chunk__10099.cljs$core$IIndexed$_nth$arity$2(null, i__10101);
var map__10117__$1 = cljs.core.__destructure_map(map__10117);
var effect = map__10117__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10117__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10117__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__10098,chunk__10099,count__10100,i__10101,map__10117,map__10117__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__10098,chunk__10099,count__10100,i__10101,map__10117,map__10117__$1,effect,ms,dispatch))
,ms);
}


var G__10213 = seq__10098;
var G__10214 = chunk__10099;
var G__10215 = count__10100;
var G__10216 = (i__10101 + (1));
seq__10098 = G__10213;
chunk__10099 = G__10214;
count__10100 = G__10215;
i__10101 = G__10216;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10098);
if(temp__5804__auto__){
var seq__10098__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10098__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10098__$1);
var G__10217 = cljs.core.chunk_rest(seq__10098__$1);
var G__10218 = c__5525__auto__;
var G__10219 = cljs.core.count(c__5525__auto__);
var G__10220 = (0);
seq__10098 = G__10217;
chunk__10099 = G__10218;
count__10100 = G__10219;
i__10101 = G__10220;
continue;
} else {
var map__10120 = cljs.core.first(seq__10098__$1);
var map__10120__$1 = cljs.core.__destructure_map(map__10120);
var effect = map__10120__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10120__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10120__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__10098,chunk__10099,count__10100,i__10101,map__10120,map__10120__$1,effect,ms,dispatch,seq__10098__$1,temp__5804__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__10098,chunk__10099,count__10100,i__10101,map__10120,map__10120__$1,effect,ms,dispatch,seq__10098__$1,temp__5804__auto__))
,ms);
}


var G__10221 = cljs.core.next(seq__10098__$1);
var G__10222 = null;
var G__10223 = (0);
var G__10224 = (0);
seq__10098 = G__10221;
chunk__10099 = G__10222;
count__10100 = G__10223;
i__10101 = G__10224;
continue;
}
} else {
return null;
}
}
break;
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
var seq__10134 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__10135 = null;
var count__10136 = (0);
var i__10137 = (0);
while(true){
if((i__10137 < count__10136)){
var event = chunk__10135.cljs$core$IIndexed$_nth$arity$2(null, i__10137);
re_frame.router.dispatch(event);


var G__10229 = seq__10134;
var G__10230 = chunk__10135;
var G__10231 = count__10136;
var G__10232 = (i__10137 + (1));
seq__10134 = G__10229;
chunk__10135 = G__10230;
count__10136 = G__10231;
i__10137 = G__10232;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10134);
if(temp__5804__auto__){
var seq__10134__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10134__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10134__$1);
var G__10233 = cljs.core.chunk_rest(seq__10134__$1);
var G__10234 = c__5525__auto__;
var G__10235 = cljs.core.count(c__5525__auto__);
var G__10236 = (0);
seq__10134 = G__10233;
chunk__10135 = G__10234;
count__10136 = G__10235;
i__10137 = G__10236;
continue;
} else {
var event = cljs.core.first(seq__10134__$1);
re_frame.router.dispatch(event);


var G__10237 = cljs.core.next(seq__10134__$1);
var G__10238 = null;
var G__10239 = (0);
var G__10240 = (0);
seq__10134 = G__10237;
chunk__10135 = G__10238;
count__10136 = G__10239;
i__10137 = G__10240;
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
var seq__10145 = cljs.core.seq(value);
var chunk__10146 = null;
var count__10147 = (0);
var i__10148 = (0);
while(true){
if((i__10148 < count__10147)){
var event = chunk__10146.cljs$core$IIndexed$_nth$arity$2(null, i__10148);
clear_event(event);


var G__10242 = seq__10145;
var G__10243 = chunk__10146;
var G__10244 = count__10147;
var G__10245 = (i__10148 + (1));
seq__10145 = G__10242;
chunk__10146 = G__10243;
count__10147 = G__10244;
i__10148 = G__10245;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10145);
if(temp__5804__auto__){
var seq__10145__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10145__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10145__$1);
var G__10249 = cljs.core.chunk_rest(seq__10145__$1);
var G__10250 = c__5525__auto__;
var G__10251 = cljs.core.count(c__5525__auto__);
var G__10252 = (0);
seq__10145 = G__10249;
chunk__10146 = G__10250;
count__10147 = G__10251;
i__10148 = G__10252;
continue;
} else {
var event = cljs.core.first(seq__10145__$1);
clear_event(event);


var G__10253 = cljs.core.next(seq__10145__$1);
var G__10254 = null;
var G__10255 = (0);
var G__10256 = (0);
seq__10145 = G__10253;
chunk__10146 = G__10254;
count__10147 = G__10255;
i__10148 = G__10256;
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
