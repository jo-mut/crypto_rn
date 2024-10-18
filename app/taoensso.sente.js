goog.provide('taoensso.sente');
if(cljs.core.vector_QMARK_(taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(105),(0)], null));
} else {
taoensso.encore.assert_min_encore_version(2.105);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
if((typeof taoensso !== 'undefined') && (typeof taoensso.sente !== 'undefined') && (typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined')){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
taoensso.sente.expected = (function taoensso$sente$expected(expected,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),expected,new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword(null,"value","value",305978217),x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if((!(cljs.core.vector_QMARK_(x)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915),taoensso.sente.expected(new cljs.core.Keyword(null,"vector","vector",1902966158),x)], null);
} else {
if(cljs.core.not((function (){var G__27848 = cljs.core.count(x);
var fexpr__27847 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null);
return (fexpr__27847.cljs$core$IFn$_invoke$arity$1 ? fexpr__27847.cljs$core$IFn$_invoke$arity$1(G__27848) : fexpr__27847.call(null, G__27848));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__27852 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27852,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27852,(1),null);
if((!((ev_id instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689),taoensso.sente.expected(new cljs.core.Keyword(null,"keyword","keyword",811389747),ev_id)], null);
} else {
if(cljs.core.not(cljs.core.namespace(ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772),taoensso.sente.expected(new cljs.core.Keyword(null,"namespaced-keyword","namespaced-keyword",131372895),ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__5804__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5804__auto__)){
var errs = temp__5804__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event(x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__5802__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5802__auto__)){
var errs = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__5000__auto__ = cljs.core.map_QMARK_(x);
if(and__5000__auto__){
var and__5000__auto____$1 = taoensso.encore.ks_GT__EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__5000__auto____$1){
var map__27876 = x;
var map__27876__$1 = cljs.core.__destructure_map(map__27876);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27876__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27876__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27876__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27876__$1,new cljs.core.Keyword(null,"event","event",301435442));
return ((taoensso.encore.chan_QMARK_(ch_recv)) && (((cljs.core.ifn_QMARK_(send_fn)) && (((taoensso.encore.atom_QMARK_(state)) && (taoensso.sente.event_QMARK_(event)))))));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__5000__auto__ = cljs.core.map_QMARK_(x);
if(and__5000__auto__){
var and__5000__auto____$1 = taoensso.encore.ks_GT__EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__5000__auto____$1){
var map__27891 = x;
var map__27891__$1 = cljs.core.__destructure_map(map__27891);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27891__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27891__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27891__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27891__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27891__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27891__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27891__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
return ((taoensso.encore.chan_QMARK_(ch_recv)) && (((cljs.core.ifn_QMARK_(send_fn)) && (((taoensso.encore.atom_QMARK_(connected_uids)) && (((cljs.core.map_QMARK_(ring_req)) && (((taoensso.encore.nblank_str_QMARK_(client_id)) && (((taoensso.sente.event_QMARK_(event)) && ((((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_(_QMARK_reply_fn)))))))))))))));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__27903){
var map__27904 = p__27903;
var map__27904__$1 = cljs.core.__destructure_map(map__27904);
var ev_msg = map__27904__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27904__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27904__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__27905 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27905,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27905,(1),null);
var valid_event = vec__27905;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null)], 0));
if((!(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_)))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,189,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
}),null)),null,793080401);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
var fexpr__27909 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null);
return (fexpr__27909.cljs$core$IFn$_invoke$arity$1 ? fexpr__27909.cljs$core$IFn$_invoke$arity$1(cb_reply_clj) : fexpr__27909.call(null, cb_reply_clj));
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not(taoensso.sente.cb_error_QMARK_(cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",203,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_(prefixed_pstr,"+");
var pstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack(packer,pstr);
}catch (e27927){var t = e27927;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,210,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
}),null)),null,1334641933);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__27924 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27924,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27924,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,216,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
}),null)),null,-1673953374);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__27935 = arguments.length;
switch (G__27935) {
case 2:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2 = (function (packer,clj){
var pstr = ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,223,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",clj,pstr], null);
}),null)),null,954699308);

return pstr;
}));

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,wrapped_clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,232,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",wrapped_clj,pstr], null);
}),null)),null,1501955269);

return pstr;
}));

(taoensso.sente.pack.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
});
(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1(x);
}));

(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(s);
}));

(taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.sente.EdnPacker.cljs$lang$type = true);

(taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker");

(taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.sente/EdnPacker");
}));

/**
 * Positional factory function for taoensso.sente/EdnPacker.
 */
taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__27936_SHARP_){
if((!((p1__27936_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__27936_SHARP_.taoensso$sente$interfaces$IPacker$)))){
return true;
} else {
if((!p1__27936_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__27936_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__27936_SHARP_);
}
})(x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27937){if((e27937 instanceof Error)){
var e = e27937;
return e;
} else {
throw e27937;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",245,"((fn* [p1__27936#] (satisfies? interfaces/IPacker p1__27936#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = (taoensso.encore.idx_fn.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.idx_fn.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.idx_fn.call(null, ));


taoensso.sente.bad_origin_QMARK_ = (function taoensso$sente$bad_origin_QMARK_(allowed_origins,p__27940){
var map__27941 = p__27940;
var map__27941__$1 = cljs.core.__destructure_map(map__27941);
var ring_req = map__27941__$1;
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27941__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(headers,"origin");
var referer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers,"referer","");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allowed_origins,new cljs.core.Keyword(null,"all","all",892129742))){
return false;
} else {
if(cljs.core.contains_QMARK_(cljs.core.set(allowed_origins),origin)){
return false;
} else {
if(cljs.core.truth_(taoensso.encore.rsome((function (p1__27939_SHARP_){
return clojure.string.starts_with_QMARK_(referer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27939_SHARP_),"/"].join(''));
}),allowed_origins))){
return false;
} else {
return true;

}
}
}
});
/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ;  (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; ?(fn [ring-req]) -> CSRF-token for Ajax POSTs and WS handshake.
 *                     ;                     CSRF check will be skipped iff nil (NOT RECOMMENDED!).
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 *  :allowed-origins   ; e.g. #{"http://site.com" ...}, defaults to :all. ; Alpha
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28938 = arguments.length;
var i__5727__auto___28939 = (0);
while(true){
if((i__5727__auto___28939 < len__5726__auto___28938)){
args__5732__auto__.push((arguments[i__5727__auto___28939]));

var G__28940 = (i__5727__auto___28939 + (1));
i__5727__auto___28939 = G__28940;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__27973){
var vec__27974 = p__27973;
var map__27977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27974,(0),null);
var map__27977__$1 = cljs.core.__destructure_map(map__27977);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27977__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(25)], 0)));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27977__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var allowed_origins = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27977__$1,new cljs.core.Keyword(null,"allowed-origins","allowed-origins",1477851683),new cljs.core.Keyword(null,"all","all",892129742));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27977__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27977__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),(function (ring_req){
var or__5002__auto__ = new cljs.core.Keyword(null,"anti-forgery-token","anti-forgery-token",806990841).cljs$core$IFn$_invoke$arity$1(ring_req);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
}
}));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27977__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27977__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var bad_origin_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27977__$1,new cljs.core.Keyword(null,"bad-origin-fn","bad-origin-fn",1385595727),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Unauthorized origin"], null);
}));
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27977__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),(function (ring_req){
return null;
}));
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27977__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),(function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
}));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27977__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((1000)));
var bad_csrf_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27977__$1,new cljs.core.Keyword(null,"bad-csrf-fn","bad-csrf-fn",16619032),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Bad CSRF token"], null);
}));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27979){if((e27979 instanceof Error)){
var e = e27979;
return e;
} else {
throw e27979;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",345,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27981){if((e27981 instanceof Error)){
var e = e27981;
return e;
} else {
throw e27981;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",345,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_28941 = (function (){try{if((function (p1__27945_SHARP_){
if((!((p1__27945_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__27945_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)))){
return true;
} else {
if((!p1__27945_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__27945_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__27945_SHARP_);
}
})(web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27984){if((e27984 instanceof Error)){
var e_28941 = e27984;
return e_28941;
} else {
throw e27984;

}
}})();
if((e_28941 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",346,"((fn* [p1__27945#] (satisfies? interfaces/IServerChanAdapter p1__27945#)) web-server-ch-adapter)",web_server_ch_adapter,e_28941,null);
}

var max_ms_28942 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_28942)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_28942)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_28942], null));
} else {
}

var allowed_origins__$1 = (cljs.core.truth_((function (x){
var or__5002__auto__ = cljs.core.set_QMARK_(x);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__27989 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all","all",892129742),null], null), null);
return (fexpr__27989.cljs$core$IFn$_invoke$arity$1 ? fexpr__27989.cljs$core$IFn$_invoke$arity$1(x) : fexpr__27989.call(null, x));
}
})(allowed_origins))?allowed_origins:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",355,"([:or set? #{:all}] allowed-origins)",allowed_origins,null,null));
var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = (function (ring_req,client_id){
var or__5002__auto__ = (function (){var G__27992 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__27992) : user_id_fn.call(null, G__27992));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});
var conns_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = (function() {
var G__28946 = null;
var G__28946__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (_QMARK_v){
var vec__27993 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27993,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27993,(1),null);
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
}));
});
var G__28946__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (_QMARK_v){
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
}));
});
G__28946 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__28946__3.call(this,conn_type,uid,client_id);
case 4:
return G__28946__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28946.cljs$core$IFn$_invoke$arity$3 = G__28946__3;
G__28946.cljs$core$IFn$_invoke$arity$4 = G__28946__4;
return G__28946;
})()
;
var connect_uid_BANG_ = (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27999){if((e27999 instanceof Error)){
var e = e27999;
return e;
} else {
throw e27999;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",391,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__28000){
var map__28001 = p__28000;
var map__28001__$1 = cljs.core.__destructure_map(map__28001);
var old_m = map__28001__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28001__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28001__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28001__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__28002 = conn_type;
var G__28002__$1 = (((G__28002 instanceof cljs.core.Keyword))?G__28002.fqn:null);
switch (G__28002__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28002__$1)].join('')));

}
})();
return taoensso.encore.swapped(new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((((!(cljs.core.contains_QMARK_(old_any,uid)))) && (cljs.core.contains_QMARK_(new_any,uid)))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
}));
return newly_connected_QMARK_;
});
var upd_connected_uid_BANG_ = (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28004){if((e28004 instanceof Error)){
var e = e28004;
return e;
} else {
throw e28004;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",408,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__28010){
var map__28012 = p__28010;
var map__28012__$1 = cljs.core.__destructure_map(map__28012);
var old_m = map__28012__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28012__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28012__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28012__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref(conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = ((any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_));
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(any,uid))], null);
return taoensso.encore.swapped(new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if(((cljs.core.contains_QMARK_(old_any,uid)) && ((!(cljs.core.contains_QMARK_(new_any,uid)))))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
}));
return newly_disconnected_QMARK_;
});
var send_fn = (function() { 
var G__28948__delegate = function (user_id,ev,p__28017){
var vec__28018 = p__28017;
var map__28021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28018,(0),null);
var map__28021__$1 = cljs.core.__destructure_map(map__28021);
var opts = map__28021__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28021__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_28949 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __28950 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,434,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_28949,ev], null);
}),null)),null,627289844);
var __28951__$1 = (cljs.core.truth_(uid_28949)?null:(function(){throw (new Error(["Assert failed: ",["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join(''),"\n","uid"].join('')))})());
var __28952__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_28953 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__28954 = (function (conn_type){
var temp__5804__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),(function (m){
var vec__28026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_28949);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28026,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28026,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_28953)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_28949),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_28949));
} else {
return taoensso.encore.swapped(m,null);
}
}));
if(cljs.core.truth_(temp__5804__auto__)){
var pulled = temp__5804__auto__;
var vec__28032 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28032,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28032,(1),null);
if(cljs.core.vector_QMARK_(buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",461,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_(ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",462,"(set? ev-uuids)",ev_uuids,null,null);
}

var buffered_evs_ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,buffered_evs);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,465,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s",buffered_evs_ppstr], null);
}),null)),null,-625351668);

var G__28036 = conn_type;
var G__28036__$1 = (((G__28036 instanceof cljs.core.Keyword))?G__28036.fqn:null);
switch (G__28036__$1) {
case "ws":
return (taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4 ? taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4(conns_,uid_28949,buffered_evs_ppstr,upd_conn_BANG_) : taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null, conns_,uid_28949,buffered_evs_ppstr,upd_conn_BANG_));

break;
case "ajax":
return (taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,uid_28949,buffered_evs_ppstr) : taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null, conns_,uid_28949,buffered_evs_ppstr));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28036__$1)].join('')));

}
} else {
return null;
}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,474,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_28949], null);
}),null)),null,1104509796);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__28954(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__28954(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__28038_28963 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_28949], null))));
var chunk__28039_28964 = null;
var count__28040_28965 = (0);
var i__28041_28966 = (0);
while(true){
if((i__28041_28966 < count__28040_28965)){
var vec__28054_28967 = chunk__28039_28964.cljs$core$IIndexed$_nth$arity$2(null, i__28041_28966);
var _QMARK_sch_28968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28054_28967,(0),null);
var _udt_28969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28054_28967,(1),null);
var temp__5804__auto___28970 = _QMARK_sch_28968;
if(cljs.core.truth_(temp__5804__auto___28970)){
var sch_28971 = temp__5804__auto___28970;
taoensso.sente.interfaces.sch_close_BANG_(sch_28971);
} else {
}


var G__28972 = seq__28038_28963;
var G__28973 = chunk__28039_28964;
var G__28974 = count__28040_28965;
var G__28975 = (i__28041_28966 + (1));
seq__28038_28963 = G__28972;
chunk__28039_28964 = G__28973;
count__28040_28965 = G__28974;
i__28041_28966 = G__28975;
continue;
} else {
var temp__5804__auto___28976 = cljs.core.seq(seq__28038_28963);
if(temp__5804__auto___28976){
var seq__28038_28977__$1 = temp__5804__auto___28976;
if(cljs.core.chunked_seq_QMARK_(seq__28038_28977__$1)){
var c__5525__auto___28978 = cljs.core.chunk_first(seq__28038_28977__$1);
var G__28979 = cljs.core.chunk_rest(seq__28038_28977__$1);
var G__28980 = c__5525__auto___28978;
var G__28981 = cljs.core.count(c__5525__auto___28978);
var G__28982 = (0);
seq__28038_28963 = G__28979;
chunk__28039_28964 = G__28980;
count__28040_28965 = G__28981;
i__28041_28966 = G__28982;
continue;
} else {
var vec__28059_28983 = cljs.core.first(seq__28038_28977__$1);
var _QMARK_sch_28984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28059_28983,(0),null);
var _udt_28985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28059_28983,(1),null);
var temp__5804__auto___28989__$1 = _QMARK_sch_28984;
if(cljs.core.truth_(temp__5804__auto___28989__$1)){
var sch_28990 = temp__5804__auto___28989__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_28990);
} else {
}


var G__28991 = cljs.core.next(seq__28038_28977__$1);
var G__28992 = null;
var G__28993 = (0);
var G__28994 = (0);
seq__28038_28963 = G__28991;
chunk__28039_28964 = G__28992;
count__28040_28965 = G__28993;
i__28041_28966 = G__28994;
continue;
}
} else {
}
}
break;
}

var seq__28062_28995 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_28949], null))));
var chunk__28063_28996 = null;
var count__28064_28997 = (0);
var i__28065_28998 = (0);
while(true){
if((i__28065_28998 < count__28064_28997)){
var vec__28072_28999 = chunk__28063_28996.cljs$core$IIndexed$_nth$arity$2(null, i__28065_28998);
var _QMARK_sch_29000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28072_28999,(0),null);
var _udt_29001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28072_28999,(1),null);
var temp__5804__auto___29002 = _QMARK_sch_29000;
if(cljs.core.truth_(temp__5804__auto___29002)){
var sch_29003 = temp__5804__auto___29002;
taoensso.sente.interfaces.sch_close_BANG_(sch_29003);
} else {
}


var G__29004 = seq__28062_28995;
var G__29005 = chunk__28063_28996;
var G__29006 = count__28064_28997;
var G__29007 = (i__28065_28998 + (1));
seq__28062_28995 = G__29004;
chunk__28063_28996 = G__29005;
count__28064_28997 = G__29006;
i__28065_28998 = G__29007;
continue;
} else {
var temp__5804__auto___29008 = cljs.core.seq(seq__28062_28995);
if(temp__5804__auto___29008){
var seq__28062_29009__$1 = temp__5804__auto___29008;
if(cljs.core.chunked_seq_QMARK_(seq__28062_29009__$1)){
var c__5525__auto___29013 = cljs.core.chunk_first(seq__28062_29009__$1);
var G__29014 = cljs.core.chunk_rest(seq__28062_29009__$1);
var G__29015 = c__5525__auto___29013;
var G__29016 = cljs.core.count(c__5525__auto___29013);
var G__29017 = (0);
seq__28062_28995 = G__29014;
chunk__28063_28996 = G__29015;
count__28064_28997 = G__29016;
i__28065_28998 = G__29017;
continue;
} else {
var vec__28080_29018 = cljs.core.first(seq__28062_29009__$1);
var _QMARK_sch_29019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28080_29018,(0),null);
var _udt_29020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28080_29018,(1),null);
var temp__5804__auto___29021__$1 = _QMARK_sch_29019;
if(cljs.core.truth_(temp__5804__auto___29021__$1)){
var sch_29022 = temp__5804__auto___29021__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_29022);
} else {
}


var G__29023 = cljs.core.next(seq__28062_29009__$1);
var G__29024 = null;
var G__29025 = (0);
var G__29026 = (0);
seq__28062_28995 = G__29023;
chunk__28063_28996 = G__29024;
count__28064_28997 = G__29025;
i__28065_28998 = G__29026;
continue;
}
} else {
}
}
break;
}
} else {
var seq__28083_29027 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__28084_29028 = null;
var count__28085_29029 = (0);
var i__28086_29030 = (0);
while(true){
if((i__28086_29030 < count__28085_29029)){
var conn_type_29031 = chunk__28084_29028.cljs$core$IIndexed$_nth$arity$2(null, i__28086_29030);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_29031,uid_28949], null),((function (seq__28083_29027,chunk__28084_29028,count__28085_29029,i__28086_29030,conn_type_29031,uid_28949,__28950,__28951__$1,__28952__$2,ev_uuid_28953,flush_buffer_BANG__28954,vec__28018,map__28021,map__28021__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27974,map__27977,map__27977__$1,ws_kalive_ms,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_28953])], null);
} else {
var vec__28095 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28095,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28095,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_28953)], null);
}
});})(seq__28083_29027,chunk__28084_29028,count__28085_29029,i__28086_29030,conn_type_29031,uid_28949,__28950,__28951__$1,__28952__$2,ev_uuid_28953,flush_buffer_BANG__28954,vec__28018,map__28021,map__28021__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27974,map__27977,map__27977__$1,ws_kalive_ms,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);


var G__29035 = seq__28083_29027;
var G__29036 = chunk__28084_29028;
var G__29037 = count__28085_29029;
var G__29038 = (i__28086_29030 + (1));
seq__28083_29027 = G__29035;
chunk__28084_29028 = G__29036;
count__28085_29029 = G__29037;
i__28086_29030 = G__29038;
continue;
} else {
var temp__5804__auto___29039 = cljs.core.seq(seq__28083_29027);
if(temp__5804__auto___29039){
var seq__28083_29040__$1 = temp__5804__auto___29039;
if(cljs.core.chunked_seq_QMARK_(seq__28083_29040__$1)){
var c__5525__auto___29041 = cljs.core.chunk_first(seq__28083_29040__$1);
var G__29042 = cljs.core.chunk_rest(seq__28083_29040__$1);
var G__29043 = c__5525__auto___29041;
var G__29044 = cljs.core.count(c__5525__auto___29041);
var G__29045 = (0);
seq__28083_29027 = G__29042;
chunk__28084_29028 = G__29043;
count__28085_29029 = G__29044;
i__28086_29030 = G__29045;
continue;
} else {
var conn_type_29046 = cljs.core.first(seq__28083_29040__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_29046,uid_28949], null),((function (seq__28083_29027,chunk__28084_29028,count__28085_29029,i__28086_29030,conn_type_29046,seq__28083_29040__$1,temp__5804__auto___29039,uid_28949,__28950,__28951__$1,__28952__$2,ev_uuid_28953,flush_buffer_BANG__28954,vec__28018,map__28021,map__28021__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27974,map__27977,map__27977__$1,ws_kalive_ms,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_28953])], null);
} else {
var vec__28098 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28098,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28098,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_28953)], null);
}
});})(seq__28083_29027,chunk__28084_29028,count__28085_29029,i__28086_29030,conn_type_29046,seq__28083_29040__$1,temp__5804__auto___29039,uid_28949,__28950,__28951__$1,__28952__$2,ev_uuid_28953,flush_buffer_BANG__28954,vec__28018,map__28021,map__28021__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__27974,map__27977,map__27977__$1,ws_kalive_ms,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);


var G__29048 = cljs.core.next(seq__28083_29040__$1);
var G__29049 = null;
var G__29050 = (0);
var G__29051 = (0);
seq__28083_29027 = G__29048;
chunk__28084_29028 = G__29049;
count__28085_29029 = G__29050;
i__28086_29030 = G__29051;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__28954(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__28954(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_29052 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_29053 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__17028__auto___29054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_28107){
var state_val_28108 = (state_28107[(1)]);
if((state_val_28108 === (1))){
var state_28107__$1 = state_28107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28107__$1,(2),ws_timeout_29052);
} else {
if((state_val_28108 === (2))){
var inst_28103 = (state_28107[(2)]);
var inst_28104 = flush_buffer_BANG__28954(new cljs.core.Keyword(null,"ws","ws",86841443));
var state_28107__$1 = (function (){var statearr_28112 = state_28107;
(statearr_28112[(7)] = inst_28103);

return statearr_28112;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28107__$1,inst_28104);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__16914__auto__ = null;
var taoensso$sente$state_machine__16914__auto____0 = (function (){
var statearr_28113 = [null,null,null,null,null,null,null,null];
(statearr_28113[(0)] = taoensso$sente$state_machine__16914__auto__);

(statearr_28113[(1)] = (1));

return statearr_28113;
});
var taoensso$sente$state_machine__16914__auto____1 = (function (state_28107){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_28107);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e28114){var ex__16917__auto__ = e28114;
var statearr_28115_29062 = state_28107;
(statearr_28115_29062[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_28107[(4)]))){
var statearr_28116_29063 = state_28107;
(statearr_28116_29063[(1)] = cljs.core.first((state_28107[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29064 = state_28107;
state_28107 = G__29064;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
taoensso$sente$state_machine__16914__auto__ = function(state_28107){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__16914__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__16914__auto____1.call(this,state_28107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__16914__auto____0;
taoensso$sente$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__16914__auto____1;
return taoensso$sente$state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_28117 = f__17029__auto__();
(statearr_28117[(6)] = c__17028__auto___29054);

return statearr_28117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
}));


var c__17028__auto___29065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_28122){
var state_val_28123 = (state_28122[(1)]);
if((state_val_28123 === (1))){
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28122__$1,(2),ajax_timeout_29053);
} else {
if((state_val_28123 === (2))){
var inst_28119 = (state_28122[(2)]);
var inst_28120 = flush_buffer_BANG__28954(new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_28122__$1 = (function (){var statearr_28124 = state_28122;
(statearr_28124[(7)] = inst_28119);

return statearr_28124;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28122__$1,inst_28120);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__16914__auto__ = null;
var taoensso$sente$state_machine__16914__auto____0 = (function (){
var statearr_28125 = [null,null,null,null,null,null,null,null];
(statearr_28125[(0)] = taoensso$sente$state_machine__16914__auto__);

(statearr_28125[(1)] = (1));

return statearr_28125;
});
var taoensso$sente$state_machine__16914__auto____1 = (function (state_28122){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_28122);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e28126){var ex__16917__auto__ = e28126;
var statearr_28127_29066 = state_28122;
(statearr_28127_29066[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_28122[(4)]))){
var statearr_28128_29067 = state_28122;
(statearr_28128_29067[(1)] = cljs.core.first((state_28122[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29068 = state_28122;
state_28122 = G__29068;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
taoensso$sente$state_machine__16914__auto__ = function(state_28122){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__16914__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__16914__auto____1.call(this,state_28122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__16914__auto____0;
taoensso$sente$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__16914__auto____1;
return taoensso$sente$state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_28131 = f__17029__auto__();
(statearr_28131[(6)] = c__17028__auto___29065);

return statearr_28131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
}));

}
}

return null;
};
var G__28948 = function (user_id,ev,var_args){
var p__28017 = null;
if (arguments.length > 2) {
var G__29069__i = 0, G__29069__a = new Array(arguments.length -  2);
while (G__29069__i < G__29069__a.length) {G__29069__a[G__29069__i] = arguments[G__29069__i + 2]; ++G__29069__i;}
  p__28017 = new cljs.core.IndexedSeq(G__29069__a,0,null);
} 
return G__28948__delegate.call(this,user_id,ev,p__28017);};
G__28948.cljs$lang$maxFixedArity = 2;
G__28948.cljs$lang$applyTo = (function (arglist__29071){
var user_id = cljs.core.first(arglist__29071);
arglist__29071 = cljs.core.next(arglist__29071);
var ev = cljs.core.first(arglist__29071);
var p__28017 = cljs.core.rest(arglist__29071);
return G__28948__delegate(user_id,ev,p__28017);
});
G__28948.cljs$core$IFn$_invoke$arity$variadic = G__28948__delegate;
return G__28948;
})()
;
var bad_csrf_QMARK_ = (function (ring_req){
if((csrf_token_fn == null)){
return false;
} else {
var temp__5802__auto__ = (csrf_token_fn.cljs$core$IFn$_invoke$arity$1 ? csrf_token_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : csrf_token_fn.call(null, ring_req));
if(cljs.core.truth_(temp__5802__auto__)){
var reference_csrf_token = temp__5802__auto__;
var csrf_token_from_client = (function (){var or__5002__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-csrf-token"], null));
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-xsrf-token"], null));
}
}
})();
return cljs.core.not(taoensso.encore.const_str_EQ_(reference_csrf_token,csrf_token_from_client));
} else {
return true;
}
}
});
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),(function (ring_req){
if(bad_csrf_QMARK_(ring_req)){
return (bad_csrf_fn.cljs$core$IFn$_invoke$arity$1 ? bad_csrf_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_csrf_fn.call(null, ring_req));
} else {
if(taoensso.sente.bad_origin_QMARK_(allowed_origins__$1,ring_req)){
return (bad_origin_fn.cljs$core$IFn$_invoke$arity$1 ? bad_origin_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_origin_fn.call(null, ring_req));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (server_ch,websocket_QMARK_){
if(cljs.core.not(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__28134 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28134,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28134,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (resp_clj){
if(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,571,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
}),null)),null,-1522985437);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,resp_clj));
} else {
return null;
}
});
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1(ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)], 0)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__5804__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5804__auto__)){
var ms = temp__5804__auto__;
var c__17028__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_28146){
var state_val_28147 = (state_28146[(1)]);
if((state_val_28147 === (1))){
var inst_28141 = cljs.core.async.timeout(ms);
var state_28146__$1 = state_28146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28146__$1,(2),inst_28141);
} else {
if((state_val_28147 === (2))){
var inst_28143 = (state_28146[(2)]);
var inst_28144 = reply_fn(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_28146__$1 = (function (){var statearr_28148 = state_28146;
(statearr_28148[(7)] = inst_28143);

return statearr_28148;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28146__$1,inst_28144);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__16914__auto__ = null;
var taoensso$sente$state_machine__16914__auto____0 = (function (){
var statearr_28149 = [null,null,null,null,null,null,null,null];
(statearr_28149[(0)] = taoensso$sente$state_machine__16914__auto__);

(statearr_28149[(1)] = (1));

return statearr_28149;
});
var taoensso$sente$state_machine__16914__auto____1 = (function (state_28146){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_28146);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e28151){var ex__16917__auto__ = e28151;
var statearr_28152_29089 = state_28146;
(statearr_28152_29089[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_28146[(4)]))){
var statearr_28153_29090 = state_28146;
(statearr_28153_29090[(1)] = cljs.core.first((state_28146[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29091 = state_28146;
state_28146 = G__29091;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
taoensso$sente$state_machine__16914__auto__ = function(state_28146){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__16914__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__16914__auto____1.call(this,state_28146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__16914__auto____0;
taoensso$sente$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__16914__auto____1;
return taoensso$sente$state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_28164 = f__17029__auto__();
(statearr_28164[(6)] = c__17028__auto__);

return statearr_28164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
}));

return c__17028__auto__;
} else {
return null;
}
} else {
return reply_fn(new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
})], null));

}
}
}),new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),(function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1(ring_req,client_id);
var receive_event_msg_BANG_ = (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.cljs$core$IFn$_invoke$arity$2(event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)], 0)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;
var send_handshake_BANG_ = (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,615,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
}),null)),null,1925575347);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null, ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,handshake_ev));
});
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,628,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[err_msg,": %s"].join(''),ring_req], null);
}),null)),null,-318626533);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
if(bad_csrf_QMARK_(ring_req)){
return (bad_csrf_fn.cljs$core$IFn$_invoke$arity$1 ? bad_csrf_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_csrf_fn.call(null, ring_req));
} else {
if(taoensso.sente.bad_origin_QMARK_(allowed_origins__$1,ring_req)){
return (bad_origin_fn.cljs$core$IFn$_invoke$arity$1 ? bad_origin_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_origin_fn.call(null, ring_req));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,644,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
}),null)),null,-438304417);
var updated_conn = upd_conn_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

send_handshake_BANG_(server_ch,websocket_QMARK_);

var temp__5804__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__5804__auto__)){
var ms = temp__5804__auto__;
var c__17028__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_28221){
var state_val_28222 = (state_28221[(1)]);
if((state_val_28222 === (7))){
var inst_28216 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
var statearr_28225_29092 = state_28221__$1;
(statearr_28225_29092[(2)] = inst_28216);

(statearr_28225_29092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (1))){
var inst_28177 = udt_open;
var inst_28178 = inst_28177;
var state_28221__$1 = (function (){var statearr_28226 = state_28221;
(statearr_28226[(7)] = inst_28178);

return statearr_28226;
})();
var statearr_28227_29097 = state_28221__$1;
(statearr_28227_29097[(2)] = null);

(statearr_28227_29097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (4))){
var inst_28190 = (state_28221[(8)]);
var inst_28182 = (state_28221[(2)]);
var inst_28185 = cljs.core.deref(conns_);
var inst_28187 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28188 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_28189 = (new cljs.core.PersistentVector(null,3,(5),inst_28187,inst_28188,null));
var inst_28190__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_28185,inst_28189);
var state_28221__$1 = (function (){var statearr_28228 = state_28221;
(statearr_28228[(8)] = inst_28190__$1);

(statearr_28228[(9)] = inst_28182);

return statearr_28228;
})();
if(cljs.core.truth_(inst_28190__$1)){
var statearr_28229_29102 = state_28221__$1;
(statearr_28229_29102[(1)] = (5));

} else {
var statearr_28230_29103 = state_28221__$1;
(statearr_28230_29103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (13))){
var inst_28197 = (state_28221[(10)]);
var inst_28209 = (state_28221[(2)]);
var inst_28178 = inst_28197;
var state_28221__$1 = (function (){var statearr_28231 = state_28221;
(statearr_28231[(11)] = inst_28209);

(statearr_28231[(7)] = inst_28178);

return statearr_28231;
})();
var statearr_28232_29108 = state_28221__$1;
(statearr_28232_29108[(2)] = null);

(statearr_28232_29108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (6))){
var state_28221__$1 = state_28221;
var statearr_28233_29109 = state_28221__$1;
(statearr_28233_29109[(2)] = null);

(statearr_28233_29109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (3))){
var inst_28218 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28221__$1,inst_28218);
} else {
if((state_val_28222 === (12))){
var state_28221__$1 = state_28221;
var statearr_28234_29110 = state_28221__$1;
(statearr_28234_29110[(2)] = null);

(statearr_28234_29110[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (2))){
var inst_28180 = cljs.core.async.timeout(ms);
var state_28221__$1 = state_28221;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28221__$1,(4),inst_28180);
} else {
if((state_val_28222 === (11))){
var inst_28205 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_28206 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_28205);
var state_28221__$1 = state_28221;
var statearr_28237_29111 = state_28221__$1;
(statearr_28237_29111[(2)] = inst_28206);

(statearr_28237_29111[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (9))){
var state_28221__$1 = state_28221;
var statearr_28238_29112 = state_28221__$1;
(statearr_28238_29112[(2)] = null);

(statearr_28238_29112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (5))){
var inst_28190 = (state_28221[(8)]);
var inst_28196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28190,(0),null);
var inst_28197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28190,(1),null);
var inst_28198 = taoensso.sente.interfaces.sch_open_QMARK_(server_ch);
var state_28221__$1 = (function (){var statearr_28243 = state_28221;
(statearr_28243[(12)] = inst_28196);

(statearr_28243[(10)] = inst_28197);

return statearr_28243;
})();
if(cljs.core.truth_(inst_28198)){
var statearr_28245_29113 = state_28221__$1;
(statearr_28245_29113[(1)] = (8));

} else {
var statearr_28246_29114 = state_28221__$1;
(statearr_28246_29114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (10))){
var inst_28213 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
var statearr_28248_29115 = state_28221__$1;
(statearr_28248_29115[(2)] = inst_28213);

(statearr_28248_29115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (8))){
var inst_28178 = (state_28221[(7)]);
var inst_28197 = (state_28221[(10)]);
var inst_28200 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28197,inst_28178);
var state_28221__$1 = state_28221;
if(inst_28200){
var statearr_28251_29117 = state_28221__$1;
(statearr_28251_29117[(1)] = (11));

} else {
var statearr_28253_29118 = state_28221__$1;
(statearr_28253_29118[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__16914__auto__ = null;
var taoensso$sente$state_machine__16914__auto____0 = (function (){
var statearr_28254 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28254[(0)] = taoensso$sente$state_machine__16914__auto__);

(statearr_28254[(1)] = (1));

return statearr_28254;
});
var taoensso$sente$state_machine__16914__auto____1 = (function (state_28221){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_28221);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e28255){var ex__16917__auto__ = e28255;
var statearr_28256_29119 = state_28221;
(statearr_28256_29119[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_28221[(4)]))){
var statearr_28257_29120 = state_28221;
(statearr_28257_29120[(1)] = cljs.core.first((state_28221[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29121 = state_28221;
state_28221 = G__29121;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
taoensso$sente$state_machine__16914__auto__ = function(state_28221){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__16914__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__16914__auto____1.call(this,state_28221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__16914__auto____0;
taoensso$sente$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__16914__auto____1;
return taoensso$sente$state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_28258 = f__17029__auto__();
(statearr_28258[(6)] = c__17028__auto__);

return statearr_28258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
}));

return c__17028__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,673,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
}),null)),null,2117934716);
var updated_conn = upd_conn_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_(server_ch,websocket_QMARK_);
} else {
var temp__5804__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5804__auto__)){
var ms = temp__5804__auto__;
var c__17028__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_28296){
var state_val_28297 = (state_28296[(1)]);
if((state_val_28297 === (1))){
var inst_28266 = cljs.core.async.timeout(ms);
var state_28296__$1 = state_28296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28296__$1,(2),inst_28266);
} else {
if((state_val_28297 === (2))){
var inst_28275 = (state_28296[(7)]);
var inst_28268 = (state_28296[(2)]);
var inst_28271 = cljs.core.deref(conns_);
var inst_28272 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28273 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_28274 = (new cljs.core.PersistentVector(null,3,(5),inst_28272,inst_28273,null));
var inst_28275__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_28271,inst_28274);
var state_28296__$1 = (function (){var statearr_28300 = state_28296;
(statearr_28300[(8)] = inst_28268);

(statearr_28300[(7)] = inst_28275__$1);

return statearr_28300;
})();
if(cljs.core.truth_(inst_28275__$1)){
var statearr_28302_29128 = state_28296__$1;
(statearr_28302_29128[(1)] = (3));

} else {
var statearr_28304_29129 = state_28296__$1;
(statearr_28304_29129[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (3))){
var inst_28275 = (state_28296[(7)]);
var inst_28281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28275,(0),null);
var inst_28282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28275,(1),null);
var inst_28284 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28282,udt_open);
var state_28296__$1 = (function (){var statearr_28306 = state_28296;
(statearr_28306[(9)] = inst_28281);

return statearr_28306;
})();
if(inst_28284){
var statearr_28307_29130 = state_28296__$1;
(statearr_28307_29130[(1)] = (6));

} else {
var statearr_28308_29131 = state_28296__$1;
(statearr_28308_29131[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (4))){
var state_28296__$1 = state_28296;
var statearr_28309_29132 = state_28296__$1;
(statearr_28309_29132[(2)] = null);

(statearr_28309_29132[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (5))){
var inst_28294 = (state_28296[(2)]);
var state_28296__$1 = state_28296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28296__$1,inst_28294);
} else {
if((state_val_28297 === (6))){
var inst_28287 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_28288 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_28287);
var state_28296__$1 = state_28296;
var statearr_28310_29133 = state_28296__$1;
(statearr_28310_29133[(2)] = inst_28288);

(statearr_28310_29133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (7))){
var state_28296__$1 = state_28296;
var statearr_28311_29134 = state_28296__$1;
(statearr_28311_29134[(2)] = null);

(statearr_28311_29134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (8))){
var inst_28291 = (state_28296[(2)]);
var state_28296__$1 = state_28296;
var statearr_28312_29135 = state_28296__$1;
(statearr_28312_29135[(2)] = inst_28291);

(statearr_28312_29135[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__16914__auto__ = null;
var taoensso$sente$state_machine__16914__auto____0 = (function (){
var statearr_28313 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28313[(0)] = taoensso$sente$state_machine__16914__auto__);

(statearr_28313[(1)] = (1));

return statearr_28313;
});
var taoensso$sente$state_machine__16914__auto____1 = (function (state_28296){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_28296);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e28315){var ex__16917__auto__ = e28315;
var statearr_28316_29136 = state_28296;
(statearr_28316_29136[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_28296[(4)]))){
var statearr_28317_29137 = state_28296;
(statearr_28317_29137[(1)] = cljs.core.first((state_28296[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29138 = state_28296;
state_28296 = G__29138;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
taoensso$sente$state_machine__16914__auto__ = function(state_28296){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__16914__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__16914__auto____1.call(this,state_28296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__16914__auto____0;
taoensso$sente$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__16914__auto____1;
return taoensso$sente$state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_28319 = f__17029__auto__();
(statearr_28319[(6)] = c__17028__auto__);

return statearr_28319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
}));

return c__17028__auto__;
} else {
return null;
}
}
}
}),new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),(function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__28321 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28321,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28321,(1),null);
return receive_event_msg_BANG_(clj,(cljs.core.truth_(_QMARK_cb_uuid)?(function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,703,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
}),null)),null,764673972);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,resp_clj,_QMARK_cb_uuid));
}):null));
}),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,712,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
}),null)),null,2127676778);
var updated_conn = upd_conn_BANG_(conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__17028__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_28381){
var state_val_28382 = (state_28381[(1)]);
if((state_val_28382 === (7))){
var state_28381__$1 = state_28381;
var statearr_28392_29139 = state_28381__$1;
(statearr_28392_29139[(2)] = null);

(statearr_28392_29139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (1))){
var inst_28329 = cljs.core.async.timeout((5000));
var state_28381__$1 = state_28381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28381__$1,(2),inst_28329);
} else {
if((state_val_28382 === (4))){
var state_28381__$1 = state_28381;
var statearr_28393_29140 = state_28381__$1;
(statearr_28393_29140[(2)] = null);

(statearr_28393_29140[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (13))){
var state_28381__$1 = state_28381;
var statearr_28394_29141 = state_28381__$1;
(statearr_28394_29141[(2)] = null);

(statearr_28394_29141[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (6))){
var inst_28341 = (state_28381[(7)]);
var inst_28357 = (state_28381[(8)]);
var inst_28339 = (state_28381[(9)]);
var inst_28340 = (state_28381[(10)]);
var inst_28352 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28353 = [conn_type,uid,client_id];
var inst_28354 = (new cljs.core.PersistentVector(null,3,(5),inst_28352,inst_28353,null));
var inst_28356 = (function (){var vec__28332 = inst_28339;
var __QMARK_sch = inst_28340;
var udt_t1 = inst_28341;
return (function (p__28355){
var vec__28396 = p__28355;
var _sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28396,(0),null);
var udt_t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28396,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1__$1,udt_close)){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_sch,udt_t1__$1], null),false);
}
});
})();
var inst_28357__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_28354,inst_28356);
var state_28381__$1 = (function (){var statearr_28401 = state_28381;
(statearr_28401[(8)] = inst_28357__$1);

return statearr_28401;
})();
if(cljs.core.truth_(inst_28357__$1)){
var statearr_28402_29142 = state_28381__$1;
(statearr_28402_29142[(1)] = (9));

} else {
var statearr_28403_29143 = state_28381__$1;
(statearr_28403_29143[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (3))){
var inst_28341 = (state_28381[(7)]);
var inst_28339 = (state_28381[(9)]);
var inst_28340 = (state_28381[(10)]);
var inst_28344 = (function (){var vec__28332 = inst_28339;
var __QMARK_sch = inst_28340;
var udt_t1 = inst_28341;
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
})();
var inst_28345 = (new cljs.core.Delay(inst_28344,null));
var inst_28346 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,726,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_28345,null,-1625362271);
var state_28381__$1 = state_28381;
var statearr_28411_29144 = state_28381__$1;
(statearr_28411_29144[(2)] = inst_28346);

(statearr_28411_29144[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (12))){
var inst_28367 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28368 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_28369 = (new cljs.core.PersistentVector(null,2,(5),inst_28367,inst_28368,null));
var inst_28370 = receive_event_msg_BANG_(inst_28369);
var state_28381__$1 = state_28381;
var statearr_28412_29145 = state_28381__$1;
(statearr_28412_29145[(2)] = inst_28370);

(statearr_28412_29145[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (2))){
var inst_28339 = (state_28381[(9)]);
var inst_28331 = (state_28381[(2)]);
var inst_28335 = cljs.core.deref(conns_);
var inst_28336 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28337 = [conn_type,uid,client_id];
var inst_28338 = (new cljs.core.PersistentVector(null,3,(5),inst_28336,inst_28337,null));
var inst_28339__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_28335,inst_28338);
var inst_28340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28339__$1,(0),null);
var inst_28341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28339__$1,(1),null);
var inst_28342 = cljs.core.deref(taoensso.sente.debug_mode_QMARK__);
var state_28381__$1 = (function (){var statearr_28413 = state_28381;
(statearr_28413[(11)] = inst_28331);

(statearr_28413[(7)] = inst_28341);

(statearr_28413[(9)] = inst_28339__$1);

(statearr_28413[(10)] = inst_28340);

return statearr_28413;
})();
if(cljs.core.truth_(inst_28342)){
var statearr_28414_29146 = state_28381__$1;
(statearr_28414_29146[(1)] = (3));

} else {
var statearr_28415_29147 = state_28381__$1;
(statearr_28415_29147[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (11))){
var inst_28376 = (state_28381[(2)]);
var state_28381__$1 = state_28381;
var statearr_28416_29148 = state_28381__$1;
(statearr_28416_29148[(2)] = inst_28376);

(statearr_28416_29148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (9))){
var inst_28341 = (state_28381[(7)]);
var inst_28357 = (state_28381[(8)]);
var inst_28339 = (state_28381[(9)]);
var inst_28340 = (state_28381[(10)]);
var inst_28359 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28360 = [conn_type,uid];
var inst_28361 = (new cljs.core.PersistentVector(null,2,(5),inst_28359,inst_28360,null));
var inst_28362 = (function (){var vec__28332 = inst_28339;
var __QMARK_sch = inst_28340;
var udt_t1 = inst_28341;
var disconnect_QMARK_ = inst_28357;
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_(_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
})();
var inst_28363 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_28361,inst_28362);
var inst_28364 = upd_connected_uid_BANG_(uid);
var state_28381__$1 = (function (){var statearr_28418 = state_28381;
(statearr_28418[(12)] = inst_28363);

return statearr_28418;
})();
if(cljs.core.truth_(inst_28364)){
var statearr_28419_29149 = state_28381__$1;
(statearr_28419_29149[(1)] = (12));

} else {
var statearr_28420_29150 = state_28381__$1;
(statearr_28420_29150[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (5))){
var inst_28341 = (state_28381[(7)]);
var inst_28349 = (state_28381[(2)]);
var inst_28350 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28341,udt_close);
var state_28381__$1 = (function (){var statearr_28421 = state_28381;
(statearr_28421[(13)] = inst_28349);

return statearr_28421;
})();
if(inst_28350){
var statearr_28422_29151 = state_28381__$1;
(statearr_28422_29151[(1)] = (6));

} else {
var statearr_28423_29152 = state_28381__$1;
(statearr_28423_29152[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (14))){
var inst_28373 = (state_28381[(2)]);
var state_28381__$1 = state_28381;
var statearr_28425_29153 = state_28381__$1;
(statearr_28425_29153[(2)] = inst_28373);

(statearr_28425_29153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (10))){
var state_28381__$1 = state_28381;
var statearr_28426_29154 = state_28381__$1;
(statearr_28426_29154[(2)] = null);

(statearr_28426_29154[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (8))){
var inst_28379 = (state_28381[(2)]);
var state_28381__$1 = state_28381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28381__$1,inst_28379);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__16914__auto__ = null;
var taoensso$sente$state_machine__16914__auto____0 = (function (){
var statearr_28427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28427[(0)] = taoensso$sente$state_machine__16914__auto__);

(statearr_28427[(1)] = (1));

return statearr_28427;
});
var taoensso$sente$state_machine__16914__auto____1 = (function (state_28381){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_28381);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e28428){var ex__16917__auto__ = e28428;
var statearr_28429_29155 = state_28381;
(statearr_28429_29155[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_28381[(4)]))){
var statearr_28430_29156 = state_28381;
(statearr_28430_29156[(1)] = cljs.core.first((state_28381[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29157 = state_28381;
state_28381 = G__29157;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
taoensso$sente$state_machine__16914__auto__ = function(state_28381){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__16914__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__16914__auto____1.call(this,state_28381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__16914__auto____0;
taoensso$sente$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__16914__auto____1;
return taoensso$sente$state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_28431 = f__17029__auto__();
(statearr_28431[(6)] = c__17028__auto__);

return statearr_28431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
}));

return c__17028__auto__;
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,748,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
}),null)),null,1997548768);
})], null));

}
}
}
})], null);
}));

(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq27970){
var G__27971 = cljs.core.first(seq27970);
var seq27970__$1 = cljs.core.next(seq27970);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27971,seq27970__$1);
}));

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,754,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-872419744);

var seq__28433 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__28434 = null;
var count__28435 = (0);
var i__28436 = (0);
while(true){
if((i__28436 < count__28435)){
var vec__28451 = chunk__28434.cljs$core$IIndexed$_nth$arity$2(null, i__28436);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28451,(0),null);
var vec__28454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28451,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28454,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28454,(1),null);
var temp__5804__auto___29158 = _QMARK_sch;
if(cljs.core.truth_(temp__5804__auto___29158)){
var sch_29159 = temp__5804__auto___29158;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id) : upd_conn_BANG_.call(null, new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id));

taoensso.sente.interfaces.sch_send_BANG_(sch_29159,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__29160 = seq__28433;
var G__29161 = chunk__28434;
var G__29162 = count__28435;
var G__29163 = (i__28436 + (1));
seq__28433 = G__29160;
chunk__28434 = G__29161;
count__28435 = G__29162;
i__28436 = G__29163;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28433);
if(temp__5804__auto__){
var seq__28433__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28433__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28433__$1);
var G__29164 = cljs.core.chunk_rest(seq__28433__$1);
var G__29165 = c__5525__auto__;
var G__29166 = cljs.core.count(c__5525__auto__);
var G__29167 = (0);
seq__28433 = G__29164;
chunk__28434 = G__29165;
count__28435 = G__29166;
i__28436 = G__29167;
continue;
} else {
var vec__28458 = cljs.core.first(seq__28433__$1);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28458,(0),null);
var vec__28461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28458,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28461,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28461,(1),null);
var temp__5804__auto___29168__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__5804__auto___29168__$1)){
var sch_29169 = temp__5804__auto___29168__$1;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id) : upd_conn_BANG_.call(null, new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id));

taoensso.sente.interfaces.sch_send_BANG_(sch_29169,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__29170 = cljs.core.next(seq__28433__$1);
var G__29171 = null;
var G__29172 = (0);
var G__29173 = (0);
seq__28433 = G__29170;
chunk__28434 = G__29171;
count__28435 = G__29172;
i__28436 = G__29173;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,764,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,1947665701);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_(client_ids_unsatisfied)){
return null;
} else {
var c__17028__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_28519){
var state_val_28520 = (state_28519[(1)]);
if((state_val_28520 === (7))){
var inst_28472 = (state_28519[(7)]);
var inst_28473 = (state_28519[(8)]);
var inst_28479 = (state_28519[(9)]);
var inst_28490 = (function (){var n = inst_28472;
var client_ids_satisfied = inst_28473;
var _QMARK_pulled = inst_28479;
return (function (s,client_id,p__28489){
var vec__28522 = p__28489;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28522,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28522,(1),null);
var sent_QMARK_ = (function (){var temp__5804__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__5804__auto__)){
var sch = temp__5804__auto__;
return taoensso.sente.interfaces.sch_send_BANG_(_QMARK_sch,cljs.core.not(new cljs.core.Keyword(null,"websocket","websocket",-1714963101)),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,client_id);
} else {
return s;
}
});
})();
var inst_28491 = cljs.core.PersistentHashSet.EMPTY;
var inst_28492 = cljs.core.reduce_kv(inst_28490,inst_28491,inst_28479);
var state_28519__$1 = state_28519;
var statearr_28526_29174 = state_28519__$1;
(statearr_28526_29174[(2)] = inst_28492);

(statearr_28526_29174[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (1))){
var inst_28471 = cljs.core.PersistentHashSet.EMPTY;
var inst_28472 = (0);
var inst_28473 = inst_28471;
var state_28519__$1 = (function (){var statearr_28608 = state_28519;
(statearr_28608[(7)] = inst_28472);

(statearr_28608[(8)] = inst_28473);

return statearr_28608;
})();
var statearr_28609_29175 = state_28519__$1;
(statearr_28609_29175[(2)] = null);

(statearr_28609_29175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (4))){
var state_28519__$1 = state_28519;
var statearr_28610_29176 = state_28519__$1;
(statearr_28610_29176[(2)] = true);

(statearr_28610_29176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (15))){
var inst_28512 = (state_28519[(2)]);
var state_28519__$1 = state_28519;
var statearr_28611_29177 = state_28519__$1;
(statearr_28611_29177[(2)] = inst_28512);

(statearr_28611_29177[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (13))){
var inst_28497 = (state_28519[(10)]);
var inst_28503 = cljs.core.rand_int(inst_28497);
var inst_28504 = (inst_28497 + inst_28503);
var inst_28505 = cljs.core.async.timeout(inst_28504);
var state_28519__$1 = state_28519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28519__$1,(16),inst_28505);
} else {
if((state_val_28520 === (6))){
var inst_28479 = (state_28519[(9)]);
var inst_28487 = (state_28519[(2)]);
var state_28519__$1 = (function (){var statearr_28612 = state_28519;
(statearr_28612[(11)] = inst_28487);

return statearr_28612;
})();
if(cljs.core.truth_(inst_28479)){
var statearr_28613_29178 = state_28519__$1;
(statearr_28613_29178[(1)] = (7));

} else {
var statearr_28614_29179 = state_28519__$1;
(statearr_28614_29179[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (3))){
var inst_28517 = (state_28519[(2)]);
var state_28519__$1 = state_28519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28519__$1,inst_28517);
} else {
if((state_val_28520 === (12))){
var inst_28515 = (state_28519[(2)]);
var state_28519__$1 = state_28519;
var statearr_28615_29180 = state_28519__$1;
(statearr_28615_29180[(2)] = inst_28515);

(statearr_28615_29180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (2))){
var inst_28472 = (state_28519[(7)]);
var inst_28473 = (state_28519[(8)]);
var inst_28479 = (state_28519[(9)]);
var inst_28475 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28476 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_28477 = (new cljs.core.PersistentVector(null,2,(5),inst_28475,inst_28476,null));
var inst_28478 = (function (){var n = inst_28472;
var client_ids_satisfied = inst_28473;
return (function (m){
var ks_to_pull = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(client_ids_satisfied,cljs.core.keys(m));
if(cljs.core.empty_QMARK_(ks_to_pull)){
return taoensso.encore.swapped(m,null);
} else {
return taoensso.encore.swapped(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){
var vec__28616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28616,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28616,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
}),m,ks_to_pull),cljs.core.select_keys(m,ks_to_pull));
}
});
})();
var inst_28479__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_28477,inst_28478);
var inst_28481 = (function (){var n = inst_28472;
var client_ids_satisfied = inst_28473;
var _QMARK_pulled = inst_28479__$1;
return (function (x){
var or__5002__auto__ = (x == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_)(x);
}
});
})();
var inst_28482 = inst_28481(inst_28479__$1);
var state_28519__$1 = (function (){var statearr_28619 = state_28519;
(statearr_28619[(9)] = inst_28479__$1);

return statearr_28619;
})();
if(cljs.core.truth_(inst_28482)){
var statearr_28620_29181 = state_28519__$1;
(statearr_28620_29181[(1)] = (4));

} else {
var statearr_28621_29182 = state_28519__$1;
(statearr_28621_29182[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (11))){
var state_28519__$1 = state_28519;
var statearr_28622_29183 = state_28519__$1;
(statearr_28622_29183[(2)] = null);

(statearr_28622_29183[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (9))){
var inst_28472 = (state_28519[(7)]);
var inst_28497 = (state_28519[(10)]);
var inst_28473 = (state_28519[(8)]);
var inst_28495 = (state_28519[(2)]);
var inst_28496 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_28473,inst_28495);
var inst_28497__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_28472);
var state_28519__$1 = (function (){var statearr_28623 = state_28519;
(statearr_28623[(12)] = inst_28496);

(statearr_28623[(10)] = inst_28497__$1);

return statearr_28623;
})();
if(cljs.core.truth_(inst_28497__$1)){
var statearr_28624_29184 = state_28519__$1;
(statearr_28624_29184[(1)] = (10));

} else {
var statearr_28625_29185 = state_28519__$1;
(statearr_28625_29185[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (5))){
var inst_28479 = (state_28519[(9)]);
var inst_28485 = taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",791,"([:or nil? map?] ?pulled)",inst_28479,null,null);
var state_28519__$1 = state_28519;
var statearr_28626_29186 = state_28519__$1;
(statearr_28626_29186[(2)] = inst_28485);

(statearr_28626_29186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (14))){
var state_28519__$1 = state_28519;
var statearr_28628_29187 = state_28519__$1;
(statearr_28628_29187[(2)] = null);

(statearr_28628_29187[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (16))){
var inst_28472 = (state_28519[(7)]);
var inst_28496 = (state_28519[(12)]);
var inst_28507 = (state_28519[(2)]);
var inst_28508 = (inst_28472 + (1));
var inst_28472__$1 = inst_28508;
var inst_28473 = inst_28496;
var state_28519__$1 = (function (){var statearr_28630 = state_28519;
(statearr_28630[(13)] = inst_28507);

(statearr_28630[(7)] = inst_28472__$1);

(statearr_28630[(8)] = inst_28473);

return statearr_28630;
})();
var statearr_28631_29188 = state_28519__$1;
(statearr_28631_29188[(2)] = null);

(statearr_28631_29188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (10))){
var inst_28496 = (state_28519[(12)]);
var inst_28499 = cljs.core.complement(inst_28496);
var inst_28500 = taoensso.encore.rsome(inst_28499,client_ids_unsatisfied);
var state_28519__$1 = state_28519;
if(cljs.core.truth_(inst_28500)){
var statearr_28632_29189 = state_28519__$1;
(statearr_28632_29189[(1)] = (13));

} else {
var statearr_28633_29190 = state_28519__$1;
(statearr_28633_29190[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28520 === (8))){
var state_28519__$1 = state_28519;
var statearr_28634_29191 = state_28519__$1;
(statearr_28634_29191[(2)] = null);

(statearr_28634_29191[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16914__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16914__auto____0 = (function (){
var statearr_28635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28635[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16914__auto__);

(statearr_28635[(1)] = (1));

return statearr_28635;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16914__auto____1 = (function (state_28519){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_28519);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e28636){var ex__16917__auto__ = e28636;
var statearr_28637_29192 = state_28519;
(statearr_28637_29192[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_28519[(4)]))){
var statearr_28638_29193 = state_28519;
(statearr_28638_29193[(1)] = cljs.core.first((state_28519[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29194 = state_28519;
state_28519 = G__29194;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16914__auto__ = function(state_28519){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16914__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16914__auto____1.call(this,state_28519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16914__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16914__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_28639 = f__17029__auto__();
(statearr_28639[(6)] = c__17028__auto__);

return statearr_28639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
}));

return c__17028__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

var taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_29195 = (function (chsk){
var x__5350__auto__ = (((chsk == null))?null:chsk);
var m__5351__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__5351__auto__.call(null, chsk));
} else {
var m__5349__auto__ = (taoensso.sente._chsk_connect_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__5349__auto__.call(null, chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-connect!",chsk);
}
}
});
taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
return taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_29195(chsk);
}
});

var taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_29196 = (function (chsk,reason){
var x__5350__auto__ = (((chsk == null))?null:chsk);
var m__5351__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__5351__auto__.call(null, chsk,reason));
} else {
var m__5349__auto__ = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__5349__auto__.call(null, chsk,reason));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-disconnect!",chsk);
}
}
});
taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
return taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_29196(chsk,reason);
}
});

var taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_29197 = (function (chsk){
var x__5350__auto__ = (((chsk == null))?null:chsk);
var m__5351__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__5351__auto__.call(null, chsk));
} else {
var m__5349__auto__ = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__5349__auto__.call(null, chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-reconnect!",chsk);
}
}
});
taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
return taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_29197(chsk);
}
});

var taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_29198 = (function (chsk,ev,opts){
var x__5350__auto__ = (((chsk == null))?null:chsk);
var m__5351__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__5351__auto__.call(null, chsk,ev,opts));
} else {
var m__5349__auto__ = (taoensso.sente._chsk_send_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__5349__auto__.call(null, chsk,ev,opts));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-send!",chsk);
}
}
});
taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
return taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_29198(chsk,ev,opts);
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_(chsk);
});

taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_(chsk,new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641));
});

/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_(chsk);
});

/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var G__28641 = arguments.length;
switch (G__28641) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
}));

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
}));

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,841,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$(new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,-494763512);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
}));

(taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4);

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,846,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,-870517721);

if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264)) : _QMARK_cb_fn.call(null, new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264)));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event(x);

if((((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null)))) || (taoensso.encore.nat_int_QMARK_(_QMARK_timeout_ms)))){
} else {
throw (new Error(["Assert failed: ",["cb requires a timeout; timeout-ms should be a +ive integer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_timeout_ms)].join(''),"\n","(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))"].join('')));
}

if((((_QMARK_cb == null)) || (((cljs.core.ifn_QMARK_(_QMARK_cb)) || (taoensso.encore.chan_QMARK_(_QMARK_cb)))))){
return null;
} else {
throw (new Error(["Assert failed: ",["cb should be nil, an ifn, or a channel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(_QMARK_cb))].join(''),"\n","(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))"].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__5804__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5804__auto__)){
var cb_uuid = temp__5804__auto__;
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),(function (_QMARK_f){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
}));
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__28642 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null, old_state));
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped(new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28642,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28642,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_29200 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28645){if((e28645 instanceof Error)){
var e_29200 = e28645;
return e_29200;
} else {
throw e28645;

}
}})();
if((e_29200 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",893,"(map? state)",state,e_29200,null);
}

var e_29201 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__28647 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__28647) : taoensso.truss.impl.set_STAR_.call(null, G__28647));
})(),x);
})(reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28646){if((e28646 instanceof Error)){
var e_29201 = e28646;
return e_29201;
} else {
throw e28646;

}
}})();
if((e_29201 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",894,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_29201,null);
}

if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(reason,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)),new cljs.core.Keyword(null,"open?","open?",1238443125),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null)], 0));
} else {
return state;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if((((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)))){
return _QMARK_cb;
} else {
var e_29202 = (function (){try{if(taoensso.encore.chan_QMARK_(_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28648){if((e28648 instanceof Error)){
var e_29202 = e28648;
return e_29202;
} else {
throw e28648;

}
}})();
if((e_29202 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",915,"(enc/chan? ?cb)",_QMARK_cb,e_29202,null);
}

taoensso.sente.assert_event(ev);

var vec__28649 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28649,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28649,(1),null);
var cb_ch = _QMARK_cb;
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([taoensso.encore.as_qname(ev_id),".cb"].join('')),reply], null));
});
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,926,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,-1722486928);

var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",927,"(vector? clj)",clj,null,null));
var seq__28652 = cljs.core.seq(buffered_evs);
var chunk__28653 = null;
var count__28654 = (0);
var i__28655 = (0);
while(true){
if((i__28655 < count__28654)){
var ev = chunk__28653.cljs$core$IIndexed$_nth$arity$2(null, i__28655);
taoensso.sente.assert_event(ev);

var vec__28662_29203 = ev;
var id_29204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28662_29203,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_29204),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__29205 = seq__28652;
var G__29206 = chunk__28653;
var G__29207 = count__28654;
var G__29208 = (i__28655 + (1));
seq__28652 = G__29205;
chunk__28653 = G__29206;
count__28654 = G__29207;
i__28655 = G__29208;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28652);
if(temp__5804__auto__){
var seq__28652__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28652__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28652__$1);
var G__29209 = cljs.core.chunk_rest(seq__28652__$1);
var G__29210 = c__5525__auto__;
var G__29211 = cljs.core.count(c__5525__auto__);
var G__29212 = (0);
seq__28652 = G__29209;
chunk__28653 = G__29210;
count__28654 = G__29211;
i__28655 = G__29212;
continue;
} else {
var ev = cljs.core.first(seq__28652__$1);
taoensso.sente.assert_event(ev);

var vec__28665_29213 = ev;
var id_29214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28665_29213,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_29214),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__29215 = cljs.core.next(seq__28652__$1);
var G__29216 = null;
var G__29217 = (0);
var G__29218 = (0);
seq__28652 = G__29215;
chunk__28653 = G__29216;
count__28654 = G__29217;
i__28655 = G__29218;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
var and__5000__auto__ = cljs.core.vector_QMARK_(x);
if(and__5000__auto__){
var vec__28668 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28668,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__5000__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_29219 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__28673 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__28673) : taoensso.truss.impl.set_STAR_.call(null, G__28673));
})(),x);
})(chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28672){if((e28672 instanceof Error)){
var e_29219 = e28672;
return e_29219;
} else {
throw e28672;

}
}})();
if((e_29219 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",941,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_29219,null);
}

var e_29220 = (function (){try{if(taoensso.sente.handshake_QMARK_(clj)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28674){if((e28674 instanceof Error)){
var e_29220 = e28674;
return e_29220;
} else {
throw e28674;

}
}})();
if((e_29220 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",942,"(handshake? clj)",clj,e_29220,null);
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,943,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,238946507);

var vec__28675 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28675,(0),null);
var vec__28678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28675,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28678,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28678,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28678,(2),null);
var map__28681 = chsk;
var map__28681__$1 = cljs.core.__destructure_map(map__28681);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28681__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28681__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,null,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event(handshake_ev);

taoensso.sente.swap_chsk_state_BANG_(chsk,(function (p1__28671_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__28671_SHARP_,new_state], 0));
}));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (function (){var make_package_name = (function (prefix){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"socket"].join('');
});
var require_fn = (((typeof require !== 'undefined'))?require:cljs.core.constantly(new cljs.core.Keyword(null,"no-op","no-op",-93046065)));
return (new cljs.core.Delay((function (){
if(((taoensso.sente.node_target_QMARK_) && ((typeof require !== 'undefined')))){
try{var G__28683 = make_package_name("web");
return (require_fn.cljs$core$IFn$_invoke$arity$1 ? require_fn.cljs$core$IFn$_invoke$arity$1(G__28683) : require_fn.call(null, G__28683));
}catch (e28682){var e = e28682;
return null;
}} else {
return null;
}
}),null));
})();

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.ws_kalive_ms = ws_kalive_ms;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k28690,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__28694 = k28690;
var G__28694__$1 = (((G__28694 instanceof cljs.core.Keyword))?G__28694.fqn:null);
switch (G__28694__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "socket_":
return self__.socket_;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28690,else__5303__auto__);

}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__28695){
var vec__28696 = p__28695;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28696,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28696,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28689){
var self__ = this;
var G__28689__$1 = this;
return (new cljs.core.RecordIter((0),G__28689__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28691,other28692){
var self__ = this;
var this28691__$1 = this;
return (((!((other28692 == null)))) && ((((this28691__$1.constructor === other28692.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28691__$1.client_id,other28692.client_id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28691__$1.chs,other28692.chs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28691__$1.params,other28692.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28691__$1.packer,other28692.packer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28691__$1.url,other28692.url)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28691__$1.ws_kalive_ms,other28692.ws_kalive_ms)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28691__$1.state_,other28692.state_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28691__$1.instance_handle_,other28692.instance_handle_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28691__$1.retry_count_,other28692.retry_count_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28691__$1.ever_opened_QMARK__,other28692.ever_opened_QMARK__)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28691__$1.backoff_ms_fn,other28692.backoff_ms_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28691__$1.cbs_waiting_,other28692.cbs_waiting_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28691__$1.socket_,other28692.socket_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28691__$1.udt_last_comms_,other28692.udt_last_comms_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28691__$1.__extmap,other28692.__extmap)))))))))))))))))))))))))))))))));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k28690){
var self__ = this;
var this__5307__auto____$1 = this;
var G__28699 = k28690;
var G__28699__$1 = (((G__28699 instanceof cljs.core.Keyword))?G__28699.fqn:null);
switch (G__28699__$1) {
case "client-id":
case "chs":
case "params":
case "packer":
case "url":
case "ws-kalive-ms":
case "state_":
case "instance-handle_":
case "retry-count_":
case "ever-opened?_":
case "backoff-ms-fn":
case "cbs-waiting_":
case "socket_":
case "udt-last-comms_":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28690);

}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__28689){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__28700 = cljs.core.keyword_identical_QMARK_;
var expr__28701 = k__5309__auto__;
if(cljs.core.truth_((pred__28700.cljs$core$IFn$_invoke$arity$2 ? pred__28700.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__28701) : pred__28700.call(null, new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__28701)))){
return (new taoensso.sente.ChWebSocket(G__28689,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28700.cljs$core$IFn$_invoke$arity$2 ? pred__28700.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chs","chs",376886120),expr__28701) : pred__28700.call(null, new cljs.core.Keyword(null,"chs","chs",376886120),expr__28701)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__28689,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28700.cljs$core$IFn$_invoke$arity$2 ? pred__28700.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__28701) : pred__28700.call(null, new cljs.core.Keyword(null,"params","params",710516235),expr__28701)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__28689,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28700.cljs$core$IFn$_invoke$arity$2 ? pred__28700.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"packer","packer",66077544),expr__28701) : pred__28700.call(null, new cljs.core.Keyword(null,"packer","packer",66077544),expr__28701)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__28689,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28700.cljs$core$IFn$_invoke$arity$2 ? pred__28700.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__28701) : pred__28700.call(null, new cljs.core.Keyword(null,"url","url",276297046),expr__28701)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__28689,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28700.cljs$core$IFn$_invoke$arity$2 ? pred__28700.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__28701) : pred__28700.call(null, new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__28701)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__28689,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28700.cljs$core$IFn$_invoke$arity$2 ? pred__28700.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__28701) : pred__28700.call(null, new cljs.core.Keyword(null,"state_","state_",957667102),expr__28701)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__28689,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28700.cljs$core$IFn$_invoke$arity$2 ? pred__28700.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__28701) : pred__28700.call(null, new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__28701)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__28689,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28700.cljs$core$IFn$_invoke$arity$2 ? pred__28700.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__28701) : pred__28700.call(null, new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__28701)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__28689,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28700.cljs$core$IFn$_invoke$arity$2 ? pred__28700.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__28701) : pred__28700.call(null, new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__28701)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__28689,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28700.cljs$core$IFn$_invoke$arity$2 ? pred__28700.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__28701) : pred__28700.call(null, new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__28701)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__28689,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28700.cljs$core$IFn$_invoke$arity$2 ? pred__28700.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__28701) : pred__28700.call(null, new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__28701)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__28689,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28700.cljs$core$IFn$_invoke$arity$2 ? pred__28700.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__28701) : pred__28700.call(null, new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__28701)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__28689,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28700.cljs$core$IFn$_invoke$arity$2 ? pred__28700.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__28701) : pred__28700.call(null, new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__28701)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__28689,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__28689),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__28689){
var self__ = this;
var this__5299__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__28689,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__28684_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__28684_SHARP_,reason);
}));

var temp__5804__auto__ = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5804__auto__)){
var s = temp__5804__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null, new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null, );
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__28703 = opts;
var map__28703__$1 = cljs.core.__destructure_map(map__28703);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28703__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28703__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28703__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,_QMARK_cb_uuid);
var temp__5804__auto___29223 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5804__auto___29223)){
var cb_uuid_29224 = temp__5804__auto___29223;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_29224], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28704){if((e28704 instanceof Error)){
var e = e28704;
return e;
} else {
throw e28704;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1032,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__5804__auto___29225__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5804__auto___29225__$1)){
var timeout_ms_29226 = temp__5804__auto___29225__$1;
var c__17028__auto___29227 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_28715){
var state_val_28716 = (state_28715[(1)]);
if((state_val_28716 === (1))){
var inst_28705 = cljs.core.async.timeout(timeout_ms_29226);
var state_28715__$1 = state_28715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28715__$1,(2),inst_28705);
} else {
if((state_val_28716 === (2))){
var inst_28708 = (state_28715[(7)]);
var inst_28707 = (state_28715[(2)]);
var inst_28708__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_28715__$1 = (function (){var statearr_28717 = state_28715;
(statearr_28717[(8)] = inst_28707);

(statearr_28717[(7)] = inst_28708__$1);

return statearr_28717;
})();
if(cljs.core.truth_(inst_28708__$1)){
var statearr_28718_29228 = state_28715__$1;
(statearr_28718_29228[(1)] = (3));

} else {
var statearr_28719_29229 = state_28715__$1;
(statearr_28719_29229[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28716 === (3))){
var inst_28708 = (state_28715[(7)]);
var inst_28710 = (inst_28708.cljs$core$IFn$_invoke$arity$1 ? inst_28708.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)) : inst_28708.call(null, new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)));
var state_28715__$1 = state_28715;
var statearr_28720_29230 = state_28715__$1;
(statearr_28720_29230[(2)] = inst_28710);

(statearr_28720_29230[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28716 === (4))){
var state_28715__$1 = state_28715;
var statearr_28721_29231 = state_28715__$1;
(statearr_28721_29231[(2)] = null);

(statearr_28721_29231[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28716 === (5))){
var inst_28713 = (state_28715[(2)]);
var state_28715__$1 = state_28715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28715__$1,inst_28713);
} else {
return null;
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__16914__auto__ = null;
var taoensso$sente$state_machine__16914__auto____0 = (function (){
var statearr_28722 = [null,null,null,null,null,null,null,null,null];
(statearr_28722[(0)] = taoensso$sente$state_machine__16914__auto__);

(statearr_28722[(1)] = (1));

return statearr_28722;
});
var taoensso$sente$state_machine__16914__auto____1 = (function (state_28715){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_28715);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e28723){var ex__16917__auto__ = e28723;
var statearr_28724_29232 = state_28715;
(statearr_28724_29232[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_28715[(4)]))){
var statearr_28725_29233 = state_28715;
(statearr_28725_29233[(1)] = cljs.core.first((state_28715[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29234 = state_28715;
state_28715 = G__29234;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
taoensso$sente$state_machine__16914__auto__ = function(state_28715){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__16914__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__16914__auto____1.call(this,state_28715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__16914__auto____0;
taoensso$sente$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__16914__auto____1;
return taoensso$sente$state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_28726 = f__17029__auto__();
(statearr_28726[(6)] = c__17028__auto___29227);

return statearr_28726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
}));

} else {
}
} else {
}

try{cljs.core.deref(self__.socket_).send(ppstr);

cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e28727){var e = e28727;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1044,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
}),null)),null,-983152947);

var temp__5804__auto___29235 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5804__auto___29235)){
var cb_uuid_29236 = temp__5804__auto___29235;
var cb_fn_STAR__29237 = (function (){var or__5002__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_29236);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28728){if((e28728 instanceof Error)){
var e__$1 = e28728;
return e__$1;
} else {
throw e28728;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1047,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
(cb_fn_STAR__29237.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__29237.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","error","chsk/error",-984175439)) : cb_fn_STAR__29237.call(null, new cljs.core.Keyword("chsk","error","chsk/error",-984175439)));
} else {
}

return false;
}}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5804__auto__ = (function (){var or__5002__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"WebSocket");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"MozWebSocket");
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var WebSocket = temp__5804__auto__;
var instance_handle = cljs.core.reset_BANG_(self__.instance_handle_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var have_handle_QMARK_ = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.instance_handle_),instance_handle);
});
var connect_fn = (function taoensso$sente$connect_fn(){
if(have_handle_QMARK_()){
var retry_fn = (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,cljs.core.inc);
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null, retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1069,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
}),null)),null,1440861342);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__28685_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28685_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
} else {
return null;
}
});
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))], null)], 0)))));
}catch (e28729){var e = e28729;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1084,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
}),null)),null,-16736515);

return null;
}})();
if(cljs.core.not(_QMARK_socket)){
return retry_fn();
} else {
return cljs.core.reset_BANG_(self__.socket_,(function (){var G__28730 = _QMARK_socket;
(G__28730["onerror"] = (function (ws_ev){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1094,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e28731){var _ = e28731;
return ws_ev;
}})()], null);
}),null)),null,-1678516416);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__28686_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28686_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error);
}));
}));

(G__28730["onmessage"] = (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__28732 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28732,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28732,(1),null);
cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

var or__5002__auto__ = ((taoensso.sente.handshake_QMARK_(clj))?(function (){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_(self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var temp__5802__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5802__auto__)){
var cb_uuid = temp__5802__auto__;
var temp__5802__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__5802__auto____$1)){
var cb_fn = temp__5802__auto____$1;
return (cb_fn.cljs$core$IFn$_invoke$arity$1 ? cb_fn.cljs$core$IFn$_invoke$arity$1(clj) : cb_fn.call(null, clj));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1130,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
}),null)),null,1913543831);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
}));

(G__28730["onclose"] = (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"wasClean");
var code = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"code");
var reason = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,1152,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
}),null)),null,390134514);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__28687_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28687_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__28688_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__28688_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));

return retry_fn();
}
}));

return G__28730;
})());
}
} else {
return null;
}
});
var temp__5804__auto___29238__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5804__auto___29238__$1)){
var ms_29239 = temp__5804__auto___29238__$1;
var c__17028__auto___29240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_28762){
var state_val_28763 = (state_28762[(1)]);
if((state_val_28763 === (7))){
var inst_28758 = (state_28762[(2)]);
var state_28762__$1 = state_28762;
var statearr_28764_29241 = state_28762__$1;
(statearr_28764_29241[(2)] = inst_28758);

(statearr_28764_29241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (1))){
var state_28762__$1 = state_28762;
var statearr_28765_29242 = state_28762__$1;
(statearr_28765_29242[(2)] = null);

(statearr_28765_29242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (4))){
var inst_28739 = (state_28762[(2)]);
var inst_28740 = have_handle_QMARK_();
var state_28762__$1 = (function (){var statearr_28766 = state_28762;
(statearr_28766[(7)] = inst_28739);

return statearr_28766;
})();
if(inst_28740){
var statearr_28767_29243 = state_28762__$1;
(statearr_28767_29243[(1)] = (5));

} else {
var statearr_28768_29244 = state_28762__$1;
(statearr_28768_29244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (6))){
var state_28762__$1 = state_28762;
var statearr_28769_29245 = state_28762__$1;
(statearr_28769_29245[(2)] = null);

(statearr_28769_29245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (3))){
var inst_28760 = (state_28762[(2)]);
var state_28762__$1 = state_28762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28762__$1,inst_28760);
} else {
if((state_val_28763 === (2))){
var inst_28736 = cljs.core.deref(self__.udt_last_comms_);
var inst_28737 = cljs.core.async.timeout(ms_29239);
var state_28762__$1 = (function (){var statearr_28770 = state_28762;
(statearr_28770[(8)] = inst_28736);

return statearr_28770;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28762__$1,(4),inst_28737);
} else {
if((state_val_28763 === (9))){
var state_28762__$1 = state_28762;
var statearr_28771_29246 = state_28762__$1;
(statearr_28771_29246[(2)] = null);

(statearr_28771_29246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (5))){
var inst_28736 = (state_28762[(8)]);
var inst_28742 = cljs.core.deref(self__.udt_last_comms_);
var inst_28743 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28736,inst_28742);
var state_28762__$1 = state_28762;
if(inst_28743){
var statearr_28772_29247 = state_28762__$1;
(statearr_28772_29247[(1)] = (8));

} else {
var statearr_28773_29248 = state_28762__$1;
(statearr_28773_29248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (10))){
var inst_28754 = (state_28762[(2)]);
var state_28762__$1 = (function (){var statearr_28774 = state_28762;
(statearr_28774[(9)] = inst_28754);

return statearr_28774;
})();
var statearr_28775_29249 = state_28762__$1;
(statearr_28775_29249[(2)] = null);

(statearr_28775_29249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (8))){
var inst_28745 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28746 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_28747 = (new cljs.core.PersistentVector(null,1,(5),inst_28745,inst_28746,null));
var inst_28748 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_28749 = [true];
var inst_28750 = cljs.core.PersistentHashMap.fromArrays(inst_28748,inst_28749);
var inst_28751 = chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null, inst_28747,inst_28750);
var state_28762__$1 = state_28762;
var statearr_28776_29250 = state_28762__$1;
(statearr_28776_29250[(2)] = inst_28751);

(statearr_28776_29250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__16914__auto__ = null;
var taoensso$sente$state_machine__16914__auto____0 = (function (){
var statearr_28777 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28777[(0)] = taoensso$sente$state_machine__16914__auto__);

(statearr_28777[(1)] = (1));

return statearr_28777;
});
var taoensso$sente$state_machine__16914__auto____1 = (function (state_28762){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_28762);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e28778){var ex__16917__auto__ = e28778;
var statearr_28779_29251 = state_28762;
(statearr_28779_29251[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_28762[(4)]))){
var statearr_28780_29252 = state_28762;
(statearr_28780_29252[(1)] = cljs.core.first((state_28762[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29253 = state_28762;
state_28762 = G__29253;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
taoensso$sente$state_machine__16914__auto__ = function(state_28762){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__16914__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__16914__auto____1.call(this,state_28762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__16914__auto____0;
taoensso$sente$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__16914__auto____1;
return taoensso$sente$state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_28781 = f__17029__auto__();
(statearr_28781[(6)] = c__17028__auto___29240);

return statearr_28781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
}));

} else {
}

cljs.core.reset_BANG_(self__.retry_count_,(0));

connect_fn();

return chsk__$1;
} else {
return null;
}
}));

(taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"ws-kalive-ms","ws-kalive-ms",-1212255801,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"udt-last-comms_","udt-last-comms_",1494731888,null)], null);
}));

(taoensso.sente.ChWebSocket.cljs$lang$type = true);

(taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChWebSocket",null,(1),null));
}));

(taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"taoensso.sente/ChWebSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChWebSocket.
 */
taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChWebSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__28693){
var extmap__5342__auto__ = (function (){var G__28782 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28693,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], 0));
if(cljs.core.record_QMARK_(G__28693)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28782);
} else {
return G__28782;
}
})();
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__28693),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__28693),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__28693),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__28693),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__28693),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__28693),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__28693),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__28693),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__28693),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__28693),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__28693),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__28693),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__28693),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__28693),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChWebSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(60)], 0));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k28790,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__28794 = k28790;
var G__28794__$1 = (((G__28794 instanceof cljs.core.Keyword))?G__28794.fqn:null);
switch (G__28794__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28790,else__5303__auto__);

}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__28795){
var vec__28796 = p__28795;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28796,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28796,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28789){
var self__ = this;
var G__28789__$1 = this;
return (new cljs.core.RecordIter((0),G__28789__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28791,other28792){
var self__ = this;
var this28791__$1 = this;
return (((!((other28792 == null)))) && ((((this28791__$1.constructor === other28792.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28791__$1.client_id,other28792.client_id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28791__$1.chs,other28792.chs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28791__$1.params,other28792.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28791__$1.packer,other28792.packer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28791__$1.url,other28792.url)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28791__$1.state_,other28792.state_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28791__$1.instance_handle_,other28792.instance_handle_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28791__$1.ever_opened_QMARK__,other28792.ever_opened_QMARK__)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28791__$1.backoff_ms_fn,other28792.backoff_ms_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28791__$1.ajax_opts,other28792.ajax_opts)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28791__$1.curr_xhr_,other28792.curr_xhr_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28791__$1.__extmap,other28792.__extmap)))))))))))))))))))))))))));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k28790){
var self__ = this;
var this__5307__auto____$1 = this;
var G__28799 = k28790;
var G__28799__$1 = (((G__28799 instanceof cljs.core.Keyword))?G__28799.fqn:null);
switch (G__28799__$1) {
case "client-id":
case "chs":
case "params":
case "packer":
case "url":
case "state_":
case "instance-handle_":
case "ever-opened?_":
case "backoff-ms-fn":
case "ajax-opts":
case "curr-xhr_":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28790);

}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__28789){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__28800 = cljs.core.keyword_identical_QMARK_;
var expr__28801 = k__5309__auto__;
if(cljs.core.truth_((pred__28800.cljs$core$IFn$_invoke$arity$2 ? pred__28800.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__28801) : pred__28800.call(null, new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__28801)))){
return (new taoensso.sente.ChAjaxSocket(G__28789,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28800.cljs$core$IFn$_invoke$arity$2 ? pred__28800.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chs","chs",376886120),expr__28801) : pred__28800.call(null, new cljs.core.Keyword(null,"chs","chs",376886120),expr__28801)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__28789,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28800.cljs$core$IFn$_invoke$arity$2 ? pred__28800.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__28801) : pred__28800.call(null, new cljs.core.Keyword(null,"params","params",710516235),expr__28801)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__28789,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28800.cljs$core$IFn$_invoke$arity$2 ? pred__28800.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"packer","packer",66077544),expr__28801) : pred__28800.call(null, new cljs.core.Keyword(null,"packer","packer",66077544),expr__28801)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__28789,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28800.cljs$core$IFn$_invoke$arity$2 ? pred__28800.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__28801) : pred__28800.call(null, new cljs.core.Keyword(null,"url","url",276297046),expr__28801)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__28789,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28800.cljs$core$IFn$_invoke$arity$2 ? pred__28800.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__28801) : pred__28800.call(null, new cljs.core.Keyword(null,"state_","state_",957667102),expr__28801)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__28789,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28800.cljs$core$IFn$_invoke$arity$2 ? pred__28800.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__28801) : pred__28800.call(null, new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__28801)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__28789,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28800.cljs$core$IFn$_invoke$arity$2 ? pred__28800.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__28801) : pred__28800.call(null, new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__28801)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__28789,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28800.cljs$core$IFn$_invoke$arity$2 ? pred__28800.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__28801) : pred__28800.call(null, new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__28801)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__28789,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28800.cljs$core$IFn$_invoke$arity$2 ? pred__28800.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__28801) : pred__28800.call(null, new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__28801)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__28789,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28800.cljs$core$IFn$_invoke$arity$2 ? pred__28800.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__28801) : pred__28800.call(null, new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__28801)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__28789,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__28789),null));
}
}
}
}
}
}
}
}
}
}
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__28789){
var self__ = this;
var this__5299__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__28789,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__28783_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__28783_SHARP_,reason);
}));

var temp__5804__auto__ = cljs.core.deref(self__.curr_xhr_);
if(cljs.core.truth_(temp__5804__auto__)){
var x = temp__5804__auto__;
return x.abort();
} else {
return null;
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null, new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null, );
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__28803 = opts;
var map__28803__$1 = cljs.core.__destructure_map(map__28803);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28803__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28803__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28803__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_));
var G__28804_29256 = self__.url;
var G__28805_29257 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__5002__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)], 0)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null)], 0));
})()], null)], 0));
var G__28806_29258 = (function taoensso$sente$ajax_cb(p__28807){
var map__28808 = p__28807;
var map__28808__$1 = cljs.core.__destructure_map(map__28808);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28808__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28808__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)) : _QMARK_cb_fn.call(null, new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__28784_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__28784_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","error","chsk/error",-984175439)) : _QMARK_cb_fn.call(null, new cljs.core.Keyword("chsk","error","chsk/error",-984175439)));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__28809 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28809,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28809,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null, resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1273,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
}),null)),null,1443224985);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__28785_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28785_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));
}
});
(taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__28804_29256,G__28805_29257,G__28806_29258) : taoensso.sente.ajax_lite.call(null, G__28804_29256,G__28805_29257,G__28806_29258));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_(self__.instance_handle_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var have_handle_QMARK_ = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.instance_handle_),instance_handle);
});
var poll_fn = (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,1283,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
}),null)),null,-1935216871);

if(have_handle_QMARK_()){
var retry_fn = (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null, retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1291,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
}),null)),null,1133936260);

goog.global.setTimeout((function (){
return taoensso$sente$poll_fn(retry_count_STAR_);
}),backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__28786_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28786_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
} else {
return null;
}
});
return cljs.core.reset_BANG_(self__.curr_xhr_,(function (){var G__28812 = self__.url;
var G__28813 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null))], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))], null)], 0))], null)], 0));
var G__28814 = (function taoensso$sente$poll_fn_$_ajax_cb(p__28815){
var map__28816 = p__28815;
var map__28816__$1 = cljs.core.__destructure_map(map__28816);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28816__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28816__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__28787_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__28787_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__28817 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28817,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(handshake_QMARK_){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__28788_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28788_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));

taoensso$sente$poll_fn((0));

if(handshake_QMARK_){
return null;
} else {
var or__5002__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref(taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_(self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__28812,G__28813,G__28814) : taoensso.sente.ajax_lite.call(null, G__28812,G__28813,G__28814));
})());
} else {
return null;
}
});
poll_fn((0));

return chsk__$1;
}));

(taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
}));

(taoensso.sente.ChAjaxSocket.cljs$lang$type = true);

(taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAjaxSocket",null,(1),null));
}));

(taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"taoensso.sente/ChAjaxSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChAjaxSocket.
 */
taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAjaxSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__28793){
var extmap__5342__auto__ = (function (){var G__28820 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28793,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], 0));
if(cljs.core.record_QMARK_(G__28793)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28820);
} else {
return G__28820;
}
})();
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__28793),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__28793),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__28793),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__28793),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__28793),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__28793),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__28793),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__28793),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__28793),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__28793),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__28793),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAjaxSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k28822,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__28826 = k28822;
var G__28826__$1 = (((G__28826 instanceof cljs.core.Keyword))?G__28826.fqn:null);
switch (G__28826__$1) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28822,else__5303__auto__);

}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__28827){
var vec__28828 = p__28827;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28828,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28828,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28821){
var self__ = this;
var G__28821__$1 = this;
return (new cljs.core.RecordIter((0),G__28821__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28823,other28824){
var self__ = this;
var this28823__$1 = this;
return (((!((other28824 == null)))) && ((((this28823__$1.constructor === other28824.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28823__$1.ws_chsk_opts,other28824.ws_chsk_opts)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28823__$1.ajax_chsk_opts,other28824.ajax_chsk_opts)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28823__$1.state_,other28824.state_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28823__$1.impl_,other28824.impl_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28823__$1.__extmap,other28824.__extmap)))))))))))));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k28822){
var self__ = this;
var this__5307__auto____$1 = this;
var G__28831 = k28822;
var G__28831__$1 = (((G__28831 instanceof cljs.core.Keyword))?G__28831.fqn:null);
switch (G__28831__$1) {
case "ws-chsk-opts":
case "ajax-chsk-opts":
case "state_":
case "impl_":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28822);

}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__28821){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__28832 = cljs.core.keyword_identical_QMARK_;
var expr__28833 = k__5309__auto__;
if(cljs.core.truth_((pred__28832.cljs$core$IFn$_invoke$arity$2 ? pred__28832.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__28833) : pred__28832.call(null, new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__28833)))){
return (new taoensso.sente.ChAutoSocket(G__28821,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28832.cljs$core$IFn$_invoke$arity$2 ? pred__28832.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__28833) : pred__28832.call(null, new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__28833)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__28821,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28832.cljs$core$IFn$_invoke$arity$2 ? pred__28832.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__28833) : pred__28832.call(null, new cljs.core.Keyword(null,"state_","state_",957667102),expr__28833)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__28821,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28832.cljs$core$IFn$_invoke$arity$2 ? pred__28832.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__28833) : pred__28832.call(null, new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__28833)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__28821,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__28821),null));
}
}
}
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__28821){
var self__ = this;
var this__5299__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__28821,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__5804__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5804__auto__)){
var impl = temp__5804__auto__;
return taoensso.sente._chsk_disconnect_BANG_(impl,reason);
} else {
return null;
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5804__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5804__auto__)){
var impl = temp__5804__auto__;
taoensso.sente._chsk_disconnect_BANG_(impl,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null, );
} else {
return null;
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__5802__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5802__auto__)){
var impl = temp__5802__auto__;
return taoensso.sente._chsk_send_BANG_(impl,ev,opts);
} else {
var map__28835 = opts;
var map__28835__$1 = cljs.core.__destructure_map(map__28835);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28835__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_conn_BANG_ = (function (){
cljs.core.remove_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))).taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null, );
});
var ws_conn_BANG_ = (function (){
var downgraded_QMARK___29261 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.add_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),(function (_,___$1,old_state,new_state){
var temp__5804__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5804__auto__)){
var impl = temp__5804__auto__;
var temp__5804__auto____$1 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ever_opened_QMARK__ = temp__5804__auto____$1;
if(cljs.core.truth_(cljs.core.deref(ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502).cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.compare_and_set_BANG_(downgraded_QMARK___29261,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1424,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
}),null)),null,-1552386987);

taoensso.sente._chsk_disconnect_BANG_(impl,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720));

return cljs.core.reset_BANG_(self__.impl_,ajax_conn_BANG_());
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
}));

return taoensso.sente.new_ChWebSocket(ws_chsk_opts__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))).taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null, );
});
cljs.core.reset_BANG_(self__.impl_,(function (){var or__5002__auto__ = ws_conn_BANG_();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ajax_conn_BANG_();
}
})());

return chsk__$1;
}));

(taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
}));

(taoensso.sente.ChAutoSocket.cljs$lang$type = true);

(taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAutoSocket",null,(1),null));
}));

(taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"taoensso.sente/ChAutoSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChAutoSocket.
 */
taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAutoSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__28825){
var extmap__5342__auto__ = (function (){var G__28836 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28825,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], 0));
if(cljs.core.record_QMARK_(G__28825)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28836);
} else {
return G__28836;
}
})();
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__28825),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__28825),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__28825),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__28825),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__28837 = protocol;
var G__28837__$1 = (((G__28837 instanceof cljs.core.Keyword))?G__28837.fqn:null);
switch (G__28837__$1) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__28839 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__28839) : taoensso.truss.impl.set_STAR_.call(null, G__28839));
})(),x);
})(protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28838){if((e28838 instanceof Error)){
var e = e28838;
return e;
} else {
throw e28838;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1444,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__28840 = type;
var G__28840__$1 = (((G__28840 instanceof cljs.core.Keyword))?G__28840.fqn:null);
switch (G__28840__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__28841 = protocol__$2;
switch (G__28841) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28841)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28840__$1)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$3),"//",taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([host,path], 0))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :port           ; Server port (defaults to current page's port).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *     :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29265 = arguments.length;
var i__5727__auto___29266 = (0);
while(true){
if((i__5727__auto___29266 < len__5726__auto___29265)){
args__5732__auto__.push((arguments[i__5727__auto___29266]));

var G__29267 = (i__5727__auto___29266 + (1));
i__5727__auto___29266 = G__29267;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,_QMARK_csrf_token,p__28845){
var vec__28846 = p__28845;
var map__28849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28846,(0),null);
var map__28849__$1 = cljs.core.__destructure_map(map__28849);
var opts = map__28849__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28849__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28849__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28849__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28849__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28849__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28849__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28849__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28849__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28849__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28849__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28849__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28849__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28846,(1),null);
var e_29268 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__28851 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__28851) : taoensso.truss.impl.set_STAR_.call(null, G__28851));
})(),x);
})(type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28850){if((e28850 instanceof Error)){
var e_29268 = e28850;
return e_29268;
} else {
throw e28850;

}
}})();
if((e_29268 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1487,"([:in #{:ws :ajax :auto}] type)",type,e_29268,null);
}

var e_29269 = (function (){try{if(taoensso.encore.nblank_str_QMARK_(client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28852){if((e28852 instanceof Error)){
var e_29269 = e28852;
return e_29269;
} else {
throw e28852;

}
}})();
if((e_29269 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1488,"(enc/nblank-str? client-id)",client_id,e_29269,null);
}

if((!((_deprecated_more_opts == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1490,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
}),null)),null,1987897272);
} else {
}

if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1491,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
}),null)),null,620029424);
} else {
}

if((((!(typeof _QMARK_csrf_token === 'string'))) || (clojure.string.blank_QMARK_(_QMARK_csrf_token)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1494,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WARNING: no CSRF token provided. Connections will FAIL if server-side CSRF check is enabled (as it is by default)."], null);
}),null)),null,-1584862939);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__28853 = (function (){var win_loc = taoensso.encore.get_win_loc();
var path__$1 = (function (){var or__5002__auto__ = path;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__5802__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)) : f.call(null, path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443))),(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549)) : f.call(null, path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549)))], null);
} else {
var protocol__$1 = (function (){var or__5002__auto__ = protocol;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (function (){var G__28856 = (function (){var or__5002__auto__ = host;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
if(cljs.core.truth_(port)){
return clojure.string.replace_first(G__28856,/(:\d+)?$/,[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join(''));
} else {
return G__28856;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28853,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28853,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer((512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
})));
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null)], 0));
var ajax_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null)], 0));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__28857 = type;
var G__28857__$1 = (((G__28857 instanceof cljs.core.Keyword))?G__28857.fqn:null);
switch (G__28857__$1) {
case "ws":
return taoensso.sente.new_ChWebSocket(ws_chsk_opts,_QMARK_csrf_token);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts,_QMARK_csrf_token);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket(auto_chsk_opts,_QMARK_csrf_token);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28857__$1)].join('')));

}
})());
var temp__5802__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__5802__auto__)){
var chsk = temp__5802__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ev){
var vec__28858 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28858,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28858,(1),null);
var ev__$1 = vec__28858;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
})));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1583,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
}),null)),null,613163556);
}
}));

(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq28842){
var G__28843 = cljs.core.first(seq28842);
var seq28842__$1 = cljs.core.next(seq28842);
var G__28844 = cljs.core.first(seq28842__$1);
var seq28842__$2 = cljs.core.next(seq28842__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28843,G__28844,seq28842__$2);
}));

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__28861 = opts;
var map__28861__$1 = cljs.core.__destructure_map(map__28861);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28861__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28861__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28861__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
});
var c__17028__auto___29271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_28892){
var state_val_28893 = (state_28892[(1)]);
if((state_val_28893 === (7))){
var inst_28878 = (state_28892[(7)]);
var inst_28878__$1 = (state_28892[(2)]);
var state_28892__$1 = (function (){var statearr_28894 = state_28892;
(statearr_28894[(7)] = inst_28878__$1);

return statearr_28894;
})();
if(cljs.core.truth_(inst_28878__$1)){
var statearr_28895_29272 = state_28892__$1;
(statearr_28895_29272[(1)] = (8));

} else {
var statearr_28896_29273 = state_28892__$1;
(statearr_28896_29273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28893 === (1))){
var state_28892__$1 = state_28892;
var statearr_28897_29274 = state_28892__$1;
(statearr_28897_29274[(2)] = null);

(statearr_28897_29274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28893 === (4))){
var inst_28872 = (state_28892[(8)]);
var inst_28870 = (state_28892[(9)]);
var inst_28873 = (state_28892[(10)]);
var inst_28870__$1 = (state_28892[(2)]);
var inst_28871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28870__$1,(0),null);
var inst_28872__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28870__$1,(1),null);
var inst_28873__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28872__$1,ch_ctrl);
var state_28892__$1 = (function (){var statearr_28898 = state_28892;
(statearr_28898[(8)] = inst_28872__$1);

(statearr_28898[(9)] = inst_28870__$1);

(statearr_28898[(11)] = inst_28871);

(statearr_28898[(10)] = inst_28873__$1);

return statearr_28898;
})();
if(inst_28873__$1){
var statearr_28899_29275 = state_28892__$1;
(statearr_28899_29275[(1)] = (5));

} else {
var statearr_28900_29276 = state_28892__$1;
(statearr_28900_29276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28893 === (6))){
var inst_28871 = (state_28892[(11)]);
var inst_28876 = (inst_28871 == null);
var state_28892__$1 = state_28892;
var statearr_28901_29277 = state_28892__$1;
(statearr_28901_29277[(2)] = inst_28876);

(statearr_28901_29277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28893 === (3))){
var inst_28890 = (state_28892[(2)]);
var state_28892__$1 = state_28892;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28892__$1,inst_28890);
} else {
if((state_val_28893 === (2))){
var inst_28866 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28867 = [ch_recv,ch_ctrl];
var inst_28868 = (new cljs.core.PersistentVector(null,2,(5),inst_28866,inst_28867,null));
var state_28892__$1 = state_28892;
return cljs.core.async.ioc_alts_BANG_(state_28892__$1,(4),inst_28868);
} else {
if((state_val_28893 === (9))){
var inst_28872 = (state_28892[(8)]);
var inst_28870 = (state_28892[(9)]);
var inst_28871 = (state_28892[(11)]);
var inst_28878 = (state_28892[(7)]);
var inst_28882 = cljs.core.__destructure_map(inst_28871);
var inst_28883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28882,new cljs.core.Keyword(null,"event","event",301435442));
var inst_28884 = (function (){var vec__28863 = inst_28870;
var v = inst_28871;
var p = inst_28872;
var stop_QMARK_ = inst_28878;
var map__28881 = inst_28882;
var event_msg = inst_28882;
var event = inst_28883;
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,1610,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
}),null)),null,1595053551);
} else {
}

var G__28904 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(taoensso.sente.server_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28905){if((e28905 instanceof Error)){
var e = e28905;
return e;
} else {
throw e28905;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1613,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(taoensso.sente.client_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28906){if((e28906 instanceof Error)){
var e = e28906;
return e;
} else {
throw e28906;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1614,"(client-event-msg? event-msg)",event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__28904) : event_msg_handler.call(null, G__28904));
}catch (e28902){if((e28902 instanceof Error)){
var e1 = e28902;
try{var temp__5802__auto__ = error_handler;
if(cljs.core.truth_(temp__5802__auto__)){
var eh = temp__5802__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(e1,event_msg) : error_handler.call(null, e1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1619,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
}),null)),null,-123400746);
}
}catch (e28903){if((e28903 instanceof Error)){
var e2 = e28903;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1620,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
}),null)),null,-898520787);
} else {
throw e28903;

}
}} else {
throw e28902;

}
}});
})();
var inst_28885 = execute1(inst_28884);
var state_28892__$1 = (function (){var statearr_28907 = state_28892;
(statearr_28907[(12)] = inst_28885);

return statearr_28907;
})();
var statearr_28908_29278 = state_28892__$1;
(statearr_28908_29278[(2)] = null);

(statearr_28908_29278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28893 === (5))){
var inst_28873 = (state_28892[(10)]);
var state_28892__$1 = state_28892;
var statearr_28909_29279 = state_28892__$1;
(statearr_28909_29279[(2)] = inst_28873);

(statearr_28909_29279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28893 === (10))){
var inst_28888 = (state_28892[(2)]);
var state_28892__$1 = state_28892;
var statearr_28910_29280 = state_28892__$1;
(statearr_28910_29280[(2)] = inst_28888);

(statearr_28910_29280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28893 === (8))){
var state_28892__$1 = state_28892;
var statearr_28911_29281 = state_28892__$1;
(statearr_28911_29281[(2)] = null);

(statearr_28911_29281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__16914__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__16914__auto____0 = (function (){
var statearr_28912 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28912[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__16914__auto__);

(statearr_28912[(1)] = (1));

return statearr_28912;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__16914__auto____1 = (function (state_28892){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_28892);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e28913){var ex__16917__auto__ = e28913;
var statearr_28914_29282 = state_28892;
(statearr_28914_29282[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_28892[(4)]))){
var statearr_28915_29283 = state_28892;
(statearr_28915_29283[(1)] = cljs.core.first((state_28892[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29284 = state_28892;
state_28892 = G__29284;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__16914__auto__ = function(state_28892){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__16914__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__16914__auto____1.call(this,state_28892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__16914__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__16914__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_28916 = f__17029__auto__();
(statearr_28916[(6)] = c__17028__auto___29271);

return statearr_28916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
}));


return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29285 = arguments.length;
var i__5727__auto___29286 = (0);
while(true){
if((i__5727__auto___29286 < len__5726__auto___29285)){
args__5732__auto__.push((arguments[i__5727__auto___29286]));

var G__29287 = (i__5727__auto___29286 + (1));
i__5727__auto___29286 = G__29287;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__28920){
var vec__28921 = p__28920;
var map__28924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28921,(0),null);
var map__28924__$1 = cljs.core.__destructure_map(map__28924);
var opts = map__28924__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28924__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28924__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28924__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_(new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq28917){
var G__28918 = cljs.core.first(seq28917);
var seq28917__$1 = cljs.core.next(seq28917);
var G__28919 = cljs.core.first(seq28917__$1);
var seq28917__$2 = cljs.core.next(seq28917__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28918,G__28919,seq28917__$2);
}));

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29288 = arguments.length;
var i__5727__auto___29289 = (0);
while(true){
if((i__5727__auto___29289 < len__5726__auto___29288)){
args__5732__auto__.push((arguments[i__5727__auto___29289]));

var G__29290 = (i__5727__auto___29289 + (1));
i__5727__auto___29289 = G__29290;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__28928){
var vec__28929 = p__28928;
var map__28932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28929,(0),null);
var map__28932__$1 = cljs.core.__destructure_map(map__28932);
var opts = map__28932__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28932__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28932__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq28925){
var G__28926 = cljs.core.first(seq28925);
var seq28925__$1 = cljs.core.next(seq28925);
var G__28927 = cljs.core.first(seq28925__$1);
var seq28925__$2 = cljs.core.next(seq28925__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28926,G__28927,seq28925__$2);
}));

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_(ch_recv,(function (ev_msg){
var G__28933 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__28934 = new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__28933,G__28934) : event_handler.call(null, G__28933,G__28934));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__28935,websocket_QMARK_){
var map__28936 = p__28935;
var map__28936__$1 = cljs.core.__destructure_map(map__28936);
var location__$1 = map__28936__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28936__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28936__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28936__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = path;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=taoensso.sente.js.map
