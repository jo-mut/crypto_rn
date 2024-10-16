goog.provide('steroid.rn.navigation.core');
steroid.rn.navigation.core.navigation_container = reagent.core.adapt_react_class(shadow.js.shim.module$$react_navigation$native.NavigationContainer);
steroid.rn.navigation.core.nav_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
steroid.rn.navigation.core.callback = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
steroid.rn.navigation.core.nav_ref_handler = (function steroid$rn$navigation$core$nav_ref_handler(ref){
cljs.core.reset_BANG_(steroid.rn.navigation.core.nav_ref,ref);

if(cljs.core.truth_(cljs.core.deref(steroid.rn.navigation.core.callback))){
var fexpr__17256 = cljs.core.deref(steroid.rn.navigation.core.callback);
return (fexpr__17256.cljs$core$IFn$_invoke$arity$0 ? fexpr__17256.cljs$core$IFn$_invoke$arity$0() : fexpr__17256.call(null, ));
} else {
return null;
}
});
steroid.rn.navigation.core.create_mount_handler = (function steroid$rn$navigation$core$create_mount_handler(cb){
return (function (){
if(cljs.core.truth_(cljs.core.deref(steroid.rn.navigation.core.nav_ref))){
if(cljs.core.truth_(cb)){
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null, ));
} else {
return null;
}
} else {
return cljs.core.reset_BANG_(steroid.rn.navigation.core.callback,cb);
}
});
});

//# sourceMappingURL=steroid.rn.navigation.core.js.map
