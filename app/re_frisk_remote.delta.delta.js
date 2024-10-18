goog.provide('re_frisk_remote.delta.delta');
re_frisk_remote.delta.delta.nullify = (function re_frisk_remote$delta$delta$nullify(a){
if(cljs.core.empty_QMARK_(a)){
return null;
} else {
return a;
}
});
re_frisk_remote.delta.delta.delta_set = (function re_frisk_remote$delta$delta$delta_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),re_frisk_remote.delta.delta.nullify(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),re_frisk_remote.delta.delta.nullify(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});
re_frisk_remote.delta.delta.ff = (function re_frisk_remote$delta$delta$ff(a,b,k){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(k) : a.call(null, k)),(b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(k) : b.call(null, k)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__13959 = (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(k) : a.call(null, k));
var G__13960 = (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(k) : b.call(null, k));
return (re_frisk_remote.delta.delta.delta.cljs$core$IFn$_invoke$arity$2 ? re_frisk_remote.delta.delta.delta.cljs$core$IFn$_invoke$arity$2(G__13959,G__13960) : re_frisk_remote.delta.delta.delta.call(null, G__13959,G__13960));
})()], null);
} else {
return null;
}
});
re_frisk_remote.delta.delta.delta_map_vals = (function re_frisk_remote$delta$delta$delta_map_vals(a,b,ks){
return re_frisk_remote.delta.delta.nullify(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13962_SHARP_){
return re_frisk_remote.delta.delta.ff(a,b,p1__13962_SHARP_);
}),ks))));
});
re_frisk_remote.delta.delta.delta_map = (function re_frisk_remote$delta$delta$delta_map(a,b){
var akeys = cljs.core.set(cljs.core.keys(a));
var bkeys = cljs.core.set(cljs.core.keys(b));
var common = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(akeys,bkeys);
var add = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(bkeys,akeys);
var remove = re_frisk_remote.delta.delta.nullify(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(akeys,bkeys));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),re_frisk_remote.delta.delta.nullify(cljs.core.select_keys(b,add)),remove,re_frisk_remote.delta.delta.delta_map_vals(a,b,common)], null);
});
re_frisk_remote.delta.delta.delta_seq_vals = (function re_frisk_remote$delta$delta$delta_seq_vals(n,a,b){
var items = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),a,b);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13995){
var vec__13999 = p__13995;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13999,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13999,(1),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13999,(2),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a__$1,b__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(re_frisk_remote.delta.delta.delta.cljs$core$IFn$_invoke$arity$2 ? re_frisk_remote.delta.delta.delta.cljs$core$IFn$_invoke$arity$2(a__$1,b__$1) : re_frisk_remote.delta.delta.delta.call(null, a__$1,b__$1))], null);
} else {
return null;
}
}),items)));
});
re_frisk_remote.delta.delta.delta_vec = (function re_frisk_remote$delta$delta$delta_vec(a,b){
var ca = cljs.core.count(a);
var cb = cljs.core.count(b);
var mc = (function (){var x__5090__auto__ = ca;
var y__5091__auto__ = cb;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var tail = (((cb <= ca))?(ca - cb):cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(b,ca));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vec","vec",-657847931),tail,re_frisk_remote.delta.delta.nullify(re_frisk_remote.delta.delta.delta_seq_vals(mc,a,b))], null);
});
re_frisk_remote.delta.delta.delta = (function re_frisk_remote$delta$delta$delta(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return null;
} else {
if(((cljs.core.map_QMARK_(a)) && (cljs.core.map_QMARK_(b)))){
return re_frisk_remote.delta.delta.delta_map(a,b);
} else {
if(((cljs.core.set_QMARK_(a)) && (cljs.core.set_QMARK_(b)))){
return re_frisk_remote.delta.delta.delta_set(a,b);
} else {
if(((cljs.core.list_QMARK_(a)) && (cljs.core.list_QMARK_(b)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace","replace",-786587770),b], null);
} else {
if(((cljs.core.vector_QMARK_(a)) && (cljs.core.vector_QMARK_(b)))){
return re_frisk_remote.delta.delta.delta_vec(a,b);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace","replace",-786587770),b], null);

}
}
}
}
}
});
re_frisk_remote.delta.delta.apply_set = (function re_frisk_remote$delta$delta$apply_set(a,p__14033){
var vec__14034 = p__14033;
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14034,(0),null);
var remove = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14034,(1),null);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.union.cljs$core$IFn$_invoke$arity$2(a,add),remove);
});
re_frisk_remote.delta.delta.apply_vec_changes = (function re_frisk_remote$delta$delta$apply_vec_changes(a,changes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a__$1,p__14038){
var vec__14040 = p__14038;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14040,(0),null);
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14040,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(a__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),(function (p1__14037_SHARP_){
return (re_frisk_remote.delta.delta.apply.cljs$core$IFn$_invoke$arity$2 ? re_frisk_remote.delta.delta.apply.cljs$core$IFn$_invoke$arity$2(p1__14037_SHARP_,ch) : re_frisk_remote.delta.delta.apply.call(null, p1__14037_SHARP_,ch));
}));
}),a,changes);
});
re_frisk_remote.delta.delta.apply_vec = (function re_frisk_remote$delta$delta$apply_vec(a,p__14050){
var vec__14054 = p__14050;
var tail = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14054,(0),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14054,(1),null);
var h = re_frisk_remote.delta.delta.apply_vec_changes(a,changes);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),tail)){
return h;
} else {
if(cljs.core.integer_QMARK_(tail)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(h,(0),(cljs.core.count(h) - tail));
} else {
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(h,tail));

}
}
});
re_frisk_remote.delta.delta.apply_map_changes = (function re_frisk_remote$delta$delta$apply_map_changes(a,changes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a__$1,p__14070){
var vec__14071 = p__14070;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14071,(0),null);
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14071,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(a__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),(function (p1__14065_SHARP_){
return (re_frisk_remote.delta.delta.apply.cljs$core$IFn$_invoke$arity$2 ? re_frisk_remote.delta.delta.apply.cljs$core$IFn$_invoke$arity$2(p1__14065_SHARP_,ch) : re_frisk_remote.delta.delta.apply.call(null, p1__14065_SHARP_,ch));
}));
}),a,changes);
});
re_frisk_remote.delta.delta.apply_map = (function re_frisk_remote$delta$delta$apply_map(a,p__14081){
var vec__14082 = p__14081;
var keys_add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14082,(0),null);
var keys_remove = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14082,(1),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14082,(2),null);
var A = a;
var A__$1 = re_frisk_remote.delta.delta.apply_map_changes(A,changes);
var A__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_add,A__$1], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,A__$2,keys_remove);
});
re_frisk_remote.delta.delta.apply = (function re_frisk_remote$delta$delta$apply(a,patch){
var G__14086 = cljs.core.first(patch);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__14086)){
return a;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"replace","replace",-786587770),G__14086)){
return cljs.core.second(patch);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set","set",304602554),G__14086)){
return re_frisk_remote.delta.delta.apply_set(a,cljs.core.rest(patch));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vec","vec",-657847931),G__14086)){
return re_frisk_remote.delta.delta.apply_vec(a,cljs.core.rest(patch));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),G__14086)){
return re_frisk_remote.delta.delta.apply_map(a,cljs.core.rest(patch));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14086)].join('')));

}
}
}
}
}
});

//# sourceMappingURL=re_frisk_remote.delta.delta.js.map
