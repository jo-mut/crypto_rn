goog.provide('react_native.navigation.core');
react_native.navigation.core.navigation_container = reagent.core.adapt_react_class(shadow.js.shim.module$$react_navigation$native.NavigationContainer);
react_native.navigation.core.create_stack_navigator = (function react_native$navigation$core$create_stack_navigator(){
var stack = shadow.js.shim.module$$react_navigation$native_stack.createNativeStackNavigator();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(stack.Navigator),reagent.core.adapt_react_class(stack.Screen)], null);
});
react_native.navigation.core.create_bottom_tab_navigator = (function react_native$navigation$core$create_bottom_tab_navigator(){
var tab = shadow.js.shim.module$$react_navigation$bottom_tabs.createBottomTabNavigator();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(tab.Navigator),reagent.core.adapt_react_class(tab.Screen)], null);
});
react_native.navigation.core.stack = (function react_native$navigation$core$stack(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16260 = arguments.length;
var i__5727__auto___16261 = (0);
while(true){
if((i__5727__auto___16261 < len__5726__auto___16260)){
args__5732__auto__.push((arguments[i__5727__auto___16261]));

var G__16262 = (i__5727__auto___16261 + (1));
i__5727__auto___16261 = G__16262;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return react_native.navigation.core.stack.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(react_native.navigation.core.stack.cljs$core$IFn$_invoke$arity$variadic = (function (params){
var vec__16249 = react_native.navigation.core.create_stack_navigator();
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16249,(0),null);
var screen__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16249,(1),null);
return react_native.navigation.utils.prepare_navigator(navigator__$1,screen__$1);
}));

(react_native.navigation.core.stack.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(react_native.navigation.core.stack.cljs$lang$applyTo = (function (seq16245){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16245));
}));

react_native.navigation.core.bottom_tabs = (function react_native$navigation$core$bottom_tabs(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16267 = arguments.length;
var i__5727__auto___16268 = (0);
while(true){
if((i__5727__auto___16268 < len__5726__auto___16267)){
args__5732__auto__.push((arguments[i__5727__auto___16268]));

var G__16269 = (i__5727__auto___16268 + (1));
i__5727__auto___16268 = G__16269;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return react_native.navigation.core.bottom_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(react_native.navigation.core.bottom_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (params){
var vec__16256 = react_native.navigation.core.create_bottom_tab_navigator();
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16256,(0),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16256,(1),null);
return react_native.navigation.utils.prepare_navigator(navigator__$1,tab);
}));

(react_native.navigation.core.bottom_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(react_native.navigation.core.bottom_tabs.cljs$lang$applyTo = (function (seq16252){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16252));
}));


//# sourceMappingURL=react_native.navigation.core.js.map
