goog.provide('day8.reagent.impl.batching');
day8.reagent.impl.batching.operation_name = cljs.core.memoize((function (c){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(reagent.impl.component.component_name(c),/ > /));
}));
if((typeof day8 !== 'undefined') && (typeof day8.reagent !== 'undefined') && (typeof day8.reagent.impl !== 'undefined') && (typeof day8.reagent.impl.batching !== 'undefined') && (typeof day8.reagent.impl.batching.original_next_tick !== 'undefined')){
} else {
day8.reagent.impl.batching.original_next_tick = reagent.impl.batching.next_tick;
}
day8.reagent.impl.batching.next_tick = (function day8$reagent$impl$batching$next_tick(f){
var G__14842 = (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__14843 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__14844 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"raf","raf",-1295410152)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__14844);

try{try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__14848_14908 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__14849_14909 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"raf-end","raf-end",-220596864)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__14849_14909);

try{try{}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__10939__auto___14912 = re_frame.interop.now();
var duration__10940__auto___14913 = (end__10939__auto___14912 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10940__auto___14913,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__10939__auto___14912);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__14848_14908);
}} else {
}

if(reagent.impl.batching.render_queue.scheduled_QMARK_ === false){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__14859 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__14860 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__14860);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__10939__auto___14919 = re_frame.interop.now();
var duration__10940__auto___14920 = (end__10939__auto___14919 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10940__auto___14920,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__10939__auto___14919);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__14859);
}} else {
return null;
}
} else {
return null;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__10939__auto___14926 = re_frame.interop.now();
var duration__10940__auto___14927 = (end__10939__auto___14926 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10940__auto___14927,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__10939__auto___14926);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__14843);
}} else {
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__14864_14937 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__14865_14938 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"raf-end","raf-end",-220596864)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__14865_14938);

try{try{}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__10939__auto___14948 = re_frame.interop.now();
var duration__10940__auto___14949 = (end__10939__auto___14948 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10940__auto___14949,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__10939__auto___14948);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__14864_14937);
}} else {
}

if(reagent.impl.batching.render_queue.scheduled_QMARK_ === false){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__14868 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__14869 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__14869);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__10939__auto___14962 = re_frame.interop.now();
var duration__10940__auto___14963 = (end__10939__auto___14962 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10940__auto___14963,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__10939__auto___14962);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__14868);
}} else {
return null;
}
} else {
return null;
}
}
});
return (day8.reagent.impl.batching.original_next_tick.cljs$core$IFn$_invoke$arity$1 ? day8.reagent.impl.batching.original_next_tick.cljs$core$IFn$_invoke$arity$1(G__14842) : day8.reagent.impl.batching.original_next_tick.call(null, G__14842));
});
if((typeof day8 !== 'undefined') && (typeof day8.reagent !== 'undefined') && (typeof day8.reagent.impl !== 'undefined') && (typeof day8.reagent.impl.batching !== 'undefined') && (typeof day8.reagent.impl.batching.original_run_queue !== 'undefined')){
} else {
day8.reagent.impl.batching.original_run_queue = reagent.impl.batching.run_queue;
}
day8.reagent.impl.batching.run_queue = (function day8$reagent$impl$batching$run_queue(a){
a.sort(reagent.impl.batching.compare_mount_order);

var n__5593__auto__ = a.length;
var i = (0);
while(true){
if((i < n__5593__auto__)){
var c_14972 = (a[i]);
if(c_14972.cljsIsDirty === true){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__14872_14974 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__14873_14976 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"force-update","force-update",725693267),new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.reagent.impl.batching.operation_name(c_14972)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__14873_14976);

try{try{c_14972.forceUpdate();
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__10939__auto___14978 = re_frame.interop.now();
var duration__10940__auto___14979 = (end__10939__auto___14978 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10940__auto___14979,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__10939__auto___14978);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__14872_14974);
}} else {
c_14972.forceUpdate();
}
} else {
}

var G__14980 = (i + (1));
i = G__14980;
continue;
} else {
return null;
}
break;
}
});
day8.reagent.impl.batching.patch_next_tick = (function day8$reagent$impl$batching$patch_next_tick(){
(reagent.impl.batching.next_tick = day8.reagent.impl.batching.next_tick);

return (reagent.impl.batching.run_queue = day8.reagent.impl.batching.run_queue);
});

//# sourceMappingURL=day8.reagent.impl.batching.js.map
