goog.provide('steroid.rn.utils');
steroid.rn.utils.clj__GT_json = (function steroid$rn$utils$clj__GT_json(data){
return JSON.stringify(cljs.core.clj__GT_js(data));
});
steroid.rn.utils.json__GT_clj = (function steroid$rn$utils$json__GT_clj(json){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(json,"undefined")){
return null;
} else {
try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(json),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}catch (e17253){if((e17253 instanceof Error)){
var _ = e17253;
if(typeof json === 'string'){
return json;
} else {
return null;
}
} else {
throw e17253;

}
}}
});
steroid.rn.utils.serialize = steroid.rn.utils.clj__GT_json;
steroid.rn.utils.deserialize = (function steroid$rn$utils$deserialize(o){
try{return steroid.rn.utils.json__GT_clj(o);
}catch (e17259){var _ = e17259;
return null;
}});
steroid.rn.utils.prepare_navigator = (function steroid$rn$utils$prepare_navigator(navigator,screen){
return (function() { 
var G__17263__delegate = function (params){
var vec__17260 = ((cljs.core.map_QMARK_(cljs.core.first(params)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(params),cljs.core.second(params)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.first(params)], null));
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17260,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17260,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [navigator,props], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (props__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [screen,cljs.core.update.cljs$core$IFn$_invoke$arity$3(props__$1,new cljs.core.Keyword(null,"component","component",1555936782),reagent.core.reactify_component)], null);
}),children));
};
var G__17263 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__17264__i = 0, G__17264__a = new Array(arguments.length -  0);
while (G__17264__i < G__17264__a.length) {G__17264__a[G__17264__i] = arguments[G__17264__i + 0]; ++G__17264__i;}
  params = new cljs.core.IndexedSeq(G__17264__a,0,null);
} 
return G__17263__delegate.call(this,params);};
G__17263.cljs$lang$maxFixedArity = 0;
G__17263.cljs$lang$applyTo = (function (arglist__17265){
var params = cljs.core.seq(arglist__17265);
return G__17263__delegate(params);
});
G__17263.cljs$core$IFn$_invoke$arity$variadic = G__17263__delegate;
return G__17263;
})()
;
});

//# sourceMappingURL=steroid.rn.utils.js.map
