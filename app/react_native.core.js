goog.provide('react_native.core');
react_native.core.view = reagent.core.adapt_react_class(shadow.js.shim.module$react_native.View);
react_native.core.community_icons = reagent.core.adapt_react_class(shadow.js.shim.module$react_native_vector_icons$MaterialCommunityIcons.default);
react_native.core.image_background = reagent.core.adapt_react_class(shadow.js.shim.module$react_native.ImageBackground);
react_native.core.image_native = reagent.core.adapt_react_class(shadow.js.shim.module$react_native.Image);
react_native.core.image = (function react_native$core$image(p__20400){
var map__20401 = p__20400;
var map__20401__$1 = cljs.core.__destructure_map(map__20401);
var props = map__20401__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20401__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.image_native,((typeof source === 'string')?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),source], null)):props)], null);
});
react_native.core.scroll_view = reagent.core.adapt_react_class(shadow.js.shim.module$react_native.ScrollView);
react_native.core.safe_area_view = reagent.core.adapt_react_class(shadow.js.shim.module$react_native.SafeAreaView);
react_native.core.text = reagent.core.adapt_react_class(shadow.js.shim.module$react_native.Text);
react_native.core.text_input = reagent.core.adapt_react_class(shadow.js.shim.module$react_native.TextInput);
react_native.core.touchable_opacity = reagent.core.adapt_react_class(shadow.js.shim.module$react_native.TouchableOpacity);
react_native.core.touchable_highlight = reagent.core.adapt_react_class(shadow.js.shim.module$react_native.TouchableHighlight);
react_native.core.touchable_without_feedback = reagent.core.adapt_react_class(shadow.js.shim.module$react_native.TouchableWithoutFeedback);
react_native.core.flat_list = react_native.flatlist.flat_list;
react_native.core.hide_splash_screen = (function react_native$core$hide_splash_screen(){
return shadow.js.shim.module$react_native.NativeModules.SplashScreen.hide();
});
react_native.core.reactify_component = (function react_native$core$reactify_component(value){
return reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1(value);
});
react_native.core.app_registry = shadow.js.shim.module$react_native.AppRegistry;
react_native.core.register_component = (function react_native$core$register_component(name,app_root){
return react_native.core.app_registry.registerComponent(name,(function (){
return react_native.core.reactify_component(app_root);
}));
});
react_native.core.get_window = cljs.core.memoize((function (){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(shadow.js.shim.module$react_native.Dimensions.get("window"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}));
react_native.core.get_screen = cljs.core.memoize((function (){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(shadow.js.shim.module$react_native.Dimensions.get("screen"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}));

//# sourceMappingURL=react_native.core.js.map
