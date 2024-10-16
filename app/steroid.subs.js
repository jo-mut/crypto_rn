goog.provide('steroid.subs');
steroid.subs.reg_root_sub = (function steroid$subs$reg_root_sub(var_args){
var G__17532 = arguments.length;
switch (G__17532) {
case 1:
return steroid.subs.reg_root_sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return steroid.subs.reg_root_sub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(steroid.subs.reg_root_sub.cljs$core$IFn$_invoke$arity$1 = (function (sub_name){
return steroid.subs.reg_root_sub.cljs$core$IFn$_invoke$arity$2(sub_name,sub_name);
}));

(steroid.subs.reg_root_sub.cljs$core$IFn$_invoke$arity$2 = (function (sub_name,sub_key){
var G__17541 = sub_name;
var G__17542 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,sub_key);
});
return (re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__17541,G__17542) : re_frame.core.reg_sub.call(null, G__17541,G__17542));
}));

(steroid.subs.reg_root_sub.cljs$lang$maxFixedArity = 2);

steroid.subs.reg_root_subs = (function steroid$subs$reg_root_subs(sub_keys){
var seq__17546 = cljs.core.seq(sub_keys);
var chunk__17547 = null;
var count__17548 = (0);
var i__17549 = (0);
while(true){
if((i__17549 < count__17548)){
var sub_name = chunk__17547.cljs$core$IIndexed$_nth$arity$2(null, i__17549);
steroid.subs.reg_root_sub.cljs$core$IFn$_invoke$arity$1(sub_name);


var G__17556 = seq__17546;
var G__17557 = chunk__17547;
var G__17558 = count__17548;
var G__17559 = (i__17549 + (1));
seq__17546 = G__17556;
chunk__17547 = G__17557;
count__17548 = G__17558;
i__17549 = G__17559;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17546);
if(temp__5804__auto__){
var seq__17546__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17546__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17546__$1);
var G__17561 = cljs.core.chunk_rest(seq__17546__$1);
var G__17562 = c__5525__auto__;
var G__17563 = cljs.core.count(c__5525__auto__);
var G__17564 = (0);
seq__17546 = G__17561;
chunk__17547 = G__17562;
count__17548 = G__17563;
i__17549 = G__17564;
continue;
} else {
var sub_name = cljs.core.first(seq__17546__$1);
steroid.subs.reg_root_sub.cljs$core$IFn$_invoke$arity$1(sub_name);


var G__17565 = cljs.core.next(seq__17546__$1);
var G__17566 = null;
var G__17567 = (0);
var G__17568 = (0);
seq__17546 = G__17565;
chunk__17547 = G__17566;
count__17548 = G__17567;
i__17549 = G__17568;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=steroid.subs.js.map
