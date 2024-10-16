goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13029 = (function (f,blockable,meta13030){
this.f = f;
this.blockable = blockable;
this.meta13030 = meta13030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13031,meta13030__$1){
var self__ = this;
var _13031__$1 = this;
return (new cljs.core.async.t_cljs$core$async13029(self__.f,self__.blockable,meta13030__$1));
}));

(cljs.core.async.t_cljs$core$async13029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13031){
var self__ = this;
var _13031__$1 = this;
return self__.meta13030;
}));

(cljs.core.async.t_cljs$core$async13029.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13029.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13029.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13029.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13030","meta13030",639445082,null)], null);
}));

(cljs.core.async.t_cljs$core$async13029.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13029");

(cljs.core.async.t_cljs$core$async13029.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async13029");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13029.
 */
cljs.core.async.__GT_t_cljs$core$async13029 = (function cljs$core$async$__GT_t_cljs$core$async13029(f,blockable,meta13030){
return (new cljs.core.async.t_cljs$core$async13029(f,blockable,meta13030));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13024 = arguments.length;
switch (G__13024) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async13029(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13064 = arguments.length;
switch (G__13064) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13077 = arguments.length;
switch (G__13077) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13088 = arguments.length;
switch (G__13088) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15760 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15760) : fn1.call(null, val_15760));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15760) : fn1.call(null, val_15760));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13098 = arguments.length;
switch (G__13098) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___15768 = n;
var x_15769 = (0);
while(true){
if((x_15769 < n__5593__auto___15768)){
(a[x_15769] = x_15769);

var G__15770 = (x_15769 + (1));
x_15769 = G__15770;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13122 = (function (flag,meta13123){
this.flag = flag;
this.meta13123 = meta13123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13124,meta13123__$1){
var self__ = this;
var _13124__$1 = this;
return (new cljs.core.async.t_cljs$core$async13122(self__.flag,meta13123__$1));
}));

(cljs.core.async.t_cljs$core$async13122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13124){
var self__ = this;
var _13124__$1 = this;
return self__.meta13123;
}));

(cljs.core.async.t_cljs$core$async13122.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13122.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13122.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13122.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13123","meta13123",836908564,null)], null);
}));

(cljs.core.async.t_cljs$core$async13122.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13122");

(cljs.core.async.t_cljs$core$async13122.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async13122");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13122.
 */
cljs.core.async.__GT_t_cljs$core$async13122 = (function cljs$core$async$__GT_t_cljs$core$async13122(flag,meta13123){
return (new cljs.core.async.t_cljs$core$async13122(flag,meta13123));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async13122(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13139 = (function (flag,cb,meta13140){
this.flag = flag;
this.cb = cb;
this.meta13140 = meta13140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13141,meta13140__$1){
var self__ = this;
var _13141__$1 = this;
return (new cljs.core.async.t_cljs$core$async13139(self__.flag,self__.cb,meta13140__$1));
}));

(cljs.core.async.t_cljs$core$async13139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13141){
var self__ = this;
var _13141__$1 = this;
return self__.meta13140;
}));

(cljs.core.async.t_cljs$core$async13139.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13139.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13139.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13139.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13140","meta13140",630785295,null)], null);
}));

(cljs.core.async.t_cljs$core$async13139.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13139");

(cljs.core.async.t_cljs$core$async13139.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async13139");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13139.
 */
cljs.core.async.__GT_t_cljs$core$async13139 = (function cljs$core$async$__GT_t_cljs$core$async13139(flag,cb,meta13140){
return (new cljs.core.async.t_cljs$core$async13139(flag,cb,meta13140));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async13139(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13161_SHARP_){
var G__13171 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13161_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13171) : fret.call(null, G__13171));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13162_SHARP_){
var G__13172 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13162_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13172) : fret.call(null, G__13172));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15783 = (i + (1));
i = G__15783;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15784 = arguments.length;
var i__5727__auto___15788 = (0);
while(true){
if((i__5727__auto___15788 < len__5726__auto___15784)){
args__5732__auto__.push((arguments[i__5727__auto___15788]));

var G__15789 = (i__5727__auto___15788 + (1));
i__5727__auto___15788 = G__15789;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13180){
var map__13181 = p__13180;
var map__13181__$1 = cljs.core.__destructure_map(map__13181);
var opts = map__13181__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13176){
var G__13177 = cljs.core.first(seq13176);
var seq13176__$1 = cljs.core.next(seq13176);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13177,seq13176__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13190 = arguments.length;
switch (G__13190) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12937__auto___15794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12938__auto__ = (function (){var switch__12838__auto__ = (function (state_13238){
var state_val_13239 = (state_13238[(1)]);
if((state_val_13239 === (7))){
var inst_13233 = (state_13238[(2)]);
var state_13238__$1 = state_13238;
var statearr_13246_15797 = state_13238__$1;
(statearr_13246_15797[(2)] = inst_13233);

(statearr_13246_15797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (1))){
var state_13238__$1 = state_13238;
var statearr_13247_15798 = state_13238__$1;
(statearr_13247_15798[(2)] = null);

(statearr_13247_15798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (4))){
var inst_13216 = (state_13238[(7)]);
var inst_13216__$1 = (state_13238[(2)]);
var inst_13217 = (inst_13216__$1 == null);
var state_13238__$1 = (function (){var statearr_13260 = state_13238;
(statearr_13260[(7)] = inst_13216__$1);

return statearr_13260;
})();
if(cljs.core.truth_(inst_13217)){
var statearr_13265_15800 = state_13238__$1;
(statearr_13265_15800[(1)] = (5));

} else {
var statearr_13272_15801 = state_13238__$1;
(statearr_13272_15801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (13))){
var state_13238__$1 = state_13238;
var statearr_13299_15804 = state_13238__$1;
(statearr_13299_15804[(2)] = null);

(statearr_13299_15804[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (6))){
var inst_13216 = (state_13238[(7)]);
var state_13238__$1 = state_13238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13238__$1,(11),to,inst_13216);
} else {
if((state_val_13239 === (3))){
var inst_13236 = (state_13238[(2)]);
var state_13238__$1 = state_13238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13238__$1,inst_13236);
} else {
if((state_val_13239 === (12))){
var state_13238__$1 = state_13238;
var statearr_13310_15805 = state_13238__$1;
(statearr_13310_15805[(2)] = null);

(statearr_13310_15805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (2))){
var state_13238__$1 = state_13238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13238__$1,(4),from);
} else {
if((state_val_13239 === (11))){
var inst_13226 = (state_13238[(2)]);
var state_13238__$1 = state_13238;
if(cljs.core.truth_(inst_13226)){
var statearr_13316_15808 = state_13238__$1;
(statearr_13316_15808[(1)] = (12));

} else {
var statearr_13317_15809 = state_13238__$1;
(statearr_13317_15809[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (9))){
var state_13238__$1 = state_13238;
var statearr_13321_15811 = state_13238__$1;
(statearr_13321_15811[(2)] = null);

(statearr_13321_15811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (5))){
var state_13238__$1 = state_13238;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13325_15812 = state_13238__$1;
(statearr_13325_15812[(1)] = (8));

} else {
var statearr_13327_15813 = state_13238__$1;
(statearr_13327_15813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (14))){
var inst_13231 = (state_13238[(2)]);
var state_13238__$1 = state_13238;
var statearr_13328_15814 = state_13238__$1;
(statearr_13328_15814[(2)] = inst_13231);

(statearr_13328_15814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (10))){
var inst_13223 = (state_13238[(2)]);
var state_13238__$1 = state_13238;
var statearr_13329_15816 = state_13238__$1;
(statearr_13329_15816[(2)] = inst_13223);

(statearr_13329_15816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (8))){
var inst_13220 = cljs.core.async.close_BANG_(to);
var state_13238__$1 = state_13238;
var statearr_13339_15819 = state_13238__$1;
(statearr_13339_15819[(2)] = inst_13220);

(statearr_13339_15819[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__12839__auto__ = null;
var cljs$core$async$state_machine__12839__auto____0 = (function (){
var statearr_13341 = [null,null,null,null,null,null,null,null];
(statearr_13341[(0)] = cljs$core$async$state_machine__12839__auto__);

(statearr_13341[(1)] = (1));

return statearr_13341;
});
var cljs$core$async$state_machine__12839__auto____1 = (function (state_13238){
while(true){
var ret_value__12840__auto__ = (function (){try{while(true){
var result__12841__auto__ = switch__12838__auto__(state_13238);
if(cljs.core.keyword_identical_QMARK_(result__12841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12841__auto__;
}
break;
}
}catch (e13342){var ex__12842__auto__ = e13342;
var statearr_13343_15822 = state_13238;
(statearr_13343_15822[(2)] = ex__12842__auto__);


if(cljs.core.seq((state_13238[(4)]))){
var statearr_13345_15824 = state_13238;
(statearr_13345_15824[(1)] = cljs.core.first((state_13238[(4)])));

} else {
throw ex__12842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15825 = state_13238;
state_13238 = G__15825;
continue;
} else {
return ret_value__12840__auto__;
}
break;
}
});
cljs$core$async$state_machine__12839__auto__ = function(state_13238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12839__auto____1.call(this,state_13238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12839__auto____0;
cljs$core$async$state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12839__auto____1;
return cljs$core$async$state_machine__12839__auto__;
})()
})();
var state__12939__auto__ = (function (){var statearr_13346 = f__12938__auto__();
(statearr_13346[(6)] = c__12937__auto___15794);

return statearr_13346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12939__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__13357){
var vec__13358 = p__13357;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13358,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13358,(1),null);
var job = vec__13358;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12937__auto___15829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12938__auto__ = (function (){var switch__12838__auto__ = (function (state_13368){
var state_val_13369 = (state_13368[(1)]);
if((state_val_13369 === (1))){
var state_13368__$1 = state_13368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13368__$1,(2),res,v);
} else {
if((state_val_13369 === (2))){
var inst_13365 = (state_13368[(2)]);
var inst_13366 = cljs.core.async.close_BANG_(res);
var state_13368__$1 = (function (){var statearr_13370 = state_13368;
(statearr_13370[(7)] = inst_13365);

return statearr_13370;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13368__$1,inst_13366);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____0 = (function (){
var statearr_13372 = [null,null,null,null,null,null,null,null];
(statearr_13372[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__);

(statearr_13372[(1)] = (1));

return statearr_13372;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____1 = (function (state_13368){
while(true){
var ret_value__12840__auto__ = (function (){try{while(true){
var result__12841__auto__ = switch__12838__auto__(state_13368);
if(cljs.core.keyword_identical_QMARK_(result__12841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12841__auto__;
}
break;
}
}catch (e13373){var ex__12842__auto__ = e13373;
var statearr_13374_15833 = state_13368;
(statearr_13374_15833[(2)] = ex__12842__auto__);


if(cljs.core.seq((state_13368[(4)]))){
var statearr_13379_15834 = state_13368;
(statearr_13379_15834[(1)] = cljs.core.first((state_13368[(4)])));

} else {
throw ex__12842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15835 = state_13368;
state_13368 = G__15835;
continue;
} else {
return ret_value__12840__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__ = function(state_13368){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____1.call(this,state_13368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__;
})()
})();
var state__12939__auto__ = (function (){var statearr_13392 = f__12938__auto__();
(statearr_13392[(6)] = c__12937__auto___15829);

return statearr_13392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12939__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__13406){
var vec__13410 = p__13406;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13410,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13410,(1),null);
var job = vec__13410;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___15837 = n;
var __15838 = (0);
while(true){
if((__15838 < n__5593__auto___15837)){
var G__13433_15840 = type;
var G__13433_15841__$1 = (((G__13433_15840 instanceof cljs.core.Keyword))?G__13433_15840.fqn:null);
switch (G__13433_15841__$1) {
case "compute":
var c__12937__auto___15844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15838,c__12937__auto___15844,G__13433_15840,G__13433_15841__$1,n__5593__auto___15837,jobs,results,process__$1,async){
return (function (){
var f__12938__auto__ = (function (){var switch__12838__auto__ = ((function (__15838,c__12937__auto___15844,G__13433_15840,G__13433_15841__$1,n__5593__auto___15837,jobs,results,process__$1,async){
return (function (state_13470){
var state_val_13471 = (state_13470[(1)]);
if((state_val_13471 === (1))){
var state_13470__$1 = state_13470;
var statearr_13484_15847 = state_13470__$1;
(statearr_13484_15847[(2)] = null);

(statearr_13484_15847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (2))){
var state_13470__$1 = state_13470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13470__$1,(4),jobs);
} else {
if((state_val_13471 === (3))){
var inst_13468 = (state_13470[(2)]);
var state_13470__$1 = state_13470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13470__$1,inst_13468);
} else {
if((state_val_13471 === (4))){
var inst_13460 = (state_13470[(2)]);
var inst_13461 = process__$1(inst_13460);
var state_13470__$1 = state_13470;
if(cljs.core.truth_(inst_13461)){
var statearr_13493_15849 = state_13470__$1;
(statearr_13493_15849[(1)] = (5));

} else {
var statearr_13498_15850 = state_13470__$1;
(statearr_13498_15850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (5))){
var state_13470__$1 = state_13470;
var statearr_13506_15853 = state_13470__$1;
(statearr_13506_15853[(2)] = null);

(statearr_13506_15853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (6))){
var state_13470__$1 = state_13470;
var statearr_13512_15854 = state_13470__$1;
(statearr_13512_15854[(2)] = null);

(statearr_13512_15854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (7))){
var inst_13466 = (state_13470[(2)]);
var state_13470__$1 = state_13470;
var statearr_13518_15857 = state_13470__$1;
(statearr_13518_15857[(2)] = inst_13466);

(statearr_13518_15857[(1)] = (3));


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
});})(__15838,c__12937__auto___15844,G__13433_15840,G__13433_15841__$1,n__5593__auto___15837,jobs,results,process__$1,async))
;
return ((function (__15838,switch__12838__auto__,c__12937__auto___15844,G__13433_15840,G__13433_15841__$1,n__5593__auto___15837,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____0 = (function (){
var statearr_13531 = [null,null,null,null,null,null,null];
(statearr_13531[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__);

(statearr_13531[(1)] = (1));

return statearr_13531;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____1 = (function (state_13470){
while(true){
var ret_value__12840__auto__ = (function (){try{while(true){
var result__12841__auto__ = switch__12838__auto__(state_13470);
if(cljs.core.keyword_identical_QMARK_(result__12841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12841__auto__;
}
break;
}
}catch (e13540){var ex__12842__auto__ = e13540;
var statearr_13546_15859 = state_13470;
(statearr_13546_15859[(2)] = ex__12842__auto__);


if(cljs.core.seq((state_13470[(4)]))){
var statearr_13547_15860 = state_13470;
(statearr_13547_15860[(1)] = cljs.core.first((state_13470[(4)])));

} else {
throw ex__12842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15861 = state_13470;
state_13470 = G__15861;
continue;
} else {
return ret_value__12840__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__ = function(state_13470){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____1.call(this,state_13470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__;
})()
;})(__15838,switch__12838__auto__,c__12937__auto___15844,G__13433_15840,G__13433_15841__$1,n__5593__auto___15837,jobs,results,process__$1,async))
})();
var state__12939__auto__ = (function (){var statearr_13555 = f__12938__auto__();
(statearr_13555[(6)] = c__12937__auto___15844);

return statearr_13555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12939__auto__);
});})(__15838,c__12937__auto___15844,G__13433_15840,G__13433_15841__$1,n__5593__auto___15837,jobs,results,process__$1,async))
);


break;
case "async":
var c__12937__auto___15863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15838,c__12937__auto___15863,G__13433_15840,G__13433_15841__$1,n__5593__auto___15837,jobs,results,process__$1,async){
return (function (){
var f__12938__auto__ = (function (){var switch__12838__auto__ = ((function (__15838,c__12937__auto___15863,G__13433_15840,G__13433_15841__$1,n__5593__auto___15837,jobs,results,process__$1,async){
return (function (state_13577){
var state_val_13578 = (state_13577[(1)]);
if((state_val_13578 === (1))){
var state_13577__$1 = state_13577;
var statearr_13587_15864 = state_13577__$1;
(statearr_13587_15864[(2)] = null);

(statearr_13587_15864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13578 === (2))){
var state_13577__$1 = state_13577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13577__$1,(4),jobs);
} else {
if((state_val_13578 === (3))){
var inst_13575 = (state_13577[(2)]);
var state_13577__$1 = state_13577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13577__$1,inst_13575);
} else {
if((state_val_13578 === (4))){
var inst_13567 = (state_13577[(2)]);
var inst_13568 = async(inst_13567);
var state_13577__$1 = state_13577;
if(cljs.core.truth_(inst_13568)){
var statearr_13588_15866 = state_13577__$1;
(statearr_13588_15866[(1)] = (5));

} else {
var statearr_13589_15867 = state_13577__$1;
(statearr_13589_15867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13578 === (5))){
var state_13577__$1 = state_13577;
var statearr_13590_15869 = state_13577__$1;
(statearr_13590_15869[(2)] = null);

(statearr_13590_15869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13578 === (6))){
var state_13577__$1 = state_13577;
var statearr_13591_15870 = state_13577__$1;
(statearr_13591_15870[(2)] = null);

(statearr_13591_15870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13578 === (7))){
var inst_13573 = (state_13577[(2)]);
var state_13577__$1 = state_13577;
var statearr_13592_15871 = state_13577__$1;
(statearr_13592_15871[(2)] = inst_13573);

(statearr_13592_15871[(1)] = (3));


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
});})(__15838,c__12937__auto___15863,G__13433_15840,G__13433_15841__$1,n__5593__auto___15837,jobs,results,process__$1,async))
;
return ((function (__15838,switch__12838__auto__,c__12937__auto___15863,G__13433_15840,G__13433_15841__$1,n__5593__auto___15837,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____0 = (function (){
var statearr_13593 = [null,null,null,null,null,null,null];
(statearr_13593[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__);

(statearr_13593[(1)] = (1));

return statearr_13593;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____1 = (function (state_13577){
while(true){
var ret_value__12840__auto__ = (function (){try{while(true){
var result__12841__auto__ = switch__12838__auto__(state_13577);
if(cljs.core.keyword_identical_QMARK_(result__12841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12841__auto__;
}
break;
}
}catch (e13594){var ex__12842__auto__ = e13594;
var statearr_13596_15876 = state_13577;
(statearr_13596_15876[(2)] = ex__12842__auto__);


if(cljs.core.seq((state_13577[(4)]))){
var statearr_13599_15877 = state_13577;
(statearr_13599_15877[(1)] = cljs.core.first((state_13577[(4)])));

} else {
throw ex__12842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15878 = state_13577;
state_13577 = G__15878;
continue;
} else {
return ret_value__12840__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__ = function(state_13577){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____1.call(this,state_13577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__;
})()
;})(__15838,switch__12838__auto__,c__12937__auto___15863,G__13433_15840,G__13433_15841__$1,n__5593__auto___15837,jobs,results,process__$1,async))
})();
var state__12939__auto__ = (function (){var statearr_13601 = f__12938__auto__();
(statearr_13601[(6)] = c__12937__auto___15863);

return statearr_13601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12939__auto__);
});})(__15838,c__12937__auto___15863,G__13433_15840,G__13433_15841__$1,n__5593__auto___15837,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13433_15841__$1)].join('')));

}

var G__15879 = (__15838 + (1));
__15838 = G__15879;
continue;
} else {
}
break;
}

var c__12937__auto___15880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12938__auto__ = (function (){var switch__12838__auto__ = (function (state_13624){
var state_val_13625 = (state_13624[(1)]);
if((state_val_13625 === (7))){
var inst_13620 = (state_13624[(2)]);
var state_13624__$1 = state_13624;
var statearr_13632_15881 = state_13624__$1;
(statearr_13632_15881[(2)] = inst_13620);

(statearr_13632_15881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13625 === (1))){
var state_13624__$1 = state_13624;
var statearr_13633_15883 = state_13624__$1;
(statearr_13633_15883[(2)] = null);

(statearr_13633_15883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13625 === (4))){
var inst_13604 = (state_13624[(7)]);
var inst_13604__$1 = (state_13624[(2)]);
var inst_13605 = (inst_13604__$1 == null);
var state_13624__$1 = (function (){var statearr_13635 = state_13624;
(statearr_13635[(7)] = inst_13604__$1);

return statearr_13635;
})();
if(cljs.core.truth_(inst_13605)){
var statearr_13636_15886 = state_13624__$1;
(statearr_13636_15886[(1)] = (5));

} else {
var statearr_13637_15887 = state_13624__$1;
(statearr_13637_15887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13625 === (6))){
var inst_13604 = (state_13624[(7)]);
var inst_13609 = (state_13624[(8)]);
var inst_13609__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_13611 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13612 = [inst_13604,inst_13609__$1];
var inst_13613 = (new cljs.core.PersistentVector(null,2,(5),inst_13611,inst_13612,null));
var state_13624__$1 = (function (){var statearr_13639 = state_13624;
(statearr_13639[(8)] = inst_13609__$1);

return statearr_13639;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13624__$1,(8),jobs,inst_13613);
} else {
if((state_val_13625 === (3))){
var inst_13622 = (state_13624[(2)]);
var state_13624__$1 = state_13624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13624__$1,inst_13622);
} else {
if((state_val_13625 === (2))){
var state_13624__$1 = state_13624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13624__$1,(4),from);
} else {
if((state_val_13625 === (9))){
var inst_13617 = (state_13624[(2)]);
var state_13624__$1 = (function (){var statearr_13644 = state_13624;
(statearr_13644[(9)] = inst_13617);

return statearr_13644;
})();
var statearr_13645_15890 = state_13624__$1;
(statearr_13645_15890[(2)] = null);

(statearr_13645_15890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13625 === (5))){
var inst_13607 = cljs.core.async.close_BANG_(jobs);
var state_13624__$1 = state_13624;
var statearr_13646_15893 = state_13624__$1;
(statearr_13646_15893[(2)] = inst_13607);

(statearr_13646_15893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13625 === (8))){
var inst_13609 = (state_13624[(8)]);
var inst_13615 = (state_13624[(2)]);
var state_13624__$1 = (function (){var statearr_13648 = state_13624;
(statearr_13648[(10)] = inst_13615);

return statearr_13648;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13624__$1,(9),results,inst_13609);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____0 = (function (){
var statearr_13651 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13651[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__);

(statearr_13651[(1)] = (1));

return statearr_13651;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____1 = (function (state_13624){
while(true){
var ret_value__12840__auto__ = (function (){try{while(true){
var result__12841__auto__ = switch__12838__auto__(state_13624);
if(cljs.core.keyword_identical_QMARK_(result__12841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12841__auto__;
}
break;
}
}catch (e13655){var ex__12842__auto__ = e13655;
var statearr_13656_15902 = state_13624;
(statearr_13656_15902[(2)] = ex__12842__auto__);


if(cljs.core.seq((state_13624[(4)]))){
var statearr_13657_15903 = state_13624;
(statearr_13657_15903[(1)] = cljs.core.first((state_13624[(4)])));

} else {
throw ex__12842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15904 = state_13624;
state_13624 = G__15904;
continue;
} else {
return ret_value__12840__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__ = function(state_13624){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____1.call(this,state_13624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__;
})()
})();
var state__12939__auto__ = (function (){var statearr_13658 = f__12938__auto__();
(statearr_13658[(6)] = c__12937__auto___15880);

return statearr_13658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12939__auto__);
}));


var c__12937__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12938__auto__ = (function (){var switch__12838__auto__ = (function (state_13698){
var state_val_13699 = (state_13698[(1)]);
if((state_val_13699 === (7))){
var inst_13694 = (state_13698[(2)]);
var state_13698__$1 = state_13698;
var statearr_13701_15906 = state_13698__$1;
(statearr_13701_15906[(2)] = inst_13694);

(statearr_13701_15906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13699 === (20))){
var state_13698__$1 = state_13698;
var statearr_13703_15908 = state_13698__$1;
(statearr_13703_15908[(2)] = null);

(statearr_13703_15908[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13699 === (1))){
var state_13698__$1 = state_13698;
var statearr_13706_15911 = state_13698__$1;
(statearr_13706_15911[(2)] = null);

(statearr_13706_15911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13699 === (4))){
var inst_13662 = (state_13698[(7)]);
var inst_13662__$1 = (state_13698[(2)]);
var inst_13663 = (inst_13662__$1 == null);
var state_13698__$1 = (function (){var statearr_13707 = state_13698;
(statearr_13707[(7)] = inst_13662__$1);

return statearr_13707;
})();
if(cljs.core.truth_(inst_13663)){
var statearr_13708_15915 = state_13698__$1;
(statearr_13708_15915[(1)] = (5));

} else {
var statearr_13709_15917 = state_13698__$1;
(statearr_13709_15917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13699 === (15))){
var inst_13676 = (state_13698[(8)]);
var state_13698__$1 = state_13698;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13698__$1,(18),to,inst_13676);
} else {
if((state_val_13699 === (21))){
var inst_13689 = (state_13698[(2)]);
var state_13698__$1 = state_13698;
var statearr_13710_15918 = state_13698__$1;
(statearr_13710_15918[(2)] = inst_13689);

(statearr_13710_15918[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13699 === (13))){
var inst_13691 = (state_13698[(2)]);
var state_13698__$1 = (function (){var statearr_13712 = state_13698;
(statearr_13712[(9)] = inst_13691);

return statearr_13712;
})();
var statearr_13713_15919 = state_13698__$1;
(statearr_13713_15919[(2)] = null);

(statearr_13713_15919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13699 === (6))){
var inst_13662 = (state_13698[(7)]);
var state_13698__$1 = state_13698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13698__$1,(11),inst_13662);
} else {
if((state_val_13699 === (17))){
var inst_13684 = (state_13698[(2)]);
var state_13698__$1 = state_13698;
if(cljs.core.truth_(inst_13684)){
var statearr_13718_15920 = state_13698__$1;
(statearr_13718_15920[(1)] = (19));

} else {
var statearr_13719_15922 = state_13698__$1;
(statearr_13719_15922[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13699 === (3))){
var inst_13696 = (state_13698[(2)]);
var state_13698__$1 = state_13698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13698__$1,inst_13696);
} else {
if((state_val_13699 === (12))){
var inst_13673 = (state_13698[(10)]);
var state_13698__$1 = state_13698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13698__$1,(14),inst_13673);
} else {
if((state_val_13699 === (2))){
var state_13698__$1 = state_13698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13698__$1,(4),results);
} else {
if((state_val_13699 === (19))){
var state_13698__$1 = state_13698;
var statearr_13720_15925 = state_13698__$1;
(statearr_13720_15925[(2)] = null);

(statearr_13720_15925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13699 === (11))){
var inst_13673 = (state_13698[(2)]);
var state_13698__$1 = (function (){var statearr_13721 = state_13698;
(statearr_13721[(10)] = inst_13673);

return statearr_13721;
})();
var statearr_13722_15928 = state_13698__$1;
(statearr_13722_15928[(2)] = null);

(statearr_13722_15928[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13699 === (9))){
var state_13698__$1 = state_13698;
var statearr_13725_15929 = state_13698__$1;
(statearr_13725_15929[(2)] = null);

(statearr_13725_15929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13699 === (5))){
var state_13698__$1 = state_13698;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13726_15931 = state_13698__$1;
(statearr_13726_15931[(1)] = (8));

} else {
var statearr_13727_15932 = state_13698__$1;
(statearr_13727_15932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13699 === (14))){
var inst_13678 = (state_13698[(11)]);
var inst_13676 = (state_13698[(8)]);
var inst_13676__$1 = (state_13698[(2)]);
var inst_13677 = (inst_13676__$1 == null);
var inst_13678__$1 = cljs.core.not(inst_13677);
var state_13698__$1 = (function (){var statearr_13731 = state_13698;
(statearr_13731[(11)] = inst_13678__$1);

(statearr_13731[(8)] = inst_13676__$1);

return statearr_13731;
})();
if(inst_13678__$1){
var statearr_13732_15934 = state_13698__$1;
(statearr_13732_15934[(1)] = (15));

} else {
var statearr_13733_15935 = state_13698__$1;
(statearr_13733_15935[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13699 === (16))){
var inst_13678 = (state_13698[(11)]);
var state_13698__$1 = state_13698;
var statearr_13734_15936 = state_13698__$1;
(statearr_13734_15936[(2)] = inst_13678);

(statearr_13734_15936[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13699 === (10))){
var inst_13669 = (state_13698[(2)]);
var state_13698__$1 = state_13698;
var statearr_13736_15937 = state_13698__$1;
(statearr_13736_15937[(2)] = inst_13669);

(statearr_13736_15937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13699 === (18))){
var inst_13681 = (state_13698[(2)]);
var state_13698__$1 = state_13698;
var statearr_13737_15938 = state_13698__$1;
(statearr_13737_15938[(2)] = inst_13681);

(statearr_13737_15938[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13699 === (8))){
var inst_13666 = cljs.core.async.close_BANG_(to);
var state_13698__$1 = state_13698;
var statearr_13738_15939 = state_13698__$1;
(statearr_13738_15939[(2)] = inst_13666);

(statearr_13738_15939[(1)] = (10));


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
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____0 = (function (){
var statearr_13740 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13740[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__);

(statearr_13740[(1)] = (1));

return statearr_13740;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____1 = (function (state_13698){
while(true){
var ret_value__12840__auto__ = (function (){try{while(true){
var result__12841__auto__ = switch__12838__auto__(state_13698);
if(cljs.core.keyword_identical_QMARK_(result__12841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12841__auto__;
}
break;
}
}catch (e13743){var ex__12842__auto__ = e13743;
var statearr_13744_15940 = state_13698;
(statearr_13744_15940[(2)] = ex__12842__auto__);


if(cljs.core.seq((state_13698[(4)]))){
var statearr_13745_15941 = state_13698;
(statearr_13745_15941[(1)] = cljs.core.first((state_13698[(4)])));

} else {
throw ex__12842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15944 = state_13698;
state_13698 = G__15944;
continue;
} else {
return ret_value__12840__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__ = function(state_13698){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____1.call(this,state_13698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12839__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12839__auto__;
})()
})();
var state__12939__auto__ = (function (){var statearr_13747 = f__12938__auto__();
(statearr_13747[(6)] = c__12937__auto__);

return statearr_13747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12939__auto__);
}));

return c__12937__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__13751 = arguments.length;
switch (G__13751) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__13757 = arguments.length;
switch (G__13757) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__13761 = arguments.length;
switch (G__13761) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__12937__auto___15954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12938__auto__ = (function (){var switch__12838__auto__ = (function (state_13793){
var state_val_13794 = (state_13793[(1)]);
if((state_val_13794 === (7))){
var inst_13788 = (state_13793[(2)]);
var state_13793__$1 = state_13793;
var statearr_13795_15955 = state_13793__$1;
(statearr_13795_15955[(2)] = inst_13788);

(statearr_13795_15955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13794 === (1))){
var state_13793__$1 = state_13793;
var statearr_13797_15956 = state_13793__$1;
(statearr_13797_15956[(2)] = null);

(statearr_13797_15956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13794 === (4))){
var inst_13768 = (state_13793[(7)]);
var inst_13768__$1 = (state_13793[(2)]);
var inst_13769 = (inst_13768__$1 == null);
var state_13793__$1 = (function (){var statearr_13798 = state_13793;
(statearr_13798[(7)] = inst_13768__$1);

return statearr_13798;
})();
if(cljs.core.truth_(inst_13769)){
var statearr_13799_15957 = state_13793__$1;
(statearr_13799_15957[(1)] = (5));

} else {
var statearr_13800_15958 = state_13793__$1;
(statearr_13800_15958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13794 === (13))){
var state_13793__$1 = state_13793;
var statearr_13801_15959 = state_13793__$1;
(statearr_13801_15959[(2)] = null);

(statearr_13801_15959[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13794 === (6))){
var inst_13768 = (state_13793[(7)]);
var inst_13774 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13768) : p.call(null, inst_13768));
var state_13793__$1 = state_13793;
if(cljs.core.truth_(inst_13774)){
var statearr_13802_15960 = state_13793__$1;
(statearr_13802_15960[(1)] = (9));

} else {
var statearr_13803_15961 = state_13793__$1;
(statearr_13803_15961[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13794 === (3))){
var inst_13791 = (state_13793[(2)]);
var state_13793__$1 = state_13793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13793__$1,inst_13791);
} else {
if((state_val_13794 === (12))){
var state_13793__$1 = state_13793;
var statearr_13804_15962 = state_13793__$1;
(statearr_13804_15962[(2)] = null);

(statearr_13804_15962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13794 === (2))){
var state_13793__$1 = state_13793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13793__$1,(4),ch);
} else {
if((state_val_13794 === (11))){
var inst_13768 = (state_13793[(7)]);
var inst_13778 = (state_13793[(2)]);
var state_13793__$1 = state_13793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13793__$1,(8),inst_13778,inst_13768);
} else {
if((state_val_13794 === (9))){
var state_13793__$1 = state_13793;
var statearr_13807_15963 = state_13793__$1;
(statearr_13807_15963[(2)] = tc);

(statearr_13807_15963[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13794 === (5))){
var inst_13771 = cljs.core.async.close_BANG_(tc);
var inst_13772 = cljs.core.async.close_BANG_(fc);
var state_13793__$1 = (function (){var statearr_13808 = state_13793;
(statearr_13808[(8)] = inst_13771);

return statearr_13808;
})();
var statearr_13809_15966 = state_13793__$1;
(statearr_13809_15966[(2)] = inst_13772);

(statearr_13809_15966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13794 === (14))){
var inst_13786 = (state_13793[(2)]);
var state_13793__$1 = state_13793;
var statearr_13810_15967 = state_13793__$1;
(statearr_13810_15967[(2)] = inst_13786);

(statearr_13810_15967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13794 === (10))){
var state_13793__$1 = state_13793;
var statearr_13811_15969 = state_13793__$1;
(statearr_13811_15969[(2)] = fc);

(statearr_13811_15969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13794 === (8))){
var inst_13780 = (state_13793[(2)]);
var state_13793__$1 = state_13793;
if(cljs.core.truth_(inst_13780)){
var statearr_13812_15970 = state_13793__$1;
(statearr_13812_15970[(1)] = (12));

} else {
var statearr_13813_15971 = state_13793__$1;
(statearr_13813_15971[(1)] = (13));

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
}
});
return (function() {
var cljs$core$async$state_machine__12839__auto__ = null;
var cljs$core$async$state_machine__12839__auto____0 = (function (){
var statearr_13817 = [null,null,null,null,null,null,null,null,null];
(statearr_13817[(0)] = cljs$core$async$state_machine__12839__auto__);

(statearr_13817[(1)] = (1));

return statearr_13817;
});
var cljs$core$async$state_machine__12839__auto____1 = (function (state_13793){
while(true){
var ret_value__12840__auto__ = (function (){try{while(true){
var result__12841__auto__ = switch__12838__auto__(state_13793);
if(cljs.core.keyword_identical_QMARK_(result__12841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12841__auto__;
}
break;
}
}catch (e13819){var ex__12842__auto__ = e13819;
var statearr_13821_15974 = state_13793;
(statearr_13821_15974[(2)] = ex__12842__auto__);


if(cljs.core.seq((state_13793[(4)]))){
var statearr_13823_15975 = state_13793;
(statearr_13823_15975[(1)] = cljs.core.first((state_13793[(4)])));

} else {
throw ex__12842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15977 = state_13793;
state_13793 = G__15977;
continue;
} else {
return ret_value__12840__auto__;
}
break;
}
});
cljs$core$async$state_machine__12839__auto__ = function(state_13793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12839__auto____1.call(this,state_13793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12839__auto____0;
cljs$core$async$state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12839__auto____1;
return cljs$core$async$state_machine__12839__auto__;
})()
})();
var state__12939__auto__ = (function (){var statearr_13826 = f__12938__auto__();
(statearr_13826[(6)] = c__12937__auto___15954);

return statearr_13826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12939__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12937__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12938__auto__ = (function (){var switch__12838__auto__ = (function (state_13851){
var state_val_13852 = (state_13851[(1)]);
if((state_val_13852 === (7))){
var inst_13845 = (state_13851[(2)]);
var state_13851__$1 = state_13851;
var statearr_13854_15980 = state_13851__$1;
(statearr_13854_15980[(2)] = inst_13845);

(statearr_13854_15980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13852 === (1))){
var inst_13827 = init;
var inst_13828 = inst_13827;
var state_13851__$1 = (function (){var statearr_13856 = state_13851;
(statearr_13856[(7)] = inst_13828);

return statearr_13856;
})();
var statearr_13857_15982 = state_13851__$1;
(statearr_13857_15982[(2)] = null);

(statearr_13857_15982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13852 === (4))){
var inst_13831 = (state_13851[(8)]);
var inst_13831__$1 = (state_13851[(2)]);
var inst_13832 = (inst_13831__$1 == null);
var state_13851__$1 = (function (){var statearr_13860 = state_13851;
(statearr_13860[(8)] = inst_13831__$1);

return statearr_13860;
})();
if(cljs.core.truth_(inst_13832)){
var statearr_13861_15986 = state_13851__$1;
(statearr_13861_15986[(1)] = (5));

} else {
var statearr_13862_15987 = state_13851__$1;
(statearr_13862_15987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13852 === (6))){
var inst_13828 = (state_13851[(7)]);
var inst_13835 = (state_13851[(9)]);
var inst_13831 = (state_13851[(8)]);
var inst_13835__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_13828,inst_13831) : f.call(null, inst_13828,inst_13831));
var inst_13836 = cljs.core.reduced_QMARK_(inst_13835__$1);
var state_13851__$1 = (function (){var statearr_13863 = state_13851;
(statearr_13863[(9)] = inst_13835__$1);

return statearr_13863;
})();
if(inst_13836){
var statearr_13864_15991 = state_13851__$1;
(statearr_13864_15991[(1)] = (8));

} else {
var statearr_13865_15992 = state_13851__$1;
(statearr_13865_15992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13852 === (3))){
var inst_13848 = (state_13851[(2)]);
var state_13851__$1 = state_13851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13851__$1,inst_13848);
} else {
if((state_val_13852 === (2))){
var state_13851__$1 = state_13851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13851__$1,(4),ch);
} else {
if((state_val_13852 === (9))){
var inst_13835 = (state_13851[(9)]);
var inst_13828 = inst_13835;
var state_13851__$1 = (function (){var statearr_13868 = state_13851;
(statearr_13868[(7)] = inst_13828);

return statearr_13868;
})();
var statearr_13869_15993 = state_13851__$1;
(statearr_13869_15993[(2)] = null);

(statearr_13869_15993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13852 === (5))){
var inst_13828 = (state_13851[(7)]);
var state_13851__$1 = state_13851;
var statearr_13871_15994 = state_13851__$1;
(statearr_13871_15994[(2)] = inst_13828);

(statearr_13871_15994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13852 === (10))){
var inst_13843 = (state_13851[(2)]);
var state_13851__$1 = state_13851;
var statearr_13872_15995 = state_13851__$1;
(statearr_13872_15995[(2)] = inst_13843);

(statearr_13872_15995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13852 === (8))){
var inst_13835 = (state_13851[(9)]);
var inst_13839 = cljs.core.deref(inst_13835);
var state_13851__$1 = state_13851;
var statearr_13877_15996 = state_13851__$1;
(statearr_13877_15996[(2)] = inst_13839);

(statearr_13877_15996[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__12839__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12839__auto____0 = (function (){
var statearr_13879 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13879[(0)] = cljs$core$async$reduce_$_state_machine__12839__auto__);

(statearr_13879[(1)] = (1));

return statearr_13879;
});
var cljs$core$async$reduce_$_state_machine__12839__auto____1 = (function (state_13851){
while(true){
var ret_value__12840__auto__ = (function (){try{while(true){
var result__12841__auto__ = switch__12838__auto__(state_13851);
if(cljs.core.keyword_identical_QMARK_(result__12841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12841__auto__;
}
break;
}
}catch (e13880){var ex__12842__auto__ = e13880;
var statearr_13883_15997 = state_13851;
(statearr_13883_15997[(2)] = ex__12842__auto__);


if(cljs.core.seq((state_13851[(4)]))){
var statearr_13886_15998 = state_13851;
(statearr_13886_15998[(1)] = cljs.core.first((state_13851[(4)])));

} else {
throw ex__12842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15999 = state_13851;
state_13851 = G__15999;
continue;
} else {
return ret_value__12840__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12839__auto__ = function(state_13851){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12839__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12839__auto____1.call(this,state_13851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12839__auto____0;
cljs$core$async$reduce_$_state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12839__auto____1;
return cljs$core$async$reduce_$_state_machine__12839__auto__;
})()
})();
var state__12939__auto__ = (function (){var statearr_13888 = f__12938__auto__();
(statearr_13888[(6)] = c__12937__auto__);

return statearr_13888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12939__auto__);
}));

return c__12937__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__12937__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12938__auto__ = (function (){var switch__12838__auto__ = (function (state_13894){
var state_val_13895 = (state_13894[(1)]);
if((state_val_13895 === (1))){
var inst_13889 = cljs.core.async.reduce(f__$1,init,ch);
var state_13894__$1 = state_13894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13894__$1,(2),inst_13889);
} else {
if((state_val_13895 === (2))){
var inst_13891 = (state_13894[(2)]);
var inst_13892 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_13891) : f__$1.call(null, inst_13891));
var state_13894__$1 = state_13894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13894__$1,inst_13892);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__12839__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12839__auto____0 = (function (){
var statearr_13900 = [null,null,null,null,null,null,null];
(statearr_13900[(0)] = cljs$core$async$transduce_$_state_machine__12839__auto__);

(statearr_13900[(1)] = (1));

return statearr_13900;
});
var cljs$core$async$transduce_$_state_machine__12839__auto____1 = (function (state_13894){
while(true){
var ret_value__12840__auto__ = (function (){try{while(true){
var result__12841__auto__ = switch__12838__auto__(state_13894);
if(cljs.core.keyword_identical_QMARK_(result__12841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12841__auto__;
}
break;
}
}catch (e13901){var ex__12842__auto__ = e13901;
var statearr_13902_16000 = state_13894;
(statearr_13902_16000[(2)] = ex__12842__auto__);


if(cljs.core.seq((state_13894[(4)]))){
var statearr_13903_16001 = state_13894;
(statearr_13903_16001[(1)] = cljs.core.first((state_13894[(4)])));

} else {
throw ex__12842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16002 = state_13894;
state_13894 = G__16002;
continue;
} else {
return ret_value__12840__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12839__auto__ = function(state_13894){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12839__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12839__auto____1.call(this,state_13894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12839__auto____0;
cljs$core$async$transduce_$_state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12839__auto____1;
return cljs$core$async$transduce_$_state_machine__12839__auto__;
})()
})();
var state__12939__auto__ = (function (){var statearr_13905 = f__12938__auto__();
(statearr_13905[(6)] = c__12937__auto__);

return statearr_13905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12939__auto__);
}));

return c__12937__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__13910 = arguments.length;
switch (G__13910) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12937__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12938__auto__ = (function (){var switch__12838__auto__ = (function (state_13941){
var state_val_13942 = (state_13941[(1)]);
if((state_val_13942 === (7))){
var inst_13923 = (state_13941[(2)]);
var state_13941__$1 = state_13941;
var statearr_13948_16004 = state_13941__$1;
(statearr_13948_16004[(2)] = inst_13923);

(statearr_13948_16004[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13942 === (1))){
var inst_13916 = cljs.core.seq(coll);
var inst_13917 = inst_13916;
var state_13941__$1 = (function (){var statearr_13950 = state_13941;
(statearr_13950[(7)] = inst_13917);

return statearr_13950;
})();
var statearr_13953_16005 = state_13941__$1;
(statearr_13953_16005[(2)] = null);

(statearr_13953_16005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13942 === (4))){
var inst_13917 = (state_13941[(7)]);
var inst_13921 = cljs.core.first(inst_13917);
var state_13941__$1 = state_13941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13941__$1,(7),ch,inst_13921);
} else {
if((state_val_13942 === (13))){
var inst_13935 = (state_13941[(2)]);
var state_13941__$1 = state_13941;
var statearr_13955_16006 = state_13941__$1;
(statearr_13955_16006[(2)] = inst_13935);

(statearr_13955_16006[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13942 === (6))){
var inst_13926 = (state_13941[(2)]);
var state_13941__$1 = state_13941;
if(cljs.core.truth_(inst_13926)){
var statearr_13957_16007 = state_13941__$1;
(statearr_13957_16007[(1)] = (8));

} else {
var statearr_13958_16008 = state_13941__$1;
(statearr_13958_16008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13942 === (3))){
var inst_13939 = (state_13941[(2)]);
var state_13941__$1 = state_13941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13941__$1,inst_13939);
} else {
if((state_val_13942 === (12))){
var state_13941__$1 = state_13941;
var statearr_13963_16009 = state_13941__$1;
(statearr_13963_16009[(2)] = null);

(statearr_13963_16009[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13942 === (2))){
var inst_13917 = (state_13941[(7)]);
var state_13941__$1 = state_13941;
if(cljs.core.truth_(inst_13917)){
var statearr_13965_16010 = state_13941__$1;
(statearr_13965_16010[(1)] = (4));

} else {
var statearr_13968_16011 = state_13941__$1;
(statearr_13968_16011[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13942 === (11))){
var inst_13932 = cljs.core.async.close_BANG_(ch);
var state_13941__$1 = state_13941;
var statearr_13971_16012 = state_13941__$1;
(statearr_13971_16012[(2)] = inst_13932);

(statearr_13971_16012[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13942 === (9))){
var state_13941__$1 = state_13941;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13972_16013 = state_13941__$1;
(statearr_13972_16013[(1)] = (11));

} else {
var statearr_13973_16014 = state_13941__$1;
(statearr_13973_16014[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13942 === (5))){
var inst_13917 = (state_13941[(7)]);
var state_13941__$1 = state_13941;
var statearr_13976_16015 = state_13941__$1;
(statearr_13976_16015[(2)] = inst_13917);

(statearr_13976_16015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13942 === (10))){
var inst_13937 = (state_13941[(2)]);
var state_13941__$1 = state_13941;
var statearr_13978_16016 = state_13941__$1;
(statearr_13978_16016[(2)] = inst_13937);

(statearr_13978_16016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13942 === (8))){
var inst_13917 = (state_13941[(7)]);
var inst_13928 = cljs.core.next(inst_13917);
var inst_13917__$1 = inst_13928;
var state_13941__$1 = (function (){var statearr_13983 = state_13941;
(statearr_13983[(7)] = inst_13917__$1);

return statearr_13983;
})();
var statearr_13984_16017 = state_13941__$1;
(statearr_13984_16017[(2)] = null);

(statearr_13984_16017[(1)] = (2));


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
var cljs$core$async$state_machine__12839__auto__ = null;
var cljs$core$async$state_machine__12839__auto____0 = (function (){
var statearr_13988 = [null,null,null,null,null,null,null,null];
(statearr_13988[(0)] = cljs$core$async$state_machine__12839__auto__);

(statearr_13988[(1)] = (1));

return statearr_13988;
});
var cljs$core$async$state_machine__12839__auto____1 = (function (state_13941){
while(true){
var ret_value__12840__auto__ = (function (){try{while(true){
var result__12841__auto__ = switch__12838__auto__(state_13941);
if(cljs.core.keyword_identical_QMARK_(result__12841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12841__auto__;
}
break;
}
}catch (e13991){var ex__12842__auto__ = e13991;
var statearr_13995_16018 = state_13941;
(statearr_13995_16018[(2)] = ex__12842__auto__);


if(cljs.core.seq((state_13941[(4)]))){
var statearr_13997_16019 = state_13941;
(statearr_13997_16019[(1)] = cljs.core.first((state_13941[(4)])));

} else {
throw ex__12842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16020 = state_13941;
state_13941 = G__16020;
continue;
} else {
return ret_value__12840__auto__;
}
break;
}
});
cljs$core$async$state_machine__12839__auto__ = function(state_13941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12839__auto____1.call(this,state_13941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12839__auto____0;
cljs$core$async$state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12839__auto____1;
return cljs$core$async$state_machine__12839__auto__;
})()
})();
var state__12939__auto__ = (function (){var statearr_14000 = f__12938__auto__();
(statearr_14000[(6)] = c__12937__auto__);

return statearr_14000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12939__auto__);
}));

return c__12937__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14018 = arguments.length;
switch (G__14018) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_16022 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_16022(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_16023 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_16023(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_16024 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_16024(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_16025 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_16025(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14055 = (function (ch,cs,meta14056){
this.ch = ch;
this.cs = cs;
this.meta14056 = meta14056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14057,meta14056__$1){
var self__ = this;
var _14057__$1 = this;
return (new cljs.core.async.t_cljs$core$async14055(self__.ch,self__.cs,meta14056__$1));
}));

(cljs.core.async.t_cljs$core$async14055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14057){
var self__ = this;
var _14057__$1 = this;
return self__.meta14056;
}));

(cljs.core.async.t_cljs$core$async14055.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14055.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14055.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14055.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14055.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14055.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14056","meta14056",-1652033110,null)], null);
}));

(cljs.core.async.t_cljs$core$async14055.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14055");

(cljs.core.async.t_cljs$core$async14055.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14055");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14055.
 */
cljs.core.async.__GT_t_cljs$core$async14055 = (function cljs$core$async$__GT_t_cljs$core$async14055(ch,cs,meta14056){
return (new cljs.core.async.t_cljs$core$async14055(ch,cs,meta14056));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async14055(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__12937__auto___16026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12938__auto__ = (function (){var switch__12838__auto__ = (function (state_14224){
var state_val_14225 = (state_14224[(1)]);
if((state_val_14225 === (7))){
var inst_14217 = (state_14224[(2)]);
var state_14224__$1 = state_14224;
var statearr_14231_16027 = state_14224__$1;
(statearr_14231_16027[(2)] = inst_14217);

(statearr_14231_16027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (20))){
var inst_14107 = (state_14224[(7)]);
var inst_14121 = cljs.core.first(inst_14107);
var inst_14122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14121,(0),null);
var inst_14123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14121,(1),null);
var state_14224__$1 = (function (){var statearr_14235 = state_14224;
(statearr_14235[(8)] = inst_14122);

return statearr_14235;
})();
if(cljs.core.truth_(inst_14123)){
var statearr_14236_16028 = state_14224__$1;
(statearr_14236_16028[(1)] = (22));

} else {
var statearr_14237_16029 = state_14224__$1;
(statearr_14237_16029[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (27))){
var inst_14075 = (state_14224[(9)]);
var inst_14157 = (state_14224[(10)]);
var inst_14162 = (state_14224[(11)]);
var inst_14155 = (state_14224[(12)]);
var inst_14162__$1 = cljs.core._nth(inst_14155,inst_14157);
var inst_14163 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14162__$1,inst_14075,done);
var state_14224__$1 = (function (){var statearr_14239 = state_14224;
(statearr_14239[(11)] = inst_14162__$1);

return statearr_14239;
})();
if(cljs.core.truth_(inst_14163)){
var statearr_14240_16030 = state_14224__$1;
(statearr_14240_16030[(1)] = (30));

} else {
var statearr_14243_16031 = state_14224__$1;
(statearr_14243_16031[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (1))){
var state_14224__$1 = state_14224;
var statearr_14246_16032 = state_14224__$1;
(statearr_14246_16032[(2)] = null);

(statearr_14246_16032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (24))){
var inst_14107 = (state_14224[(7)]);
var inst_14128 = (state_14224[(2)]);
var inst_14129 = cljs.core.next(inst_14107);
var inst_14084 = inst_14129;
var inst_14085 = null;
var inst_14086 = (0);
var inst_14087 = (0);
var state_14224__$1 = (function (){var statearr_14247 = state_14224;
(statearr_14247[(13)] = inst_14085);

(statearr_14247[(14)] = inst_14086);

(statearr_14247[(15)] = inst_14084);

(statearr_14247[(16)] = inst_14087);

(statearr_14247[(17)] = inst_14128);

return statearr_14247;
})();
var statearr_14249_16033 = state_14224__$1;
(statearr_14249_16033[(2)] = null);

(statearr_14249_16033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (39))){
var state_14224__$1 = state_14224;
var statearr_14257_16034 = state_14224__$1;
(statearr_14257_16034[(2)] = null);

(statearr_14257_16034[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (4))){
var inst_14075 = (state_14224[(9)]);
var inst_14075__$1 = (state_14224[(2)]);
var inst_14076 = (inst_14075__$1 == null);
var state_14224__$1 = (function (){var statearr_14260 = state_14224;
(statearr_14260[(9)] = inst_14075__$1);

return statearr_14260;
})();
if(cljs.core.truth_(inst_14076)){
var statearr_14261_16035 = state_14224__$1;
(statearr_14261_16035[(1)] = (5));

} else {
var statearr_14262_16036 = state_14224__$1;
(statearr_14262_16036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (15))){
var inst_14085 = (state_14224[(13)]);
var inst_14086 = (state_14224[(14)]);
var inst_14084 = (state_14224[(15)]);
var inst_14087 = (state_14224[(16)]);
var inst_14103 = (state_14224[(2)]);
var inst_14104 = (inst_14087 + (1));
var tmp14252 = inst_14085;
var tmp14253 = inst_14086;
var tmp14254 = inst_14084;
var inst_14084__$1 = tmp14254;
var inst_14085__$1 = tmp14252;
var inst_14086__$1 = tmp14253;
var inst_14087__$1 = inst_14104;
var state_14224__$1 = (function (){var statearr_14268 = state_14224;
(statearr_14268[(13)] = inst_14085__$1);

(statearr_14268[(14)] = inst_14086__$1);

(statearr_14268[(15)] = inst_14084__$1);

(statearr_14268[(18)] = inst_14103);

(statearr_14268[(16)] = inst_14087__$1);

return statearr_14268;
})();
var statearr_14269_16037 = state_14224__$1;
(statearr_14269_16037[(2)] = null);

(statearr_14269_16037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (21))){
var inst_14132 = (state_14224[(2)]);
var state_14224__$1 = state_14224;
var statearr_14276_16038 = state_14224__$1;
(statearr_14276_16038[(2)] = inst_14132);

(statearr_14276_16038[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (31))){
var inst_14162 = (state_14224[(11)]);
var inst_14166 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_14162);
var state_14224__$1 = state_14224;
var statearr_14279_16039 = state_14224__$1;
(statearr_14279_16039[(2)] = inst_14166);

(statearr_14279_16039[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (32))){
var inst_14156 = (state_14224[(19)]);
var inst_14157 = (state_14224[(10)]);
var inst_14154 = (state_14224[(20)]);
var inst_14155 = (state_14224[(12)]);
var inst_14168 = (state_14224[(2)]);
var inst_14169 = (inst_14157 + (1));
var tmp14271 = inst_14156;
var tmp14272 = inst_14154;
var tmp14273 = inst_14155;
var inst_14154__$1 = tmp14272;
var inst_14155__$1 = tmp14273;
var inst_14156__$1 = tmp14271;
var inst_14157__$1 = inst_14169;
var state_14224__$1 = (function (){var statearr_14285 = state_14224;
(statearr_14285[(19)] = inst_14156__$1);

(statearr_14285[(10)] = inst_14157__$1);

(statearr_14285[(20)] = inst_14154__$1);

(statearr_14285[(21)] = inst_14168);

(statearr_14285[(12)] = inst_14155__$1);

return statearr_14285;
})();
var statearr_14286_16040 = state_14224__$1;
(statearr_14286_16040[(2)] = null);

(statearr_14286_16040[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (40))){
var inst_14190 = (state_14224[(22)]);
var inst_14194 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_14190);
var state_14224__$1 = state_14224;
var statearr_14291_16041 = state_14224__$1;
(statearr_14291_16041[(2)] = inst_14194);

(statearr_14291_16041[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (33))){
var inst_14178 = (state_14224[(23)]);
var inst_14180 = cljs.core.chunked_seq_QMARK_(inst_14178);
var state_14224__$1 = state_14224;
if(inst_14180){
var statearr_14294_16042 = state_14224__$1;
(statearr_14294_16042[(1)] = (36));

} else {
var statearr_14298_16043 = state_14224__$1;
(statearr_14298_16043[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (13))){
var inst_14097 = (state_14224[(24)]);
var inst_14100 = cljs.core.async.close_BANG_(inst_14097);
var state_14224__$1 = state_14224;
var statearr_14300_16044 = state_14224__$1;
(statearr_14300_16044[(2)] = inst_14100);

(statearr_14300_16044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (22))){
var inst_14122 = (state_14224[(8)]);
var inst_14125 = cljs.core.async.close_BANG_(inst_14122);
var state_14224__$1 = state_14224;
var statearr_14302_16045 = state_14224__$1;
(statearr_14302_16045[(2)] = inst_14125);

(statearr_14302_16045[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (36))){
var inst_14178 = (state_14224[(23)]);
var inst_14182 = cljs.core.chunk_first(inst_14178);
var inst_14183 = cljs.core.chunk_rest(inst_14178);
var inst_14184 = cljs.core.count(inst_14182);
var inst_14154 = inst_14183;
var inst_14155 = inst_14182;
var inst_14156 = inst_14184;
var inst_14157 = (0);
var state_14224__$1 = (function (){var statearr_14303 = state_14224;
(statearr_14303[(19)] = inst_14156);

(statearr_14303[(10)] = inst_14157);

(statearr_14303[(20)] = inst_14154);

(statearr_14303[(12)] = inst_14155);

return statearr_14303;
})();
var statearr_14304_16046 = state_14224__$1;
(statearr_14304_16046[(2)] = null);

(statearr_14304_16046[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (41))){
var inst_14178 = (state_14224[(23)]);
var inst_14196 = (state_14224[(2)]);
var inst_14197 = cljs.core.next(inst_14178);
var inst_14154 = inst_14197;
var inst_14155 = null;
var inst_14156 = (0);
var inst_14157 = (0);
var state_14224__$1 = (function (){var statearr_14305 = state_14224;
(statearr_14305[(25)] = inst_14196);

(statearr_14305[(19)] = inst_14156);

(statearr_14305[(10)] = inst_14157);

(statearr_14305[(20)] = inst_14154);

(statearr_14305[(12)] = inst_14155);

return statearr_14305;
})();
var statearr_14308_16047 = state_14224__$1;
(statearr_14308_16047[(2)] = null);

(statearr_14308_16047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (43))){
var state_14224__$1 = state_14224;
var statearr_14311_16048 = state_14224__$1;
(statearr_14311_16048[(2)] = null);

(statearr_14311_16048[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (29))){
var inst_14205 = (state_14224[(2)]);
var state_14224__$1 = state_14224;
var statearr_14312_16049 = state_14224__$1;
(statearr_14312_16049[(2)] = inst_14205);

(statearr_14312_16049[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (44))){
var inst_14214 = (state_14224[(2)]);
var state_14224__$1 = (function (){var statearr_14314 = state_14224;
(statearr_14314[(26)] = inst_14214);

return statearr_14314;
})();
var statearr_14315_16050 = state_14224__$1;
(statearr_14315_16050[(2)] = null);

(statearr_14315_16050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (6))){
var inst_14144 = (state_14224[(27)]);
var inst_14143 = cljs.core.deref(cs);
var inst_14144__$1 = cljs.core.keys(inst_14143);
var inst_14146 = cljs.core.count(inst_14144__$1);
var inst_14147 = cljs.core.reset_BANG_(dctr,inst_14146);
var inst_14153 = cljs.core.seq(inst_14144__$1);
var inst_14154 = inst_14153;
var inst_14155 = null;
var inst_14156 = (0);
var inst_14157 = (0);
var state_14224__$1 = (function (){var statearr_14318 = state_14224;
(statearr_14318[(27)] = inst_14144__$1);

(statearr_14318[(19)] = inst_14156);

(statearr_14318[(28)] = inst_14147);

(statearr_14318[(10)] = inst_14157);

(statearr_14318[(20)] = inst_14154);

(statearr_14318[(12)] = inst_14155);

return statearr_14318;
})();
var statearr_14321_16051 = state_14224__$1;
(statearr_14321_16051[(2)] = null);

(statearr_14321_16051[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (28))){
var inst_14154 = (state_14224[(20)]);
var inst_14178 = (state_14224[(23)]);
var inst_14178__$1 = cljs.core.seq(inst_14154);
var state_14224__$1 = (function (){var statearr_14325 = state_14224;
(statearr_14325[(23)] = inst_14178__$1);

return statearr_14325;
})();
if(inst_14178__$1){
var statearr_14329_16052 = state_14224__$1;
(statearr_14329_16052[(1)] = (33));

} else {
var statearr_14330_16053 = state_14224__$1;
(statearr_14330_16053[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (25))){
var inst_14156 = (state_14224[(19)]);
var inst_14157 = (state_14224[(10)]);
var inst_14159 = (inst_14157 < inst_14156);
var inst_14160 = inst_14159;
var state_14224__$1 = state_14224;
if(cljs.core.truth_(inst_14160)){
var statearr_14331_16054 = state_14224__$1;
(statearr_14331_16054[(1)] = (27));

} else {
var statearr_14332_16055 = state_14224__$1;
(statearr_14332_16055[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (34))){
var state_14224__$1 = state_14224;
var statearr_14333_16056 = state_14224__$1;
(statearr_14333_16056[(2)] = null);

(statearr_14333_16056[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (17))){
var state_14224__$1 = state_14224;
var statearr_14335_16057 = state_14224__$1;
(statearr_14335_16057[(2)] = null);

(statearr_14335_16057[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (3))){
var inst_14219 = (state_14224[(2)]);
var state_14224__$1 = state_14224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14224__$1,inst_14219);
} else {
if((state_val_14225 === (12))){
var inst_14137 = (state_14224[(2)]);
var state_14224__$1 = state_14224;
var statearr_14336_16058 = state_14224__$1;
(statearr_14336_16058[(2)] = inst_14137);

(statearr_14336_16058[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (2))){
var state_14224__$1 = state_14224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14224__$1,(4),ch);
} else {
if((state_val_14225 === (23))){
var state_14224__$1 = state_14224;
var statearr_14337_16059 = state_14224__$1;
(statearr_14337_16059[(2)] = null);

(statearr_14337_16059[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (35))){
var inst_14203 = (state_14224[(2)]);
var state_14224__$1 = state_14224;
var statearr_14342_16060 = state_14224__$1;
(statearr_14342_16060[(2)] = inst_14203);

(statearr_14342_16060[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (19))){
var inst_14107 = (state_14224[(7)]);
var inst_14113 = cljs.core.chunk_first(inst_14107);
var inst_14114 = cljs.core.chunk_rest(inst_14107);
var inst_14115 = cljs.core.count(inst_14113);
var inst_14084 = inst_14114;
var inst_14085 = inst_14113;
var inst_14086 = inst_14115;
var inst_14087 = (0);
var state_14224__$1 = (function (){var statearr_14346 = state_14224;
(statearr_14346[(13)] = inst_14085);

(statearr_14346[(14)] = inst_14086);

(statearr_14346[(15)] = inst_14084);

(statearr_14346[(16)] = inst_14087);

return statearr_14346;
})();
var statearr_14350_16061 = state_14224__$1;
(statearr_14350_16061[(2)] = null);

(statearr_14350_16061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (11))){
var inst_14084 = (state_14224[(15)]);
var inst_14107 = (state_14224[(7)]);
var inst_14107__$1 = cljs.core.seq(inst_14084);
var state_14224__$1 = (function (){var statearr_14352 = state_14224;
(statearr_14352[(7)] = inst_14107__$1);

return statearr_14352;
})();
if(inst_14107__$1){
var statearr_14355_16062 = state_14224__$1;
(statearr_14355_16062[(1)] = (16));

} else {
var statearr_14357_16063 = state_14224__$1;
(statearr_14357_16063[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (9))){
var inst_14139 = (state_14224[(2)]);
var state_14224__$1 = state_14224;
var statearr_14360_16064 = state_14224__$1;
(statearr_14360_16064[(2)] = inst_14139);

(statearr_14360_16064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (5))){
var inst_14082 = cljs.core.deref(cs);
var inst_14083 = cljs.core.seq(inst_14082);
var inst_14084 = inst_14083;
var inst_14085 = null;
var inst_14086 = (0);
var inst_14087 = (0);
var state_14224__$1 = (function (){var statearr_14364 = state_14224;
(statearr_14364[(13)] = inst_14085);

(statearr_14364[(14)] = inst_14086);

(statearr_14364[(15)] = inst_14084);

(statearr_14364[(16)] = inst_14087);

return statearr_14364;
})();
var statearr_14368_16065 = state_14224__$1;
(statearr_14368_16065[(2)] = null);

(statearr_14368_16065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (14))){
var state_14224__$1 = state_14224;
var statearr_14372_16066 = state_14224__$1;
(statearr_14372_16066[(2)] = null);

(statearr_14372_16066[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (45))){
var inst_14211 = (state_14224[(2)]);
var state_14224__$1 = state_14224;
var statearr_14376_16067 = state_14224__$1;
(statearr_14376_16067[(2)] = inst_14211);

(statearr_14376_16067[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (26))){
var inst_14144 = (state_14224[(27)]);
var inst_14207 = (state_14224[(2)]);
var inst_14208 = cljs.core.seq(inst_14144);
var state_14224__$1 = (function (){var statearr_14379 = state_14224;
(statearr_14379[(29)] = inst_14207);

return statearr_14379;
})();
if(inst_14208){
var statearr_14381_16068 = state_14224__$1;
(statearr_14381_16068[(1)] = (42));

} else {
var statearr_14383_16069 = state_14224__$1;
(statearr_14383_16069[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (16))){
var inst_14107 = (state_14224[(7)]);
var inst_14111 = cljs.core.chunked_seq_QMARK_(inst_14107);
var state_14224__$1 = state_14224;
if(inst_14111){
var statearr_14386_16070 = state_14224__$1;
(statearr_14386_16070[(1)] = (19));

} else {
var statearr_14388_16071 = state_14224__$1;
(statearr_14388_16071[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (38))){
var inst_14200 = (state_14224[(2)]);
var state_14224__$1 = state_14224;
var statearr_14391_16072 = state_14224__$1;
(statearr_14391_16072[(2)] = inst_14200);

(statearr_14391_16072[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (30))){
var state_14224__$1 = state_14224;
var statearr_14395_16073 = state_14224__$1;
(statearr_14395_16073[(2)] = null);

(statearr_14395_16073[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (10))){
var inst_14085 = (state_14224[(13)]);
var inst_14087 = (state_14224[(16)]);
var inst_14096 = cljs.core._nth(inst_14085,inst_14087);
var inst_14097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14096,(0),null);
var inst_14098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14096,(1),null);
var state_14224__$1 = (function (){var statearr_14396 = state_14224;
(statearr_14396[(24)] = inst_14097);

return statearr_14396;
})();
if(cljs.core.truth_(inst_14098)){
var statearr_14397_16074 = state_14224__$1;
(statearr_14397_16074[(1)] = (13));

} else {
var statearr_14398_16075 = state_14224__$1;
(statearr_14398_16075[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (18))){
var inst_14135 = (state_14224[(2)]);
var state_14224__$1 = state_14224;
var statearr_14399_16076 = state_14224__$1;
(statearr_14399_16076[(2)] = inst_14135);

(statearr_14399_16076[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (42))){
var state_14224__$1 = state_14224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14224__$1,(45),dchan);
} else {
if((state_val_14225 === (37))){
var inst_14190 = (state_14224[(22)]);
var inst_14075 = (state_14224[(9)]);
var inst_14178 = (state_14224[(23)]);
var inst_14190__$1 = cljs.core.first(inst_14178);
var inst_14191 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14190__$1,inst_14075,done);
var state_14224__$1 = (function (){var statearr_14402 = state_14224;
(statearr_14402[(22)] = inst_14190__$1);

return statearr_14402;
})();
if(cljs.core.truth_(inst_14191)){
var statearr_14403_16077 = state_14224__$1;
(statearr_14403_16077[(1)] = (39));

} else {
var statearr_14404_16078 = state_14224__$1;
(statearr_14404_16078[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (8))){
var inst_14086 = (state_14224[(14)]);
var inst_14087 = (state_14224[(16)]);
var inst_14089 = (inst_14087 < inst_14086);
var inst_14090 = inst_14089;
var state_14224__$1 = state_14224;
if(cljs.core.truth_(inst_14090)){
var statearr_14405_16079 = state_14224__$1;
(statearr_14405_16079[(1)] = (10));

} else {
var statearr_14407_16080 = state_14224__$1;
(statearr_14407_16080[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__12839__auto__ = null;
var cljs$core$async$mult_$_state_machine__12839__auto____0 = (function (){
var statearr_14411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14411[(0)] = cljs$core$async$mult_$_state_machine__12839__auto__);

(statearr_14411[(1)] = (1));

return statearr_14411;
});
var cljs$core$async$mult_$_state_machine__12839__auto____1 = (function (state_14224){
while(true){
var ret_value__12840__auto__ = (function (){try{while(true){
var result__12841__auto__ = switch__12838__auto__(state_14224);
if(cljs.core.keyword_identical_QMARK_(result__12841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12841__auto__;
}
break;
}
}catch (e14412){var ex__12842__auto__ = e14412;
var statearr_14413_16081 = state_14224;
(statearr_14413_16081[(2)] = ex__12842__auto__);


if(cljs.core.seq((state_14224[(4)]))){
var statearr_14414_16082 = state_14224;
(statearr_14414_16082[(1)] = cljs.core.first((state_14224[(4)])));

} else {
throw ex__12842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16083 = state_14224;
state_14224 = G__16083;
continue;
} else {
return ret_value__12840__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12839__auto__ = function(state_14224){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12839__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12839__auto____1.call(this,state_14224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12839__auto____0;
cljs$core$async$mult_$_state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12839__auto____1;
return cljs$core$async$mult_$_state_machine__12839__auto__;
})()
})();
var state__12939__auto__ = (function (){var statearr_14415 = f__12938__auto__();
(statearr_14415[(6)] = c__12937__auto___16026);

return statearr_14415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12939__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__14418 = arguments.length;
switch (G__14418) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_16085 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_16085(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_16086 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_16086(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_16087 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_16087(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_16088 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_16088(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_16089 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_16089(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16090 = arguments.length;
var i__5727__auto___16091 = (0);
while(true){
if((i__5727__auto___16091 < len__5726__auto___16090)){
args__5732__auto__.push((arguments[i__5727__auto___16091]));

var G__16092 = (i__5727__auto___16091 + (1));
i__5727__auto___16091 = G__16092;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14455){
var map__14456 = p__14455;
var map__14456__$1 = cljs.core.__destructure_map(map__14456);
var opts = map__14456__$1;
var statearr_14457_16093 = state;
(statearr_14457_16093[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_14459_16094 = state;
(statearr_14459_16094[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_14462_16095 = state;
(statearr_14462_16095[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14448){
var G__14449 = cljs.core.first(seq14448);
var seq14448__$1 = cljs.core.next(seq14448);
var G__14450 = cljs.core.first(seq14448__$1);
var seq14448__$2 = cljs.core.next(seq14448__$1);
var G__14451 = cljs.core.first(seq14448__$2);
var seq14448__$3 = cljs.core.next(seq14448__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14449,G__14450,G__14451,seq14448__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14494 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14495){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14495 = meta14495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14496,meta14495__$1){
var self__ = this;
var _14496__$1 = this;
return (new cljs.core.async.t_cljs$core$async14494(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14495__$1));
}));

(cljs.core.async.t_cljs$core$async14494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14496){
var self__ = this;
var _14496__$1 = this;
return self__.meta14495;
}));

(cljs.core.async.t_cljs$core$async14494.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14494.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async14494.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14494.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async14494.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async14494.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async14494.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async14494.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async14494.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14495","meta14495",198917788,null)], null);
}));

(cljs.core.async.t_cljs$core$async14494.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14494");

(cljs.core.async.t_cljs$core$async14494.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14494");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14494.
 */
cljs.core.async.__GT_t_cljs$core$async14494 = (function cljs$core$async$__GT_t_cljs$core$async14494(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14495){
return (new cljs.core.async.t_cljs$core$async14494(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14495));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async14494(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__12937__auto___16096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12938__auto__ = (function (){var switch__12838__auto__ = (function (state_14593){
var state_val_14594 = (state_14593[(1)]);
if((state_val_14594 === (7))){
var inst_14553 = (state_14593[(2)]);
var state_14593__$1 = state_14593;
if(cljs.core.truth_(inst_14553)){
var statearr_14595_16097 = state_14593__$1;
(statearr_14595_16097[(1)] = (8));

} else {
var statearr_14596_16098 = state_14593__$1;
(statearr_14596_16098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14594 === (20))){
var inst_14546 = (state_14593[(7)]);
var state_14593__$1 = state_14593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14593__$1,(23),out,inst_14546);
} else {
if((state_val_14594 === (1))){
var inst_14529 = calc_state();
var inst_14530 = cljs.core.__destructure_map(inst_14529);
var inst_14531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14530,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14530,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14530,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14534 = inst_14529;
var state_14593__$1 = (function (){var statearr_14597 = state_14593;
(statearr_14597[(8)] = inst_14532);

(statearr_14597[(9)] = inst_14533);

(statearr_14597[(10)] = inst_14531);

(statearr_14597[(11)] = inst_14534);

return statearr_14597;
})();
var statearr_14598_16099 = state_14593__$1;
(statearr_14598_16099[(2)] = null);

(statearr_14598_16099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14594 === (24))){
var inst_14537 = (state_14593[(12)]);
var inst_14534 = inst_14537;
var state_14593__$1 = (function (){var statearr_14599 = state_14593;
(statearr_14599[(11)] = inst_14534);

return statearr_14599;
})();
var statearr_14600_16100 = state_14593__$1;
(statearr_14600_16100[(2)] = null);

(statearr_14600_16100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14594 === (4))){
var inst_14548 = (state_14593[(13)]);
var inst_14546 = (state_14593[(7)]);
var inst_14545 = (state_14593[(2)]);
var inst_14546__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14545,(0),null);
var inst_14547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14545,(1),null);
var inst_14548__$1 = (inst_14546__$1 == null);
var state_14593__$1 = (function (){var statearr_14601 = state_14593;
(statearr_14601[(13)] = inst_14548__$1);

(statearr_14601[(14)] = inst_14547);

(statearr_14601[(7)] = inst_14546__$1);

return statearr_14601;
})();
if(cljs.core.truth_(inst_14548__$1)){
var statearr_14602_16101 = state_14593__$1;
(statearr_14602_16101[(1)] = (5));

} else {
var statearr_14603_16102 = state_14593__$1;
(statearr_14603_16102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14594 === (15))){
var inst_14567 = (state_14593[(15)]);
var inst_14538 = (state_14593[(16)]);
var inst_14567__$1 = cljs.core.empty_QMARK_(inst_14538);
var state_14593__$1 = (function (){var statearr_14604 = state_14593;
(statearr_14604[(15)] = inst_14567__$1);

return statearr_14604;
})();
if(inst_14567__$1){
var statearr_14606_16103 = state_14593__$1;
(statearr_14606_16103[(1)] = (17));

} else {
var statearr_14607_16104 = state_14593__$1;
(statearr_14607_16104[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14594 === (21))){
var inst_14537 = (state_14593[(12)]);
var inst_14534 = inst_14537;
var state_14593__$1 = (function (){var statearr_14608 = state_14593;
(statearr_14608[(11)] = inst_14534);

return statearr_14608;
})();
var statearr_14609_16105 = state_14593__$1;
(statearr_14609_16105[(2)] = null);

(statearr_14609_16105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14594 === (13))){
var inst_14560 = (state_14593[(2)]);
var inst_14561 = calc_state();
var inst_14534 = inst_14561;
var state_14593__$1 = (function (){var statearr_14610 = state_14593;
(statearr_14610[(17)] = inst_14560);

(statearr_14610[(11)] = inst_14534);

return statearr_14610;
})();
var statearr_14611_16106 = state_14593__$1;
(statearr_14611_16106[(2)] = null);

(statearr_14611_16106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14594 === (22))){
var inst_14587 = (state_14593[(2)]);
var state_14593__$1 = state_14593;
var statearr_14612_16107 = state_14593__$1;
(statearr_14612_16107[(2)] = inst_14587);

(statearr_14612_16107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14594 === (6))){
var inst_14547 = (state_14593[(14)]);
var inst_14551 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14547,change);
var state_14593__$1 = state_14593;
var statearr_14613_16108 = state_14593__$1;
(statearr_14613_16108[(2)] = inst_14551);

(statearr_14613_16108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14594 === (25))){
var state_14593__$1 = state_14593;
var statearr_14614_16109 = state_14593__$1;
(statearr_14614_16109[(2)] = null);

(statearr_14614_16109[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14594 === (17))){
var inst_14539 = (state_14593[(18)]);
var inst_14547 = (state_14593[(14)]);
var inst_14569 = (inst_14539.cljs$core$IFn$_invoke$arity$1 ? inst_14539.cljs$core$IFn$_invoke$arity$1(inst_14547) : inst_14539.call(null, inst_14547));
var inst_14570 = cljs.core.not(inst_14569);
var state_14593__$1 = state_14593;
var statearr_14615_16110 = state_14593__$1;
(statearr_14615_16110[(2)] = inst_14570);

(statearr_14615_16110[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14594 === (3))){
var inst_14591 = (state_14593[(2)]);
var state_14593__$1 = state_14593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14593__$1,inst_14591);
} else {
if((state_val_14594 === (12))){
var state_14593__$1 = state_14593;
var statearr_14616_16111 = state_14593__$1;
(statearr_14616_16111[(2)] = null);

(statearr_14616_16111[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14594 === (2))){
var inst_14537 = (state_14593[(12)]);
var inst_14534 = (state_14593[(11)]);
var inst_14537__$1 = cljs.core.__destructure_map(inst_14534);
var inst_14538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14537__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14537__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14537__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14593__$1 = (function (){var statearr_14617 = state_14593;
(statearr_14617[(18)] = inst_14539);

(statearr_14617[(12)] = inst_14537__$1);

(statearr_14617[(16)] = inst_14538);

return statearr_14617;
})();
return cljs.core.async.ioc_alts_BANG_(state_14593__$1,(4),inst_14540);
} else {
if((state_val_14594 === (23))){
var inst_14578 = (state_14593[(2)]);
var state_14593__$1 = state_14593;
if(cljs.core.truth_(inst_14578)){
var statearr_14618_16112 = state_14593__$1;
(statearr_14618_16112[(1)] = (24));

} else {
var statearr_14619_16113 = state_14593__$1;
(statearr_14619_16113[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14594 === (19))){
var inst_14573 = (state_14593[(2)]);
var state_14593__$1 = state_14593;
var statearr_14620_16114 = state_14593__$1;
(statearr_14620_16114[(2)] = inst_14573);

(statearr_14620_16114[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14594 === (11))){
var inst_14547 = (state_14593[(14)]);
var inst_14557 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14547);
var state_14593__$1 = state_14593;
var statearr_14621_16115 = state_14593__$1;
(statearr_14621_16115[(2)] = inst_14557);

(statearr_14621_16115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14594 === (9))){
var inst_14564 = (state_14593[(19)]);
var inst_14547 = (state_14593[(14)]);
var inst_14538 = (state_14593[(16)]);
var inst_14564__$1 = (inst_14538.cljs$core$IFn$_invoke$arity$1 ? inst_14538.cljs$core$IFn$_invoke$arity$1(inst_14547) : inst_14538.call(null, inst_14547));
var state_14593__$1 = (function (){var statearr_14622 = state_14593;
(statearr_14622[(19)] = inst_14564__$1);

return statearr_14622;
})();
if(cljs.core.truth_(inst_14564__$1)){
var statearr_14623_16116 = state_14593__$1;
(statearr_14623_16116[(1)] = (14));

} else {
var statearr_14624_16117 = state_14593__$1;
(statearr_14624_16117[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14594 === (5))){
var inst_14548 = (state_14593[(13)]);
var state_14593__$1 = state_14593;
var statearr_14625_16118 = state_14593__$1;
(statearr_14625_16118[(2)] = inst_14548);

(statearr_14625_16118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14594 === (14))){
var inst_14564 = (state_14593[(19)]);
var state_14593__$1 = state_14593;
var statearr_14626_16119 = state_14593__$1;
(statearr_14626_16119[(2)] = inst_14564);

(statearr_14626_16119[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14594 === (26))){
var inst_14583 = (state_14593[(2)]);
var state_14593__$1 = state_14593;
var statearr_14627_16120 = state_14593__$1;
(statearr_14627_16120[(2)] = inst_14583);

(statearr_14627_16120[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14594 === (16))){
var inst_14575 = (state_14593[(2)]);
var state_14593__$1 = state_14593;
if(cljs.core.truth_(inst_14575)){
var statearr_14628_16121 = state_14593__$1;
(statearr_14628_16121[(1)] = (20));

} else {
var statearr_14629_16122 = state_14593__$1;
(statearr_14629_16122[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14594 === (10))){
var inst_14589 = (state_14593[(2)]);
var state_14593__$1 = state_14593;
var statearr_14630_16123 = state_14593__$1;
(statearr_14630_16123[(2)] = inst_14589);

(statearr_14630_16123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14594 === (18))){
var inst_14567 = (state_14593[(15)]);
var state_14593__$1 = state_14593;
var statearr_14631_16124 = state_14593__$1;
(statearr_14631_16124[(2)] = inst_14567);

(statearr_14631_16124[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14594 === (8))){
var inst_14546 = (state_14593[(7)]);
var inst_14555 = (inst_14546 == null);
var state_14593__$1 = state_14593;
if(cljs.core.truth_(inst_14555)){
var statearr_14632_16125 = state_14593__$1;
(statearr_14632_16125[(1)] = (11));

} else {
var statearr_14633_16126 = state_14593__$1;
(statearr_14633_16126[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__12839__auto__ = null;
var cljs$core$async$mix_$_state_machine__12839__auto____0 = (function (){
var statearr_14634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14634[(0)] = cljs$core$async$mix_$_state_machine__12839__auto__);

(statearr_14634[(1)] = (1));

return statearr_14634;
});
var cljs$core$async$mix_$_state_machine__12839__auto____1 = (function (state_14593){
while(true){
var ret_value__12840__auto__ = (function (){try{while(true){
var result__12841__auto__ = switch__12838__auto__(state_14593);
if(cljs.core.keyword_identical_QMARK_(result__12841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12841__auto__;
}
break;
}
}catch (e14635){var ex__12842__auto__ = e14635;
var statearr_14636_16127 = state_14593;
(statearr_14636_16127[(2)] = ex__12842__auto__);


if(cljs.core.seq((state_14593[(4)]))){
var statearr_14638_16128 = state_14593;
(statearr_14638_16128[(1)] = cljs.core.first((state_14593[(4)])));

} else {
throw ex__12842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16129 = state_14593;
state_14593 = G__16129;
continue;
} else {
return ret_value__12840__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12839__auto__ = function(state_14593){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12839__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12839__auto____1.call(this,state_14593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12839__auto____0;
cljs$core$async$mix_$_state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12839__auto____1;
return cljs$core$async$mix_$_state_machine__12839__auto__;
})()
})();
var state__12939__auto__ = (function (){var statearr_14640 = f__12938__auto__();
(statearr_14640[(6)] = c__12937__auto___16096);

return statearr_14640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12939__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_16130 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_16130(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_16131 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_16131(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_16132 = (function() {
var G__16133 = null;
var G__16133__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__16133__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__16133 = function(p,v){
switch(arguments.length){
case 1:
return G__16133__1.call(this,p);
case 2:
return G__16133__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16133.cljs$core$IFn$_invoke$arity$1 = G__16133__1;
G__16133.cljs$core$IFn$_invoke$arity$2 = G__16133__2;
return G__16133;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14650 = arguments.length;
switch (G__14650) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16132(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16132(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14664 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14665){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14665 = meta14665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14666,meta14665__$1){
var self__ = this;
var _14666__$1 = this;
return (new cljs.core.async.t_cljs$core$async14664(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14665__$1));
}));

(cljs.core.async.t_cljs$core$async14664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14666){
var self__ = this;
var _14666__$1 = this;
return self__.meta14665;
}));

(cljs.core.async.t_cljs$core$async14664.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14664.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14664.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14664.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async14664.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async14664.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async14664.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async14664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14665","meta14665",-478588860,null)], null);
}));

(cljs.core.async.t_cljs$core$async14664.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14664");

(cljs.core.async.t_cljs$core$async14664.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14664");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14664.
 */
cljs.core.async.__GT_t_cljs$core$async14664 = (function cljs$core$async$__GT_t_cljs$core$async14664(ch,topic_fn,buf_fn,mults,ensure_mult,meta14665){
return (new cljs.core.async.t_cljs$core$async14664(ch,topic_fn,buf_fn,mults,ensure_mult,meta14665));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__14659 = arguments.length;
switch (G__14659) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__14655_SHARP_){
if(cljs.core.truth_((p1__14655_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14655_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__14655_SHARP_.call(null, topic)))){
return p1__14655_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14655_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async14664(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__12937__auto___16136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12938__auto__ = (function (){var switch__12838__auto__ = (function (state_14753){
var state_val_14754 = (state_14753[(1)]);
if((state_val_14754 === (7))){
var inst_14749 = (state_14753[(2)]);
var state_14753__$1 = state_14753;
var statearr_14759_16137 = state_14753__$1;
(statearr_14759_16137[(2)] = inst_14749);

(statearr_14759_16137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14754 === (20))){
var state_14753__$1 = state_14753;
var statearr_14762_16139 = state_14753__$1;
(statearr_14762_16139[(2)] = null);

(statearr_14762_16139[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14754 === (1))){
var state_14753__$1 = state_14753;
var statearr_14763_16140 = state_14753__$1;
(statearr_14763_16140[(2)] = null);

(statearr_14763_16140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14754 === (24))){
var inst_14732 = (state_14753[(7)]);
var inst_14741 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_14732);
var state_14753__$1 = state_14753;
var statearr_14766_16141 = state_14753__$1;
(statearr_14766_16141[(2)] = inst_14741);

(statearr_14766_16141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14754 === (4))){
var inst_14682 = (state_14753[(8)]);
var inst_14682__$1 = (state_14753[(2)]);
var inst_14683 = (inst_14682__$1 == null);
var state_14753__$1 = (function (){var statearr_14769 = state_14753;
(statearr_14769[(8)] = inst_14682__$1);

return statearr_14769;
})();
if(cljs.core.truth_(inst_14683)){
var statearr_14770_16142 = state_14753__$1;
(statearr_14770_16142[(1)] = (5));

} else {
var statearr_14772_16145 = state_14753__$1;
(statearr_14772_16145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14754 === (15))){
var inst_14726 = (state_14753[(2)]);
var state_14753__$1 = state_14753;
var statearr_14774_16146 = state_14753__$1;
(statearr_14774_16146[(2)] = inst_14726);

(statearr_14774_16146[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14754 === (21))){
var inst_14746 = (state_14753[(2)]);
var state_14753__$1 = (function (){var statearr_14777 = state_14753;
(statearr_14777[(9)] = inst_14746);

return statearr_14777;
})();
var statearr_14778_16147 = state_14753__$1;
(statearr_14778_16147[(2)] = null);

(statearr_14778_16147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14754 === (13))){
var inst_14707 = (state_14753[(10)]);
var inst_14709 = cljs.core.chunked_seq_QMARK_(inst_14707);
var state_14753__$1 = state_14753;
if(inst_14709){
var statearr_14781_16148 = state_14753__$1;
(statearr_14781_16148[(1)] = (16));

} else {
var statearr_14783_16149 = state_14753__$1;
(statearr_14783_16149[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14754 === (22))){
var inst_14738 = (state_14753[(2)]);
var state_14753__$1 = state_14753;
if(cljs.core.truth_(inst_14738)){
var statearr_14785_16150 = state_14753__$1;
(statearr_14785_16150[(1)] = (23));

} else {
var statearr_14786_16151 = state_14753__$1;
(statearr_14786_16151[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14754 === (6))){
var inst_14682 = (state_14753[(8)]);
var inst_14734 = (state_14753[(11)]);
var inst_14732 = (state_14753[(7)]);
var inst_14732__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_14682) : topic_fn.call(null, inst_14682));
var inst_14733 = cljs.core.deref(mults);
var inst_14734__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14733,inst_14732__$1);
var state_14753__$1 = (function (){var statearr_14787 = state_14753;
(statearr_14787[(11)] = inst_14734__$1);

(statearr_14787[(7)] = inst_14732__$1);

return statearr_14787;
})();
if(cljs.core.truth_(inst_14734__$1)){
var statearr_14788_16152 = state_14753__$1;
(statearr_14788_16152[(1)] = (19));

} else {
var statearr_14789_16153 = state_14753__$1;
(statearr_14789_16153[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14754 === (25))){
var inst_14743 = (state_14753[(2)]);
var state_14753__$1 = state_14753;
var statearr_14790_16156 = state_14753__$1;
(statearr_14790_16156[(2)] = inst_14743);

(statearr_14790_16156[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14754 === (17))){
var inst_14707 = (state_14753[(10)]);
var inst_14716 = cljs.core.first(inst_14707);
var inst_14718 = cljs.core.async.muxch_STAR_(inst_14716);
var inst_14719 = cljs.core.async.close_BANG_(inst_14718);
var inst_14720 = cljs.core.next(inst_14707);
var inst_14692 = inst_14720;
var inst_14693 = null;
var inst_14694 = (0);
var inst_14695 = (0);
var state_14753__$1 = (function (){var statearr_14793 = state_14753;
(statearr_14793[(12)] = inst_14695);

(statearr_14793[(13)] = inst_14693);

(statearr_14793[(14)] = inst_14692);

(statearr_14793[(15)] = inst_14719);

(statearr_14793[(16)] = inst_14694);

return statearr_14793;
})();
var statearr_14794_16157 = state_14753__$1;
(statearr_14794_16157[(2)] = null);

(statearr_14794_16157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14754 === (3))){
var inst_14751 = (state_14753[(2)]);
var state_14753__$1 = state_14753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14753__$1,inst_14751);
} else {
if((state_val_14754 === (12))){
var inst_14728 = (state_14753[(2)]);
var state_14753__$1 = state_14753;
var statearr_14795_16159 = state_14753__$1;
(statearr_14795_16159[(2)] = inst_14728);

(statearr_14795_16159[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14754 === (2))){
var state_14753__$1 = state_14753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14753__$1,(4),ch);
} else {
if((state_val_14754 === (23))){
var state_14753__$1 = state_14753;
var statearr_14796_16160 = state_14753__$1;
(statearr_14796_16160[(2)] = null);

(statearr_14796_16160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14754 === (19))){
var inst_14682 = (state_14753[(8)]);
var inst_14734 = (state_14753[(11)]);
var inst_14736 = cljs.core.async.muxch_STAR_(inst_14734);
var state_14753__$1 = state_14753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14753__$1,(22),inst_14736,inst_14682);
} else {
if((state_val_14754 === (11))){
var inst_14707 = (state_14753[(10)]);
var inst_14692 = (state_14753[(14)]);
var inst_14707__$1 = cljs.core.seq(inst_14692);
var state_14753__$1 = (function (){var statearr_14797 = state_14753;
(statearr_14797[(10)] = inst_14707__$1);

return statearr_14797;
})();
if(inst_14707__$1){
var statearr_14798_16161 = state_14753__$1;
(statearr_14798_16161[(1)] = (13));

} else {
var statearr_14799_16162 = state_14753__$1;
(statearr_14799_16162[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14754 === (9))){
var inst_14730 = (state_14753[(2)]);
var state_14753__$1 = state_14753;
var statearr_14800_16163 = state_14753__$1;
(statearr_14800_16163[(2)] = inst_14730);

(statearr_14800_16163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14754 === (5))){
var inst_14689 = cljs.core.deref(mults);
var inst_14690 = cljs.core.vals(inst_14689);
var inst_14691 = cljs.core.seq(inst_14690);
var inst_14692 = inst_14691;
var inst_14693 = null;
var inst_14694 = (0);
var inst_14695 = (0);
var state_14753__$1 = (function (){var statearr_14801 = state_14753;
(statearr_14801[(12)] = inst_14695);

(statearr_14801[(13)] = inst_14693);

(statearr_14801[(14)] = inst_14692);

(statearr_14801[(16)] = inst_14694);

return statearr_14801;
})();
var statearr_14802_16164 = state_14753__$1;
(statearr_14802_16164[(2)] = null);

(statearr_14802_16164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14754 === (14))){
var state_14753__$1 = state_14753;
var statearr_14806_16166 = state_14753__$1;
(statearr_14806_16166[(2)] = null);

(statearr_14806_16166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14754 === (16))){
var inst_14707 = (state_14753[(10)]);
var inst_14711 = cljs.core.chunk_first(inst_14707);
var inst_14712 = cljs.core.chunk_rest(inst_14707);
var inst_14713 = cljs.core.count(inst_14711);
var inst_14692 = inst_14712;
var inst_14693 = inst_14711;
var inst_14694 = inst_14713;
var inst_14695 = (0);
var state_14753__$1 = (function (){var statearr_14807 = state_14753;
(statearr_14807[(12)] = inst_14695);

(statearr_14807[(13)] = inst_14693);

(statearr_14807[(14)] = inst_14692);

(statearr_14807[(16)] = inst_14694);

return statearr_14807;
})();
var statearr_14808_16169 = state_14753__$1;
(statearr_14808_16169[(2)] = null);

(statearr_14808_16169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14754 === (10))){
var inst_14695 = (state_14753[(12)]);
var inst_14693 = (state_14753[(13)]);
var inst_14692 = (state_14753[(14)]);
var inst_14694 = (state_14753[(16)]);
var inst_14700 = cljs.core._nth(inst_14693,inst_14695);
var inst_14702 = cljs.core.async.muxch_STAR_(inst_14700);
var inst_14703 = cljs.core.async.close_BANG_(inst_14702);
var inst_14704 = (inst_14695 + (1));
var tmp14803 = inst_14693;
var tmp14804 = inst_14692;
var tmp14805 = inst_14694;
var inst_14692__$1 = tmp14804;
var inst_14693__$1 = tmp14803;
var inst_14694__$1 = tmp14805;
var inst_14695__$1 = inst_14704;
var state_14753__$1 = (function (){var statearr_14809 = state_14753;
(statearr_14809[(12)] = inst_14695__$1);

(statearr_14809[(17)] = inst_14703);

(statearr_14809[(13)] = inst_14693__$1);

(statearr_14809[(14)] = inst_14692__$1);

(statearr_14809[(16)] = inst_14694__$1);

return statearr_14809;
})();
var statearr_14810_16174 = state_14753__$1;
(statearr_14810_16174[(2)] = null);

(statearr_14810_16174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14754 === (18))){
var inst_14723 = (state_14753[(2)]);
var state_14753__$1 = state_14753;
var statearr_14811_16175 = state_14753__$1;
(statearr_14811_16175[(2)] = inst_14723);

(statearr_14811_16175[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14754 === (8))){
var inst_14695 = (state_14753[(12)]);
var inst_14694 = (state_14753[(16)]);
var inst_14697 = (inst_14695 < inst_14694);
var inst_14698 = inst_14697;
var state_14753__$1 = state_14753;
if(cljs.core.truth_(inst_14698)){
var statearr_14812_16180 = state_14753__$1;
(statearr_14812_16180[(1)] = (10));

} else {
var statearr_14813_16182 = state_14753__$1;
(statearr_14813_16182[(1)] = (11));

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
var cljs$core$async$state_machine__12839__auto__ = null;
var cljs$core$async$state_machine__12839__auto____0 = (function (){
var statearr_14814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14814[(0)] = cljs$core$async$state_machine__12839__auto__);

(statearr_14814[(1)] = (1));

return statearr_14814;
});
var cljs$core$async$state_machine__12839__auto____1 = (function (state_14753){
while(true){
var ret_value__12840__auto__ = (function (){try{while(true){
var result__12841__auto__ = switch__12838__auto__(state_14753);
if(cljs.core.keyword_identical_QMARK_(result__12841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12841__auto__;
}
break;
}
}catch (e14815){var ex__12842__auto__ = e14815;
var statearr_14816_16186 = state_14753;
(statearr_14816_16186[(2)] = ex__12842__auto__);


if(cljs.core.seq((state_14753[(4)]))){
var statearr_14817_16187 = state_14753;
(statearr_14817_16187[(1)] = cljs.core.first((state_14753[(4)])));

} else {
throw ex__12842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16190 = state_14753;
state_14753 = G__16190;
continue;
} else {
return ret_value__12840__auto__;
}
break;
}
});
cljs$core$async$state_machine__12839__auto__ = function(state_14753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12839__auto____1.call(this,state_14753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12839__auto____0;
cljs$core$async$state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12839__auto____1;
return cljs$core$async$state_machine__12839__auto__;
})()
})();
var state__12939__auto__ = (function (){var statearr_14818 = f__12938__auto__();
(statearr_14818[(6)] = c__12937__auto___16136);

return statearr_14818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12939__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__14820 = arguments.length;
switch (G__14820) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__14822 = arguments.length;
switch (G__14822) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__14826 = arguments.length;
switch (G__14826) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__12937__auto___16201 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12938__auto__ = (function (){var switch__12838__auto__ = (function (state_14881){
var state_val_14883 = (state_14881[(1)]);
if((state_val_14883 === (7))){
var state_14881__$1 = state_14881;
var statearr_14886_16203 = state_14881__$1;
(statearr_14886_16203[(2)] = null);

(statearr_14886_16203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14883 === (1))){
var state_14881__$1 = state_14881;
var statearr_14887_16204 = state_14881__$1;
(statearr_14887_16204[(2)] = null);

(statearr_14887_16204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14883 === (4))){
var inst_14837 = (state_14881[(7)]);
var inst_14838 = (state_14881[(8)]);
var inst_14840 = (inst_14838 < inst_14837);
var state_14881__$1 = state_14881;
if(cljs.core.truth_(inst_14840)){
var statearr_14893_16208 = state_14881__$1;
(statearr_14893_16208[(1)] = (6));

} else {
var statearr_14894_16209 = state_14881__$1;
(statearr_14894_16209[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14883 === (15))){
var inst_14867 = (state_14881[(9)]);
var inst_14872 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_14867);
var state_14881__$1 = state_14881;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14881__$1,(17),out,inst_14872);
} else {
if((state_val_14883 === (13))){
var inst_14867 = (state_14881[(9)]);
var inst_14867__$1 = (state_14881[(2)]);
var inst_14868 = cljs.core.some(cljs.core.nil_QMARK_,inst_14867__$1);
var state_14881__$1 = (function (){var statearr_14896 = state_14881;
(statearr_14896[(9)] = inst_14867__$1);

return statearr_14896;
})();
if(cljs.core.truth_(inst_14868)){
var statearr_14897_16210 = state_14881__$1;
(statearr_14897_16210[(1)] = (14));

} else {
var statearr_14898_16211 = state_14881__$1;
(statearr_14898_16211[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14883 === (6))){
var state_14881__$1 = state_14881;
var statearr_14901_16213 = state_14881__$1;
(statearr_14901_16213[(2)] = null);

(statearr_14901_16213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14883 === (17))){
var inst_14874 = (state_14881[(2)]);
var state_14881__$1 = (function (){var statearr_14909 = state_14881;
(statearr_14909[(10)] = inst_14874);

return statearr_14909;
})();
var statearr_14910_16215 = state_14881__$1;
(statearr_14910_16215[(2)] = null);

(statearr_14910_16215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14883 === (3))){
var inst_14879 = (state_14881[(2)]);
var state_14881__$1 = state_14881;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14881__$1,inst_14879);
} else {
if((state_val_14883 === (12))){
var _ = (function (){var statearr_14915 = state_14881;
(statearr_14915[(4)] = cljs.core.rest((state_14881[(4)])));

return statearr_14915;
})();
var state_14881__$1 = state_14881;
var ex14907 = (state_14881__$1[(2)]);
var statearr_14916_16219 = state_14881__$1;
(statearr_14916_16219[(5)] = ex14907);


if((ex14907 instanceof Object)){
var statearr_14918_16220 = state_14881__$1;
(statearr_14918_16220[(1)] = (11));

(statearr_14918_16220[(5)] = null);

} else {
throw ex14907;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14883 === (2))){
var inst_14836 = cljs.core.reset_BANG_(dctr,cnt);
var inst_14837 = cnt;
var inst_14838 = (0);
var state_14881__$1 = (function (){var statearr_14921 = state_14881;
(statearr_14921[(11)] = inst_14836);

(statearr_14921[(7)] = inst_14837);

(statearr_14921[(8)] = inst_14838);

return statearr_14921;
})();
var statearr_14922_16222 = state_14881__$1;
(statearr_14922_16222[(2)] = null);

(statearr_14922_16222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14883 === (11))){
var inst_14844 = (state_14881[(2)]);
var inst_14845 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_14881__$1 = (function (){var statearr_14924 = state_14881;
(statearr_14924[(12)] = inst_14844);

return statearr_14924;
})();
var statearr_14925_16224 = state_14881__$1;
(statearr_14925_16224[(2)] = inst_14845);

(statearr_14925_16224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14883 === (9))){
var inst_14838 = (state_14881[(8)]);
var _ = (function (){var statearr_14926 = state_14881;
(statearr_14926[(4)] = cljs.core.cons((12),(state_14881[(4)])));

return statearr_14926;
})();
var inst_14851 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_14838) : chs__$1.call(null, inst_14838));
var inst_14852 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_14838) : done.call(null, inst_14838));
var inst_14853 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_14851,inst_14852);
var ___$1 = (function (){var statearr_14927 = state_14881;
(statearr_14927[(4)] = cljs.core.rest((state_14881[(4)])));

return statearr_14927;
})();
var state_14881__$1 = state_14881;
var statearr_14928_16228 = state_14881__$1;
(statearr_14928_16228[(2)] = inst_14853);

(statearr_14928_16228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14883 === (5))){
var inst_14865 = (state_14881[(2)]);
var state_14881__$1 = (function (){var statearr_14930 = state_14881;
(statearr_14930[(13)] = inst_14865);

return statearr_14930;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14881__$1,(13),dchan);
} else {
if((state_val_14883 === (14))){
var inst_14870 = cljs.core.async.close_BANG_(out);
var state_14881__$1 = state_14881;
var statearr_14932_16230 = state_14881__$1;
(statearr_14932_16230[(2)] = inst_14870);

(statearr_14932_16230[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14883 === (16))){
var inst_14877 = (state_14881[(2)]);
var state_14881__$1 = state_14881;
var statearr_14933_16232 = state_14881__$1;
(statearr_14933_16232[(2)] = inst_14877);

(statearr_14933_16232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14883 === (10))){
var inst_14838 = (state_14881[(8)]);
var inst_14857 = (state_14881[(2)]);
var inst_14859 = (inst_14838 + (1));
var inst_14838__$1 = inst_14859;
var state_14881__$1 = (function (){var statearr_14934 = state_14881;
(statearr_14934[(14)] = inst_14857);

(statearr_14934[(8)] = inst_14838__$1);

return statearr_14934;
})();
var statearr_14936_16235 = state_14881__$1;
(statearr_14936_16235[(2)] = null);

(statearr_14936_16235[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14883 === (8))){
var inst_14863 = (state_14881[(2)]);
var state_14881__$1 = state_14881;
var statearr_14937_16237 = state_14881__$1;
(statearr_14937_16237[(2)] = inst_14863);

(statearr_14937_16237[(1)] = (5));


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
}
});
return (function() {
var cljs$core$async$state_machine__12839__auto__ = null;
var cljs$core$async$state_machine__12839__auto____0 = (function (){
var statearr_14939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14939[(0)] = cljs$core$async$state_machine__12839__auto__);

(statearr_14939[(1)] = (1));

return statearr_14939;
});
var cljs$core$async$state_machine__12839__auto____1 = (function (state_14881){
while(true){
var ret_value__12840__auto__ = (function (){try{while(true){
var result__12841__auto__ = switch__12838__auto__(state_14881);
if(cljs.core.keyword_identical_QMARK_(result__12841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12841__auto__;
}
break;
}
}catch (e14940){var ex__12842__auto__ = e14940;
var statearr_14941_16240 = state_14881;
(statearr_14941_16240[(2)] = ex__12842__auto__);


if(cljs.core.seq((state_14881[(4)]))){
var statearr_14942_16241 = state_14881;
(statearr_14942_16241[(1)] = cljs.core.first((state_14881[(4)])));

} else {
throw ex__12842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16243 = state_14881;
state_14881 = G__16243;
continue;
} else {
return ret_value__12840__auto__;
}
break;
}
});
cljs$core$async$state_machine__12839__auto__ = function(state_14881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12839__auto____1.call(this,state_14881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12839__auto____0;
cljs$core$async$state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12839__auto____1;
return cljs$core$async$state_machine__12839__auto__;
})()
})();
var state__12939__auto__ = (function (){var statearr_14946 = f__12938__auto__();
(statearr_14946[(6)] = c__12937__auto___16201);

return statearr_14946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12939__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__14957 = arguments.length;
switch (G__14957) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12937__auto___16251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12938__auto__ = (function (){var switch__12838__auto__ = (function (state_15000){
var state_val_15001 = (state_15000[(1)]);
if((state_val_15001 === (7))){
var inst_14976 = (state_15000[(7)]);
var inst_14977 = (state_15000[(8)]);
var inst_14976__$1 = (state_15000[(2)]);
var inst_14977__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14976__$1,(0),null);
var inst_14980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14976__$1,(1),null);
var inst_14981 = (inst_14977__$1 == null);
var state_15000__$1 = (function (){var statearr_15005 = state_15000;
(statearr_15005[(7)] = inst_14976__$1);

(statearr_15005[(8)] = inst_14977__$1);

(statearr_15005[(9)] = inst_14980);

return statearr_15005;
})();
if(cljs.core.truth_(inst_14981)){
var statearr_15006_16259 = state_15000__$1;
(statearr_15006_16259[(1)] = (8));

} else {
var statearr_15007_16261 = state_15000__$1;
(statearr_15007_16261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15001 === (1))){
var inst_14964 = cljs.core.vec(chs);
var inst_14965 = inst_14964;
var state_15000__$1 = (function (){var statearr_15013 = state_15000;
(statearr_15013[(10)] = inst_14965);

return statearr_15013;
})();
var statearr_15015_16264 = state_15000__$1;
(statearr_15015_16264[(2)] = null);

(statearr_15015_16264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15001 === (4))){
var inst_14965 = (state_15000[(10)]);
var state_15000__$1 = state_15000;
return cljs.core.async.ioc_alts_BANG_(state_15000__$1,(7),inst_14965);
} else {
if((state_val_15001 === (6))){
var inst_14996 = (state_15000[(2)]);
var state_15000__$1 = state_15000;
var statearr_15017_16266 = state_15000__$1;
(statearr_15017_16266[(2)] = inst_14996);

(statearr_15017_16266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15001 === (3))){
var inst_14998 = (state_15000[(2)]);
var state_15000__$1 = state_15000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15000__$1,inst_14998);
} else {
if((state_val_15001 === (2))){
var inst_14965 = (state_15000[(10)]);
var inst_14967 = cljs.core.count(inst_14965);
var inst_14968 = (inst_14967 > (0));
var state_15000__$1 = state_15000;
if(cljs.core.truth_(inst_14968)){
var statearr_15020_16267 = state_15000__$1;
(statearr_15020_16267[(1)] = (4));

} else {
var statearr_15021_16268 = state_15000__$1;
(statearr_15021_16268[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15001 === (11))){
var inst_14965 = (state_15000[(10)]);
var inst_14989 = (state_15000[(2)]);
var tmp15018 = inst_14965;
var inst_14965__$1 = tmp15018;
var state_15000__$1 = (function (){var statearr_15025 = state_15000;
(statearr_15025[(11)] = inst_14989);

(statearr_15025[(10)] = inst_14965__$1);

return statearr_15025;
})();
var statearr_15026_16269 = state_15000__$1;
(statearr_15026_16269[(2)] = null);

(statearr_15026_16269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15001 === (9))){
var inst_14977 = (state_15000[(8)]);
var state_15000__$1 = state_15000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15000__$1,(11),out,inst_14977);
} else {
if((state_val_15001 === (5))){
var inst_14994 = cljs.core.async.close_BANG_(out);
var state_15000__$1 = state_15000;
var statearr_15032_16270 = state_15000__$1;
(statearr_15032_16270[(2)] = inst_14994);

(statearr_15032_16270[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15001 === (10))){
var inst_14992 = (state_15000[(2)]);
var state_15000__$1 = state_15000;
var statearr_15033_16271 = state_15000__$1;
(statearr_15033_16271[(2)] = inst_14992);

(statearr_15033_16271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15001 === (8))){
var inst_14976 = (state_15000[(7)]);
var inst_14977 = (state_15000[(8)]);
var inst_14980 = (state_15000[(9)]);
var inst_14965 = (state_15000[(10)]);
var inst_14983 = (function (){var cs = inst_14965;
var vec__14972 = inst_14976;
var v = inst_14977;
var c = inst_14980;
return (function (p1__14950_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__14950_SHARP_);
});
})();
var inst_14984 = cljs.core.filterv(inst_14983,inst_14965);
var inst_14965__$1 = inst_14984;
var state_15000__$1 = (function (){var statearr_15034 = state_15000;
(statearr_15034[(10)] = inst_14965__$1);

return statearr_15034;
})();
var statearr_15035_16273 = state_15000__$1;
(statearr_15035_16273[(2)] = null);

(statearr_15035_16273[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__12839__auto__ = null;
var cljs$core$async$state_machine__12839__auto____0 = (function (){
var statearr_15046 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15046[(0)] = cljs$core$async$state_machine__12839__auto__);

(statearr_15046[(1)] = (1));

return statearr_15046;
});
var cljs$core$async$state_machine__12839__auto____1 = (function (state_15000){
while(true){
var ret_value__12840__auto__ = (function (){try{while(true){
var result__12841__auto__ = switch__12838__auto__(state_15000);
if(cljs.core.keyword_identical_QMARK_(result__12841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12841__auto__;
}
break;
}
}catch (e15048){var ex__12842__auto__ = e15048;
var statearr_15049_16277 = state_15000;
(statearr_15049_16277[(2)] = ex__12842__auto__);


if(cljs.core.seq((state_15000[(4)]))){
var statearr_15052_16278 = state_15000;
(statearr_15052_16278[(1)] = cljs.core.first((state_15000[(4)])));

} else {
throw ex__12842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16279 = state_15000;
state_15000 = G__16279;
continue;
} else {
return ret_value__12840__auto__;
}
break;
}
});
cljs$core$async$state_machine__12839__auto__ = function(state_15000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12839__auto____1.call(this,state_15000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12839__auto____0;
cljs$core$async$state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12839__auto____1;
return cljs$core$async$state_machine__12839__auto__;
})()
})();
var state__12939__auto__ = (function (){var statearr_15056 = f__12938__auto__();
(statearr_15056[(6)] = c__12937__auto___16251);

return statearr_15056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12939__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__15063 = arguments.length;
switch (G__15063) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12937__auto___16286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12938__auto__ = (function (){var switch__12838__auto__ = (function (state_15097){
var state_val_15098 = (state_15097[(1)]);
if((state_val_15098 === (7))){
var inst_15076 = (state_15097[(7)]);
var inst_15076__$1 = (state_15097[(2)]);
var inst_15078 = (inst_15076__$1 == null);
var inst_15079 = cljs.core.not(inst_15078);
var state_15097__$1 = (function (){var statearr_15102 = state_15097;
(statearr_15102[(7)] = inst_15076__$1);

return statearr_15102;
})();
if(inst_15079){
var statearr_15103_16288 = state_15097__$1;
(statearr_15103_16288[(1)] = (8));

} else {
var statearr_15106_16289 = state_15097__$1;
(statearr_15106_16289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (1))){
var inst_15071 = (0);
var state_15097__$1 = (function (){var statearr_15108 = state_15097;
(statearr_15108[(8)] = inst_15071);

return statearr_15108;
})();
var statearr_15109_16290 = state_15097__$1;
(statearr_15109_16290[(2)] = null);

(statearr_15109_16290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (4))){
var state_15097__$1 = state_15097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15097__$1,(7),ch);
} else {
if((state_val_15098 === (6))){
var inst_15092 = (state_15097[(2)]);
var state_15097__$1 = state_15097;
var statearr_15113_16291 = state_15097__$1;
(statearr_15113_16291[(2)] = inst_15092);

(statearr_15113_16291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (3))){
var inst_15094 = (state_15097[(2)]);
var inst_15095 = cljs.core.async.close_BANG_(out);
var state_15097__$1 = (function (){var statearr_15116 = state_15097;
(statearr_15116[(9)] = inst_15094);

return statearr_15116;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15097__$1,inst_15095);
} else {
if((state_val_15098 === (2))){
var inst_15071 = (state_15097[(8)]);
var inst_15073 = (inst_15071 < n);
var state_15097__$1 = state_15097;
if(cljs.core.truth_(inst_15073)){
var statearr_15119_16294 = state_15097__$1;
(statearr_15119_16294[(1)] = (4));

} else {
var statearr_15120_16295 = state_15097__$1;
(statearr_15120_16295[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (11))){
var inst_15071 = (state_15097[(8)]);
var inst_15083 = (state_15097[(2)]);
var inst_15084 = (inst_15071 + (1));
var inst_15071__$1 = inst_15084;
var state_15097__$1 = (function (){var statearr_15122 = state_15097;
(statearr_15122[(8)] = inst_15071__$1);

(statearr_15122[(10)] = inst_15083);

return statearr_15122;
})();
var statearr_15124_16296 = state_15097__$1;
(statearr_15124_16296[(2)] = null);

(statearr_15124_16296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (9))){
var state_15097__$1 = state_15097;
var statearr_15126_16298 = state_15097__$1;
(statearr_15126_16298[(2)] = null);

(statearr_15126_16298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (5))){
var state_15097__$1 = state_15097;
var statearr_15127_16299 = state_15097__$1;
(statearr_15127_16299[(2)] = null);

(statearr_15127_16299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (10))){
var inst_15089 = (state_15097[(2)]);
var state_15097__$1 = state_15097;
var statearr_15128_16301 = state_15097__$1;
(statearr_15128_16301[(2)] = inst_15089);

(statearr_15128_16301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (8))){
var inst_15076 = (state_15097[(7)]);
var state_15097__$1 = state_15097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15097__$1,(11),out,inst_15076);
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
});
return (function() {
var cljs$core$async$state_machine__12839__auto__ = null;
var cljs$core$async$state_machine__12839__auto____0 = (function (){
var statearr_15129 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15129[(0)] = cljs$core$async$state_machine__12839__auto__);

(statearr_15129[(1)] = (1));

return statearr_15129;
});
var cljs$core$async$state_machine__12839__auto____1 = (function (state_15097){
while(true){
var ret_value__12840__auto__ = (function (){try{while(true){
var result__12841__auto__ = switch__12838__auto__(state_15097);
if(cljs.core.keyword_identical_QMARK_(result__12841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12841__auto__;
}
break;
}
}catch (e15131){var ex__12842__auto__ = e15131;
var statearr_15132_16308 = state_15097;
(statearr_15132_16308[(2)] = ex__12842__auto__);


if(cljs.core.seq((state_15097[(4)]))){
var statearr_15133_16309 = state_15097;
(statearr_15133_16309[(1)] = cljs.core.first((state_15097[(4)])));

} else {
throw ex__12842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16311 = state_15097;
state_15097 = G__16311;
continue;
} else {
return ret_value__12840__auto__;
}
break;
}
});
cljs$core$async$state_machine__12839__auto__ = function(state_15097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12839__auto____1.call(this,state_15097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12839__auto____0;
cljs$core$async$state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12839__auto____1;
return cljs$core$async$state_machine__12839__auto__;
})()
})();
var state__12939__auto__ = (function (){var statearr_15134 = f__12938__auto__();
(statearr_15134[(6)] = c__12937__auto___16286);

return statearr_15134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12939__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15158 = (function (f,ch,meta15149,_,fn1,meta15159){
this.f = f;
this.ch = ch;
this.meta15149 = meta15149;
this._ = _;
this.fn1 = fn1;
this.meta15159 = meta15159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15160,meta15159__$1){
var self__ = this;
var _15160__$1 = this;
return (new cljs.core.async.t_cljs$core$async15158(self__.f,self__.ch,self__.meta15149,self__._,self__.fn1,meta15159__$1));
}));

(cljs.core.async.t_cljs$core$async15158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15160){
var self__ = this;
var _15160__$1 = this;
return self__.meta15159;
}));

(cljs.core.async.t_cljs$core$async15158.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15158.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async15158.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15158.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__15136_SHARP_){
var G__15169 = (((p1__15136_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15136_SHARP_) : self__.f.call(null, p1__15136_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15169) : f1.call(null, G__15169));
});
}));

(cljs.core.async.t_cljs$core$async15158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15149","meta15149",-1550711150,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15148","cljs.core.async/t_cljs$core$async15148",-1226790414,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15159","meta15159",-1990624139,null)], null);
}));

(cljs.core.async.t_cljs$core$async15158.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15158");

(cljs.core.async.t_cljs$core$async15158.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15158");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15158.
 */
cljs.core.async.__GT_t_cljs$core$async15158 = (function cljs$core$async$__GT_t_cljs$core$async15158(f,ch,meta15149,_,fn1,meta15159){
return (new cljs.core.async.t_cljs$core$async15158(f,ch,meta15149,_,fn1,meta15159));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15148 = (function (f,ch,meta15149){
this.f = f;
this.ch = ch;
this.meta15149 = meta15149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15150,meta15149__$1){
var self__ = this;
var _15150__$1 = this;
return (new cljs.core.async.t_cljs$core$async15148(self__.f,self__.ch,meta15149__$1));
}));

(cljs.core.async.t_cljs$core$async15148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15150){
var self__ = this;
var _15150__$1 = this;
return self__.meta15149;
}));

(cljs.core.async.t_cljs$core$async15148.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15148.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15148.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15148.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15148.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async15158(self__.f,self__.ch,self__.meta15149,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15181 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15181) : self__.f.call(null, G__15181));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async15148.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15148.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async15148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15149","meta15149",-1550711150,null)], null);
}));

(cljs.core.async.t_cljs$core$async15148.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15148");

(cljs.core.async.t_cljs$core$async15148.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15148");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15148.
 */
cljs.core.async.__GT_t_cljs$core$async15148 = (function cljs$core$async$__GT_t_cljs$core$async15148(f,ch,meta15149){
return (new cljs.core.async.t_cljs$core$async15148(f,ch,meta15149));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15148(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15191 = (function (f,ch,meta15192){
this.f = f;
this.ch = ch;
this.meta15192 = meta15192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15193,meta15192__$1){
var self__ = this;
var _15193__$1 = this;
return (new cljs.core.async.t_cljs$core$async15191(self__.f,self__.ch,meta15192__$1));
}));

(cljs.core.async.t_cljs$core$async15191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15193){
var self__ = this;
var _15193__$1 = this;
return self__.meta15192;
}));

(cljs.core.async.t_cljs$core$async15191.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15191.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15191.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15191.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15191.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15191.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async15191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15192","meta15192",1174713655,null)], null);
}));

(cljs.core.async.t_cljs$core$async15191.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15191");

(cljs.core.async.t_cljs$core$async15191.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15191");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15191.
 */
cljs.core.async.__GT_t_cljs$core$async15191 = (function cljs$core$async$__GT_t_cljs$core$async15191(f,ch,meta15192){
return (new cljs.core.async.t_cljs$core$async15191(f,ch,meta15192));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15191(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15199 = (function (p,ch,meta15200){
this.p = p;
this.ch = ch;
this.meta15200 = meta15200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15201,meta15200__$1){
var self__ = this;
var _15201__$1 = this;
return (new cljs.core.async.t_cljs$core$async15199(self__.p,self__.ch,meta15200__$1));
}));

(cljs.core.async.t_cljs$core$async15199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15201){
var self__ = this;
var _15201__$1 = this;
return self__.meta15200;
}));

(cljs.core.async.t_cljs$core$async15199.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15199.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15199.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15199.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15199.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15199.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15199.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async15199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15200","meta15200",-1201557543,null)], null);
}));

(cljs.core.async.t_cljs$core$async15199.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15199");

(cljs.core.async.t_cljs$core$async15199.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15199");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15199.
 */
cljs.core.async.__GT_t_cljs$core$async15199 = (function cljs$core$async$__GT_t_cljs$core$async15199(p,ch,meta15200){
return (new cljs.core.async.t_cljs$core$async15199(p,ch,meta15200));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async15199(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__15211 = arguments.length;
switch (G__15211) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12937__auto___16329 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12938__auto__ = (function (){var switch__12838__auto__ = (function (state_15237){
var state_val_15238 = (state_15237[(1)]);
if((state_val_15238 === (7))){
var inst_15231 = (state_15237[(2)]);
var state_15237__$1 = state_15237;
var statearr_15242_16330 = state_15237__$1;
(statearr_15242_16330[(2)] = inst_15231);

(statearr_15242_16330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15238 === (1))){
var state_15237__$1 = state_15237;
var statearr_15244_16331 = state_15237__$1;
(statearr_15244_16331[(2)] = null);

(statearr_15244_16331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15238 === (4))){
var inst_15217 = (state_15237[(7)]);
var inst_15217__$1 = (state_15237[(2)]);
var inst_15218 = (inst_15217__$1 == null);
var state_15237__$1 = (function (){var statearr_15245 = state_15237;
(statearr_15245[(7)] = inst_15217__$1);

return statearr_15245;
})();
if(cljs.core.truth_(inst_15218)){
var statearr_15246_16335 = state_15237__$1;
(statearr_15246_16335[(1)] = (5));

} else {
var statearr_15247_16336 = state_15237__$1;
(statearr_15247_16336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15238 === (6))){
var inst_15217 = (state_15237[(7)]);
var inst_15222 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15217) : p.call(null, inst_15217));
var state_15237__$1 = state_15237;
if(cljs.core.truth_(inst_15222)){
var statearr_15248_16337 = state_15237__$1;
(statearr_15248_16337[(1)] = (8));

} else {
var statearr_15250_16338 = state_15237__$1;
(statearr_15250_16338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15238 === (3))){
var inst_15234 = (state_15237[(2)]);
var state_15237__$1 = state_15237;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15237__$1,inst_15234);
} else {
if((state_val_15238 === (2))){
var state_15237__$1 = state_15237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15237__$1,(4),ch);
} else {
if((state_val_15238 === (11))){
var inst_15225 = (state_15237[(2)]);
var state_15237__$1 = state_15237;
var statearr_15251_16339 = state_15237__$1;
(statearr_15251_16339[(2)] = inst_15225);

(statearr_15251_16339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15238 === (9))){
var state_15237__$1 = state_15237;
var statearr_15252_16342 = state_15237__$1;
(statearr_15252_16342[(2)] = null);

(statearr_15252_16342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15238 === (5))){
var inst_15220 = cljs.core.async.close_BANG_(out);
var state_15237__$1 = state_15237;
var statearr_15256_16343 = state_15237__$1;
(statearr_15256_16343[(2)] = inst_15220);

(statearr_15256_16343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15238 === (10))){
var inst_15228 = (state_15237[(2)]);
var state_15237__$1 = (function (){var statearr_15257 = state_15237;
(statearr_15257[(8)] = inst_15228);

return statearr_15257;
})();
var statearr_15261_16345 = state_15237__$1;
(statearr_15261_16345[(2)] = null);

(statearr_15261_16345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15238 === (8))){
var inst_15217 = (state_15237[(7)]);
var state_15237__$1 = state_15237;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15237__$1,(11),out,inst_15217);
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
});
return (function() {
var cljs$core$async$state_machine__12839__auto__ = null;
var cljs$core$async$state_machine__12839__auto____0 = (function (){
var statearr_15263 = [null,null,null,null,null,null,null,null,null];
(statearr_15263[(0)] = cljs$core$async$state_machine__12839__auto__);

(statearr_15263[(1)] = (1));

return statearr_15263;
});
var cljs$core$async$state_machine__12839__auto____1 = (function (state_15237){
while(true){
var ret_value__12840__auto__ = (function (){try{while(true){
var result__12841__auto__ = switch__12838__auto__(state_15237);
if(cljs.core.keyword_identical_QMARK_(result__12841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12841__auto__;
}
break;
}
}catch (e15273){var ex__12842__auto__ = e15273;
var statearr_15274_16347 = state_15237;
(statearr_15274_16347[(2)] = ex__12842__auto__);


if(cljs.core.seq((state_15237[(4)]))){
var statearr_15276_16349 = state_15237;
(statearr_15276_16349[(1)] = cljs.core.first((state_15237[(4)])));

} else {
throw ex__12842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16350 = state_15237;
state_15237 = G__16350;
continue;
} else {
return ret_value__12840__auto__;
}
break;
}
});
cljs$core$async$state_machine__12839__auto__ = function(state_15237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12839__auto____1.call(this,state_15237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12839__auto____0;
cljs$core$async$state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12839__auto____1;
return cljs$core$async$state_machine__12839__auto__;
})()
})();
var state__12939__auto__ = (function (){var statearr_15279 = f__12938__auto__();
(statearr_15279[(6)] = c__12937__auto___16329);

return statearr_15279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12939__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15286 = arguments.length;
switch (G__15286) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12937__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12938__auto__ = (function (){var switch__12838__auto__ = (function (state_15352){
var state_val_15353 = (state_15352[(1)]);
if((state_val_15353 === (7))){
var inst_15348 = (state_15352[(2)]);
var state_15352__$1 = state_15352;
var statearr_15355_16355 = state_15352__$1;
(statearr_15355_16355[(2)] = inst_15348);

(statearr_15355_16355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (20))){
var inst_15317 = (state_15352[(7)]);
var inst_15328 = (state_15352[(2)]);
var inst_15329 = cljs.core.next(inst_15317);
var inst_15302 = inst_15329;
var inst_15303 = null;
var inst_15304 = (0);
var inst_15305 = (0);
var state_15352__$1 = (function (){var statearr_15356 = state_15352;
(statearr_15356[(8)] = inst_15304);

(statearr_15356[(9)] = inst_15302);

(statearr_15356[(10)] = inst_15305);

(statearr_15356[(11)] = inst_15328);

(statearr_15356[(12)] = inst_15303);

return statearr_15356;
})();
var statearr_15357_16357 = state_15352__$1;
(statearr_15357_16357[(2)] = null);

(statearr_15357_16357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (1))){
var state_15352__$1 = state_15352;
var statearr_15358_16358 = state_15352__$1;
(statearr_15358_16358[(2)] = null);

(statearr_15358_16358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (4))){
var inst_15290 = (state_15352[(13)]);
var inst_15290__$1 = (state_15352[(2)]);
var inst_15291 = (inst_15290__$1 == null);
var state_15352__$1 = (function (){var statearr_15361 = state_15352;
(statearr_15361[(13)] = inst_15290__$1);

return statearr_15361;
})();
if(cljs.core.truth_(inst_15291)){
var statearr_15364_16359 = state_15352__$1;
(statearr_15364_16359[(1)] = (5));

} else {
var statearr_15365_16360 = state_15352__$1;
(statearr_15365_16360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (15))){
var state_15352__$1 = state_15352;
var statearr_15370_16361 = state_15352__$1;
(statearr_15370_16361[(2)] = null);

(statearr_15370_16361[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (21))){
var state_15352__$1 = state_15352;
var statearr_15371_16363 = state_15352__$1;
(statearr_15371_16363[(2)] = null);

(statearr_15371_16363[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (13))){
var inst_15304 = (state_15352[(8)]);
var inst_15302 = (state_15352[(9)]);
var inst_15305 = (state_15352[(10)]);
var inst_15303 = (state_15352[(12)]);
var inst_15313 = (state_15352[(2)]);
var inst_15314 = (inst_15305 + (1));
var tmp15367 = inst_15304;
var tmp15368 = inst_15302;
var tmp15369 = inst_15303;
var inst_15302__$1 = tmp15368;
var inst_15303__$1 = tmp15369;
var inst_15304__$1 = tmp15367;
var inst_15305__$1 = inst_15314;
var state_15352__$1 = (function (){var statearr_15372 = state_15352;
(statearr_15372[(8)] = inst_15304__$1);

(statearr_15372[(9)] = inst_15302__$1);

(statearr_15372[(14)] = inst_15313);

(statearr_15372[(10)] = inst_15305__$1);

(statearr_15372[(12)] = inst_15303__$1);

return statearr_15372;
})();
var statearr_15373_16365 = state_15352__$1;
(statearr_15373_16365[(2)] = null);

(statearr_15373_16365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (22))){
var state_15352__$1 = state_15352;
var statearr_15374_16366 = state_15352__$1;
(statearr_15374_16366[(2)] = null);

(statearr_15374_16366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (6))){
var inst_15290 = (state_15352[(13)]);
var inst_15300 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15290) : f.call(null, inst_15290));
var inst_15301 = cljs.core.seq(inst_15300);
var inst_15302 = inst_15301;
var inst_15303 = null;
var inst_15304 = (0);
var inst_15305 = (0);
var state_15352__$1 = (function (){var statearr_15379 = state_15352;
(statearr_15379[(8)] = inst_15304);

(statearr_15379[(9)] = inst_15302);

(statearr_15379[(10)] = inst_15305);

(statearr_15379[(12)] = inst_15303);

return statearr_15379;
})();
var statearr_15381_16368 = state_15352__$1;
(statearr_15381_16368[(2)] = null);

(statearr_15381_16368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (17))){
var inst_15317 = (state_15352[(7)]);
var inst_15321 = cljs.core.chunk_first(inst_15317);
var inst_15322 = cljs.core.chunk_rest(inst_15317);
var inst_15323 = cljs.core.count(inst_15321);
var inst_15302 = inst_15322;
var inst_15303 = inst_15321;
var inst_15304 = inst_15323;
var inst_15305 = (0);
var state_15352__$1 = (function (){var statearr_15382 = state_15352;
(statearr_15382[(8)] = inst_15304);

(statearr_15382[(9)] = inst_15302);

(statearr_15382[(10)] = inst_15305);

(statearr_15382[(12)] = inst_15303);

return statearr_15382;
})();
var statearr_15383_16370 = state_15352__$1;
(statearr_15383_16370[(2)] = null);

(statearr_15383_16370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (3))){
var inst_15350 = (state_15352[(2)]);
var state_15352__$1 = state_15352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15352__$1,inst_15350);
} else {
if((state_val_15353 === (12))){
var inst_15337 = (state_15352[(2)]);
var state_15352__$1 = state_15352;
var statearr_15386_16372 = state_15352__$1;
(statearr_15386_16372[(2)] = inst_15337);

(statearr_15386_16372[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (2))){
var state_15352__$1 = state_15352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15352__$1,(4),in$);
} else {
if((state_val_15353 === (23))){
var inst_15346 = (state_15352[(2)]);
var state_15352__$1 = state_15352;
var statearr_15388_16373 = state_15352__$1;
(statearr_15388_16373[(2)] = inst_15346);

(statearr_15388_16373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (19))){
var inst_15332 = (state_15352[(2)]);
var state_15352__$1 = state_15352;
var statearr_15389_16374 = state_15352__$1;
(statearr_15389_16374[(2)] = inst_15332);

(statearr_15389_16374[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (11))){
var inst_15302 = (state_15352[(9)]);
var inst_15317 = (state_15352[(7)]);
var inst_15317__$1 = cljs.core.seq(inst_15302);
var state_15352__$1 = (function (){var statearr_15390 = state_15352;
(statearr_15390[(7)] = inst_15317__$1);

return statearr_15390;
})();
if(inst_15317__$1){
var statearr_15391_16376 = state_15352__$1;
(statearr_15391_16376[(1)] = (14));

} else {
var statearr_15393_16377 = state_15352__$1;
(statearr_15393_16377[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (9))){
var inst_15339 = (state_15352[(2)]);
var inst_15341 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15352__$1 = (function (){var statearr_15394 = state_15352;
(statearr_15394[(15)] = inst_15339);

return statearr_15394;
})();
if(cljs.core.truth_(inst_15341)){
var statearr_15395_16378 = state_15352__$1;
(statearr_15395_16378[(1)] = (21));

} else {
var statearr_15396_16379 = state_15352__$1;
(statearr_15396_16379[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (5))){
var inst_15293 = cljs.core.async.close_BANG_(out);
var state_15352__$1 = state_15352;
var statearr_15397_16380 = state_15352__$1;
(statearr_15397_16380[(2)] = inst_15293);

(statearr_15397_16380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (14))){
var inst_15317 = (state_15352[(7)]);
var inst_15319 = cljs.core.chunked_seq_QMARK_(inst_15317);
var state_15352__$1 = state_15352;
if(inst_15319){
var statearr_15398_16381 = state_15352__$1;
(statearr_15398_16381[(1)] = (17));

} else {
var statearr_15399_16382 = state_15352__$1;
(statearr_15399_16382[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (16))){
var inst_15335 = (state_15352[(2)]);
var state_15352__$1 = state_15352;
var statearr_15400_16383 = state_15352__$1;
(statearr_15400_16383[(2)] = inst_15335);

(statearr_15400_16383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (10))){
var inst_15305 = (state_15352[(10)]);
var inst_15303 = (state_15352[(12)]);
var inst_15310 = cljs.core._nth(inst_15303,inst_15305);
var state_15352__$1 = state_15352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15352__$1,(13),out,inst_15310);
} else {
if((state_val_15353 === (18))){
var inst_15317 = (state_15352[(7)]);
var inst_15326 = cljs.core.first(inst_15317);
var state_15352__$1 = state_15352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15352__$1,(20),out,inst_15326);
} else {
if((state_val_15353 === (8))){
var inst_15304 = (state_15352[(8)]);
var inst_15305 = (state_15352[(10)]);
var inst_15307 = (inst_15305 < inst_15304);
var inst_15308 = inst_15307;
var state_15352__$1 = state_15352;
if(cljs.core.truth_(inst_15308)){
var statearr_15402_16385 = state_15352__$1;
(statearr_15402_16385[(1)] = (10));

} else {
var statearr_15403_16386 = state_15352__$1;
(statearr_15403_16386[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__12839__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12839__auto____0 = (function (){
var statearr_15405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15405[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12839__auto__);

(statearr_15405[(1)] = (1));

return statearr_15405;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12839__auto____1 = (function (state_15352){
while(true){
var ret_value__12840__auto__ = (function (){try{while(true){
var result__12841__auto__ = switch__12838__auto__(state_15352);
if(cljs.core.keyword_identical_QMARK_(result__12841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12841__auto__;
}
break;
}
}catch (e15406){var ex__12842__auto__ = e15406;
var statearr_15408_16387 = state_15352;
(statearr_15408_16387[(2)] = ex__12842__auto__);


if(cljs.core.seq((state_15352[(4)]))){
var statearr_15409_16388 = state_15352;
(statearr_15409_16388[(1)] = cljs.core.first((state_15352[(4)])));

} else {
throw ex__12842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16389 = state_15352;
state_15352 = G__16389;
continue;
} else {
return ret_value__12840__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12839__auto__ = function(state_15352){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12839__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12839__auto____1.call(this,state_15352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12839__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12839__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12839__auto__;
})()
})();
var state__12939__auto__ = (function (){var statearr_15411 = f__12938__auto__();
(statearr_15411[(6)] = c__12937__auto__);

return statearr_15411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12939__auto__);
}));

return c__12937__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15417 = arguments.length;
switch (G__15417) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__15423 = arguments.length;
switch (G__15423) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__15431 = arguments.length;
switch (G__15431) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12937__auto___16395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12938__auto__ = (function (){var switch__12838__auto__ = (function (state_15464){
var state_val_15465 = (state_15464[(1)]);
if((state_val_15465 === (7))){
var inst_15459 = (state_15464[(2)]);
var state_15464__$1 = state_15464;
var statearr_15467_16397 = state_15464__$1;
(statearr_15467_16397[(2)] = inst_15459);

(statearr_15467_16397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15465 === (1))){
var inst_15435 = null;
var state_15464__$1 = (function (){var statearr_15469 = state_15464;
(statearr_15469[(7)] = inst_15435);

return statearr_15469;
})();
var statearr_15471_16398 = state_15464__$1;
(statearr_15471_16398[(2)] = null);

(statearr_15471_16398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15465 === (4))){
var inst_15440 = (state_15464[(8)]);
var inst_15440__$1 = (state_15464[(2)]);
var inst_15443 = (inst_15440__$1 == null);
var inst_15445 = cljs.core.not(inst_15443);
var state_15464__$1 = (function (){var statearr_15475 = state_15464;
(statearr_15475[(8)] = inst_15440__$1);

return statearr_15475;
})();
if(inst_15445){
var statearr_15476_16401 = state_15464__$1;
(statearr_15476_16401[(1)] = (5));

} else {
var statearr_15477_16402 = state_15464__$1;
(statearr_15477_16402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15465 === (6))){
var state_15464__$1 = state_15464;
var statearr_15479_16403 = state_15464__$1;
(statearr_15479_16403[(2)] = null);

(statearr_15479_16403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15465 === (3))){
var inst_15461 = (state_15464[(2)]);
var inst_15462 = cljs.core.async.close_BANG_(out);
var state_15464__$1 = (function (){var statearr_15483 = state_15464;
(statearr_15483[(9)] = inst_15461);

return statearr_15483;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15464__$1,inst_15462);
} else {
if((state_val_15465 === (2))){
var state_15464__$1 = state_15464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15464__$1,(4),ch);
} else {
if((state_val_15465 === (11))){
var inst_15440 = (state_15464[(8)]);
var inst_15453 = (state_15464[(2)]);
var inst_15435 = inst_15440;
var state_15464__$1 = (function (){var statearr_15486 = state_15464;
(statearr_15486[(10)] = inst_15453);

(statearr_15486[(7)] = inst_15435);

return statearr_15486;
})();
var statearr_15489_16405 = state_15464__$1;
(statearr_15489_16405[(2)] = null);

(statearr_15489_16405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15465 === (9))){
var inst_15440 = (state_15464[(8)]);
var state_15464__$1 = state_15464;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15464__$1,(11),out,inst_15440);
} else {
if((state_val_15465 === (5))){
var inst_15440 = (state_15464[(8)]);
var inst_15435 = (state_15464[(7)]);
var inst_15448 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15440,inst_15435);
var state_15464__$1 = state_15464;
if(inst_15448){
var statearr_15495_16406 = state_15464__$1;
(statearr_15495_16406[(1)] = (8));

} else {
var statearr_15497_16407 = state_15464__$1;
(statearr_15497_16407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15465 === (10))){
var inst_15456 = (state_15464[(2)]);
var state_15464__$1 = state_15464;
var statearr_15499_16409 = state_15464__$1;
(statearr_15499_16409[(2)] = inst_15456);

(statearr_15499_16409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15465 === (8))){
var inst_15435 = (state_15464[(7)]);
var tmp15491 = inst_15435;
var inst_15435__$1 = tmp15491;
var state_15464__$1 = (function (){var statearr_15503 = state_15464;
(statearr_15503[(7)] = inst_15435__$1);

return statearr_15503;
})();
var statearr_15504_16410 = state_15464__$1;
(statearr_15504_16410[(2)] = null);

(statearr_15504_16410[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__12839__auto__ = null;
var cljs$core$async$state_machine__12839__auto____0 = (function (){
var statearr_15509 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15509[(0)] = cljs$core$async$state_machine__12839__auto__);

(statearr_15509[(1)] = (1));

return statearr_15509;
});
var cljs$core$async$state_machine__12839__auto____1 = (function (state_15464){
while(true){
var ret_value__12840__auto__ = (function (){try{while(true){
var result__12841__auto__ = switch__12838__auto__(state_15464);
if(cljs.core.keyword_identical_QMARK_(result__12841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12841__auto__;
}
break;
}
}catch (e15513){var ex__12842__auto__ = e15513;
var statearr_15514_16414 = state_15464;
(statearr_15514_16414[(2)] = ex__12842__auto__);


if(cljs.core.seq((state_15464[(4)]))){
var statearr_15517_16415 = state_15464;
(statearr_15517_16415[(1)] = cljs.core.first((state_15464[(4)])));

} else {
throw ex__12842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16416 = state_15464;
state_15464 = G__16416;
continue;
} else {
return ret_value__12840__auto__;
}
break;
}
});
cljs$core$async$state_machine__12839__auto__ = function(state_15464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12839__auto____1.call(this,state_15464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12839__auto____0;
cljs$core$async$state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12839__auto____1;
return cljs$core$async$state_machine__12839__auto__;
})()
})();
var state__12939__auto__ = (function (){var statearr_15518 = f__12938__auto__();
(statearr_15518[(6)] = c__12937__auto___16395);

return statearr_15518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12939__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15524 = arguments.length;
switch (G__15524) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12937__auto___16420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12938__auto__ = (function (){var switch__12838__auto__ = (function (state_15568){
var state_val_15569 = (state_15568[(1)]);
if((state_val_15569 === (7))){
var inst_15563 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15570_16421 = state_15568__$1;
(statearr_15570_16421[(2)] = inst_15563);

(statearr_15570_16421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (1))){
var inst_15527 = (new Array(n));
var inst_15528 = inst_15527;
var inst_15529 = (0);
var state_15568__$1 = (function (){var statearr_15571 = state_15568;
(statearr_15571[(7)] = inst_15528);

(statearr_15571[(8)] = inst_15529);

return statearr_15571;
})();
var statearr_15572_16422 = state_15568__$1;
(statearr_15572_16422[(2)] = null);

(statearr_15572_16422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (4))){
var inst_15533 = (state_15568[(9)]);
var inst_15533__$1 = (state_15568[(2)]);
var inst_15534 = (inst_15533__$1 == null);
var inst_15535 = cljs.core.not(inst_15534);
var state_15568__$1 = (function (){var statearr_15573 = state_15568;
(statearr_15573[(9)] = inst_15533__$1);

return statearr_15573;
})();
if(inst_15535){
var statearr_15575_16424 = state_15568__$1;
(statearr_15575_16424[(1)] = (5));

} else {
var statearr_15576_16425 = state_15568__$1;
(statearr_15576_16425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (15))){
var inst_15556 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15579_16426 = state_15568__$1;
(statearr_15579_16426[(2)] = inst_15556);

(statearr_15579_16426[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (13))){
var state_15568__$1 = state_15568;
var statearr_15580_16427 = state_15568__$1;
(statearr_15580_16427[(2)] = null);

(statearr_15580_16427[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (6))){
var inst_15529 = (state_15568[(8)]);
var inst_15552 = (inst_15529 > (0));
var state_15568__$1 = state_15568;
if(cljs.core.truth_(inst_15552)){
var statearr_15581_16428 = state_15568__$1;
(statearr_15581_16428[(1)] = (12));

} else {
var statearr_15582_16429 = state_15568__$1;
(statearr_15582_16429[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (3))){
var inst_15565 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15568__$1,inst_15565);
} else {
if((state_val_15569 === (12))){
var inst_15528 = (state_15568[(7)]);
var inst_15554 = cljs.core.vec(inst_15528);
var state_15568__$1 = state_15568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15568__$1,(15),out,inst_15554);
} else {
if((state_val_15569 === (2))){
var state_15568__$1 = state_15568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15568__$1,(4),ch);
} else {
if((state_val_15569 === (11))){
var inst_15545 = (state_15568[(2)]);
var inst_15546 = (new Array(n));
var inst_15528 = inst_15546;
var inst_15529 = (0);
var state_15568__$1 = (function (){var statearr_15586 = state_15568;
(statearr_15586[(10)] = inst_15545);

(statearr_15586[(7)] = inst_15528);

(statearr_15586[(8)] = inst_15529);

return statearr_15586;
})();
var statearr_15587_16432 = state_15568__$1;
(statearr_15587_16432[(2)] = null);

(statearr_15587_16432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (9))){
var inst_15528 = (state_15568[(7)]);
var inst_15543 = cljs.core.vec(inst_15528);
var state_15568__$1 = state_15568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15568__$1,(11),out,inst_15543);
} else {
if((state_val_15569 === (5))){
var inst_15528 = (state_15568[(7)]);
var inst_15538 = (state_15568[(11)]);
var inst_15529 = (state_15568[(8)]);
var inst_15533 = (state_15568[(9)]);
var inst_15537 = (inst_15528[inst_15529] = inst_15533);
var inst_15538__$1 = (inst_15529 + (1));
var inst_15539 = (inst_15538__$1 < n);
var state_15568__$1 = (function (){var statearr_15593 = state_15568;
(statearr_15593[(11)] = inst_15538__$1);

(statearr_15593[(12)] = inst_15537);

return statearr_15593;
})();
if(cljs.core.truth_(inst_15539)){
var statearr_15594_16435 = state_15568__$1;
(statearr_15594_16435[(1)] = (8));

} else {
var statearr_15595_16436 = state_15568__$1;
(statearr_15595_16436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (14))){
var inst_15560 = (state_15568[(2)]);
var inst_15561 = cljs.core.async.close_BANG_(out);
var state_15568__$1 = (function (){var statearr_15597 = state_15568;
(statearr_15597[(13)] = inst_15560);

return statearr_15597;
})();
var statearr_15598_16439 = state_15568__$1;
(statearr_15598_16439[(2)] = inst_15561);

(statearr_15598_16439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (10))){
var inst_15549 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15600_16440 = state_15568__$1;
(statearr_15600_16440[(2)] = inst_15549);

(statearr_15600_16440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (8))){
var inst_15528 = (state_15568[(7)]);
var inst_15538 = (state_15568[(11)]);
var tmp15596 = inst_15528;
var inst_15528__$1 = tmp15596;
var inst_15529 = inst_15538;
var state_15568__$1 = (function (){var statearr_15604 = state_15568;
(statearr_15604[(7)] = inst_15528__$1);

(statearr_15604[(8)] = inst_15529);

return statearr_15604;
})();
var statearr_15607_16443 = state_15568__$1;
(statearr_15607_16443[(2)] = null);

(statearr_15607_16443[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__12839__auto__ = null;
var cljs$core$async$state_machine__12839__auto____0 = (function (){
var statearr_15608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15608[(0)] = cljs$core$async$state_machine__12839__auto__);

(statearr_15608[(1)] = (1));

return statearr_15608;
});
var cljs$core$async$state_machine__12839__auto____1 = (function (state_15568){
while(true){
var ret_value__12840__auto__ = (function (){try{while(true){
var result__12841__auto__ = switch__12838__auto__(state_15568);
if(cljs.core.keyword_identical_QMARK_(result__12841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12841__auto__;
}
break;
}
}catch (e15609){var ex__12842__auto__ = e15609;
var statearr_15610_16445 = state_15568;
(statearr_15610_16445[(2)] = ex__12842__auto__);


if(cljs.core.seq((state_15568[(4)]))){
var statearr_15612_16446 = state_15568;
(statearr_15612_16446[(1)] = cljs.core.first((state_15568[(4)])));

} else {
throw ex__12842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16448 = state_15568;
state_15568 = G__16448;
continue;
} else {
return ret_value__12840__auto__;
}
break;
}
});
cljs$core$async$state_machine__12839__auto__ = function(state_15568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12839__auto____1.call(this,state_15568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12839__auto____0;
cljs$core$async$state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12839__auto____1;
return cljs$core$async$state_machine__12839__auto__;
})()
})();
var state__12939__auto__ = (function (){var statearr_15617 = f__12938__auto__();
(statearr_15617[(6)] = c__12937__auto___16420);

return statearr_15617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12939__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15622 = arguments.length;
switch (G__15622) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12937__auto___16455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12938__auto__ = (function (){var switch__12838__auto__ = (function (state_15678){
var state_val_15679 = (state_15678[(1)]);
if((state_val_15679 === (7))){
var inst_15674 = (state_15678[(2)]);
var state_15678__$1 = state_15678;
var statearr_15686_16456 = state_15678__$1;
(statearr_15686_16456[(2)] = inst_15674);

(statearr_15686_16456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (1))){
var inst_15628 = [];
var inst_15629 = inst_15628;
var inst_15631 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15678__$1 = (function (){var statearr_15688 = state_15678;
(statearr_15688[(7)] = inst_15629);

(statearr_15688[(8)] = inst_15631);

return statearr_15688;
})();
var statearr_15689_16458 = state_15678__$1;
(statearr_15689_16458[(2)] = null);

(statearr_15689_16458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (4))){
var inst_15635 = (state_15678[(9)]);
var inst_15635__$1 = (state_15678[(2)]);
var inst_15636 = (inst_15635__$1 == null);
var inst_15637 = cljs.core.not(inst_15636);
var state_15678__$1 = (function (){var statearr_15691 = state_15678;
(statearr_15691[(9)] = inst_15635__$1);

return statearr_15691;
})();
if(inst_15637){
var statearr_15694_16461 = state_15678__$1;
(statearr_15694_16461[(1)] = (5));

} else {
var statearr_15695_16462 = state_15678__$1;
(statearr_15695_16462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (15))){
var inst_15629 = (state_15678[(7)]);
var inst_15666 = cljs.core.vec(inst_15629);
var state_15678__$1 = state_15678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15678__$1,(18),out,inst_15666);
} else {
if((state_val_15679 === (13))){
var inst_15660 = (state_15678[(2)]);
var state_15678__$1 = state_15678;
var statearr_15697_16466 = state_15678__$1;
(statearr_15697_16466[(2)] = inst_15660);

(statearr_15697_16466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (6))){
var inst_15629 = (state_15678[(7)]);
var inst_15663 = inst_15629.length;
var inst_15664 = (inst_15663 > (0));
var state_15678__$1 = state_15678;
if(cljs.core.truth_(inst_15664)){
var statearr_15701_16469 = state_15678__$1;
(statearr_15701_16469[(1)] = (15));

} else {
var statearr_15702_16470 = state_15678__$1;
(statearr_15702_16470[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (17))){
var inst_15671 = (state_15678[(2)]);
var inst_15672 = cljs.core.async.close_BANG_(out);
var state_15678__$1 = (function (){var statearr_15704 = state_15678;
(statearr_15704[(10)] = inst_15671);

return statearr_15704;
})();
var statearr_15705_16472 = state_15678__$1;
(statearr_15705_16472[(2)] = inst_15672);

(statearr_15705_16472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (3))){
var inst_15676 = (state_15678[(2)]);
var state_15678__$1 = state_15678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15678__$1,inst_15676);
} else {
if((state_val_15679 === (12))){
var inst_15629 = (state_15678[(7)]);
var inst_15652 = cljs.core.vec(inst_15629);
var state_15678__$1 = state_15678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15678__$1,(14),out,inst_15652);
} else {
if((state_val_15679 === (2))){
var state_15678__$1 = state_15678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15678__$1,(4),ch);
} else {
if((state_val_15679 === (11))){
var inst_15629 = (state_15678[(7)]);
var inst_15639 = (state_15678[(11)]);
var inst_15635 = (state_15678[(9)]);
var inst_15648 = inst_15629.push(inst_15635);
var tmp15707 = inst_15629;
var inst_15629__$1 = tmp15707;
var inst_15631 = inst_15639;
var state_15678__$1 = (function (){var statearr_15709 = state_15678;
(statearr_15709[(7)] = inst_15629__$1);

(statearr_15709[(8)] = inst_15631);

(statearr_15709[(12)] = inst_15648);

return statearr_15709;
})();
var statearr_15710_16473 = state_15678__$1;
(statearr_15710_16473[(2)] = null);

(statearr_15710_16473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (9))){
var inst_15631 = (state_15678[(8)]);
var inst_15644 = cljs.core.keyword_identical_QMARK_(inst_15631,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_15678__$1 = state_15678;
var statearr_15713_16474 = state_15678__$1;
(statearr_15713_16474[(2)] = inst_15644);

(statearr_15713_16474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (5))){
var inst_15631 = (state_15678[(8)]);
var inst_15639 = (state_15678[(11)]);
var inst_15635 = (state_15678[(9)]);
var inst_15641 = (state_15678[(13)]);
var inst_15639__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15635) : f.call(null, inst_15635));
var inst_15641__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15639__$1,inst_15631);
var state_15678__$1 = (function (){var statearr_15715 = state_15678;
(statearr_15715[(11)] = inst_15639__$1);

(statearr_15715[(13)] = inst_15641__$1);

return statearr_15715;
})();
if(inst_15641__$1){
var statearr_15717_16476 = state_15678__$1;
(statearr_15717_16476[(1)] = (8));

} else {
var statearr_15718_16477 = state_15678__$1;
(statearr_15718_16477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (14))){
var inst_15639 = (state_15678[(11)]);
var inst_15635 = (state_15678[(9)]);
var inst_15654 = (state_15678[(2)]);
var inst_15656 = [];
var inst_15657 = inst_15656.push(inst_15635);
var inst_15629 = inst_15656;
var inst_15631 = inst_15639;
var state_15678__$1 = (function (){var statearr_15721 = state_15678;
(statearr_15721[(7)] = inst_15629);

(statearr_15721[(14)] = inst_15654);

(statearr_15721[(8)] = inst_15631);

(statearr_15721[(15)] = inst_15657);

return statearr_15721;
})();
var statearr_15722_16478 = state_15678__$1;
(statearr_15722_16478[(2)] = null);

(statearr_15722_16478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (16))){
var state_15678__$1 = state_15678;
var statearr_15723_16479 = state_15678__$1;
(statearr_15723_16479[(2)] = null);

(statearr_15723_16479[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (10))){
var inst_15646 = (state_15678[(2)]);
var state_15678__$1 = state_15678;
if(cljs.core.truth_(inst_15646)){
var statearr_15728_16481 = state_15678__$1;
(statearr_15728_16481[(1)] = (11));

} else {
var statearr_15730_16482 = state_15678__$1;
(statearr_15730_16482[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (18))){
var inst_15668 = (state_15678[(2)]);
var state_15678__$1 = state_15678;
var statearr_15731_16483 = state_15678__$1;
(statearr_15731_16483[(2)] = inst_15668);

(statearr_15731_16483[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (8))){
var inst_15641 = (state_15678[(13)]);
var state_15678__$1 = state_15678;
var statearr_15733_16484 = state_15678__$1;
(statearr_15733_16484[(2)] = inst_15641);

(statearr_15733_16484[(1)] = (10));


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
}
}
});
return (function() {
var cljs$core$async$state_machine__12839__auto__ = null;
var cljs$core$async$state_machine__12839__auto____0 = (function (){
var statearr_15737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15737[(0)] = cljs$core$async$state_machine__12839__auto__);

(statearr_15737[(1)] = (1));

return statearr_15737;
});
var cljs$core$async$state_machine__12839__auto____1 = (function (state_15678){
while(true){
var ret_value__12840__auto__ = (function (){try{while(true){
var result__12841__auto__ = switch__12838__auto__(state_15678);
if(cljs.core.keyword_identical_QMARK_(result__12841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12841__auto__;
}
break;
}
}catch (e15739){var ex__12842__auto__ = e15739;
var statearr_15740_16486 = state_15678;
(statearr_15740_16486[(2)] = ex__12842__auto__);


if(cljs.core.seq((state_15678[(4)]))){
var statearr_15741_16488 = state_15678;
(statearr_15741_16488[(1)] = cljs.core.first((state_15678[(4)])));

} else {
throw ex__12842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16489 = state_15678;
state_15678 = G__16489;
continue;
} else {
return ret_value__12840__auto__;
}
break;
}
});
cljs$core$async$state_machine__12839__auto__ = function(state_15678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12839__auto____1.call(this,state_15678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12839__auto____0;
cljs$core$async$state_machine__12839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12839__auto____1;
return cljs$core$async$state_machine__12839__auto__;
})()
})();
var state__12939__auto__ = (function (){var statearr_15742 = f__12938__auto__();
(statearr_15742[(6)] = c__12937__auto___16455);

return statearr_15742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12939__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
