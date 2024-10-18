goog.provide('main.react_native.core');
main.react_native.core.view = reagent.core.adapt_react_class(shadow.js.shim.module$react_native.View);
main.react_native.core.image_native = reagent.core.adapt_react_class(shadow.js.shim.module$react_native.Image);
main.react_native.core.image = (function main$react_native$core$image(p__10276){
var map__10278 = p__10276;
var map__10278__$1 = cljs.core.__destructure_map(map__10278);
var props = map__10278__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10278__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.react_native.core.image_native,((typeof source === 'string')?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),source], null)):props)], null);
});
main.react_native.core.scroll_view = reagent.core.adapt_react_class(shadow.js.shim.module$react_native.ScrollView);
main.react_native.core.safe_area_view = reagent.core.adapt_react_class(shadow.js.shim.module$react_native.SafeAreaView);
main.react_native.core.text = reagent.core.adapt_react_class(shadow.js.shim.module$react_native.Text);
main.react_native.core.text_input = reagent.core.adapt_react_class(shadow.js.shim.module$react_native.TextInput);
main.react_native.core.touchable_opacity = reagent.core.adapt_react_class(shadow.js.shim.module$react_native.TouchableOpacity);
main.react_native.core.touchable_highlight = reagent.core.adapt_react_class(shadow.js.shim.module$react_native.TouchableHighlight);
main.react_native.core.touchable_without_feedback = reagent.core.adapt_react_class(shadow.js.shim.module$react_native.TouchableWithoutFeedback);
main.react_native.core.hide_splash_screen = (function main$react_native$core$hide_splash_screen(){
return shadow.js.shim.module$react_native.NativeModules.SplashScreen.hide();
});
main.react_native.core.reactify_component = (function main$react_native$core$reactify_component(value){
return reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1(value);
});
main.react_native.core.app_registry = shadow.js.shim.module$react_native.AppRegistry;
main.react_native.core.register_component = (function main$react_native$core$register_component(name,app_root){
return main.react_native.core.app_registry.registerComponent(name,(function (){
return main.react_native.core.reactify_component(app_root);
}));
});
main.react_native.core.get_window = cljs.core.memoize((function (){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(shadow.js.shim.module$react_native.Dimensions.get("window"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}));
main.react_native.core.get_screen = cljs.core.memoize((function (){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(shadow.js.shim.module$react_native.Dimensions.get("screen"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}));

//# sourceMappingURL=main.react_native.core.js.map
