goog.provide('main.react_native.navigation.utils');
main.react_native.navigation.utils.clj__GT_json = (function main$react_native$navigation$utils$clj__GT_json(data){
return JSON.stringify(cljs.core.clj__GT_js(data));
});
main.react_native.navigation.utils.json__GT_clj = (function main$react_native$navigation$utils$json__GT_clj(json){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(json,"undefined")){
return null;
} else {
try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(json),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}catch (e18342){if((e18342 instanceof Error)){
var _ = e18342;
if(typeof json === 'string'){
return json;
} else {
return null;
}
} else {
throw e18342;

}
}}
});
main.react_native.navigation.utils.serialize = main.react_native.navigation.utils.clj__GT_json;
main.react_native.navigation.utils.deserialize = (function main$react_native$navigation$utils$deserialize(o){
try{return main.react_native.navigation.utils.json__GT_clj(o);
}catch (e18343){var _ = e18343;
return null;
}});
main.react_native.navigation.utils.prepare_navigator = (function main$react_native$navigation$utils$prepare_navigator(navigator,screen){
return (function() { 
var G__18347__delegate = function (params){
var vec__18344 = ((cljs.core.map_QMARK_(cljs.core.first(params)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(params),cljs.core.second(params)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.first(params)], null));
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18344,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18344,(1),null);
console.log(["Home Component:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [navigator,props], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (props__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [screen,cljs.core.update.cljs$core$IFn$_invoke$arity$3(props__$1,new cljs.core.Keyword(null,"component","component",1555936782),reagent.core.reactify_component)], null);
}),children)))].join(''));

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [navigator,props], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (props__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [screen,cljs.core.update.cljs$core$IFn$_invoke$arity$3(props__$1,new cljs.core.Keyword(null,"component","component",1555936782),reagent.core.reactify_component)], null);
}),children));
};
var G__18347 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__18348__i = 0, G__18348__a = new Array(arguments.length -  0);
while (G__18348__i < G__18348__a.length) {G__18348__a[G__18348__i] = arguments[G__18348__i + 0]; ++G__18348__i;}
  params = new cljs.core.IndexedSeq(G__18348__a,0,null);
} 
return G__18347__delegate.call(this,params);};
G__18347.cljs$lang$maxFixedArity = 0;
G__18347.cljs$lang$applyTo = (function (arglist__18349){
var params = cljs.core.seq(arglist__18349);
return G__18347__delegate(params);
});
G__18347.cljs$core$IFn$_invoke$arity$variadic = G__18347__delegate;
return G__18347;
})()
;
});

//# sourceMappingURL=main.react_native.navigation.utils.js.map
