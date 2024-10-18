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
var len__5726__auto___18308 = arguments.length;
var i__5727__auto___18309 = (0);
while(true){
if((i__5727__auto___18309 < len__5726__auto___18308)){
args__5732__auto__.push((arguments[i__5727__auto___18309]));

var G__18310 = (i__5727__auto___18309 + (1));
i__5727__auto___18309 = G__18310;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return main.react_native.navigation.core.stack.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(main.react_native.navigation.core.stack.cljs$core$IFn$_invoke$arity$variadic = (function (params){
var vec__18301 = main.react_native.navigation.core.create_stack_navigator();
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18301,(0),null);
var screen__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18301,(1),null);
return main.react_native.navigation.utils.prepare_navigator(navigator__$1,screen__$1);
}));

(main.react_native.navigation.core.stack.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(main.react_native.navigation.core.stack.cljs$lang$applyTo = (function (seq18300){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18300));
}));

main.react_native.navigation.core.bottom_tabs = (function main$react_native$navigation$core$bottom_tabs(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18311 = arguments.length;
var i__5727__auto___18312 = (0);
while(true){
if((i__5727__auto___18312 < len__5726__auto___18311)){
args__5732__auto__.push((arguments[i__5727__auto___18312]));

var G__18313 = (i__5727__auto___18312 + (1));
i__5727__auto___18312 = G__18313;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return main.react_native.navigation.core.bottom_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(main.react_native.navigation.core.bottom_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (params){
var vec__18305 = main.react_native.navigation.core.create_bottom_tab_navigator();
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18305,(0),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18305,(1),null);
return main.react_native.navigation.utils.prepare_navigator(navigator__$1,tab);
}));

(main.react_native.navigation.core.bottom_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(main.react_native.navigation.core.bottom_tabs.cljs$lang$applyTo = (function (seq18304){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18304));
}));


//# sourceMappingURL=main.react_native.navigation.core.js.map
