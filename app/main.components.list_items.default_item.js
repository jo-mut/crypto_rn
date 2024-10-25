goog.provide('main.components.list_items.default_item');
main.components.list_items.default_item.left_component = (function main$components$list_items$default_item$left_component(p__20921){
var map__20922 = p__20921;
var map__20922__$1 = cljs.core.__destructure_map(map__20922);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20922__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.image,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),icon], null)], null);
});
main.components.list_items.default_item.right_component = (function main$components$list_items$default_item$right_component(p__20923){
var map__20924 = p__20923;
var map__20924__$1 = cljs.core.__destructure_map(map__20924);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20924__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.image,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),icon], null)], null);
});
main.components.list_items.default_item.title_component = (function main$components$list_items$default_item$title_component(p__20925){
var map__20926 = p__20925;
var map__20926__$1 = cljs.core.__destructure_map(map__20926);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20926__$1,new cljs.core.Keyword(null,"title","title",636505583));
var sub_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20926__$1,new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-horizontal","margin-horizontal",-1679305526),(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(main.constants.theme.colors),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(14)], null)], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(main.constants.theme.colors),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null)], null),sub_title], null)], null);
});
main.components.list_items.default_item.view = (function main$components$list_items$default_item$view(p__20927){
var map__20928 = p__20927;
var map__20928__$1 = cljs.core.__destructure_map(map__20928);
var left_side = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20928__$1,new cljs.core.Keyword(null,"left-side","left-side",-1273650596));
var right_side = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20928__$1,new cljs.core.Keyword(null,"right-side","right-side",-1845774536));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20928__$1,new cljs.core.Keyword(null,"title","title",636505583));
var sub_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20928__$1,new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(10)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.list_items.default_item.left_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.list_items.default_item.title_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.list_items.default_item.right_component], null)], null);
});

//# sourceMappingURL=main.components.list_items.default_item.js.map
