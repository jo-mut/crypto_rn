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
var seq__14874 = cljs.core.seq(traces);
var chunk__14875 = null;
var count__14876 = (0);
var i__14877 = (0);
while(true){
if((i__14877 < count__14876)){
var map__15183 = chunk__14875.cljs$core$IIndexed$_nth$arity$2(null, i__14877);
var map__15183__$1 = cljs.core.__destructure_map(map__15183);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15183__$1,new cljs.core.Keyword(null,"event","event",301435442));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15183__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15183__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15183__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15183__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
if(cljs.core.truth_(event)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration], 0));

if((cljs.core.count(effects) > (0))){
var seq__15184_15339 = cljs.core.seq(cljs.core.keys(effects));
var chunk__15185_15340 = null;
var count__15186_15341 = (0);
var i__15187_15342 = (0);
while(true){
if((i__15187_15342 < count__15186_15341)){
var key_15345 = chunk__15185_15340.cljs$core$IIndexed$_nth$arity$2(null, i__15187_15342);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_15345,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__15346 = seq__15184_15339;
var G__15347 = chunk__15185_15340;
var G__15348 = count__15186_15341;
var G__15349 = (i__15187_15342 + (1));
seq__15184_15339 = G__15346;
chunk__15185_15340 = G__15347;
count__15186_15341 = G__15348;
i__15187_15342 = G__15349;
continue;
} else {
var temp__5804__auto___15350 = cljs.core.seq(seq__15184_15339);
if(temp__5804__auto___15350){
var seq__15184_15351__$1 = temp__5804__auto___15350;
if(cljs.core.chunked_seq_QMARK_(seq__15184_15351__$1)){
var c__5525__auto___15352 = cljs.core.chunk_first(seq__15184_15351__$1);
var G__15353 = cljs.core.chunk_rest(seq__15184_15351__$1);
var G__15354 = c__5525__auto___15352;
var G__15355 = cljs.core.count(c__5525__auto___15352);
var G__15356 = (0);
seq__15184_15339 = G__15353;
chunk__15185_15340 = G__15354;
count__15186_15341 = G__15355;
i__15187_15342 = G__15356;
continue;
} else {
var key_15358 = cljs.core.first(seq__15184_15351__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_15358,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__15359 = cljs.core.next(seq__15184_15351__$1);
var G__15360 = null;
var G__15361 = (0);
var G__15362 = (0);
seq__15184_15339 = G__15359;
chunk__15185_15340 = G__15360;
count__15186_15341 = G__15361;
i__15187_15342 = G__15362;
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
var seq__15196_15365 = cljs.core.seq(cljs.core.keys(coeffects));
var chunk__15197_15366 = null;
var count__15198_15367 = (0);
var i__15199_15368 = (0);
while(true){
if((i__15199_15368 < count__15198_15367)){
var key_15369 = chunk__15197_15366.cljs$core$IIndexed$_nth$arity$2(null, i__15199_15368);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_15369,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__15370 = seq__15196_15365;
var G__15371 = chunk__15197_15366;
var G__15372 = count__15198_15367;
var G__15373 = (i__15199_15368 + (1));
seq__15196_15365 = G__15370;
chunk__15197_15366 = G__15371;
count__15198_15367 = G__15372;
i__15199_15368 = G__15373;
continue;
} else {
var temp__5804__auto___15374 = cljs.core.seq(seq__15196_15365);
if(temp__5804__auto___15374){
var seq__15196_15377__$1 = temp__5804__auto___15374;
if(cljs.core.chunked_seq_QMARK_(seq__15196_15377__$1)){
var c__5525__auto___15378 = cljs.core.chunk_first(seq__15196_15377__$1);
var G__15379 = cljs.core.chunk_rest(seq__15196_15377__$1);
var G__15380 = c__5525__auto___15378;
var G__15381 = cljs.core.count(c__5525__auto___15378);
var G__15382 = (0);
seq__15196_15365 = G__15379;
chunk__15197_15366 = G__15380;
count__15198_15367 = G__15381;
i__15199_15368 = G__15382;
continue;
} else {
var key_15383 = cljs.core.first(seq__15196_15377__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_15383,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__15384 = cljs.core.next(seq__15196_15377__$1);
var G__15385 = null;
var G__15386 = (0);
var G__15387 = (0);
seq__15196_15365 = G__15384;
chunk__15197_15366 = G__15385;
count__15198_15367 = G__15386;
i__15199_15368 = G__15387;
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
var seq__15203_15388 = cljs.core.seq(subs);
var chunk__15204_15389 = null;
var count__15205_15390 = (0);
var i__15206_15391 = (0);
while(true){
if((i__15206_15391 < count__15205_15390)){
var map__15209_15392 = chunk__15204_15389.cljs$core$IIndexed$_nth$arity$2(null, i__15206_15391);
var map__15209_15393__$1 = cljs.core.__destructure_map(map__15209_15392);
var op_type_15394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15209_15393__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_15395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15209_15393__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_15396__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15209_15393__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_15394,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_15395,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_15395,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_15396__$1], 0));
} else {
}


var G__15397 = seq__15203_15388;
var G__15398 = chunk__15204_15389;
var G__15399 = count__15205_15390;
var G__15400 = (i__15206_15391 + (1));
seq__15203_15388 = G__15397;
chunk__15204_15389 = G__15398;
count__15205_15390 = G__15399;
i__15206_15391 = G__15400;
continue;
} else {
var temp__5804__auto___15401 = cljs.core.seq(seq__15203_15388);
if(temp__5804__auto___15401){
var seq__15203_15402__$1 = temp__5804__auto___15401;
if(cljs.core.chunked_seq_QMARK_(seq__15203_15402__$1)){
var c__5525__auto___15403 = cljs.core.chunk_first(seq__15203_15402__$1);
var G__15404 = cljs.core.chunk_rest(seq__15203_15402__$1);
var G__15405 = c__5525__auto___15403;
var G__15406 = cljs.core.count(c__5525__auto___15403);
var G__15407 = (0);
seq__15203_15388 = G__15404;
chunk__15204_15389 = G__15405;
count__15205_15390 = G__15406;
i__15206_15391 = G__15407;
continue;
} else {
var map__15215_15408 = cljs.core.first(seq__15203_15402__$1);
var map__15215_15409__$1 = cljs.core.__destructure_map(map__15215_15408);
var op_type_15410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15215_15409__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_15411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15215_15409__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_15412__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15215_15409__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_15410,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_15411,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_15411,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_15412__$1], 0));
} else {
}


var G__15413 = cljs.core.next(seq__15203_15402__$1);
var G__15414 = null;
var G__15415 = (0);
var G__15416 = (0);
seq__15203_15388 = G__15413;
chunk__15204_15389 = G__15414;
count__15205_15390 = G__15415;
i__15206_15391 = G__15416;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__15418 = seq__14874;
var G__15419 = chunk__14875;
var G__15420 = count__14876;
var G__15421 = (i__14877 + (1));
seq__14874 = G__15418;
chunk__14875 = G__15419;
count__14876 = G__15420;
i__14877 = G__15421;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14874);
if(temp__5804__auto__){
var seq__14874__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14874__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14874__$1);
var G__15425 = cljs.core.chunk_rest(seq__14874__$1);
var G__15426 = c__5525__auto__;
var G__15427 = cljs.core.count(c__5525__auto__);
var G__15428 = (0);
seq__14874 = G__15425;
chunk__14875 = G__15426;
count__14876 = G__15427;
i__14877 = G__15428;
continue;
} else {
var map__15216 = cljs.core.first(seq__14874__$1);
var map__15216__$1 = cljs.core.__destructure_map(map__15216);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15216__$1,new cljs.core.Keyword(null,"event","event",301435442));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15216__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15216__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15216__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15216__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
if(cljs.core.truth_(event)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration], 0));

if((cljs.core.count(effects) > (0))){
var seq__15221_15430 = cljs.core.seq(cljs.core.keys(effects));
var chunk__15222_15431 = null;
var count__15223_15432 = (0);
var i__15224_15433 = (0);
while(true){
if((i__15224_15433 < count__15223_15432)){
var key_15434 = chunk__15222_15431.cljs$core$IIndexed$_nth$arity$2(null, i__15224_15433);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_15434,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__15435 = seq__15221_15430;
var G__15436 = chunk__15222_15431;
var G__15437 = count__15223_15432;
var G__15438 = (i__15224_15433 + (1));
seq__15221_15430 = G__15435;
chunk__15222_15431 = G__15436;
count__15223_15432 = G__15437;
i__15224_15433 = G__15438;
continue;
} else {
var temp__5804__auto___15439__$1 = cljs.core.seq(seq__15221_15430);
if(temp__5804__auto___15439__$1){
var seq__15221_15440__$1 = temp__5804__auto___15439__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15221_15440__$1)){
var c__5525__auto___15441 = cljs.core.chunk_first(seq__15221_15440__$1);
var G__15442 = cljs.core.chunk_rest(seq__15221_15440__$1);
var G__15443 = c__5525__auto___15441;
var G__15444 = cljs.core.count(c__5525__auto___15441);
var G__15445 = (0);
seq__15221_15430 = G__15442;
chunk__15222_15431 = G__15443;
count__15223_15432 = G__15444;
i__15224_15433 = G__15445;
continue;
} else {
var key_15446 = cljs.core.first(seq__15221_15440__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_15446,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__15447 = cljs.core.next(seq__15221_15440__$1);
var G__15448 = null;
var G__15449 = (0);
var G__15450 = (0);
seq__15221_15430 = G__15447;
chunk__15222_15431 = G__15448;
count__15223_15432 = G__15449;
i__15224_15433 = G__15450;
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
var seq__15244_15451 = cljs.core.seq(cljs.core.keys(coeffects));
var chunk__15245_15452 = null;
var count__15246_15453 = (0);
var i__15247_15454 = (0);
while(true){
if((i__15247_15454 < count__15246_15453)){
var key_15455 = chunk__15245_15452.cljs$core$IIndexed$_nth$arity$2(null, i__15247_15454);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_15455,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__15456 = seq__15244_15451;
var G__15457 = chunk__15245_15452;
var G__15458 = count__15246_15453;
var G__15459 = (i__15247_15454 + (1));
seq__15244_15451 = G__15456;
chunk__15245_15452 = G__15457;
count__15246_15453 = G__15458;
i__15247_15454 = G__15459;
continue;
} else {
var temp__5804__auto___15460__$1 = cljs.core.seq(seq__15244_15451);
if(temp__5804__auto___15460__$1){
var seq__15244_15461__$1 = temp__5804__auto___15460__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15244_15461__$1)){
var c__5525__auto___15462 = cljs.core.chunk_first(seq__15244_15461__$1);
var G__15463 = cljs.core.chunk_rest(seq__15244_15461__$1);
var G__15464 = c__5525__auto___15462;
var G__15465 = cljs.core.count(c__5525__auto___15462);
var G__15466 = (0);
seq__15244_15451 = G__15463;
chunk__15245_15452 = G__15464;
count__15246_15453 = G__15465;
i__15247_15454 = G__15466;
continue;
} else {
var key_15467 = cljs.core.first(seq__15244_15461__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_15467,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__15468 = cljs.core.next(seq__15244_15461__$1);
var G__15469 = null;
var G__15470 = (0);
var G__15471 = (0);
seq__15244_15451 = G__15468;
chunk__15245_15452 = G__15469;
count__15246_15453 = G__15470;
i__15247_15454 = G__15471;
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
var seq__15266_15472 = cljs.core.seq(subs);
var chunk__15267_15473 = null;
var count__15268_15474 = (0);
var i__15269_15475 = (0);
while(true){
if((i__15269_15475 < count__15268_15474)){
var map__15289_15476 = chunk__15267_15473.cljs$core$IIndexed$_nth$arity$2(null, i__15269_15475);
var map__15289_15477__$1 = cljs.core.__destructure_map(map__15289_15476);
var op_type_15478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15289_15477__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_15479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15289_15477__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_15480__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15289_15477__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_15478,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_15479,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_15479,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_15480__$1], 0));
} else {
}


var G__15481 = seq__15266_15472;
var G__15482 = chunk__15267_15473;
var G__15483 = count__15268_15474;
var G__15484 = (i__15269_15475 + (1));
seq__15266_15472 = G__15481;
chunk__15267_15473 = G__15482;
count__15268_15474 = G__15483;
i__15269_15475 = G__15484;
continue;
} else {
var temp__5804__auto___15485__$1 = cljs.core.seq(seq__15266_15472);
if(temp__5804__auto___15485__$1){
var seq__15266_15486__$1 = temp__5804__auto___15485__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15266_15486__$1)){
var c__5525__auto___15487 = cljs.core.chunk_first(seq__15266_15486__$1);
var G__15488 = cljs.core.chunk_rest(seq__15266_15486__$1);
var G__15489 = c__5525__auto___15487;
var G__15490 = cljs.core.count(c__5525__auto___15487);
var G__15491 = (0);
seq__15266_15472 = G__15488;
chunk__15267_15473 = G__15489;
count__15268_15474 = G__15490;
i__15269_15475 = G__15491;
continue;
} else {
var map__15296_15492 = cljs.core.first(seq__15266_15486__$1);
var map__15296_15493__$1 = cljs.core.__destructure_map(map__15296_15492);
var op_type_15494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15296_15493__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_15495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15296_15493__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_15496__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15296_15493__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_15494,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_15495,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_15495,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_15496__$1], 0));
} else {
}


var G__15497 = cljs.core.next(seq__15266_15486__$1);
var G__15498 = null;
var G__15499 = (0);
var G__15500 = (0);
seq__15266_15472 = G__15497;
chunk__15267_15473 = G__15498;
count__15268_15474 = G__15499;
i__15269_15475 = G__15500;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__15502 = cljs.core.next(seq__14874__$1);
var G__15503 = null;
var G__15504 = (0);
var G__15505 = (0);
seq__14874 = G__15502;
chunk__14875 = G__15503;
count__14876 = G__15504;
i__14877 = G__15505;
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
