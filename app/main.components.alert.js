goog.provide('main.components.alert');
main.components.alert.left_component = (function main$components$alert$left_component(p__21829){
var map__21831 = p__21829;
var map__21831__$1 = cljs.core.__destructure_map(map__21831);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21831__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.icons.icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"size","size",1098693007),(18)], null)], null);
});
main.components.alert.right_component = (function main$components$alert$right_component(p__21834){
var map__21835 = p__21834;
var map__21835__$1 = cljs.core.__destructure_map(map__21835);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21835__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.icons.icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"size","size",1098693007),(18)], null)], null);
});
main.components.alert.title_component = (function main$components$alert$title_component(p__21836){
var map__21837 = p__21836;
var map__21837__$1 = cljs.core.__destructure_map(map__21837);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21837__$1,new cljs.core.Keyword(null,"title","title",636505583));
var sub_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21837__$1,new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-horizontal","margin-horizontal",-1679305526),(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(main.constants.theme.colors),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(14)], null)], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(main.constants.theme.colors),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null)], null),sub_title], null)], null);
});
main.components.alert.view = (function main$components$alert$view(p__21838){
var map__21839 = p__21838;
var map__21839__$1 = cljs.core.__destructure_map(map__21839);
var left_icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21839__$1,new cljs.core.Keyword(null,"left-icon","left-icon",769524213));
var right_icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21839__$1,new cljs.core.Keyword(null,"right-icon","right-icon",-707506540));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21839__$1,new cljs.core.Keyword(null,"title","title",636505583));
var sub_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21839__$1,new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(10),new cljs.core.Keyword(null,"margin-horizontal","margin-horizontal",-1679305526),(20),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618).cljs$core$IFn$_invoke$arity$1(main.constants.theme.colors)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.alert.left_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),left_icon], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.alert.title_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),sub_title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.alert.right_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),right_icon], null)], null)], null);
});

//# sourceMappingURL=main.components.alert.js.map
