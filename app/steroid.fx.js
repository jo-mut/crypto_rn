goog.provide('steroid.fx');
steroid.fx.update_db = (function steroid$fx$update_db(cofx,fx){
var temp__5802__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(fx);
if(cljs.core.truth_(temp__5802__auto__)){
var db = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,new cljs.core.Keyword(null,"db","db",993250759),db);
} else {
return cofx;
}
});
steroid.fx.default_interceptors = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
steroid.fx.set_default_interceptors = (function steroid$fx$set_default_interceptors(value){
return cljs.core.reset_BANG_(steroid.fx.default_interceptors,value);
});
steroid.fx.get_interceptors = (function steroid$fx$get_interceptors(interceptors){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(steroid.fx.default_interceptors),interceptors], null);
});
steroid.fx.mergeable_keys = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
steroid.fx.set_mergeable_keys = (function steroid$fx$set_mergeable_keys(value){
return cljs.core.reset_BANG_(steroid.fx.mergeable_keys,value);
});
steroid.fx.safe_merge = (function steroid$fx$safe_merge(fx,new_fx){
if(cljs.core.truth_(new cljs.core.Keyword(null,"merging-fx-with-common-keys","merging-fx-with-common-keys",-1375695184).cljs$core$IFn$_invoke$arity$1(fx))){
return fx;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (merged_fx,p__17463){
var vec__17464 = p__17463;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17464,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17464,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(merged_fx,new cljs.core.Keyword(null,"db","db",993250759),v);
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(merged_fx,k))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(steroid.fx.mergeable_keys),k))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(merged_fx,k,cljs.core.into,v);
} else {
return cljs.core.reduced(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"merging-fx-with-common-keys","merging-fx-with-common-keys",-1375695184),k], null));
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(merged_fx,k,v);
}
}
}),fx,new_fx);
}
});
/**
 * Takes a map of co-effects and forms as argument.
 *   The first optional form can be map of effects
 *   The next forms are functions applying effects and returning a map of effects.
 *   The fn ensures that updates to db are passed from function to function within the cofx :db key and
 *   that only a :merging-fx-with-common-keys effect is returned if some functions are trying
 *   to produce the same effects (excepted :db, :data-source/tx effects).
 *   :data-source/tx and effects are handled specially and their results
 *   (list of transactions) are compacted to one transactions list (for each effect). 
 */
steroid.fx.merge = (function steroid$fx$merge(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17480 = arguments.length;
var i__5727__auto___17481 = (0);
while(true){
if((i__5727__auto___17481 < len__5726__auto___17480)){
args__5732__auto__.push((arguments[i__5727__auto___17481]));

var G__17482 = (i__5727__auto___17481 + (1));
i__5727__auto___17481 = G__17482;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return steroid.fx.merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(steroid.fx.merge.cljs$core$IFn$_invoke$arity$variadic = (function (p__17472,args){
var map__17473 = p__17472;
var map__17473__$1 = cljs.core.__destructure_map(map__17473);
var cofx = map__17473__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17473__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17474 = args;
var seq__17475 = cljs.core.seq(vec__17474);
var first__17476 = cljs.core.first(seq__17475);
var seq__17475__$1 = cljs.core.next(seq__17475);
var first_arg = first__17476;
var rest_args = seq__17475__$1;
var initial_fxs_QMARK_ = cljs.core.map_QMARK_(first_arg);
var fx_fns = ((initial_fxs_QMARK_)?rest_args:args);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (fxs,fx_fn){
var updated_cofx = steroid.fx.update_db(cofx,fxs);
if(cljs.core.truth_(fx_fn)){
return steroid.fx.safe_merge(fxs,(fx_fn.cljs$core$IFn$_invoke$arity$1 ? fx_fn.cljs$core$IFn$_invoke$arity$1(updated_cofx) : fx_fn.call(null, updated_cofx)));
} else {
return fxs;
}
}),((initial_fxs_QMARK_)?first_arg:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null)),fx_fns);
}));

(steroid.fx.merge.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(steroid.fx.merge.cljs$lang$applyTo = (function (seq17470){
var G__17471 = cljs.core.first(seq17470);
var seq17470__$1 = cljs.core.next(seq17470);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17471,seq17470__$1);
}));


//# sourceMappingURL=steroid.fx.js.map
