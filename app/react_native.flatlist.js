goog.provide('react_native.flatlist');
react_native.flatlist.rn_flat_list = reagent.core.adapt_react_class(shadow.js.shim.module$react_native.FlatList);
react_native.flatlist.wrap_render_fn = (function react_native$flatlist$wrap_render_fn(f,render_data){
return (function (data){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,data.item,data.index,data.separators,render_data,data.isActive,data.drag], null));
});
});
react_native.flatlist.base_flatlist_props = (function react_native$flatlist$base_flatlist_props(p__20571){
var map__20572 = p__20571;
var map__20572__$1 = cljs.core.__destructure_map(map__20572);
var props = map__20572__$1;
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20572__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125));
var verticalIndicator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20572__$1,new cljs.core.Keyword(null,"verticalIndicator","verticalIndicator",979598684));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20572__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var horizontalIndicator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20572__$1,new cljs.core.Keyword(null,"horizontalIndicator","horizontalIndicator",1102289669));
var render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20572__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));
var render_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20572__$1,new cljs.core.Keyword(null,"render-data","render-data",-1989310708));
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20572__$1,new cljs.core.Keyword(null,"header","header",119441134));
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20572__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
var on_drag_end_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20572__$1,new cljs.core.Keyword(null,"on-drag-end-fn","on-drag-end-fn",-1728242863));
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20572__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var empty_component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20572__$1,new cljs.core.Keyword(null,"empty-component","empty-component",349256468));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.to_array(data)], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"keyExtractor","keyExtractor",-52348106),key_fn,new cljs.core.Keyword(null,"renderItem","renderItem",2115239233),react_native.flatlist.wrap_render_fn(render_fn,render_data),new cljs.core.Keyword(null,"ItemSeparatorComponent","ItemSeparatorComponent",1006101526),(function (){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(separator);
}),new cljs.core.Keyword(null,"ListFooterComponent","ListFooterComponent",-56658253),(function (){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(footer);
}),new cljs.core.Keyword(null,"ListHeaderComponent","ListHeaderComponent",-1363711184),(function (){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(header);
}),new cljs.core.Keyword(null,"showsHorizontalScrollIndicator","showsHorizontalScrollIndicator",294729160),horizontalIndicator,new cljs.core.Keyword(null,"showsVerticalScrollIndicator","showsVerticalScrollIndicator",1496517628),verticalIndicator,new cljs.core.Keyword(null,"onDragEnd","onDragEnd",1520191895),on_drag_end_fn], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.Keyword(null,"empty-component","empty-component",349256468),new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),new cljs.core.Keyword(null,"on-drag-end-fn","on-drag-end-fn",-1728242863)], 0))], 0));
});
react_native.flatlist.flat_list = (function react_native$flatlist$flat_list(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.flatlist.rn_flat_list,react_native.flatlist.base_flatlist_props(props)], null);
});

//# sourceMappingURL=react_native.flatlist.js.map
