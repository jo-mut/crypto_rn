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
var seq__17220 = cljs.core.seq(traces);
var chunk__17221 = null;
var count__17222 = (0);
var i__17223 = (0);
while(true){
if((i__17223 < count__17222)){
var map__17363 = chunk__17221.cljs$core$IIndexed$_nth$arity$2(null, i__17223);
var map__17363__$1 = cljs.core.__destructure_map(map__17363);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17363__$1,new cljs.core.Keyword(null,"event","event",301435442));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17363__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17363__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17363__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17363__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
if(cljs.core.truth_(event)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration], 0));

if((cljs.core.count(effects) > (0))){
var seq__17375_17629 = cljs.core.seq(cljs.core.keys(effects));
var chunk__17376_17630 = null;
var count__17377_17631 = (0);
var i__17378_17632 = (0);
while(true){
if((i__17378_17632 < count__17377_17631)){
var key_17634 = chunk__17376_17630.cljs$core$IIndexed$_nth$arity$2(null, i__17378_17632);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_17634,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__17636 = seq__17375_17629;
var G__17637 = chunk__17376_17630;
var G__17638 = count__17377_17631;
var G__17639 = (i__17378_17632 + (1));
seq__17375_17629 = G__17636;
chunk__17376_17630 = G__17637;
count__17377_17631 = G__17638;
i__17378_17632 = G__17639;
continue;
} else {
var temp__5804__auto___17641 = cljs.core.seq(seq__17375_17629);
if(temp__5804__auto___17641){
var seq__17375_17642__$1 = temp__5804__auto___17641;
if(cljs.core.chunked_seq_QMARK_(seq__17375_17642__$1)){
var c__5525__auto___17643 = cljs.core.chunk_first(seq__17375_17642__$1);
var G__17644 = cljs.core.chunk_rest(seq__17375_17642__$1);
var G__17645 = c__5525__auto___17643;
var G__17646 = cljs.core.count(c__5525__auto___17643);
var G__17647 = (0);
seq__17375_17629 = G__17644;
chunk__17376_17630 = G__17645;
count__17377_17631 = G__17646;
i__17378_17632 = G__17647;
continue;
} else {
var key_17648 = cljs.core.first(seq__17375_17642__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_17648,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__17650 = cljs.core.next(seq__17375_17642__$1);
var G__17651 = null;
var G__17652 = (0);
var G__17653 = (0);
seq__17375_17629 = G__17650;
chunk__17376_17630 = G__17651;
count__17377_17631 = G__17652;
i__17378_17632 = G__17653;
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
var seq__17406_17654 = cljs.core.seq(cljs.core.keys(coeffects));
var chunk__17407_17655 = null;
var count__17408_17656 = (0);
var i__17409_17657 = (0);
while(true){
if((i__17409_17657 < count__17408_17656)){
var key_17658 = chunk__17407_17655.cljs$core$IIndexed$_nth$arity$2(null, i__17409_17657);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_17658,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__17664 = seq__17406_17654;
var G__17665 = chunk__17407_17655;
var G__17666 = count__17408_17656;
var G__17667 = (i__17409_17657 + (1));
seq__17406_17654 = G__17664;
chunk__17407_17655 = G__17665;
count__17408_17656 = G__17666;
i__17409_17657 = G__17667;
continue;
} else {
var temp__5804__auto___17671 = cljs.core.seq(seq__17406_17654);
if(temp__5804__auto___17671){
var seq__17406_17673__$1 = temp__5804__auto___17671;
if(cljs.core.chunked_seq_QMARK_(seq__17406_17673__$1)){
var c__5525__auto___17674 = cljs.core.chunk_first(seq__17406_17673__$1);
var G__17675 = cljs.core.chunk_rest(seq__17406_17673__$1);
var G__17676 = c__5525__auto___17674;
var G__17677 = cljs.core.count(c__5525__auto___17674);
var G__17678 = (0);
seq__17406_17654 = G__17675;
chunk__17407_17655 = G__17676;
count__17408_17656 = G__17677;
i__17409_17657 = G__17678;
continue;
} else {
var key_17680 = cljs.core.first(seq__17406_17673__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_17680,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__17692 = cljs.core.next(seq__17406_17673__$1);
var G__17693 = null;
var G__17694 = (0);
var G__17695 = (0);
seq__17406_17654 = G__17692;
chunk__17407_17655 = G__17693;
count__17408_17656 = G__17694;
i__17409_17657 = G__17695;
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
var seq__17429_17699 = cljs.core.seq(subs);
var chunk__17430_17700 = null;
var count__17431_17701 = (0);
var i__17432_17702 = (0);
while(true){
if((i__17432_17702 < count__17431_17701)){
var map__17452_17705 = chunk__17430_17700.cljs$core$IIndexed$_nth$arity$2(null, i__17432_17702);
var map__17452_17706__$1 = cljs.core.__destructure_map(map__17452_17705);
var op_type_17707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17452_17706__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_17708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17452_17706__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_17709__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17452_17706__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_17707,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_17708,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_17708,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_17709__$1], 0));
} else {
}


var G__17714 = seq__17429_17699;
var G__17715 = chunk__17430_17700;
var G__17716 = count__17431_17701;
var G__17717 = (i__17432_17702 + (1));
seq__17429_17699 = G__17714;
chunk__17430_17700 = G__17715;
count__17431_17701 = G__17716;
i__17432_17702 = G__17717;
continue;
} else {
var temp__5804__auto___17718 = cljs.core.seq(seq__17429_17699);
if(temp__5804__auto___17718){
var seq__17429_17719__$1 = temp__5804__auto___17718;
if(cljs.core.chunked_seq_QMARK_(seq__17429_17719__$1)){
var c__5525__auto___17720 = cljs.core.chunk_first(seq__17429_17719__$1);
var G__17721 = cljs.core.chunk_rest(seq__17429_17719__$1);
var G__17722 = c__5525__auto___17720;
var G__17723 = cljs.core.count(c__5525__auto___17720);
var G__17724 = (0);
seq__17429_17699 = G__17721;
chunk__17430_17700 = G__17722;
count__17431_17701 = G__17723;
i__17432_17702 = G__17724;
continue;
} else {
var map__17462_17725 = cljs.core.first(seq__17429_17719__$1);
var map__17462_17726__$1 = cljs.core.__destructure_map(map__17462_17725);
var op_type_17727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17462_17726__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_17728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17462_17726__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_17729__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17462_17726__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_17727,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_17728,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_17728,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_17729__$1], 0));
} else {
}


var G__17737 = cljs.core.next(seq__17429_17719__$1);
var G__17738 = null;
var G__17739 = (0);
var G__17740 = (0);
seq__17429_17699 = G__17737;
chunk__17430_17700 = G__17738;
count__17431_17701 = G__17739;
i__17432_17702 = G__17740;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__17741 = seq__17220;
var G__17742 = chunk__17221;
var G__17743 = count__17222;
var G__17745 = (i__17223 + (1));
seq__17220 = G__17741;
chunk__17221 = G__17742;
count__17222 = G__17743;
i__17223 = G__17745;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17220);
if(temp__5804__auto__){
var seq__17220__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17220__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17220__$1);
var G__17746 = cljs.core.chunk_rest(seq__17220__$1);
var G__17747 = c__5525__auto__;
var G__17748 = cljs.core.count(c__5525__auto__);
var G__17749 = (0);
seq__17220 = G__17746;
chunk__17221 = G__17747;
count__17222 = G__17748;
i__17223 = G__17749;
continue;
} else {
var map__17476 = cljs.core.first(seq__17220__$1);
var map__17476__$1 = cljs.core.__destructure_map(map__17476);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17476__$1,new cljs.core.Keyword(null,"event","event",301435442));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17476__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17476__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17476__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17476__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
if(cljs.core.truth_(event)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration], 0));

if((cljs.core.count(effects) > (0))){
var seq__17480_17756 = cljs.core.seq(cljs.core.keys(effects));
var chunk__17481_17757 = null;
var count__17482_17758 = (0);
var i__17483_17759 = (0);
while(true){
if((i__17483_17759 < count__17482_17758)){
var key_17763 = chunk__17481_17757.cljs$core$IIndexed$_nth$arity$2(null, i__17483_17759);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_17763,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__17766 = seq__17480_17756;
var G__17767 = chunk__17481_17757;
var G__17768 = count__17482_17758;
var G__17769 = (i__17483_17759 + (1));
seq__17480_17756 = G__17766;
chunk__17481_17757 = G__17767;
count__17482_17758 = G__17768;
i__17483_17759 = G__17769;
continue;
} else {
var temp__5804__auto___17770__$1 = cljs.core.seq(seq__17480_17756);
if(temp__5804__auto___17770__$1){
var seq__17480_17771__$1 = temp__5804__auto___17770__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17480_17771__$1)){
var c__5525__auto___17772 = cljs.core.chunk_first(seq__17480_17771__$1);
var G__17773 = cljs.core.chunk_rest(seq__17480_17771__$1);
var G__17774 = c__5525__auto___17772;
var G__17775 = cljs.core.count(c__5525__auto___17772);
var G__17776 = (0);
seq__17480_17756 = G__17773;
chunk__17481_17757 = G__17774;
count__17482_17758 = G__17775;
i__17483_17759 = G__17776;
continue;
} else {
var key_17777 = cljs.core.first(seq__17480_17771__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_17777,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__17780 = cljs.core.next(seq__17480_17771__$1);
var G__17781 = null;
var G__17782 = (0);
var G__17783 = (0);
seq__17480_17756 = G__17780;
chunk__17481_17757 = G__17781;
count__17482_17758 = G__17782;
i__17483_17759 = G__17783;
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
var seq__17512_17786 = cljs.core.seq(cljs.core.keys(coeffects));
var chunk__17513_17787 = null;
var count__17514_17788 = (0);
var i__17515_17789 = (0);
while(true){
if((i__17515_17789 < count__17514_17788)){
var key_17790 = chunk__17513_17787.cljs$core$IIndexed$_nth$arity$2(null, i__17515_17789);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_17790,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__17792 = seq__17512_17786;
var G__17793 = chunk__17513_17787;
var G__17794 = count__17514_17788;
var G__17795 = (i__17515_17789 + (1));
seq__17512_17786 = G__17792;
chunk__17513_17787 = G__17793;
count__17514_17788 = G__17794;
i__17515_17789 = G__17795;
continue;
} else {
var temp__5804__auto___17796__$1 = cljs.core.seq(seq__17512_17786);
if(temp__5804__auto___17796__$1){
var seq__17512_17798__$1 = temp__5804__auto___17796__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17512_17798__$1)){
var c__5525__auto___17799 = cljs.core.chunk_first(seq__17512_17798__$1);
var G__17800 = cljs.core.chunk_rest(seq__17512_17798__$1);
var G__17802 = c__5525__auto___17799;
var G__17803 = cljs.core.count(c__5525__auto___17799);
var G__17804 = (0);
seq__17512_17786 = G__17800;
chunk__17513_17787 = G__17802;
count__17514_17788 = G__17803;
i__17515_17789 = G__17804;
continue;
} else {
var key_17807 = cljs.core.first(seq__17512_17798__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_17807,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__17809 = cljs.core.next(seq__17512_17798__$1);
var G__17810 = null;
var G__17811 = (0);
var G__17812 = (0);
seq__17512_17786 = G__17809;
chunk__17513_17787 = G__17810;
count__17514_17788 = G__17811;
i__17515_17789 = G__17812;
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
var seq__17531_17813 = cljs.core.seq(subs);
var chunk__17532_17814 = null;
var count__17533_17815 = (0);
var i__17534_17816 = (0);
while(true){
if((i__17534_17816 < count__17533_17815)){
var map__17562_17817 = chunk__17532_17814.cljs$core$IIndexed$_nth$arity$2(null, i__17534_17816);
var map__17562_17818__$1 = cljs.core.__destructure_map(map__17562_17817);
var op_type_17819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17562_17818__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_17820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17562_17818__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_17821__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17562_17818__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_17819,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_17820,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_17820,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_17821__$1], 0));
} else {
}


var G__17824 = seq__17531_17813;
var G__17825 = chunk__17532_17814;
var G__17826 = count__17533_17815;
var G__17827 = (i__17534_17816 + (1));
seq__17531_17813 = G__17824;
chunk__17532_17814 = G__17825;
count__17533_17815 = G__17826;
i__17534_17816 = G__17827;
continue;
} else {
var temp__5804__auto___17828__$1 = cljs.core.seq(seq__17531_17813);
if(temp__5804__auto___17828__$1){
var seq__17531_17829__$1 = temp__5804__auto___17828__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17531_17829__$1)){
var c__5525__auto___17831 = cljs.core.chunk_first(seq__17531_17829__$1);
var G__17832 = cljs.core.chunk_rest(seq__17531_17829__$1);
var G__17833 = c__5525__auto___17831;
var G__17834 = cljs.core.count(c__5525__auto___17831);
var G__17835 = (0);
seq__17531_17813 = G__17832;
chunk__17532_17814 = G__17833;
count__17533_17815 = G__17834;
i__17534_17816 = G__17835;
continue;
} else {
var map__17573_17837 = cljs.core.first(seq__17531_17829__$1);
var map__17573_17838__$1 = cljs.core.__destructure_map(map__17573_17837);
var op_type_17839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17573_17838__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_17840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17573_17838__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_17841__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17573_17838__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_17839,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_17840,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_17840,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_17841__$1], 0));
} else {
}


var G__17848 = cljs.core.next(seq__17531_17829__$1);
var G__17849 = null;
var G__17850 = (0);
var G__17851 = (0);
seq__17531_17813 = G__17848;
chunk__17532_17814 = G__17849;
count__17533_17815 = G__17850;
i__17534_17816 = G__17851;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__17852 = cljs.core.next(seq__17220__$1);
var G__17853 = null;
var G__17854 = (0);
var G__17855 = (0);
seq__17220 = G__17852;
chunk__17221 = G__17853;
count__17222 = G__17854;
i__17223 = G__17855;
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
