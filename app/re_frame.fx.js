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
var _STAR_current_trace_STAR__orig_val__14137 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__14138 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__14138);

try{try{var seq__14139 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__14140 = null;
var count__14141 = (0);
var i__14142 = (0);
while(true){
if((i__14142 < count__14141)){
var vec__14173 = chunk__14140.cljs$core$IIndexed$_nth$arity$2(null, i__14142);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14173,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14173,(1),null);
var temp__5802__auto___14276 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14276)){
var effect_fn_14277 = temp__5802__auto___14276;
(effect_fn_14277.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14277.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14277.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14278 = seq__14139;
var G__14279 = chunk__14140;
var G__14280 = count__14141;
var G__14281 = (i__14142 + (1));
seq__14139 = G__14278;
chunk__14140 = G__14279;
count__14141 = G__14280;
i__14142 = G__14281;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14139);
if(temp__5804__auto__){
var seq__14139__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14139__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14139__$1);
var G__14282 = cljs.core.chunk_rest(seq__14139__$1);
var G__14283 = c__5525__auto__;
var G__14284 = cljs.core.count(c__5525__auto__);
var G__14285 = (0);
seq__14139 = G__14282;
chunk__14140 = G__14283;
count__14141 = G__14284;
i__14142 = G__14285;
continue;
} else {
var vec__14198 = cljs.core.first(seq__14139__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14198,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14198,(1),null);
var temp__5802__auto___14287 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14287)){
var effect_fn_14288 = temp__5802__auto___14287;
(effect_fn_14288.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14288.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14288.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14289 = cljs.core.next(seq__14139__$1);
var G__14290 = null;
var G__14291 = (0);
var G__14292 = (0);
seq__14139 = G__14289;
chunk__14140 = G__14290;
count__14141 = G__14291;
i__14142 = G__14292;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13669__auto___14293 = re_frame.interop.now();
var duration__13670__auto___14294 = (end__13669__auto___14293 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13670__auto___14294,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13669__auto___14293);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__14137);
}} else {
var seq__14208 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__14209 = null;
var count__14210 = (0);
var i__14211 = (0);
while(true){
if((i__14211 < count__14210)){
var vec__14233 = chunk__14209.cljs$core$IIndexed$_nth$arity$2(null, i__14211);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14233,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14233,(1),null);
var temp__5802__auto___14296 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14296)){
var effect_fn_14298 = temp__5802__auto___14296;
(effect_fn_14298.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14298.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14298.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14299 = seq__14208;
var G__14300 = chunk__14209;
var G__14301 = count__14210;
var G__14302 = (i__14211 + (1));
seq__14208 = G__14299;
chunk__14209 = G__14300;
count__14210 = G__14301;
i__14211 = G__14302;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14208);
if(temp__5804__auto__){
var seq__14208__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14208__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14208__$1);
var G__14308 = cljs.core.chunk_rest(seq__14208__$1);
var G__14309 = c__5525__auto__;
var G__14310 = cljs.core.count(c__5525__auto__);
var G__14311 = (0);
seq__14208 = G__14308;
chunk__14209 = G__14309;
count__14210 = G__14310;
i__14211 = G__14311;
continue;
} else {
var vec__14238 = cljs.core.first(seq__14208__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14238,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14238,(1),null);
var temp__5802__auto___14317 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14317)){
var effect_fn_14318 = temp__5802__auto___14317;
(effect_fn_14318.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14318.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14318.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14323 = cljs.core.next(seq__14208__$1);
var G__14324 = null;
var G__14325 = (0);
var G__14326 = (0);
seq__14208 = G__14323;
chunk__14209 = G__14324;
count__14210 = G__14325;
i__14211 = G__14326;
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
var seq__14244 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__14245 = null;
var count__14246 = (0);
var i__14247 = (0);
while(true){
if((i__14247 < count__14246)){
var map__14253 = chunk__14245.cljs$core$IIndexed$_nth$arity$2(null, i__14247);
var map__14253__$1 = cljs.core.__destructure_map(map__14253);
var effect = map__14253__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14253__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14253__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__14244,chunk__14245,count__14246,i__14247,map__14253,map__14253__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__14244,chunk__14245,count__14246,i__14247,map__14253,map__14253__$1,effect,ms,dispatch))
,ms);
}


var G__14327 = seq__14244;
var G__14328 = chunk__14245;
var G__14329 = count__14246;
var G__14330 = (i__14247 + (1));
seq__14244 = G__14327;
chunk__14245 = G__14328;
count__14246 = G__14329;
i__14247 = G__14330;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14244);
if(temp__5804__auto__){
var seq__14244__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14244__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14244__$1);
var G__14331 = cljs.core.chunk_rest(seq__14244__$1);
var G__14332 = c__5525__auto__;
var G__14333 = cljs.core.count(c__5525__auto__);
var G__14334 = (0);
seq__14244 = G__14331;
chunk__14245 = G__14332;
count__14246 = G__14333;
i__14247 = G__14334;
continue;
} else {
var map__14257 = cljs.core.first(seq__14244__$1);
var map__14257__$1 = cljs.core.__destructure_map(map__14257);
var effect = map__14257__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14257__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14257__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__14244,chunk__14245,count__14246,i__14247,map__14257,map__14257__$1,effect,ms,dispatch,seq__14244__$1,temp__5804__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__14244,chunk__14245,count__14246,i__14247,map__14257,map__14257__$1,effect,ms,dispatch,seq__14244__$1,temp__5804__auto__))
,ms);
}


var G__14335 = cljs.core.next(seq__14244__$1);
var G__14336 = null;
var G__14337 = (0);
var G__14338 = (0);
seq__14244 = G__14335;
chunk__14245 = G__14336;
count__14246 = G__14337;
i__14247 = G__14338;
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
var seq__14260 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__14261 = null;
var count__14262 = (0);
var i__14263 = (0);
while(true){
if((i__14263 < count__14262)){
var event = chunk__14261.cljs$core$IIndexed$_nth$arity$2(null, i__14263);
re_frame.router.dispatch(event);


var G__14340 = seq__14260;
var G__14341 = chunk__14261;
var G__14342 = count__14262;
var G__14343 = (i__14263 + (1));
seq__14260 = G__14340;
chunk__14261 = G__14341;
count__14262 = G__14342;
i__14263 = G__14343;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14260);
if(temp__5804__auto__){
var seq__14260__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14260__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14260__$1);
var G__14344 = cljs.core.chunk_rest(seq__14260__$1);
var G__14345 = c__5525__auto__;
var G__14346 = cljs.core.count(c__5525__auto__);
var G__14347 = (0);
seq__14260 = G__14344;
chunk__14261 = G__14345;
count__14262 = G__14346;
i__14263 = G__14347;
continue;
} else {
var event = cljs.core.first(seq__14260__$1);
re_frame.router.dispatch(event);


var G__14348 = cljs.core.next(seq__14260__$1);
var G__14349 = null;
var G__14350 = (0);
var G__14351 = (0);
seq__14260 = G__14348;
chunk__14261 = G__14349;
count__14262 = G__14350;
i__14263 = G__14351;
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
var seq__14269 = cljs.core.seq(value);
var chunk__14270 = null;
var count__14271 = (0);
var i__14272 = (0);
while(true){
if((i__14272 < count__14271)){
var event = chunk__14270.cljs$core$IIndexed$_nth$arity$2(null, i__14272);
clear_event(event);


var G__14352 = seq__14269;
var G__14353 = chunk__14270;
var G__14354 = count__14271;
var G__14355 = (i__14272 + (1));
seq__14269 = G__14352;
chunk__14270 = G__14353;
count__14271 = G__14354;
i__14272 = G__14355;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14269);
if(temp__5804__auto__){
var seq__14269__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14269__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14269__$1);
var G__14356 = cljs.core.chunk_rest(seq__14269__$1);
var G__14357 = c__5525__auto__;
var G__14358 = cljs.core.count(c__5525__auto__);
var G__14359 = (0);
seq__14269 = G__14356;
chunk__14270 = G__14357;
count__14271 = G__14358;
i__14272 = G__14359;
continue;
} else {
var event = cljs.core.first(seq__14269__$1);
clear_event(event);


var G__14360 = cljs.core.next(seq__14269__$1);
var G__14361 = null;
var G__14362 = (0);
var G__14363 = (0);
seq__14269 = G__14360;
chunk__14270 = G__14361;
count__14271 = G__14362;
i__14272 = G__14363;
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
