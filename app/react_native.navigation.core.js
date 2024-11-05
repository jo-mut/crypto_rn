goog.provide('react_native.navigation.core');
react_native.navigation.core.navigation_container = reagent.core.adapt_react_class(shadow.js.shim.module$$react_navigation$native.NavigationContainer);
if((typeof react_native !== 'undefined') && (typeof react_native.navigation !== 'undefined') && (typeof react_native.navigation.core !== 'undefined') && (typeof react_native.navigation.core.nav_ref !== 'undefined')){
} else {
react_native.navigation.core.nav_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
react_native.navigation.core.navigation_ref = shadow.js.shim.module$$react_navigation$native.createNavigationContainerRef();
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
var len__5726__auto___18332 = arguments.length;
var i__5727__auto___18333 = (0);
while(true){
if((i__5727__auto___18333 < len__5726__auto___18332)){
args__5732__auto__.push((arguments[i__5727__auto___18333]));

var G__18334 = (i__5727__auto___18333 + (1));
i__5727__auto___18333 = G__18334;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return react_native.navigation.core.stack.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(react_native.navigation.core.stack.cljs$core$IFn$_invoke$arity$variadic = (function (params){
var vec__18325 = react_native.navigation.core.create_stack_navigator();
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18325,(0),null);
var screen__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18325,(1),null);
return react_native.navigation.utils.prepare_navigator(navigator__$1,screen__$1);
}));

(react_native.navigation.core.stack.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(react_native.navigation.core.stack.cljs$lang$applyTo = (function (seq18324){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18324));
}));

react_native.navigation.core.bottom_tabs = (function react_native$navigation$core$bottom_tabs(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18335 = arguments.length;
var i__5727__auto___18336 = (0);
while(true){
if((i__5727__auto___18336 < len__5726__auto___18335)){
args__5732__auto__.push((arguments[i__5727__auto___18336]));

var G__18337 = (i__5727__auto___18336 + (1));
i__5727__auto___18336 = G__18337;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return react_native.navigation.core.bottom_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(react_native.navigation.core.bottom_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (params){
var vec__18329 = react_native.navigation.core.create_bottom_tab_navigator();
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18329,(0),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18329,(1),null);
return react_native.navigation.utils.prepare_navigator(navigator__$1,tab);
}));

(react_native.navigation.core.bottom_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(react_native.navigation.core.bottom_tabs.cljs$lang$applyTo = (function (seq18328){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18328));
}));


//# sourceMappingURL=react_native.navigation.core.js.map
