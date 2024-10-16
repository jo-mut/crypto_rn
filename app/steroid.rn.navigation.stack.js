goog.provide('steroid.rn.navigation.stack');
steroid.rn.navigation.stack.create_stack_navigator = (function steroid$rn$navigation$stack$create_stack_navigator(){
var stack = shadow.js.shim.module$$react_navigation$stack.createStackNavigator();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(stack.Navigator),reagent.core.adapt_react_class(stack.Screen)], null);
});
steroid.rn.navigation.stack.stack = (function steroid$rn$navigation$stack$stack(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17309 = arguments.length;
var i__5727__auto___17310 = (0);
while(true){
if((i__5727__auto___17310 < len__5726__auto___17309)){
args__5732__auto__.push((arguments[i__5727__auto___17310]));

var G__17311 = (i__5727__auto___17310 + (1));
i__5727__auto___17310 = G__17311;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return steroid.rn.navigation.stack.stack.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(steroid.rn.navigation.stack.stack.cljs$core$IFn$_invoke$arity$variadic = (function (params){
var vec__17306 = steroid.rn.navigation.stack.create_stack_navigator();
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17306,(0),null);
var screen__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17306,(1),null);
return steroid.rn.utils.prepare_navigator(navigator__$1,screen__$1);
}));

(steroid.rn.navigation.stack.stack.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(steroid.rn.navigation.stack.stack.cljs$lang$applyTo = (function (seq17305){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17305));
}));


//# sourceMappingURL=steroid.rn.navigation.stack.js.map
