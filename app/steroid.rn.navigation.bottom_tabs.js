goog.provide('steroid.rn.navigation.bottom_tabs');
steroid.rn.navigation.bottom_tabs.create_bottom_tab_navigator = (function steroid$rn$navigation$bottom_tabs$create_bottom_tab_navigator(){
var tab = shadow.js.shim.module$$react_navigation$bottom_tabs.createBottomTabNavigator();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(tab.Navigator),reagent.core.adapt_react_class(tab.Screen)], null);
});
steroid.rn.navigation.bottom_tabs.bottom_tab = (function steroid$rn$navigation$bottom_tabs$bottom_tab(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17318 = arguments.length;
var i__5727__auto___17319 = (0);
while(true){
if((i__5727__auto___17319 < len__5726__auto___17318)){
args__5732__auto__.push((arguments[i__5727__auto___17319]));

var G__17320 = (i__5727__auto___17319 + (1));
i__5727__auto___17319 = G__17320;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return steroid.rn.navigation.bottom_tabs.bottom_tab.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(steroid.rn.navigation.bottom_tabs.bottom_tab.cljs$core$IFn$_invoke$arity$variadic = (function (params){
var vec__17313 = steroid.rn.navigation.bottom_tabs.create_bottom_tab_navigator();
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17313,(0),null);
var screen__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17313,(1),null);
return steroid.rn.utils.prepare_navigator(navigator__$1,screen__$1);
}));

(steroid.rn.navigation.bottom_tabs.bottom_tab.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(steroid.rn.navigation.bottom_tabs.bottom_tab.cljs$lang$applyTo = (function (seq17312){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17312));
}));


//# sourceMappingURL=steroid.rn.navigation.bottom_tabs.js.map
