goog.provide('main.react_native.navigation.core');
main.react_native.navigation.core.navigation_container = reagent.core.adapt_react_class(shadow.js.shim.module$$react_navigation$native.NavigationContainer);
main.react_native.navigation.core.create_stack_navigator = (function main$react_native$navigation$core$create_stack_navigator(){
var stack = shadow.js.shim.module$$react_navigation$native_stack.createNativeStackNavigator();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(stack.Navigator),reagent.core.adapt_react_class(stack.Screen)], null);
});
main.react_native.navigation.core.create_bottom_tab_navigator = (function main$react_native$navigation$core$create_bottom_tab_navigator(){
var tab = shadow.js.shim.module$$react_navigation$bottom_tabs.createBottomTabNavigator();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(tab.Navigator),reagent.core.adapt_react_class(tab.Screen)], null);
});
main.react_native.navigation.core.stack = (function main$react_native$navigation$core$stack(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18428 = arguments.length;
var i__5727__auto___18429 = (0);
while(true){
if((i__5727__auto___18429 < len__5726__auto___18428)){
args__5732__auto__.push((arguments[i__5727__auto___18429]));

var G__18430 = (i__5727__auto___18429 + (1));
i__5727__auto___18429 = G__18430;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return main.react_native.navigation.core.stack.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(main.react_native.navigation.core.stack.cljs$core$IFn$_invoke$arity$variadic = (function (params){
var vec__18421 = main.react_native.navigation.core.create_stack_navigator();
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18421,(0),null);
var screen__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18421,(1),null);
return main.react_native.navigation.utils.prepare_navigator(navigator__$1,screen__$1);
}));

(main.react_native.navigation.core.stack.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(main.react_native.navigation.core.stack.cljs$lang$applyTo = (function (seq18420){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18420));
}));

main.react_native.navigation.core.bottom_tabs = (function main$react_native$navigation$core$bottom_tabs(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18431 = arguments.length;
var i__5727__auto___18432 = (0);
while(true){
if((i__5727__auto___18432 < len__5726__auto___18431)){
args__5732__auto__.push((arguments[i__5727__auto___18432]));

var G__18433 = (i__5727__auto___18432 + (1));
i__5727__auto___18432 = G__18433;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return main.react_native.navigation.core.bottom_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(main.react_native.navigation.core.bottom_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (params){
var vec__18425 = main.react_native.navigation.core.create_bottom_tab_navigator();
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18425,(0),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18425,(1),null);
return main.react_native.navigation.utils.prepare_navigator(navigator__$1,tab);
}));

(main.react_native.navigation.core.bottom_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(main.react_native.navigation.core.bottom_tabs.cljs$lang$applyTo = (function (seq18424){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18424));
}));


//# sourceMappingURL=main.react_native.navigation.core.js.map
