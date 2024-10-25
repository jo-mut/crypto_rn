goog.provide('react_native.navigation.utils');
react_native.navigation.utils.clj__GT_json = (function react_native$navigation$utils$clj__GT_json(data){
return JSON.stringify(cljs.core.clj__GT_js(data));
});
react_native.navigation.utils.json__GT_clj = (function react_native$navigation$utils$json__GT_clj(json){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(json,"undefined")){
return null;
} else {
try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(json),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}catch (e16223){if((e16223 instanceof Error)){
var _ = e16223;
if(typeof json === 'string'){
return json;
} else {
return null;
}
} else {
throw e16223;

}
}}
});
react_native.navigation.utils.serialize = react_native.navigation.utils.clj__GT_json;
react_native.navigation.utils.deserialize = (function react_native$navigation$utils$deserialize(o){
try{return react_native.navigation.utils.json__GT_clj(o);
}catch (e16225){var _ = e16225;
return null;
}});
react_native.navigation.utils.prepare_navigator = (function react_native$navigation$utils$prepare_navigator(navigator,screen){
return (function() { 
var G__16240__delegate = function (params){
var vec__16235 = ((cljs.core.map_QMARK_(cljs.core.first(params)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(params),cljs.core.second(params)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.first(params)], null));
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16235,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16235,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [navigator,props], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (props__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [screen,cljs.core.update.cljs$core$IFn$_invoke$arity$3(props__$1,new cljs.core.Keyword(null,"component","component",1555936782),reagent.core.reactify_component)], null);
}),children));
};
var G__16240 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__16243__i = 0, G__16243__a = new Array(arguments.length -  0);
while (G__16243__i < G__16243__a.length) {G__16243__a[G__16243__i] = arguments[G__16243__i + 0]; ++G__16243__i;}
  params = new cljs.core.IndexedSeq(G__16243__a,0,null);
} 
return G__16240__delegate.call(this,params);};
G__16240.cljs$lang$maxFixedArity = 0;
G__16240.cljs$lang$applyTo = (function (arglist__16244){
var params = cljs.core.seq(arglist__16244);
return G__16240__delegate(params);
});
G__16240.cljs$core$IFn$_invoke$arity$variadic = G__16240__delegate;
return G__16240;
})()
;
});

//# sourceMappingURL=react_native.navigation.utils.js.map
