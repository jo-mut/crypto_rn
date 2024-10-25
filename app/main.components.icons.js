goog.provide('main.components.icons');
main.components.icons.icon_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Ionicons","Ionicons",1015800164),new cljs.core.Keyword(null,"MaterialCommunityIcons","MaterialCommunityIcons",-1428940635),new cljs.core.Keyword(null,"EvilIcons","EvilIcons",2035159174),new cljs.core.Keyword(null,"FontAwesome","FontAwesome",-487054874),new cljs.core.Keyword(null,"Fontisto","Fontisto",886802888),new cljs.core.Keyword(null,"Entypo","Entypo",-264201687),new cljs.core.Keyword(null,"SimpleLineIcons","SimpleLineIcons",-2070027502),new cljs.core.Keyword(null,"Octicons","Octicons",1629058994),new cljs.core.Keyword(null,"AntDesign","AntDesign",-2020808552),new cljs.core.Keyword(null,"Zocial","Zocial",501682265),new cljs.core.Keyword(null,"Feather","Feather",1510422105),new cljs.core.Keyword(null,"Foundation","Foundation",-227862277),new cljs.core.Keyword(null,"MaterialIcons","MaterialIcons",1593051678)],["Ionicons","MaterialCommunityIcons","EvilIcons","FontAwesome","Fontisto","Entypo","SimpleLineIcons","Octicons","AntDesign","Zocial","Feather","Foundation","MaterialIcons"]);
main.components.icons.m_icon = (function main$components$icons$m_icon(p__21335){
var map__21336 = p__21335;
var map__21336__$1 = cljs.core.__destructure_map(map__21336);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21336__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21336__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21336__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.community_icons,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null))], null));
});
main.components.icons.icon = (function main$components$icons$icon(p__21337){
var map__21338 = p__21337;
var map__21338__$1 = cljs.core.__destructure_map(map__21338);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21338__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21338__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),main.resources.ui.get_icons(name),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),size,new cljs.core.Keyword(null,"height","height",1025178622),size], null)], null)], null));
});

//# sourceMappingURL=main.components.icons.js.map
