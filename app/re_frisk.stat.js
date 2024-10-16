goog.provide('re_frisk.stat');
re_frisk.stat.assoc_map = (function re_frisk$stat$assoc_map(acc,key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cnt","cnt",283978798),(0),new cljs.core.Keyword(null,"ms","ms",-1152709733),(0)], null));
});
re_frisk.stat.get_re_frame_handlers = (function re_frisk$stat$get_re_frame_handlers(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fx","fx",-1237829572).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),new cljs.core.Keyword(null,"db","db",993250759)], 0)))),new cljs.core.Keyword(null,"cofx","cofx",2013202907),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cofx","cofx",2013202907).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)),new cljs.core.Keyword(null,"db","db",993250759)))),new cljs.core.Keyword(null,"event","event",301435442),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)))),new cljs.core.Keyword(null,"sub","sub",-2093760025),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler))))], null);
});
re_frisk.stat.init_stat = (function re_frisk$stat$init_stat(re_frame_data){
if(cljs.core.empty_QMARK_(cljs.core.deref(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data)))){
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),re_frisk.stat.get_re_frame_handlers());
} else {
return null;
}
});
re_frisk.stat.update_trace_stat = (function re_frisk$stat$update_trace_stat(re_frame_data,traces){
var seq__13126 = cljs.core.seq(traces);
var chunk__13127 = null;
var count__13128 = (0);
var i__13129 = (0);
while(true){
if((i__13129 < count__13128)){
var map__13205 = chunk__13127.cljs$core$IIndexed$_nth$arity$2(null, i__13129);
var map__13205__$1 = cljs.core.__destructure_map(map__13205);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13205__$1,new cljs.core.Keyword(null,"event","event",301435442));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13205__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13205__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13205__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13205__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
if(cljs.core.truth_(event)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration], 0));

if((cljs.core.count(effects) > (0))){
var seq__13206_13380 = cljs.core.seq(cljs.core.keys(effects));
var chunk__13207_13381 = null;
var count__13208_13382 = (0);
var i__13209_13383 = (0);
while(true){
if((i__13209_13383 < count__13208_13382)){
var key_13384 = chunk__13207_13381.cljs$core$IIndexed$_nth$arity$2(null, i__13209_13383);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_13384,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__13385 = seq__13206_13380;
var G__13386 = chunk__13207_13381;
var G__13387 = count__13208_13382;
var G__13388 = (i__13209_13383 + (1));
seq__13206_13380 = G__13385;
chunk__13207_13381 = G__13386;
count__13208_13382 = G__13387;
i__13209_13383 = G__13388;
continue;
} else {
var temp__5804__auto___13389 = cljs.core.seq(seq__13206_13380);
if(temp__5804__auto___13389){
var seq__13206_13390__$1 = temp__5804__auto___13389;
if(cljs.core.chunked_seq_QMARK_(seq__13206_13390__$1)){
var c__5525__auto___13391 = cljs.core.chunk_first(seq__13206_13390__$1);
var G__13393 = cljs.core.chunk_rest(seq__13206_13390__$1);
var G__13394 = c__5525__auto___13391;
var G__13395 = cljs.core.count(c__5525__auto___13391);
var G__13396 = (0);
seq__13206_13380 = G__13393;
chunk__13207_13381 = G__13394;
count__13208_13382 = G__13395;
i__13209_13383 = G__13396;
continue;
} else {
var key_13397 = cljs.core.first(seq__13206_13390__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_13397,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__13398 = cljs.core.next(seq__13206_13390__$1);
var G__13399 = null;
var G__13400 = (0);
var G__13401 = (0);
seq__13206_13380 = G__13398;
chunk__13207_13381 = G__13399;
count__13208_13382 = G__13400;
i__13209_13383 = G__13401;
continue;
}
} else {
}
}
break;
}
} else {
}

if((cljs.core.count(coeffects) > (0))){
var seq__13211_13402 = cljs.core.seq(cljs.core.keys(coeffects));
var chunk__13212_13403 = null;
var count__13213_13404 = (0);
var i__13214_13405 = (0);
while(true){
if((i__13214_13405 < count__13213_13404)){
var key_13408 = chunk__13212_13403.cljs$core$IIndexed$_nth$arity$2(null, i__13214_13405);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_13408,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__13413 = seq__13211_13402;
var G__13414 = chunk__13212_13403;
var G__13415 = count__13213_13404;
var G__13416 = (i__13214_13405 + (1));
seq__13211_13402 = G__13413;
chunk__13212_13403 = G__13414;
count__13213_13404 = G__13415;
i__13214_13405 = G__13416;
continue;
} else {
var temp__5804__auto___13419 = cljs.core.seq(seq__13211_13402);
if(temp__5804__auto___13419){
var seq__13211_13420__$1 = temp__5804__auto___13419;
if(cljs.core.chunked_seq_QMARK_(seq__13211_13420__$1)){
var c__5525__auto___13421 = cljs.core.chunk_first(seq__13211_13420__$1);
var G__13422 = cljs.core.chunk_rest(seq__13211_13420__$1);
var G__13423 = c__5525__auto___13421;
var G__13424 = cljs.core.count(c__5525__auto___13421);
var G__13425 = (0);
seq__13211_13402 = G__13422;
chunk__13212_13403 = G__13423;
count__13213_13404 = G__13424;
i__13214_13405 = G__13425;
continue;
} else {
var key_13426 = cljs.core.first(seq__13211_13420__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_13426,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__13427 = cljs.core.next(seq__13211_13420__$1);
var G__13428 = null;
var G__13429 = (0);
var G__13430 = (0);
seq__13211_13402 = G__13427;
chunk__13212_13403 = G__13428;
count__13213_13404 = G__13429;
i__13214_13405 = G__13430;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

if(cljs.core.seq(subs)){
var seq__13240_13432 = cljs.core.seq(subs);
var chunk__13241_13434 = null;
var count__13242_13435 = (0);
var i__13243_13436 = (0);
while(true){
if((i__13243_13436 < count__13242_13435)){
var map__13248_13437 = chunk__13241_13434.cljs$core$IIndexed$_nth$arity$2(null, i__13243_13436);
var map__13248_13438__$1 = cljs.core.__destructure_map(map__13248_13437);
var op_type_13439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13248_13438__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_13440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13248_13438__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_13441__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13248_13438__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_13439,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_13440,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_13440,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_13441__$1], 0));
} else {
}


var G__13442 = seq__13240_13432;
var G__13443 = chunk__13241_13434;
var G__13444 = count__13242_13435;
var G__13445 = (i__13243_13436 + (1));
seq__13240_13432 = G__13442;
chunk__13241_13434 = G__13443;
count__13242_13435 = G__13444;
i__13243_13436 = G__13445;
continue;
} else {
var temp__5804__auto___13446 = cljs.core.seq(seq__13240_13432);
if(temp__5804__auto___13446){
var seq__13240_13447__$1 = temp__5804__auto___13446;
if(cljs.core.chunked_seq_QMARK_(seq__13240_13447__$1)){
var c__5525__auto___13448 = cljs.core.chunk_first(seq__13240_13447__$1);
var G__13449 = cljs.core.chunk_rest(seq__13240_13447__$1);
var G__13450 = c__5525__auto___13448;
var G__13451 = cljs.core.count(c__5525__auto___13448);
var G__13452 = (0);
seq__13240_13432 = G__13449;
chunk__13241_13434 = G__13450;
count__13242_13435 = G__13451;
i__13243_13436 = G__13452;
continue;
} else {
var map__13283_13453 = cljs.core.first(seq__13240_13447__$1);
var map__13283_13454__$1 = cljs.core.__destructure_map(map__13283_13453);
var op_type_13455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13283_13454__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_13456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13283_13454__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_13457__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13283_13454__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_13455,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_13456,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_13456,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_13457__$1], 0));
} else {
}


var G__13472 = cljs.core.next(seq__13240_13447__$1);
var G__13473 = null;
var G__13474 = (0);
var G__13475 = (0);
seq__13240_13432 = G__13472;
chunk__13241_13434 = G__13473;
count__13242_13435 = G__13474;
i__13243_13436 = G__13475;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__13476 = seq__13126;
var G__13477 = chunk__13127;
var G__13478 = count__13128;
var G__13479 = (i__13129 + (1));
seq__13126 = G__13476;
chunk__13127 = G__13477;
count__13128 = G__13478;
i__13129 = G__13479;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13126);
if(temp__5804__auto__){
var seq__13126__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13126__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13126__$1);
var G__13480 = cljs.core.chunk_rest(seq__13126__$1);
var G__13481 = c__5525__auto__;
var G__13482 = cljs.core.count(c__5525__auto__);
var G__13483 = (0);
seq__13126 = G__13480;
chunk__13127 = G__13481;
count__13128 = G__13482;
i__13129 = G__13483;
continue;
} else {
var map__13308 = cljs.core.first(seq__13126__$1);
var map__13308__$1 = cljs.core.__destructure_map(map__13308);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13308__$1,new cljs.core.Keyword(null,"event","event",301435442));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13308__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13308__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13308__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13308__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
if(cljs.core.truth_(event)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration], 0));

if((cljs.core.count(effects) > (0))){
var seq__13311_13488 = cljs.core.seq(cljs.core.keys(effects));
var chunk__13312_13489 = null;
var count__13313_13490 = (0);
var i__13314_13491 = (0);
while(true){
if((i__13314_13491 < count__13313_13490)){
var key_13492 = chunk__13312_13489.cljs$core$IIndexed$_nth$arity$2(null, i__13314_13491);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_13492,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__13494 = seq__13311_13488;
var G__13495 = chunk__13312_13489;
var G__13496 = count__13313_13490;
var G__13497 = (i__13314_13491 + (1));
seq__13311_13488 = G__13494;
chunk__13312_13489 = G__13495;
count__13313_13490 = G__13496;
i__13314_13491 = G__13497;
continue;
} else {
var temp__5804__auto___13499__$1 = cljs.core.seq(seq__13311_13488);
if(temp__5804__auto___13499__$1){
var seq__13311_13500__$1 = temp__5804__auto___13499__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13311_13500__$1)){
var c__5525__auto___13501 = cljs.core.chunk_first(seq__13311_13500__$1);
var G__13502 = cljs.core.chunk_rest(seq__13311_13500__$1);
var G__13503 = c__5525__auto___13501;
var G__13504 = cljs.core.count(c__5525__auto___13501);
var G__13505 = (0);
seq__13311_13488 = G__13502;
chunk__13312_13489 = G__13503;
count__13313_13490 = G__13504;
i__13314_13491 = G__13505;
continue;
} else {
var key_13507 = cljs.core.first(seq__13311_13500__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_13507,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__13508 = cljs.core.next(seq__13311_13500__$1);
var G__13509 = null;
var G__13510 = (0);
var G__13511 = (0);
seq__13311_13488 = G__13508;
chunk__13312_13489 = G__13509;
count__13313_13490 = G__13510;
i__13314_13491 = G__13511;
continue;
}
} else {
}
}
break;
}
} else {
}

if((cljs.core.count(coeffects) > (0))){
var seq__13330_13513 = cljs.core.seq(cljs.core.keys(coeffects));
var chunk__13331_13514 = null;
var count__13332_13515 = (0);
var i__13333_13516 = (0);
while(true){
if((i__13333_13516 < count__13332_13515)){
var key_13517 = chunk__13331_13514.cljs$core$IIndexed$_nth$arity$2(null, i__13333_13516);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_13517,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__13519 = seq__13330_13513;
var G__13520 = chunk__13331_13514;
var G__13521 = count__13332_13515;
var G__13522 = (i__13333_13516 + (1));
seq__13330_13513 = G__13519;
chunk__13331_13514 = G__13520;
count__13332_13515 = G__13521;
i__13333_13516 = G__13522;
continue;
} else {
var temp__5804__auto___13523__$1 = cljs.core.seq(seq__13330_13513);
if(temp__5804__auto___13523__$1){
var seq__13330_13524__$1 = temp__5804__auto___13523__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13330_13524__$1)){
var c__5525__auto___13525 = cljs.core.chunk_first(seq__13330_13524__$1);
var G__13526 = cljs.core.chunk_rest(seq__13330_13524__$1);
var G__13527 = c__5525__auto___13525;
var G__13528 = cljs.core.count(c__5525__auto___13525);
var G__13529 = (0);
seq__13330_13513 = G__13526;
chunk__13331_13514 = G__13527;
count__13332_13515 = G__13528;
i__13333_13516 = G__13529;
continue;
} else {
var key_13530 = cljs.core.first(seq__13330_13524__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_13530,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__13532 = cljs.core.next(seq__13330_13524__$1);
var G__13533 = null;
var G__13534 = (0);
var G__13535 = (0);
seq__13330_13513 = G__13532;
chunk__13331_13514 = G__13533;
count__13332_13515 = G__13534;
i__13333_13516 = G__13535;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

if(cljs.core.seq(subs)){
var seq__13334_13536 = cljs.core.seq(subs);
var chunk__13335_13537 = null;
var count__13336_13538 = (0);
var i__13337_13539 = (0);
while(true){
if((i__13337_13539 < count__13336_13538)){
var map__13347_13541 = chunk__13335_13537.cljs$core$IIndexed$_nth$arity$2(null, i__13337_13539);
var map__13347_13542__$1 = cljs.core.__destructure_map(map__13347_13541);
var op_type_13543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13347_13542__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_13544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13347_13542__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_13545__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13347_13542__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_13543,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_13544,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_13544,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_13545__$1], 0));
} else {
}


var G__13548 = seq__13334_13536;
var G__13549 = chunk__13335_13537;
var G__13550 = count__13336_13538;
var G__13551 = (i__13337_13539 + (1));
seq__13334_13536 = G__13548;
chunk__13335_13537 = G__13549;
count__13336_13538 = G__13550;
i__13337_13539 = G__13551;
continue;
} else {
var temp__5804__auto___13552__$1 = cljs.core.seq(seq__13334_13536);
if(temp__5804__auto___13552__$1){
var seq__13334_13553__$1 = temp__5804__auto___13552__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13334_13553__$1)){
var c__5525__auto___13554 = cljs.core.chunk_first(seq__13334_13553__$1);
var G__13556 = cljs.core.chunk_rest(seq__13334_13553__$1);
var G__13557 = c__5525__auto___13554;
var G__13558 = cljs.core.count(c__5525__auto___13554);
var G__13559 = (0);
seq__13334_13536 = G__13556;
chunk__13335_13537 = G__13557;
count__13336_13538 = G__13558;
i__13337_13539 = G__13559;
continue;
} else {
var map__13351_13560 = cljs.core.first(seq__13334_13553__$1);
var map__13351_13561__$1 = cljs.core.__destructure_map(map__13351_13560);
var op_type_13562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13351_13561__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_13563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13351_13561__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_13564__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13351_13561__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_13562,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_13563,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_13563,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_13564__$1], 0));
} else {
}


var G__13579 = cljs.core.next(seq__13334_13553__$1);
var G__13580 = null;
var G__13581 = (0);
var G__13582 = (0);
seq__13334_13536 = G__13579;
chunk__13335_13537 = G__13580;
count__13336_13538 = G__13581;
i__13337_13539 = G__13582;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__13583 = cljs.core.next(seq__13126__$1);
var G__13584 = null;
var G__13585 = (0);
var G__13586 = (0);
seq__13126 = G__13583;
chunk__13127 = G__13584;
count__13128 = G__13585;
i__13129 = G__13586;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frisk.stat.update_event_stat = (function re_frisk$stat$update_event_stat(re_frame_data,event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);
});

//# sourceMappingURL=re_frisk.stat.js.map
