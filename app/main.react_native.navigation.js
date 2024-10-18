goog.provide('main.react_native.navigation');
main.react_native.navigation.set_default_options = (function main$react_native$navigation$set_default_options(opts){
return shadow.js.shim.module$react_native_navigation.Navigation.setDefaultOptions(cljs.core.clj__GT_js(opts));
});
main.react_native.navigation.register_component = (function main$react_native$navigation$register_component(arg1,arg2){
return shadow.js.shim.module$react_native_navigation.Navigation.registerComponent(arg1,arg2);
});
main.react_native.navigation.lazy_register_component = (function main$react_native$navigation$lazy_register_component(arg1,arg2,arg3){
return shadow.js.shim.module$react_native_navigation.Navigation.registerComponent(arg1,arg2,arg3);
});
main.react_native.navigation.set_lazy_component_registrator = (function main$react_native$navigation$set_lazy_component_registrator(handler){
return shadow.js.shim.module$react_native_navigation.Navigation.setLazyComponentRegistrator(handler);
});
main.react_native.navigation.set_root = (function main$react_native$navigation$set_root(root){
return shadow.js.shim.module$react_native_navigation.Navigation.setRoot(cljs.core.clj__GT_js(root));
});
main.react_native.navigation.set_stack_root = (function main$react_native$navigation$set_stack_root(stack,component){
return shadow.js.shim.module$react_native_navigation.Navigation.setStackRoot(stack,cljs.core.clj__GT_js(component));
});
main.react_native.navigation.push = (function main$react_native$navigation$push(arg1,arg2){
return shadow.js.shim.module$react_native_navigation.Navigation.push(arg1,cljs.core.clj__GT_js(arg2));
});
main.react_native.navigation.pop = (function main$react_native$navigation$pop(component){
return shadow.js.shim.module$react_native_navigation.Navigation.pop(component);
});
main.react_native.navigation.show_modal = (function main$react_native$navigation$show_modal(component){
return shadow.js.shim.module$react_native_navigation.Navigation.showModal(cljs.core.clj__GT_js(component));
});
main.react_native.navigation.dismiss_modal = (function main$react_native$navigation$dismiss_modal(component){
return shadow.js.shim.module$react_native_navigation.Navigation.dismissModal(component);
});
main.react_native.navigation.show_overlay = (function main$react_native$navigation$show_overlay(component){
return shadow.js.shim.module$react_native_navigation.Navigation.showOverlay(cljs.core.clj__GT_js(component));
});
main.react_native.navigation.pop_to = (function main$react_native$navigation$pop_to(component){
return shadow.js.shim.module$react_native_navigation.Navigation.popTo(cljs.core.clj__GT_js(component));
});
main.react_native.navigation.pop_to_root = (function main$react_native$navigation$pop_to_root(tab){
return shadow.js.shim.module$react_native_navigation.Navigation.popToRoot(cljs.core.clj__GT_js(tab));
});
main.react_native.navigation.dissmiss_overlay = (function main$react_native$navigation$dissmiss_overlay(component){
return shadow.js.shim.module$react_native_navigation.Navigation.dismissOverlay(component).catch((function (){
return cljs.core.List.EMPTY;
}));
});
main.react_native.navigation.reg_app_launched_listener = (function main$react_native$navigation$reg_app_launched_listener(handler){
return shadow.js.shim.module$react_native_navigation.Navigation.events().registerAppLaunchedListener(handler);
});
main.react_native.navigation.reg_button_pressed_listener = (function main$react_native$navigation$reg_button_pressed_listener(handler){
return shadow.js.shim.module$react_native_navigation.Navigation.events().registerNavigationButtonPressedListener((function (evn){
var G__10352 = evn.buttonId;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__10352) : handler.call(null, G__10352));
}));
});
main.react_native.navigation.reg_modal_dismissed_listener = (function main$react_native$navigation$reg_modal_dismissed_listener(handler){
return shadow.js.shim.module$react_native_navigation.Navigation.events().registerModalDismissedListener(handler);
});
main.react_native.navigation.reg_component_did_appear_listener = (function main$react_native$navigation$reg_component_did_appear_listener(handler){
return shadow.js.shim.module$react_native_navigation.Navigation.events().registerComponentDidAppearListener((function (evn){
var G__10353 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(evn.componentName);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__10353) : handler.call(null, G__10353));
}));
});
main.react_native.navigation.reg_component_did_disappear_listener = (function main$react_native$navigation$reg_component_did_disappear_listener(handler){
return shadow.js.shim.module$react_native_navigation.Navigation.events().registerComponentDidDisappearListener((function (evn){
var G__10354 = evn.componentName;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__10354) : handler.call(null, G__10354));
}));
});
main.react_native.navigation.merge_options = (function main$react_native$navigation$merge_options(id,opts){
return shadow.js.shim.module$react_native_navigation.Navigation.mergeOptions(id,cljs.core.clj__GT_js(opts));
});
main.react_native.navigation.constants = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
main.react_native.navigation.status_bar_height = (function main$react_native$navigation$status_bar_height(){
return new cljs.core.Keyword(null,"status-bar-height","status-bar-height",-1927646666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.react_native.navigation.constants));
});
shadow.js.shim.module$react_native_navigation.Navigation.constants().then((function (consts){
return cljs.core.reset_BANG_(main.react_native.navigation.constants,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top-bar-height","top-bar-height",234123751),consts.topBarHeight,new cljs.core.Keyword(null,"bottom-tabs-height","bottom-tabs-height",-1011199138),consts.bottomTabsHeight,new cljs.core.Keyword(null,"status-bar-height","status-bar-height",-1927646666),consts.statusBarHeight], null));
}));
main.react_native.navigation.bind_component = (function main$react_native$navigation$bind_component(this$,component_id){
return (this$.navigationEventListener = shadow.js.shim.module$react_native_navigation.Navigation.events().bindComponent(this$,component_id));
});

//# sourceMappingURL=main.react_native.navigation.js.map
