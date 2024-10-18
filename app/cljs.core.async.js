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
cljs.core.async.t_cljs$core$async17107 = (function (f,blockable,meta17108){
this.f = f;
this.blockable = blockable;
this.meta17108 = meta17108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17109,meta17108__$1){
var self__ = this;
var _17109__$1 = this;
return (new cljs.core.async.t_cljs$core$async17107(self__.f,self__.blockable,meta17108__$1));
}));

(cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17109){
var self__ = this;
var _17109__$1 = this;
return self__.meta17108;
}));

(cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17108","meta17108",1791800355,null)], null);
}));

(cljs.core.async.t_cljs$core$async17107.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17107");

(cljs.core.async.t_cljs$core$async17107.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17107");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17107.
 */
cljs.core.async.__GT_t_cljs$core$async17107 = (function cljs$core$async$__GT_t_cljs$core$async17107(f,blockable,meta17108){
return (new cljs.core.async.t_cljs$core$async17107(f,blockable,meta17108));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17102 = arguments.length;
switch (G__17102) {
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
return (new cljs.core.async.t_cljs$core$async17107(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17132 = arguments.length;
switch (G__17132) {
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
var G__17137 = arguments.length;
switch (G__17137) {
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
var G__17143 = arguments.length;
switch (G__17143) {
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
var val_20039 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20039) : fn1.call(null, val_20039));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20039) : fn1.call(null, val_20039));
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
var G__17154 = arguments.length;
switch (G__17154) {
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
var n__5593__auto___20044 = n;
var x_20045 = (0);
while(true){
if((x_20045 < n__5593__auto___20044)){
(a[x_20045] = x_20045);

var G__20047 = (x_20045 + (1));
x_20045 = G__20047;
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
cljs.core.async.t_cljs$core$async17233 = (function (flag,meta17234){
this.flag = flag;
this.meta17234 = meta17234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17235,meta17234__$1){
var self__ = this;
var _17235__$1 = this;
return (new cljs.core.async.t_cljs$core$async17233(self__.flag,meta17234__$1));
}));

(cljs.core.async.t_cljs$core$async17233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17235){
var self__ = this;
var _17235__$1 = this;
return self__.meta17234;
}));

(cljs.core.async.t_cljs$core$async17233.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17233.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17233.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17233.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17234","meta17234",1855634098,null)], null);
}));

(cljs.core.async.t_cljs$core$async17233.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17233");

(cljs.core.async.t_cljs$core$async17233.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17233");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17233.
 */
cljs.core.async.__GT_t_cljs$core$async17233 = (function cljs$core$async$__GT_t_cljs$core$async17233(flag,meta17234){
return (new cljs.core.async.t_cljs$core$async17233(flag,meta17234));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async17233(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17242 = (function (flag,cb,meta17243){
this.flag = flag;
this.cb = cb;
this.meta17243 = meta17243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17244,meta17243__$1){
var self__ = this;
var _17244__$1 = this;
return (new cljs.core.async.t_cljs$core$async17242(self__.flag,self__.cb,meta17243__$1));
}));

(cljs.core.async.t_cljs$core$async17242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17244){
var self__ = this;
var _17244__$1 = this;
return self__.meta17243;
}));

(cljs.core.async.t_cljs$core$async17242.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17242.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17242.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17242.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17243","meta17243",-616874617,null)], null);
}));

(cljs.core.async.t_cljs$core$async17242.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17242");

(cljs.core.async.t_cljs$core$async17242.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17242");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17242.
 */
cljs.core.async.__GT_t_cljs$core$async17242 = (function cljs$core$async$__GT_t_cljs$core$async17242(flag,cb,meta17243){
return (new cljs.core.async.t_cljs$core$async17242(flag,cb,meta17243));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async17242(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17251_SHARP_){
var G__17256 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17251_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17256) : fret.call(null, G__17256));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17252_SHARP_){
var G__17257 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17252_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17257) : fret.call(null, G__17257));
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
var G__20055 = (i + (1));
i = G__20055;
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
var len__5726__auto___20059 = arguments.length;
var i__5727__auto___20060 = (0);
while(true){
if((i__5727__auto___20060 < len__5726__auto___20059)){
args__5732__auto__.push((arguments[i__5727__auto___20060]));

var G__20061 = (i__5727__auto___20060 + (1));
i__5727__auto___20060 = G__20061;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17312){
var map__17313 = p__17312;
var map__17313__$1 = cljs.core.__destructure_map(map__17313);
var opts = map__17313__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17268){
var G__17269 = cljs.core.first(seq17268);
var seq17268__$1 = cljs.core.next(seq17268);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17269,seq17268__$1);
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
var G__17328 = arguments.length;
switch (G__17328) {
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
var c__17028__auto___20069 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_17393){
var state_val_17394 = (state_17393[(1)]);
if((state_val_17394 === (7))){
var inst_17384 = (state_17393[(2)]);
var state_17393__$1 = state_17393;
var statearr_17404_20072 = state_17393__$1;
(statearr_17404_20072[(2)] = inst_17384);

(statearr_17404_20072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (1))){
var state_17393__$1 = state_17393;
var statearr_17410_20073 = state_17393__$1;
(statearr_17410_20073[(2)] = null);

(statearr_17410_20073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (4))){
var inst_17353 = (state_17393[(7)]);
var inst_17353__$1 = (state_17393[(2)]);
var inst_17358 = (inst_17353__$1 == null);
var state_17393__$1 = (function (){var statearr_17415 = state_17393;
(statearr_17415[(7)] = inst_17353__$1);

return statearr_17415;
})();
if(cljs.core.truth_(inst_17358)){
var statearr_17416_20074 = state_17393__$1;
(statearr_17416_20074[(1)] = (5));

} else {
var statearr_17417_20076 = state_17393__$1;
(statearr_17417_20076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (13))){
var state_17393__$1 = state_17393;
var statearr_17424_20078 = state_17393__$1;
(statearr_17424_20078[(2)] = null);

(statearr_17424_20078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (6))){
var inst_17353 = (state_17393[(7)]);
var state_17393__$1 = state_17393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17393__$1,(11),to,inst_17353);
} else {
if((state_val_17394 === (3))){
var inst_17390 = (state_17393[(2)]);
var state_17393__$1 = state_17393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17393__$1,inst_17390);
} else {
if((state_val_17394 === (12))){
var state_17393__$1 = state_17393;
var statearr_17433_20079 = state_17393__$1;
(statearr_17433_20079[(2)] = null);

(statearr_17433_20079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (2))){
var state_17393__$1 = state_17393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17393__$1,(4),from);
} else {
if((state_val_17394 === (11))){
var inst_17372 = (state_17393[(2)]);
var state_17393__$1 = state_17393;
if(cljs.core.truth_(inst_17372)){
var statearr_17439_20082 = state_17393__$1;
(statearr_17439_20082[(1)] = (12));

} else {
var statearr_17440_20084 = state_17393__$1;
(statearr_17440_20084[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (9))){
var state_17393__$1 = state_17393;
var statearr_17441_20086 = state_17393__$1;
(statearr_17441_20086[(2)] = null);

(statearr_17441_20086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (5))){
var state_17393__$1 = state_17393;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17444_20087 = state_17393__$1;
(statearr_17444_20087[(1)] = (8));

} else {
var statearr_17445_20089 = state_17393__$1;
(statearr_17445_20089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (14))){
var inst_17382 = (state_17393[(2)]);
var state_17393__$1 = state_17393;
var statearr_17450_20091 = state_17393__$1;
(statearr_17450_20091[(2)] = inst_17382);

(statearr_17450_20091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (10))){
var inst_17369 = (state_17393[(2)]);
var state_17393__$1 = state_17393;
var statearr_17451_20095 = state_17393__$1;
(statearr_17451_20095[(2)] = inst_17369);

(statearr_17451_20095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (8))){
var inst_17364 = cljs.core.async.close_BANG_(to);
var state_17393__$1 = state_17393;
var statearr_17455_20098 = state_17393__$1;
(statearr_17455_20098[(2)] = inst_17364);

(statearr_17455_20098[(1)] = (10));


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
var cljs$core$async$state_machine__16914__auto__ = null;
var cljs$core$async$state_machine__16914__auto____0 = (function (){
var statearr_17459 = [null,null,null,null,null,null,null,null];
(statearr_17459[(0)] = cljs$core$async$state_machine__16914__auto__);

(statearr_17459[(1)] = (1));

return statearr_17459;
});
var cljs$core$async$state_machine__16914__auto____1 = (function (state_17393){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_17393);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e17463){var ex__16917__auto__ = e17463;
var statearr_17464_20105 = state_17393;
(statearr_17464_20105[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_17393[(4)]))){
var statearr_17465_20107 = state_17393;
(statearr_17465_20107[(1)] = cljs.core.first((state_17393[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20108 = state_17393;
state_17393 = G__20108;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
cljs$core$async$state_machine__16914__auto__ = function(state_17393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16914__auto____1.call(this,state_17393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16914__auto____0;
cljs$core$async$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16914__auto____1;
return cljs$core$async$state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_17471 = f__17029__auto__();
(statearr_17471[(6)] = c__17028__auto___20069);

return statearr_17471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
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
var process__$1 = (function (p__17501){
var vec__17502 = p__17501;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17502,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17502,(1),null);
var job = vec__17502;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17028__auto___20111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_17510){
var state_val_17511 = (state_17510[(1)]);
if((state_val_17511 === (1))){
var state_17510__$1 = state_17510;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17510__$1,(2),res,v);
} else {
if((state_val_17511 === (2))){
var inst_17507 = (state_17510[(2)]);
var inst_17508 = cljs.core.async.close_BANG_(res);
var state_17510__$1 = (function (){var statearr_17519 = state_17510;
(statearr_17519[(7)] = inst_17507);

return statearr_17519;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17510__$1,inst_17508);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____0 = (function (){
var statearr_17521 = [null,null,null,null,null,null,null,null];
(statearr_17521[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__);

(statearr_17521[(1)] = (1));

return statearr_17521;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____1 = (function (state_17510){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_17510);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e17522){var ex__16917__auto__ = e17522;
var statearr_17523_20122 = state_17510;
(statearr_17523_20122[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_17510[(4)]))){
var statearr_17524_20124 = state_17510;
(statearr_17524_20124[(1)] = cljs.core.first((state_17510[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20125 = state_17510;
state_17510 = G__20125;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__ = function(state_17510){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____1.call(this,state_17510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_17529 = f__17029__auto__();
(statearr_17529[(6)] = c__17028__auto___20111);

return statearr_17529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17536){
var vec__17537 = p__17536;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17537,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17537,(1),null);
var job = vec__17537;
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
var n__5593__auto___20126 = n;
var __20128 = (0);
while(true){
if((__20128 < n__5593__auto___20126)){
var G__17544_20129 = type;
var G__17544_20130__$1 = (((G__17544_20129 instanceof cljs.core.Keyword))?G__17544_20129.fqn:null);
switch (G__17544_20130__$1) {
case "compute":
var c__17028__auto___20134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20128,c__17028__auto___20134,G__17544_20129,G__17544_20130__$1,n__5593__auto___20126,jobs,results,process__$1,async){
return (function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = ((function (__20128,c__17028__auto___20134,G__17544_20129,G__17544_20130__$1,n__5593__auto___20126,jobs,results,process__$1,async){
return (function (state_17558){
var state_val_17559 = (state_17558[(1)]);
if((state_val_17559 === (1))){
var state_17558__$1 = state_17558;
var statearr_17560_20136 = state_17558__$1;
(statearr_17560_20136[(2)] = null);

(statearr_17560_20136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (2))){
var state_17558__$1 = state_17558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17558__$1,(4),jobs);
} else {
if((state_val_17559 === (3))){
var inst_17556 = (state_17558[(2)]);
var state_17558__$1 = state_17558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17558__$1,inst_17556);
} else {
if((state_val_17559 === (4))){
var inst_17548 = (state_17558[(2)]);
var inst_17549 = process__$1(inst_17548);
var state_17558__$1 = state_17558;
if(cljs.core.truth_(inst_17549)){
var statearr_17566_20138 = state_17558__$1;
(statearr_17566_20138[(1)] = (5));

} else {
var statearr_17567_20139 = state_17558__$1;
(statearr_17567_20139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (5))){
var state_17558__$1 = state_17558;
var statearr_17569_20140 = state_17558__$1;
(statearr_17569_20140[(2)] = null);

(statearr_17569_20140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (6))){
var state_17558__$1 = state_17558;
var statearr_17572_20141 = state_17558__$1;
(statearr_17572_20141[(2)] = null);

(statearr_17572_20141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (7))){
var inst_17554 = (state_17558[(2)]);
var state_17558__$1 = state_17558;
var statearr_17576_20142 = state_17558__$1;
(statearr_17576_20142[(2)] = inst_17554);

(statearr_17576_20142[(1)] = (3));


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
});})(__20128,c__17028__auto___20134,G__17544_20129,G__17544_20130__$1,n__5593__auto___20126,jobs,results,process__$1,async))
;
return ((function (__20128,switch__16913__auto__,c__17028__auto___20134,G__17544_20129,G__17544_20130__$1,n__5593__auto___20126,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____0 = (function (){
var statearr_17578 = [null,null,null,null,null,null,null];
(statearr_17578[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__);

(statearr_17578[(1)] = (1));

return statearr_17578;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____1 = (function (state_17558){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_17558);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e17583){var ex__16917__auto__ = e17583;
var statearr_17584_20147 = state_17558;
(statearr_17584_20147[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_17558[(4)]))){
var statearr_17585_20148 = state_17558;
(statearr_17585_20148[(1)] = cljs.core.first((state_17558[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20149 = state_17558;
state_17558 = G__20149;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__ = function(state_17558){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____1.call(this,state_17558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__;
})()
;})(__20128,switch__16913__auto__,c__17028__auto___20134,G__17544_20129,G__17544_20130__$1,n__5593__auto___20126,jobs,results,process__$1,async))
})();
var state__17030__auto__ = (function (){var statearr_17589 = f__17029__auto__();
(statearr_17589[(6)] = c__17028__auto___20134);

return statearr_17589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(__20128,c__17028__auto___20134,G__17544_20129,G__17544_20130__$1,n__5593__auto___20126,jobs,results,process__$1,async))
);


break;
case "async":
var c__17028__auto___20152 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20128,c__17028__auto___20152,G__17544_20129,G__17544_20130__$1,n__5593__auto___20126,jobs,results,process__$1,async){
return (function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = ((function (__20128,c__17028__auto___20152,G__17544_20129,G__17544_20130__$1,n__5593__auto___20126,jobs,results,process__$1,async){
return (function (state_17604){
var state_val_17605 = (state_17604[(1)]);
if((state_val_17605 === (1))){
var state_17604__$1 = state_17604;
var statearr_17611_20153 = state_17604__$1;
(statearr_17611_20153[(2)] = null);

(statearr_17611_20153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17605 === (2))){
var state_17604__$1 = state_17604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17604__$1,(4),jobs);
} else {
if((state_val_17605 === (3))){
var inst_17602 = (state_17604[(2)]);
var state_17604__$1 = state_17604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17604__$1,inst_17602);
} else {
if((state_val_17605 === (4))){
var inst_17594 = (state_17604[(2)]);
var inst_17595 = async(inst_17594);
var state_17604__$1 = state_17604;
if(cljs.core.truth_(inst_17595)){
var statearr_17617_20155 = state_17604__$1;
(statearr_17617_20155[(1)] = (5));

} else {
var statearr_17618_20157 = state_17604__$1;
(statearr_17618_20157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17605 === (5))){
var state_17604__$1 = state_17604;
var statearr_17621_20158 = state_17604__$1;
(statearr_17621_20158[(2)] = null);

(statearr_17621_20158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17605 === (6))){
var state_17604__$1 = state_17604;
var statearr_17622_20159 = state_17604__$1;
(statearr_17622_20159[(2)] = null);

(statearr_17622_20159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17605 === (7))){
var inst_17600 = (state_17604[(2)]);
var state_17604__$1 = state_17604;
var statearr_17623_20161 = state_17604__$1;
(statearr_17623_20161[(2)] = inst_17600);

(statearr_17623_20161[(1)] = (3));


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
});})(__20128,c__17028__auto___20152,G__17544_20129,G__17544_20130__$1,n__5593__auto___20126,jobs,results,process__$1,async))
;
return ((function (__20128,switch__16913__auto__,c__17028__auto___20152,G__17544_20129,G__17544_20130__$1,n__5593__auto___20126,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____0 = (function (){
var statearr_17628 = [null,null,null,null,null,null,null];
(statearr_17628[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__);

(statearr_17628[(1)] = (1));

return statearr_17628;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____1 = (function (state_17604){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_17604);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e17633){var ex__16917__auto__ = e17633;
var statearr_17635_20164 = state_17604;
(statearr_17635_20164[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_17604[(4)]))){
var statearr_17640_20167 = state_17604;
(statearr_17640_20167[(1)] = cljs.core.first((state_17604[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20169 = state_17604;
state_17604 = G__20169;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__ = function(state_17604){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____1.call(this,state_17604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__;
})()
;})(__20128,switch__16913__auto__,c__17028__auto___20152,G__17544_20129,G__17544_20130__$1,n__5593__auto___20126,jobs,results,process__$1,async))
})();
var state__17030__auto__ = (function (){var statearr_17649 = f__17029__auto__();
(statearr_17649[(6)] = c__17028__auto___20152);

return statearr_17649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(__20128,c__17028__auto___20152,G__17544_20129,G__17544_20130__$1,n__5593__auto___20126,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17544_20130__$1)].join('')));

}

var G__20170 = (__20128 + (1));
__20128 = G__20170;
continue;
} else {
}
break;
}

var c__17028__auto___20171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_17703){
var state_val_17704 = (state_17703[(1)]);
if((state_val_17704 === (7))){
var inst_17691 = (state_17703[(2)]);
var state_17703__$1 = state_17703;
var statearr_17730_20173 = state_17703__$1;
(statearr_17730_20173[(2)] = inst_17691);

(statearr_17730_20173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17704 === (1))){
var state_17703__$1 = state_17703;
var statearr_17744_20174 = state_17703__$1;
(statearr_17744_20174[(2)] = null);

(statearr_17744_20174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17704 === (4))){
var inst_17661 = (state_17703[(7)]);
var inst_17661__$1 = (state_17703[(2)]);
var inst_17662 = (inst_17661__$1 == null);
var state_17703__$1 = (function (){var statearr_17753 = state_17703;
(statearr_17753[(7)] = inst_17661__$1);

return statearr_17753;
})();
if(cljs.core.truth_(inst_17662)){
var statearr_17754_20175 = state_17703__$1;
(statearr_17754_20175[(1)] = (5));

} else {
var statearr_17755_20176 = state_17703__$1;
(statearr_17755_20176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17704 === (6))){
var inst_17661 = (state_17703[(7)]);
var inst_17672 = (state_17703[(8)]);
var inst_17672__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17679 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17681 = [inst_17661,inst_17672__$1];
var inst_17683 = (new cljs.core.PersistentVector(null,2,(5),inst_17679,inst_17681,null));
var state_17703__$1 = (function (){var statearr_17764 = state_17703;
(statearr_17764[(8)] = inst_17672__$1);

return statearr_17764;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17703__$1,(8),jobs,inst_17683);
} else {
if((state_val_17704 === (3))){
var inst_17697 = (state_17703[(2)]);
var state_17703__$1 = state_17703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17703__$1,inst_17697);
} else {
if((state_val_17704 === (2))){
var state_17703__$1 = state_17703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17703__$1,(4),from);
} else {
if((state_val_17704 === (9))){
var inst_17688 = (state_17703[(2)]);
var state_17703__$1 = (function (){var statearr_17791 = state_17703;
(statearr_17791[(9)] = inst_17688);

return statearr_17791;
})();
var statearr_17797_20184 = state_17703__$1;
(statearr_17797_20184[(2)] = null);

(statearr_17797_20184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17704 === (5))){
var inst_17668 = cljs.core.async.close_BANG_(jobs);
var state_17703__$1 = state_17703;
var statearr_17808_20185 = state_17703__$1;
(statearr_17808_20185[(2)] = inst_17668);

(statearr_17808_20185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17704 === (8))){
var inst_17672 = (state_17703[(8)]);
var inst_17685 = (state_17703[(2)]);
var state_17703__$1 = (function (){var statearr_17822 = state_17703;
(statearr_17822[(10)] = inst_17685);

return statearr_17822;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17703__$1,(9),results,inst_17672);
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
var cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____0 = (function (){
var statearr_17830 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17830[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__);

(statearr_17830[(1)] = (1));

return statearr_17830;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____1 = (function (state_17703){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_17703);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e17843){var ex__16917__auto__ = e17843;
var statearr_17845_20188 = state_17703;
(statearr_17845_20188[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_17703[(4)]))){
var statearr_17847_20189 = state_17703;
(statearr_17847_20189[(1)] = cljs.core.first((state_17703[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20190 = state_17703;
state_17703 = G__20190;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__ = function(state_17703){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____1.call(this,state_17703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_17856 = f__17029__auto__();
(statearr_17856[(6)] = c__17028__auto___20171);

return statearr_17856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
}));


var c__17028__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_17904){
var state_val_17905 = (state_17904[(1)]);
if((state_val_17905 === (7))){
var inst_17898 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
var statearr_17911_20192 = state_17904__$1;
(statearr_17911_20192[(2)] = inst_17898);

(statearr_17911_20192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (20))){
var state_17904__$1 = state_17904;
var statearr_17914_20193 = state_17904__$1;
(statearr_17914_20193[(2)] = null);

(statearr_17914_20193[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (1))){
var state_17904__$1 = state_17904;
var statearr_17916_20194 = state_17904__$1;
(statearr_17916_20194[(2)] = null);

(statearr_17916_20194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (4))){
var inst_17862 = (state_17904[(7)]);
var inst_17862__$1 = (state_17904[(2)]);
var inst_17863 = (inst_17862__$1 == null);
var state_17904__$1 = (function (){var statearr_17917 = state_17904;
(statearr_17917[(7)] = inst_17862__$1);

return statearr_17917;
})();
if(cljs.core.truth_(inst_17863)){
var statearr_17918_20195 = state_17904__$1;
(statearr_17918_20195[(1)] = (5));

} else {
var statearr_17919_20196 = state_17904__$1;
(statearr_17919_20196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (15))){
var inst_17879 = (state_17904[(8)]);
var state_17904__$1 = state_17904;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17904__$1,(18),to,inst_17879);
} else {
if((state_val_17905 === (21))){
var inst_17893 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
var statearr_17920_20197 = state_17904__$1;
(statearr_17920_20197[(2)] = inst_17893);

(statearr_17920_20197[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (13))){
var inst_17895 = (state_17904[(2)]);
var state_17904__$1 = (function (){var statearr_17925 = state_17904;
(statearr_17925[(9)] = inst_17895);

return statearr_17925;
})();
var statearr_17926_20198 = state_17904__$1;
(statearr_17926_20198[(2)] = null);

(statearr_17926_20198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (6))){
var inst_17862 = (state_17904[(7)]);
var state_17904__$1 = state_17904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17904__$1,(11),inst_17862);
} else {
if((state_val_17905 === (17))){
var inst_17888 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
if(cljs.core.truth_(inst_17888)){
var statearr_17931_20203 = state_17904__$1;
(statearr_17931_20203[(1)] = (19));

} else {
var statearr_17932_20204 = state_17904__$1;
(statearr_17932_20204[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (3))){
var inst_17900 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17904__$1,inst_17900);
} else {
if((state_val_17905 === (12))){
var inst_17876 = (state_17904[(10)]);
var state_17904__$1 = state_17904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17904__$1,(14),inst_17876);
} else {
if((state_val_17905 === (2))){
var state_17904__$1 = state_17904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17904__$1,(4),results);
} else {
if((state_val_17905 === (19))){
var state_17904__$1 = state_17904;
var statearr_17939_20206 = state_17904__$1;
(statearr_17939_20206[(2)] = null);

(statearr_17939_20206[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (11))){
var inst_17876 = (state_17904[(2)]);
var state_17904__$1 = (function (){var statearr_17941 = state_17904;
(statearr_17941[(10)] = inst_17876);

return statearr_17941;
})();
var statearr_17942_20210 = state_17904__$1;
(statearr_17942_20210[(2)] = null);

(statearr_17942_20210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (9))){
var state_17904__$1 = state_17904;
var statearr_17943_20212 = state_17904__$1;
(statearr_17943_20212[(2)] = null);

(statearr_17943_20212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (5))){
var state_17904__$1 = state_17904;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17946_20213 = state_17904__$1;
(statearr_17946_20213[(1)] = (8));

} else {
var statearr_17949_20214 = state_17904__$1;
(statearr_17949_20214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (14))){
var inst_17881 = (state_17904[(11)]);
var inst_17879 = (state_17904[(8)]);
var inst_17879__$1 = (state_17904[(2)]);
var inst_17880 = (inst_17879__$1 == null);
var inst_17881__$1 = cljs.core.not(inst_17880);
var state_17904__$1 = (function (){var statearr_17950 = state_17904;
(statearr_17950[(11)] = inst_17881__$1);

(statearr_17950[(8)] = inst_17879__$1);

return statearr_17950;
})();
if(inst_17881__$1){
var statearr_17951_20216 = state_17904__$1;
(statearr_17951_20216[(1)] = (15));

} else {
var statearr_17953_20218 = state_17904__$1;
(statearr_17953_20218[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (16))){
var inst_17881 = (state_17904[(11)]);
var state_17904__$1 = state_17904;
var statearr_17955_20219 = state_17904__$1;
(statearr_17955_20219[(2)] = inst_17881);

(statearr_17955_20219[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (10))){
var inst_17871 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
var statearr_17957_20220 = state_17904__$1;
(statearr_17957_20220[(2)] = inst_17871);

(statearr_17957_20220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (18))){
var inst_17885 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
var statearr_17962_20221 = state_17904__$1;
(statearr_17962_20221[(2)] = inst_17885);

(statearr_17962_20221[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (8))){
var inst_17868 = cljs.core.async.close_BANG_(to);
var state_17904__$1 = state_17904;
var statearr_17967_20222 = state_17904__$1;
(statearr_17967_20222[(2)] = inst_17868);

(statearr_17967_20222[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____0 = (function (){
var statearr_17968 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17968[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__);

(statearr_17968[(1)] = (1));

return statearr_17968;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____1 = (function (state_17904){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_17904);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e17969){var ex__16917__auto__ = e17969;
var statearr_17970_20223 = state_17904;
(statearr_17970_20223[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_17904[(4)]))){
var statearr_17972_20224 = state_17904;
(statearr_17972_20224[(1)] = cljs.core.first((state_17904[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20225 = state_17904;
state_17904 = G__20225;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__ = function(state_17904){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____1.call(this,state_17904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_17973 = f__17029__auto__();
(statearr_17973[(6)] = c__17028__auto__);

return statearr_17973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
}));

return c__17028__auto__;
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
var G__17985 = arguments.length;
switch (G__17985) {
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
var G__18005 = arguments.length;
switch (G__18005) {
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
var G__18020 = arguments.length;
switch (G__18020) {
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
var c__17028__auto___20239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_18048){
var state_val_18049 = (state_18048[(1)]);
if((state_val_18049 === (7))){
var inst_18044 = (state_18048[(2)]);
var state_18048__$1 = state_18048;
var statearr_18053_20241 = state_18048__$1;
(statearr_18053_20241[(2)] = inst_18044);

(statearr_18053_20241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18049 === (1))){
var state_18048__$1 = state_18048;
var statearr_18054_20242 = state_18048__$1;
(statearr_18054_20242[(2)] = null);

(statearr_18054_20242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18049 === (4))){
var inst_18025 = (state_18048[(7)]);
var inst_18025__$1 = (state_18048[(2)]);
var inst_18026 = (inst_18025__$1 == null);
var state_18048__$1 = (function (){var statearr_18055 = state_18048;
(statearr_18055[(7)] = inst_18025__$1);

return statearr_18055;
})();
if(cljs.core.truth_(inst_18026)){
var statearr_18056_20247 = state_18048__$1;
(statearr_18056_20247[(1)] = (5));

} else {
var statearr_18057_20248 = state_18048__$1;
(statearr_18057_20248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18049 === (13))){
var state_18048__$1 = state_18048;
var statearr_18059_20249 = state_18048__$1;
(statearr_18059_20249[(2)] = null);

(statearr_18059_20249[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18049 === (6))){
var inst_18025 = (state_18048[(7)]);
var inst_18031 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18025) : p.call(null, inst_18025));
var state_18048__$1 = state_18048;
if(cljs.core.truth_(inst_18031)){
var statearr_18060_20250 = state_18048__$1;
(statearr_18060_20250[(1)] = (9));

} else {
var statearr_18063_20251 = state_18048__$1;
(statearr_18063_20251[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18049 === (3))){
var inst_18046 = (state_18048[(2)]);
var state_18048__$1 = state_18048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18048__$1,inst_18046);
} else {
if((state_val_18049 === (12))){
var state_18048__$1 = state_18048;
var statearr_18067_20252 = state_18048__$1;
(statearr_18067_20252[(2)] = null);

(statearr_18067_20252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18049 === (2))){
var state_18048__$1 = state_18048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18048__$1,(4),ch);
} else {
if((state_val_18049 === (11))){
var inst_18025 = (state_18048[(7)]);
var inst_18035 = (state_18048[(2)]);
var state_18048__$1 = state_18048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18048__$1,(8),inst_18035,inst_18025);
} else {
if((state_val_18049 === (9))){
var state_18048__$1 = state_18048;
var statearr_18071_20253 = state_18048__$1;
(statearr_18071_20253[(2)] = tc);

(statearr_18071_20253[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18049 === (5))){
var inst_18028 = cljs.core.async.close_BANG_(tc);
var inst_18029 = cljs.core.async.close_BANG_(fc);
var state_18048__$1 = (function (){var statearr_18074 = state_18048;
(statearr_18074[(8)] = inst_18028);

return statearr_18074;
})();
var statearr_18075_20255 = state_18048__$1;
(statearr_18075_20255[(2)] = inst_18029);

(statearr_18075_20255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18049 === (14))){
var inst_18042 = (state_18048[(2)]);
var state_18048__$1 = state_18048;
var statearr_18076_20256 = state_18048__$1;
(statearr_18076_20256[(2)] = inst_18042);

(statearr_18076_20256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18049 === (10))){
var state_18048__$1 = state_18048;
var statearr_18077_20257 = state_18048__$1;
(statearr_18077_20257[(2)] = fc);

(statearr_18077_20257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18049 === (8))){
var inst_18037 = (state_18048[(2)]);
var state_18048__$1 = state_18048;
if(cljs.core.truth_(inst_18037)){
var statearr_18078_20259 = state_18048__$1;
(statearr_18078_20259[(1)] = (12));

} else {
var statearr_18080_20260 = state_18048__$1;
(statearr_18080_20260[(1)] = (13));

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
var cljs$core$async$state_machine__16914__auto__ = null;
var cljs$core$async$state_machine__16914__auto____0 = (function (){
var statearr_18083 = [null,null,null,null,null,null,null,null,null];
(statearr_18083[(0)] = cljs$core$async$state_machine__16914__auto__);

(statearr_18083[(1)] = (1));

return statearr_18083;
});
var cljs$core$async$state_machine__16914__auto____1 = (function (state_18048){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_18048);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e18084){var ex__16917__auto__ = e18084;
var statearr_18087_20261 = state_18048;
(statearr_18087_20261[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_18048[(4)]))){
var statearr_18088_20262 = state_18048;
(statearr_18088_20262[(1)] = cljs.core.first((state_18048[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20264 = state_18048;
state_18048 = G__20264;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
cljs$core$async$state_machine__16914__auto__ = function(state_18048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16914__auto____1.call(this,state_18048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16914__auto____0;
cljs$core$async$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16914__auto____1;
return cljs$core$async$state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_18091 = f__17029__auto__();
(statearr_18091[(6)] = c__17028__auto___20239);

return statearr_18091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
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
var c__17028__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_18120){
var state_val_18121 = (state_18120[(1)]);
if((state_val_18121 === (7))){
var inst_18115 = (state_18120[(2)]);
var state_18120__$1 = state_18120;
var statearr_18125_20266 = state_18120__$1;
(statearr_18125_20266[(2)] = inst_18115);

(statearr_18125_20266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (1))){
var inst_18096 = init;
var inst_18097 = inst_18096;
var state_18120__$1 = (function (){var statearr_18128 = state_18120;
(statearr_18128[(7)] = inst_18097);

return statearr_18128;
})();
var statearr_18129_20268 = state_18120__$1;
(statearr_18129_20268[(2)] = null);

(statearr_18129_20268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (4))){
var inst_18101 = (state_18120[(8)]);
var inst_18101__$1 = (state_18120[(2)]);
var inst_18102 = (inst_18101__$1 == null);
var state_18120__$1 = (function (){var statearr_18131 = state_18120;
(statearr_18131[(8)] = inst_18101__$1);

return statearr_18131;
})();
if(cljs.core.truth_(inst_18102)){
var statearr_18134_20270 = state_18120__$1;
(statearr_18134_20270[(1)] = (5));

} else {
var statearr_18135_20271 = state_18120__$1;
(statearr_18135_20271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (6))){
var inst_18106 = (state_18120[(9)]);
var inst_18097 = (state_18120[(7)]);
var inst_18101 = (state_18120[(8)]);
var inst_18106__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18097,inst_18101) : f.call(null, inst_18097,inst_18101));
var inst_18107 = cljs.core.reduced_QMARK_(inst_18106__$1);
var state_18120__$1 = (function (){var statearr_18137 = state_18120;
(statearr_18137[(9)] = inst_18106__$1);

return statearr_18137;
})();
if(inst_18107){
var statearr_18140_20272 = state_18120__$1;
(statearr_18140_20272[(1)] = (8));

} else {
var statearr_18141_20274 = state_18120__$1;
(statearr_18141_20274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (3))){
var inst_18117 = (state_18120[(2)]);
var state_18120__$1 = state_18120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18120__$1,inst_18117);
} else {
if((state_val_18121 === (2))){
var state_18120__$1 = state_18120;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18120__$1,(4),ch);
} else {
if((state_val_18121 === (9))){
var inst_18106 = (state_18120[(9)]);
var inst_18097 = inst_18106;
var state_18120__$1 = (function (){var statearr_18147 = state_18120;
(statearr_18147[(7)] = inst_18097);

return statearr_18147;
})();
var statearr_18148_20275 = state_18120__$1;
(statearr_18148_20275[(2)] = null);

(statearr_18148_20275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (5))){
var inst_18097 = (state_18120[(7)]);
var state_18120__$1 = state_18120;
var statearr_18151_20277 = state_18120__$1;
(statearr_18151_20277[(2)] = inst_18097);

(statearr_18151_20277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (10))){
var inst_18113 = (state_18120[(2)]);
var state_18120__$1 = state_18120;
var statearr_18152_20278 = state_18120__$1;
(statearr_18152_20278[(2)] = inst_18113);

(statearr_18152_20278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (8))){
var inst_18106 = (state_18120[(9)]);
var inst_18109 = cljs.core.deref(inst_18106);
var state_18120__$1 = state_18120;
var statearr_18156_20279 = state_18120__$1;
(statearr_18156_20279[(2)] = inst_18109);

(statearr_18156_20279[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__16914__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16914__auto____0 = (function (){
var statearr_18159 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18159[(0)] = cljs$core$async$reduce_$_state_machine__16914__auto__);

(statearr_18159[(1)] = (1));

return statearr_18159;
});
var cljs$core$async$reduce_$_state_machine__16914__auto____1 = (function (state_18120){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_18120);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e18162){var ex__16917__auto__ = e18162;
var statearr_18163_20285 = state_18120;
(statearr_18163_20285[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_18120[(4)]))){
var statearr_18165_20286 = state_18120;
(statearr_18165_20286[(1)] = cljs.core.first((state_18120[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20287 = state_18120;
state_18120 = G__20287;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16914__auto__ = function(state_18120){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16914__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16914__auto____1.call(this,state_18120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16914__auto____0;
cljs$core$async$reduce_$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16914__auto____1;
return cljs$core$async$reduce_$_state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_18168 = f__17029__auto__();
(statearr_18168[(6)] = c__17028__auto__);

return statearr_18168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
}));

return c__17028__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__17028__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_18177){
var state_val_18178 = (state_18177[(1)]);
if((state_val_18178 === (1))){
var inst_18172 = cljs.core.async.reduce(f__$1,init,ch);
var state_18177__$1 = state_18177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18177__$1,(2),inst_18172);
} else {
if((state_val_18178 === (2))){
var inst_18174 = (state_18177[(2)]);
var inst_18175 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18174) : f__$1.call(null, inst_18174));
var state_18177__$1 = state_18177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18177__$1,inst_18175);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__16914__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16914__auto____0 = (function (){
var statearr_18182 = [null,null,null,null,null,null,null];
(statearr_18182[(0)] = cljs$core$async$transduce_$_state_machine__16914__auto__);

(statearr_18182[(1)] = (1));

return statearr_18182;
});
var cljs$core$async$transduce_$_state_machine__16914__auto____1 = (function (state_18177){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_18177);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e18187){var ex__16917__auto__ = e18187;
var statearr_18188_20293 = state_18177;
(statearr_18188_20293[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_18177[(4)]))){
var statearr_18191_20294 = state_18177;
(statearr_18191_20294[(1)] = cljs.core.first((state_18177[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20296 = state_18177;
state_18177 = G__20296;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16914__auto__ = function(state_18177){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16914__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16914__auto____1.call(this,state_18177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16914__auto____0;
cljs$core$async$transduce_$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16914__auto____1;
return cljs$core$async$transduce_$_state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_18194 = f__17029__auto__();
(statearr_18194[(6)] = c__17028__auto__);

return statearr_18194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
}));

return c__17028__auto__;
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
var G__18200 = arguments.length;
switch (G__18200) {
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
var c__17028__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_18234){
var state_val_18235 = (state_18234[(1)]);
if((state_val_18235 === (7))){
var inst_18215 = (state_18234[(2)]);
var state_18234__$1 = state_18234;
var statearr_18239_20304 = state_18234__$1;
(statearr_18239_20304[(2)] = inst_18215);

(statearr_18239_20304[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18235 === (1))){
var inst_18207 = cljs.core.seq(coll);
var inst_18208 = inst_18207;
var state_18234__$1 = (function (){var statearr_18243 = state_18234;
(statearr_18243[(7)] = inst_18208);

return statearr_18243;
})();
var statearr_18244_20306 = state_18234__$1;
(statearr_18244_20306[(2)] = null);

(statearr_18244_20306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18235 === (4))){
var inst_18208 = (state_18234[(7)]);
var inst_18213 = cljs.core.first(inst_18208);
var state_18234__$1 = state_18234;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18234__$1,(7),ch,inst_18213);
} else {
if((state_val_18235 === (13))){
var inst_18227 = (state_18234[(2)]);
var state_18234__$1 = state_18234;
var statearr_18247_20307 = state_18234__$1;
(statearr_18247_20307[(2)] = inst_18227);

(statearr_18247_20307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18235 === (6))){
var inst_18218 = (state_18234[(2)]);
var state_18234__$1 = state_18234;
if(cljs.core.truth_(inst_18218)){
var statearr_18251_20310 = state_18234__$1;
(statearr_18251_20310[(1)] = (8));

} else {
var statearr_18254_20312 = state_18234__$1;
(statearr_18254_20312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18235 === (3))){
var inst_18231 = (state_18234[(2)]);
var state_18234__$1 = state_18234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18234__$1,inst_18231);
} else {
if((state_val_18235 === (12))){
var state_18234__$1 = state_18234;
var statearr_18255_20315 = state_18234__$1;
(statearr_18255_20315[(2)] = null);

(statearr_18255_20315[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18235 === (2))){
var inst_18208 = (state_18234[(7)]);
var state_18234__$1 = state_18234;
if(cljs.core.truth_(inst_18208)){
var statearr_18256_20321 = state_18234__$1;
(statearr_18256_20321[(1)] = (4));

} else {
var statearr_18257_20323 = state_18234__$1;
(statearr_18257_20323[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18235 === (11))){
var inst_18224 = cljs.core.async.close_BANG_(ch);
var state_18234__$1 = state_18234;
var statearr_18258_20324 = state_18234__$1;
(statearr_18258_20324[(2)] = inst_18224);

(statearr_18258_20324[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18235 === (9))){
var state_18234__$1 = state_18234;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18259_20326 = state_18234__$1;
(statearr_18259_20326[(1)] = (11));

} else {
var statearr_18260_20327 = state_18234__$1;
(statearr_18260_20327[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18235 === (5))){
var inst_18208 = (state_18234[(7)]);
var state_18234__$1 = state_18234;
var statearr_18261_20331 = state_18234__$1;
(statearr_18261_20331[(2)] = inst_18208);

(statearr_18261_20331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18235 === (10))){
var inst_18229 = (state_18234[(2)]);
var state_18234__$1 = state_18234;
var statearr_18262_20332 = state_18234__$1;
(statearr_18262_20332[(2)] = inst_18229);

(statearr_18262_20332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18235 === (8))){
var inst_18208 = (state_18234[(7)]);
var inst_18220 = cljs.core.next(inst_18208);
var inst_18208__$1 = inst_18220;
var state_18234__$1 = (function (){var statearr_18263 = state_18234;
(statearr_18263[(7)] = inst_18208__$1);

return statearr_18263;
})();
var statearr_18264_20335 = state_18234__$1;
(statearr_18264_20335[(2)] = null);

(statearr_18264_20335[(1)] = (2));


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
var cljs$core$async$state_machine__16914__auto__ = null;
var cljs$core$async$state_machine__16914__auto____0 = (function (){
var statearr_18265 = [null,null,null,null,null,null,null,null];
(statearr_18265[(0)] = cljs$core$async$state_machine__16914__auto__);

(statearr_18265[(1)] = (1));

return statearr_18265;
});
var cljs$core$async$state_machine__16914__auto____1 = (function (state_18234){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_18234);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e18266){var ex__16917__auto__ = e18266;
var statearr_18267_20339 = state_18234;
(statearr_18267_20339[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_18234[(4)]))){
var statearr_18268_20341 = state_18234;
(statearr_18268_20341[(1)] = cljs.core.first((state_18234[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20345 = state_18234;
state_18234 = G__20345;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
cljs$core$async$state_machine__16914__auto__ = function(state_18234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16914__auto____1.call(this,state_18234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16914__auto____0;
cljs$core$async$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16914__auto____1;
return cljs$core$async$state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_18270 = f__17029__auto__();
(statearr_18270[(6)] = c__17028__auto__);

return statearr_18270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
}));

return c__17028__auto__;
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
var G__18274 = arguments.length;
switch (G__18274) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_20351 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_20351(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20354 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_20354(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20363 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_20363(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20368 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_20368(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18284 = (function (ch,cs,meta18285){
this.ch = ch;
this.cs = cs;
this.meta18285 = meta18285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18286,meta18285__$1){
var self__ = this;
var _18286__$1 = this;
return (new cljs.core.async.t_cljs$core$async18284(self__.ch,self__.cs,meta18285__$1));
}));

(cljs.core.async.t_cljs$core$async18284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18286){
var self__ = this;
var _18286__$1 = this;
return self__.meta18285;
}));

(cljs.core.async.t_cljs$core$async18284.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18284.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18284.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18284.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18284.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18284.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18285","meta18285",-1834301342,null)], null);
}));

(cljs.core.async.t_cljs$core$async18284.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18284");

(cljs.core.async.t_cljs$core$async18284.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18284");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18284.
 */
cljs.core.async.__GT_t_cljs$core$async18284 = (function cljs$core$async$__GT_t_cljs$core$async18284(ch,cs,meta18285){
return (new cljs.core.async.t_cljs$core$async18284(ch,cs,meta18285));
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
var m = (new cljs.core.async.t_cljs$core$async18284(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17028__auto___20378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_18445){
var state_val_18446 = (state_18445[(1)]);
if((state_val_18446 === (7))){
var inst_18440 = (state_18445[(2)]);
var state_18445__$1 = state_18445;
var statearr_18448_20379 = state_18445__$1;
(statearr_18448_20379[(2)] = inst_18440);

(statearr_18448_20379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (20))){
var inst_18332 = (state_18445[(7)]);
var inst_18352 = cljs.core.first(inst_18332);
var inst_18353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18352,(0),null);
var inst_18354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18352,(1),null);
var state_18445__$1 = (function (){var statearr_18449 = state_18445;
(statearr_18449[(8)] = inst_18353);

return statearr_18449;
})();
if(cljs.core.truth_(inst_18354)){
var statearr_18450_20380 = state_18445__$1;
(statearr_18450_20380[(1)] = (22));

} else {
var statearr_18451_20381 = state_18445__$1;
(statearr_18451_20381[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (27))){
var inst_18387 = (state_18445[(9)]);
var inst_18392 = (state_18445[(10)]);
var inst_18299 = (state_18445[(11)]);
var inst_18385 = (state_18445[(12)]);
var inst_18392__$1 = cljs.core._nth(inst_18385,inst_18387);
var inst_18393 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18392__$1,inst_18299,done);
var state_18445__$1 = (function (){var statearr_18454 = state_18445;
(statearr_18454[(10)] = inst_18392__$1);

return statearr_18454;
})();
if(cljs.core.truth_(inst_18393)){
var statearr_18455_20383 = state_18445__$1;
(statearr_18455_20383[(1)] = (30));

} else {
var statearr_18456_20384 = state_18445__$1;
(statearr_18456_20384[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (1))){
var state_18445__$1 = state_18445;
var statearr_18459_20385 = state_18445__$1;
(statearr_18459_20385[(2)] = null);

(statearr_18459_20385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (24))){
var inst_18332 = (state_18445[(7)]);
var inst_18360 = (state_18445[(2)]);
var inst_18361 = cljs.core.next(inst_18332);
var inst_18310 = inst_18361;
var inst_18311 = null;
var inst_18312 = (0);
var inst_18313 = (0);
var state_18445__$1 = (function (){var statearr_18462 = state_18445;
(statearr_18462[(13)] = inst_18360);

(statearr_18462[(14)] = inst_18310);

(statearr_18462[(15)] = inst_18312);

(statearr_18462[(16)] = inst_18311);

(statearr_18462[(17)] = inst_18313);

return statearr_18462;
})();
var statearr_18465_20386 = state_18445__$1;
(statearr_18465_20386[(2)] = null);

(statearr_18465_20386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (39))){
var state_18445__$1 = state_18445;
var statearr_18472_20388 = state_18445__$1;
(statearr_18472_20388[(2)] = null);

(statearr_18472_20388[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (4))){
var inst_18299 = (state_18445[(11)]);
var inst_18299__$1 = (state_18445[(2)]);
var inst_18300 = (inst_18299__$1 == null);
var state_18445__$1 = (function (){var statearr_18474 = state_18445;
(statearr_18474[(11)] = inst_18299__$1);

return statearr_18474;
})();
if(cljs.core.truth_(inst_18300)){
var statearr_18477_20392 = state_18445__$1;
(statearr_18477_20392[(1)] = (5));

} else {
var statearr_18478_20393 = state_18445__$1;
(statearr_18478_20393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (15))){
var inst_18310 = (state_18445[(14)]);
var inst_18312 = (state_18445[(15)]);
var inst_18311 = (state_18445[(16)]);
var inst_18313 = (state_18445[(17)]);
var inst_18328 = (state_18445[(2)]);
var inst_18329 = (inst_18313 + (1));
var tmp18468 = inst_18310;
var tmp18469 = inst_18312;
var tmp18470 = inst_18311;
var inst_18310__$1 = tmp18468;
var inst_18311__$1 = tmp18470;
var inst_18312__$1 = tmp18469;
var inst_18313__$1 = inst_18329;
var state_18445__$1 = (function (){var statearr_18481 = state_18445;
(statearr_18481[(14)] = inst_18310__$1);

(statearr_18481[(15)] = inst_18312__$1);

(statearr_18481[(16)] = inst_18311__$1);

(statearr_18481[(17)] = inst_18313__$1);

(statearr_18481[(18)] = inst_18328);

return statearr_18481;
})();
var statearr_18484_20395 = state_18445__$1;
(statearr_18484_20395[(2)] = null);

(statearr_18484_20395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (21))){
var inst_18364 = (state_18445[(2)]);
var state_18445__$1 = state_18445;
var statearr_18489_20396 = state_18445__$1;
(statearr_18489_20396[(2)] = inst_18364);

(statearr_18489_20396[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (31))){
var inst_18392 = (state_18445[(10)]);
var inst_18396 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_18392);
var state_18445__$1 = state_18445;
var statearr_18491_20397 = state_18445__$1;
(statearr_18491_20397[(2)] = inst_18396);

(statearr_18491_20397[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (32))){
var inst_18387 = (state_18445[(9)]);
var inst_18386 = (state_18445[(19)]);
var inst_18385 = (state_18445[(12)]);
var inst_18384 = (state_18445[(20)]);
var inst_18398 = (state_18445[(2)]);
var inst_18399 = (inst_18387 + (1));
var tmp18485 = inst_18386;
var tmp18486 = inst_18385;
var tmp18487 = inst_18384;
var inst_18384__$1 = tmp18487;
var inst_18385__$1 = tmp18486;
var inst_18386__$1 = tmp18485;
var inst_18387__$1 = inst_18399;
var state_18445__$1 = (function (){var statearr_18494 = state_18445;
(statearr_18494[(21)] = inst_18398);

(statearr_18494[(9)] = inst_18387__$1);

(statearr_18494[(19)] = inst_18386__$1);

(statearr_18494[(12)] = inst_18385__$1);

(statearr_18494[(20)] = inst_18384__$1);

return statearr_18494;
})();
var statearr_18497_20398 = state_18445__$1;
(statearr_18497_20398[(2)] = null);

(statearr_18497_20398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (40))){
var inst_18413 = (state_18445[(22)]);
var inst_18417 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_18413);
var state_18445__$1 = state_18445;
var statearr_18500_20399 = state_18445__$1;
(statearr_18500_20399[(2)] = inst_18417);

(statearr_18500_20399[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (33))){
var inst_18403 = (state_18445[(23)]);
var inst_18405 = cljs.core.chunked_seq_QMARK_(inst_18403);
var state_18445__$1 = state_18445;
if(inst_18405){
var statearr_18503_20401 = state_18445__$1;
(statearr_18503_20401[(1)] = (36));

} else {
var statearr_18504_20402 = state_18445__$1;
(statearr_18504_20402[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (13))){
var inst_18322 = (state_18445[(24)]);
var inst_18325 = cljs.core.async.close_BANG_(inst_18322);
var state_18445__$1 = state_18445;
var statearr_18506_20403 = state_18445__$1;
(statearr_18506_20403[(2)] = inst_18325);

(statearr_18506_20403[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (22))){
var inst_18353 = (state_18445[(8)]);
var inst_18357 = cljs.core.async.close_BANG_(inst_18353);
var state_18445__$1 = state_18445;
var statearr_18509_20404 = state_18445__$1;
(statearr_18509_20404[(2)] = inst_18357);

(statearr_18509_20404[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (36))){
var inst_18403 = (state_18445[(23)]);
var inst_18407 = cljs.core.chunk_first(inst_18403);
var inst_18409 = cljs.core.chunk_rest(inst_18403);
var inst_18410 = cljs.core.count(inst_18407);
var inst_18384 = inst_18409;
var inst_18385 = inst_18407;
var inst_18386 = inst_18410;
var inst_18387 = (0);
var state_18445__$1 = (function (){var statearr_18513 = state_18445;
(statearr_18513[(9)] = inst_18387);

(statearr_18513[(19)] = inst_18386);

(statearr_18513[(12)] = inst_18385);

(statearr_18513[(20)] = inst_18384);

return statearr_18513;
})();
var statearr_18514_20405 = state_18445__$1;
(statearr_18514_20405[(2)] = null);

(statearr_18514_20405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (41))){
var inst_18403 = (state_18445[(23)]);
var inst_18419 = (state_18445[(2)]);
var inst_18420 = cljs.core.next(inst_18403);
var inst_18384 = inst_18420;
var inst_18385 = null;
var inst_18386 = (0);
var inst_18387 = (0);
var state_18445__$1 = (function (){var statearr_18516 = state_18445;
(statearr_18516[(9)] = inst_18387);

(statearr_18516[(19)] = inst_18386);

(statearr_18516[(25)] = inst_18419);

(statearr_18516[(12)] = inst_18385);

(statearr_18516[(20)] = inst_18384);

return statearr_18516;
})();
var statearr_18519_20406 = state_18445__$1;
(statearr_18519_20406[(2)] = null);

(statearr_18519_20406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (43))){
var state_18445__$1 = state_18445;
var statearr_18520_20409 = state_18445__$1;
(statearr_18520_20409[(2)] = null);

(statearr_18520_20409[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (29))){
var inst_18428 = (state_18445[(2)]);
var state_18445__$1 = state_18445;
var statearr_18523_20412 = state_18445__$1;
(statearr_18523_20412[(2)] = inst_18428);

(statearr_18523_20412[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (44))){
var inst_18437 = (state_18445[(2)]);
var state_18445__$1 = (function (){var statearr_18527 = state_18445;
(statearr_18527[(26)] = inst_18437);

return statearr_18527;
})();
var statearr_18528_20413 = state_18445__$1;
(statearr_18528_20413[(2)] = null);

(statearr_18528_20413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (6))){
var inst_18374 = (state_18445[(27)]);
var inst_18373 = cljs.core.deref(cs);
var inst_18374__$1 = cljs.core.keys(inst_18373);
var inst_18376 = cljs.core.count(inst_18374__$1);
var inst_18377 = cljs.core.reset_BANG_(dctr,inst_18376);
var inst_18383 = cljs.core.seq(inst_18374__$1);
var inst_18384 = inst_18383;
var inst_18385 = null;
var inst_18386 = (0);
var inst_18387 = (0);
var state_18445__$1 = (function (){var statearr_18530 = state_18445;
(statearr_18530[(9)] = inst_18387);

(statearr_18530[(28)] = inst_18377);

(statearr_18530[(19)] = inst_18386);

(statearr_18530[(27)] = inst_18374__$1);

(statearr_18530[(12)] = inst_18385);

(statearr_18530[(20)] = inst_18384);

return statearr_18530;
})();
var statearr_18533_20417 = state_18445__$1;
(statearr_18533_20417[(2)] = null);

(statearr_18533_20417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (28))){
var inst_18403 = (state_18445[(23)]);
var inst_18384 = (state_18445[(20)]);
var inst_18403__$1 = cljs.core.seq(inst_18384);
var state_18445__$1 = (function (){var statearr_18536 = state_18445;
(statearr_18536[(23)] = inst_18403__$1);

return statearr_18536;
})();
if(inst_18403__$1){
var statearr_18538_20420 = state_18445__$1;
(statearr_18538_20420[(1)] = (33));

} else {
var statearr_18539_20421 = state_18445__$1;
(statearr_18539_20421[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (25))){
var inst_18387 = (state_18445[(9)]);
var inst_18386 = (state_18445[(19)]);
var inst_18389 = (inst_18387 < inst_18386);
var inst_18390 = inst_18389;
var state_18445__$1 = state_18445;
if(cljs.core.truth_(inst_18390)){
var statearr_18540_20423 = state_18445__$1;
(statearr_18540_20423[(1)] = (27));

} else {
var statearr_18543_20425 = state_18445__$1;
(statearr_18543_20425[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (34))){
var state_18445__$1 = state_18445;
var statearr_18544_20427 = state_18445__$1;
(statearr_18544_20427[(2)] = null);

(statearr_18544_20427[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (17))){
var state_18445__$1 = state_18445;
var statearr_18545_20428 = state_18445__$1;
(statearr_18545_20428[(2)] = null);

(statearr_18545_20428[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (3))){
var inst_18442 = (state_18445[(2)]);
var state_18445__$1 = state_18445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18445__$1,inst_18442);
} else {
if((state_val_18446 === (12))){
var inst_18369 = (state_18445[(2)]);
var state_18445__$1 = state_18445;
var statearr_18546_20431 = state_18445__$1;
(statearr_18546_20431[(2)] = inst_18369);

(statearr_18546_20431[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (2))){
var state_18445__$1 = state_18445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18445__$1,(4),ch);
} else {
if((state_val_18446 === (23))){
var state_18445__$1 = state_18445;
var statearr_18547_20432 = state_18445__$1;
(statearr_18547_20432[(2)] = null);

(statearr_18547_20432[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (35))){
var inst_18426 = (state_18445[(2)]);
var state_18445__$1 = state_18445;
var statearr_18548_20433 = state_18445__$1;
(statearr_18548_20433[(2)] = inst_18426);

(statearr_18548_20433[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (19))){
var inst_18332 = (state_18445[(7)]);
var inst_18337 = cljs.core.chunk_first(inst_18332);
var inst_18339 = cljs.core.chunk_rest(inst_18332);
var inst_18340 = cljs.core.count(inst_18337);
var inst_18310 = inst_18339;
var inst_18311 = inst_18337;
var inst_18312 = inst_18340;
var inst_18313 = (0);
var state_18445__$1 = (function (){var statearr_18549 = state_18445;
(statearr_18549[(14)] = inst_18310);

(statearr_18549[(15)] = inst_18312);

(statearr_18549[(16)] = inst_18311);

(statearr_18549[(17)] = inst_18313);

return statearr_18549;
})();
var statearr_18550_20439 = state_18445__$1;
(statearr_18550_20439[(2)] = null);

(statearr_18550_20439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (11))){
var inst_18310 = (state_18445[(14)]);
var inst_18332 = (state_18445[(7)]);
var inst_18332__$1 = cljs.core.seq(inst_18310);
var state_18445__$1 = (function (){var statearr_18552 = state_18445;
(statearr_18552[(7)] = inst_18332__$1);

return statearr_18552;
})();
if(inst_18332__$1){
var statearr_18553_20440 = state_18445__$1;
(statearr_18553_20440[(1)] = (16));

} else {
var statearr_18554_20441 = state_18445__$1;
(statearr_18554_20441[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (9))){
var inst_18371 = (state_18445[(2)]);
var state_18445__$1 = state_18445;
var statearr_18555_20442 = state_18445__$1;
(statearr_18555_20442[(2)] = inst_18371);

(statearr_18555_20442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (5))){
var inst_18307 = cljs.core.deref(cs);
var inst_18308 = cljs.core.seq(inst_18307);
var inst_18310 = inst_18308;
var inst_18311 = null;
var inst_18312 = (0);
var inst_18313 = (0);
var state_18445__$1 = (function (){var statearr_18556 = state_18445;
(statearr_18556[(14)] = inst_18310);

(statearr_18556[(15)] = inst_18312);

(statearr_18556[(16)] = inst_18311);

(statearr_18556[(17)] = inst_18313);

return statearr_18556;
})();
var statearr_18558_20446 = state_18445__$1;
(statearr_18558_20446[(2)] = null);

(statearr_18558_20446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (14))){
var state_18445__$1 = state_18445;
var statearr_18560_20448 = state_18445__$1;
(statearr_18560_20448[(2)] = null);

(statearr_18560_20448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (45))){
var inst_18434 = (state_18445[(2)]);
var state_18445__$1 = state_18445;
var statearr_18563_20451 = state_18445__$1;
(statearr_18563_20451[(2)] = inst_18434);

(statearr_18563_20451[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (26))){
var inst_18374 = (state_18445[(27)]);
var inst_18430 = (state_18445[(2)]);
var inst_18431 = cljs.core.seq(inst_18374);
var state_18445__$1 = (function (){var statearr_18565 = state_18445;
(statearr_18565[(29)] = inst_18430);

return statearr_18565;
})();
if(inst_18431){
var statearr_18566_20455 = state_18445__$1;
(statearr_18566_20455[(1)] = (42));

} else {
var statearr_18567_20457 = state_18445__$1;
(statearr_18567_20457[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (16))){
var inst_18332 = (state_18445[(7)]);
var inst_18334 = cljs.core.chunked_seq_QMARK_(inst_18332);
var state_18445__$1 = state_18445;
if(inst_18334){
var statearr_18568_20459 = state_18445__$1;
(statearr_18568_20459[(1)] = (19));

} else {
var statearr_18569_20460 = state_18445__$1;
(statearr_18569_20460[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (38))){
var inst_18423 = (state_18445[(2)]);
var state_18445__$1 = state_18445;
var statearr_18571_20462 = state_18445__$1;
(statearr_18571_20462[(2)] = inst_18423);

(statearr_18571_20462[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (30))){
var state_18445__$1 = state_18445;
var statearr_18573_20463 = state_18445__$1;
(statearr_18573_20463[(2)] = null);

(statearr_18573_20463[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (10))){
var inst_18311 = (state_18445[(16)]);
var inst_18313 = (state_18445[(17)]);
var inst_18321 = cljs.core._nth(inst_18311,inst_18313);
var inst_18322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18321,(0),null);
var inst_18323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18321,(1),null);
var state_18445__$1 = (function (){var statearr_18575 = state_18445;
(statearr_18575[(24)] = inst_18322);

return statearr_18575;
})();
if(cljs.core.truth_(inst_18323)){
var statearr_18576_20468 = state_18445__$1;
(statearr_18576_20468[(1)] = (13));

} else {
var statearr_18577_20469 = state_18445__$1;
(statearr_18577_20469[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (18))){
var inst_18367 = (state_18445[(2)]);
var state_18445__$1 = state_18445;
var statearr_18578_20473 = state_18445__$1;
(statearr_18578_20473[(2)] = inst_18367);

(statearr_18578_20473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (42))){
var state_18445__$1 = state_18445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18445__$1,(45),dchan);
} else {
if((state_val_18446 === (37))){
var inst_18403 = (state_18445[(23)]);
var inst_18299 = (state_18445[(11)]);
var inst_18413 = (state_18445[(22)]);
var inst_18413__$1 = cljs.core.first(inst_18403);
var inst_18414 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18413__$1,inst_18299,done);
var state_18445__$1 = (function (){var statearr_18580 = state_18445;
(statearr_18580[(22)] = inst_18413__$1);

return statearr_18580;
})();
if(cljs.core.truth_(inst_18414)){
var statearr_18582_20480 = state_18445__$1;
(statearr_18582_20480[(1)] = (39));

} else {
var statearr_18583_20481 = state_18445__$1;
(statearr_18583_20481[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (8))){
var inst_18312 = (state_18445[(15)]);
var inst_18313 = (state_18445[(17)]);
var inst_18315 = (inst_18313 < inst_18312);
var inst_18316 = inst_18315;
var state_18445__$1 = state_18445;
if(cljs.core.truth_(inst_18316)){
var statearr_18584_20486 = state_18445__$1;
(statearr_18584_20486[(1)] = (10));

} else {
var statearr_18586_20489 = state_18445__$1;
(statearr_18586_20489[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__16914__auto__ = null;
var cljs$core$async$mult_$_state_machine__16914__auto____0 = (function (){
var statearr_18587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18587[(0)] = cljs$core$async$mult_$_state_machine__16914__auto__);

(statearr_18587[(1)] = (1));

return statearr_18587;
});
var cljs$core$async$mult_$_state_machine__16914__auto____1 = (function (state_18445){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_18445);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e18588){var ex__16917__auto__ = e18588;
var statearr_18589_20496 = state_18445;
(statearr_18589_20496[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_18445[(4)]))){
var statearr_18590_20498 = state_18445;
(statearr_18590_20498[(1)] = cljs.core.first((state_18445[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20501 = state_18445;
state_18445 = G__20501;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16914__auto__ = function(state_18445){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16914__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16914__auto____1.call(this,state_18445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16914__auto____0;
cljs$core$async$mult_$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16914__auto____1;
return cljs$core$async$mult_$_state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_18591 = f__17029__auto__();
(statearr_18591[(6)] = c__17028__auto___20378);

return statearr_18591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
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
var G__18593 = arguments.length;
switch (G__18593) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_20509 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_20509(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20515 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_20515(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20518 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20518(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20522 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_20522(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20532 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20532(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20540 = arguments.length;
var i__5727__auto___20541 = (0);
while(true){
if((i__5727__auto___20541 < len__5726__auto___20540)){
args__5732__auto__.push((arguments[i__5727__auto___20541]));

var G__20542 = (i__5727__auto___20541 + (1));
i__5727__auto___20541 = G__20542;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18639){
var map__18641 = p__18639;
var map__18641__$1 = cljs.core.__destructure_map(map__18641);
var opts = map__18641__$1;
var statearr_18642_20543 = state;
(statearr_18642_20543[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18643_20544 = state;
(statearr_18643_20544[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18644_20547 = state;
(statearr_18644_20547[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18631){
var G__18632 = cljs.core.first(seq18631);
var seq18631__$1 = cljs.core.next(seq18631);
var G__18633 = cljs.core.first(seq18631__$1);
var seq18631__$2 = cljs.core.next(seq18631__$1);
var G__18634 = cljs.core.first(seq18631__$2);
var seq18631__$3 = cljs.core.next(seq18631__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18632,G__18633,G__18634,seq18631__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18670 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18671){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18671 = meta18671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18672,meta18671__$1){
var self__ = this;
var _18672__$1 = this;
return (new cljs.core.async.t_cljs$core$async18670(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18671__$1));
}));

(cljs.core.async.t_cljs$core$async18670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18672){
var self__ = this;
var _18672__$1 = this;
return self__.meta18671;
}));

(cljs.core.async.t_cljs$core$async18670.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18670.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18670.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18670.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async18670.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async18670.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async18670.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async18670.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async18670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18671","meta18671",1826801100,null)], null);
}));

(cljs.core.async.t_cljs$core$async18670.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18670");

(cljs.core.async.t_cljs$core$async18670.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18670");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18670.
 */
cljs.core.async.__GT_t_cljs$core$async18670 = (function cljs$core$async$__GT_t_cljs$core$async18670(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18671){
return (new cljs.core.async.t_cljs$core$async18670(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18671));
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
var m = (new cljs.core.async.t_cljs$core$async18670(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__17028__auto___20563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_18778){
var state_val_18779 = (state_18778[(1)]);
if((state_val_18779 === (7))){
var inst_18724 = (state_18778[(2)]);
var state_18778__$1 = state_18778;
if(cljs.core.truth_(inst_18724)){
var statearr_18783_20564 = state_18778__$1;
(statearr_18783_20564[(1)] = (8));

} else {
var statearr_18784_20565 = state_18778__$1;
(statearr_18784_20565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18779 === (20))){
var inst_18716 = (state_18778[(7)]);
var state_18778__$1 = state_18778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18778__$1,(23),out,inst_18716);
} else {
if((state_val_18779 === (1))){
var inst_18698 = calc_state();
var inst_18700 = cljs.core.__destructure_map(inst_18698);
var inst_18701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18700,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18700,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18700,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18704 = inst_18698;
var state_18778__$1 = (function (){var statearr_18789 = state_18778;
(statearr_18789[(8)] = inst_18701);

(statearr_18789[(9)] = inst_18702);

(statearr_18789[(10)] = inst_18704);

(statearr_18789[(11)] = inst_18703);

return statearr_18789;
})();
var statearr_18790_20566 = state_18778__$1;
(statearr_18790_20566[(2)] = null);

(statearr_18790_20566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18779 === (24))){
var inst_18707 = (state_18778[(12)]);
var inst_18704 = inst_18707;
var state_18778__$1 = (function (){var statearr_18791 = state_18778;
(statearr_18791[(10)] = inst_18704);

return statearr_18791;
})();
var statearr_18793_20568 = state_18778__$1;
(statearr_18793_20568[(2)] = null);

(statearr_18793_20568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18779 === (4))){
var inst_18718 = (state_18778[(13)]);
var inst_18716 = (state_18778[(7)]);
var inst_18715 = (state_18778[(2)]);
var inst_18716__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18715,(0),null);
var inst_18717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18715,(1),null);
var inst_18718__$1 = (inst_18716__$1 == null);
var state_18778__$1 = (function (){var statearr_18794 = state_18778;
(statearr_18794[(13)] = inst_18718__$1);

(statearr_18794[(7)] = inst_18716__$1);

(statearr_18794[(14)] = inst_18717);

return statearr_18794;
})();
if(cljs.core.truth_(inst_18718__$1)){
var statearr_18797_20577 = state_18778__$1;
(statearr_18797_20577[(1)] = (5));

} else {
var statearr_18798_20582 = state_18778__$1;
(statearr_18798_20582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18779 === (15))){
var inst_18708 = (state_18778[(15)]);
var inst_18749 = (state_18778[(16)]);
var inst_18749__$1 = cljs.core.empty_QMARK_(inst_18708);
var state_18778__$1 = (function (){var statearr_18801 = state_18778;
(statearr_18801[(16)] = inst_18749__$1);

return statearr_18801;
})();
if(inst_18749__$1){
var statearr_18802_20586 = state_18778__$1;
(statearr_18802_20586[(1)] = (17));

} else {
var statearr_18803_20587 = state_18778__$1;
(statearr_18803_20587[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18779 === (21))){
var inst_18707 = (state_18778[(12)]);
var inst_18704 = inst_18707;
var state_18778__$1 = (function (){var statearr_18804 = state_18778;
(statearr_18804[(10)] = inst_18704);

return statearr_18804;
})();
var statearr_18805_20588 = state_18778__$1;
(statearr_18805_20588[(2)] = null);

(statearr_18805_20588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18779 === (13))){
var inst_18732 = (state_18778[(2)]);
var inst_18734 = calc_state();
var inst_18704 = inst_18734;
var state_18778__$1 = (function (){var statearr_18809 = state_18778;
(statearr_18809[(10)] = inst_18704);

(statearr_18809[(17)] = inst_18732);

return statearr_18809;
})();
var statearr_18812_20592 = state_18778__$1;
(statearr_18812_20592[(2)] = null);

(statearr_18812_20592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18779 === (22))){
var inst_18770 = (state_18778[(2)]);
var state_18778__$1 = state_18778;
var statearr_18813_20594 = state_18778__$1;
(statearr_18813_20594[(2)] = inst_18770);

(statearr_18813_20594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18779 === (6))){
var inst_18717 = (state_18778[(14)]);
var inst_18722 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18717,change);
var state_18778__$1 = state_18778;
var statearr_18815_20595 = state_18778__$1;
(statearr_18815_20595[(2)] = inst_18722);

(statearr_18815_20595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18779 === (25))){
var state_18778__$1 = state_18778;
var statearr_18818_20596 = state_18778__$1;
(statearr_18818_20596[(2)] = null);

(statearr_18818_20596[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18779 === (17))){
var inst_18709 = (state_18778[(18)]);
var inst_18717 = (state_18778[(14)]);
var inst_18751 = (inst_18709.cljs$core$IFn$_invoke$arity$1 ? inst_18709.cljs$core$IFn$_invoke$arity$1(inst_18717) : inst_18709.call(null, inst_18717));
var inst_18752 = cljs.core.not(inst_18751);
var state_18778__$1 = state_18778;
var statearr_18821_20598 = state_18778__$1;
(statearr_18821_20598[(2)] = inst_18752);

(statearr_18821_20598[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18779 === (3))){
var inst_18774 = (state_18778[(2)]);
var state_18778__$1 = state_18778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18778__$1,inst_18774);
} else {
if((state_val_18779 === (12))){
var state_18778__$1 = state_18778;
var statearr_18823_20604 = state_18778__$1;
(statearr_18823_20604[(2)] = null);

(statearr_18823_20604[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18779 === (2))){
var inst_18707 = (state_18778[(12)]);
var inst_18704 = (state_18778[(10)]);
var inst_18707__$1 = cljs.core.__destructure_map(inst_18704);
var inst_18708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18707__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18707__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18707__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18778__$1 = (function (){var statearr_18824 = state_18778;
(statearr_18824[(15)] = inst_18708);

(statearr_18824[(12)] = inst_18707__$1);

(statearr_18824[(18)] = inst_18709);

return statearr_18824;
})();
return cljs.core.async.ioc_alts_BANG_(state_18778__$1,(4),inst_18710);
} else {
if((state_val_18779 === (23))){
var inst_18761 = (state_18778[(2)]);
var state_18778__$1 = state_18778;
if(cljs.core.truth_(inst_18761)){
var statearr_18827_20611 = state_18778__$1;
(statearr_18827_20611[(1)] = (24));

} else {
var statearr_18828_20613 = state_18778__$1;
(statearr_18828_20613[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18779 === (19))){
var inst_18755 = (state_18778[(2)]);
var state_18778__$1 = state_18778;
var statearr_18831_20618 = state_18778__$1;
(statearr_18831_20618[(2)] = inst_18755);

(statearr_18831_20618[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18779 === (11))){
var inst_18717 = (state_18778[(14)]);
var inst_18729 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18717);
var state_18778__$1 = state_18778;
var statearr_18832_20621 = state_18778__$1;
(statearr_18832_20621[(2)] = inst_18729);

(statearr_18832_20621[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18779 === (9))){
var inst_18708 = (state_18778[(15)]);
var inst_18741 = (state_18778[(19)]);
var inst_18717 = (state_18778[(14)]);
var inst_18741__$1 = (inst_18708.cljs$core$IFn$_invoke$arity$1 ? inst_18708.cljs$core$IFn$_invoke$arity$1(inst_18717) : inst_18708.call(null, inst_18717));
var state_18778__$1 = (function (){var statearr_18834 = state_18778;
(statearr_18834[(19)] = inst_18741__$1);

return statearr_18834;
})();
if(cljs.core.truth_(inst_18741__$1)){
var statearr_18835_20628 = state_18778__$1;
(statearr_18835_20628[(1)] = (14));

} else {
var statearr_18836_20631 = state_18778__$1;
(statearr_18836_20631[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18779 === (5))){
var inst_18718 = (state_18778[(13)]);
var state_18778__$1 = state_18778;
var statearr_18838_20634 = state_18778__$1;
(statearr_18838_20634[(2)] = inst_18718);

(statearr_18838_20634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18779 === (14))){
var inst_18741 = (state_18778[(19)]);
var state_18778__$1 = state_18778;
var statearr_18840_20638 = state_18778__$1;
(statearr_18840_20638[(2)] = inst_18741);

(statearr_18840_20638[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18779 === (26))){
var inst_18766 = (state_18778[(2)]);
var state_18778__$1 = state_18778;
var statearr_18843_20641 = state_18778__$1;
(statearr_18843_20641[(2)] = inst_18766);

(statearr_18843_20641[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18779 === (16))){
var inst_18757 = (state_18778[(2)]);
var state_18778__$1 = state_18778;
if(cljs.core.truth_(inst_18757)){
var statearr_18844_20644 = state_18778__$1;
(statearr_18844_20644[(1)] = (20));

} else {
var statearr_18845_20647 = state_18778__$1;
(statearr_18845_20647[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18779 === (10))){
var inst_18772 = (state_18778[(2)]);
var state_18778__$1 = state_18778;
var statearr_18847_20650 = state_18778__$1;
(statearr_18847_20650[(2)] = inst_18772);

(statearr_18847_20650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18779 === (18))){
var inst_18749 = (state_18778[(16)]);
var state_18778__$1 = state_18778;
var statearr_18848_20654 = state_18778__$1;
(statearr_18848_20654[(2)] = inst_18749);

(statearr_18848_20654[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18779 === (8))){
var inst_18716 = (state_18778[(7)]);
var inst_18726 = (inst_18716 == null);
var state_18778__$1 = state_18778;
if(cljs.core.truth_(inst_18726)){
var statearr_18850_20659 = state_18778__$1;
(statearr_18850_20659[(1)] = (11));

} else {
var statearr_18851_20662 = state_18778__$1;
(statearr_18851_20662[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__16914__auto__ = null;
var cljs$core$async$mix_$_state_machine__16914__auto____0 = (function (){
var statearr_18852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18852[(0)] = cljs$core$async$mix_$_state_machine__16914__auto__);

(statearr_18852[(1)] = (1));

return statearr_18852;
});
var cljs$core$async$mix_$_state_machine__16914__auto____1 = (function (state_18778){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_18778);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e18853){var ex__16917__auto__ = e18853;
var statearr_18854_20670 = state_18778;
(statearr_18854_20670[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_18778[(4)]))){
var statearr_18856_20673 = state_18778;
(statearr_18856_20673[(1)] = cljs.core.first((state_18778[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20677 = state_18778;
state_18778 = G__20677;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16914__auto__ = function(state_18778){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16914__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16914__auto____1.call(this,state_18778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16914__auto____0;
cljs$core$async$mix_$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16914__auto____1;
return cljs$core$async$mix_$_state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_18857 = f__17029__auto__();
(statearr_18857[(6)] = c__17028__auto___20563);

return statearr_18857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_20685 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_20685(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20686 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_20686(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20687 = (function() {
var G__20688 = null;
var G__20688__1 = (function (p){
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
var G__20688__2 = (function (p,v){
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
G__20688 = function(p,v){
switch(arguments.length){
case 1:
return G__20688__1.call(this,p);
case 2:
return G__20688__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20688.cljs$core$IFn$_invoke$arity$1 = G__20688__1;
G__20688.cljs$core$IFn$_invoke$arity$2 = G__20688__2;
return G__20688;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18868 = arguments.length;
switch (G__18868) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20687(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20687(p,v);
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
cljs.core.async.t_cljs$core$async18886 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18887){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18887 = meta18887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18888,meta18887__$1){
var self__ = this;
var _18888__$1 = this;
return (new cljs.core.async.t_cljs$core$async18886(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18887__$1));
}));

(cljs.core.async.t_cljs$core$async18886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18888){
var self__ = this;
var _18888__$1 = this;
return self__.meta18887;
}));

(cljs.core.async.t_cljs$core$async18886.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18886.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18886.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18886.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18886.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async18886.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18886.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18887","meta18887",-663049968,null)], null);
}));

(cljs.core.async.t_cljs$core$async18886.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18886");

(cljs.core.async.t_cljs$core$async18886.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18886");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18886.
 */
cljs.core.async.__GT_t_cljs$core$async18886 = (function cljs$core$async$__GT_t_cljs$core$async18886(ch,topic_fn,buf_fn,mults,ensure_mult,meta18887){
return (new cljs.core.async.t_cljs$core$async18886(ch,topic_fn,buf_fn,mults,ensure_mult,meta18887));
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
var G__18881 = arguments.length;
switch (G__18881) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18873_SHARP_){
if(cljs.core.truth_((p1__18873_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18873_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18873_SHARP_.call(null, topic)))){
return p1__18873_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18873_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async18886(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__17028__auto___20691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_18985){
var state_val_18986 = (state_18985[(1)]);
if((state_val_18986 === (7))){
var inst_18981 = (state_18985[(2)]);
var state_18985__$1 = state_18985;
var statearr_18988_20692 = state_18985__$1;
(statearr_18988_20692[(2)] = inst_18981);

(statearr_18988_20692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18986 === (20))){
var state_18985__$1 = state_18985;
var statearr_18989_20693 = state_18985__$1;
(statearr_18989_20693[(2)] = null);

(statearr_18989_20693[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18986 === (1))){
var state_18985__$1 = state_18985;
var statearr_18990_20694 = state_18985__$1;
(statearr_18990_20694[(2)] = null);

(statearr_18990_20694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18986 === (24))){
var inst_18964 = (state_18985[(7)]);
var inst_18973 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18964);
var state_18985__$1 = state_18985;
var statearr_18993_20695 = state_18985__$1;
(statearr_18993_20695[(2)] = inst_18973);

(statearr_18993_20695[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18986 === (4))){
var inst_18914 = (state_18985[(8)]);
var inst_18914__$1 = (state_18985[(2)]);
var inst_18915 = (inst_18914__$1 == null);
var state_18985__$1 = (function (){var statearr_18997 = state_18985;
(statearr_18997[(8)] = inst_18914__$1);

return statearr_18997;
})();
if(cljs.core.truth_(inst_18915)){
var statearr_18998_20696 = state_18985__$1;
(statearr_18998_20696[(1)] = (5));

} else {
var statearr_18999_20697 = state_18985__$1;
(statearr_18999_20697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18986 === (15))){
var inst_18958 = (state_18985[(2)]);
var state_18985__$1 = state_18985;
var statearr_19000_20698 = state_18985__$1;
(statearr_19000_20698[(2)] = inst_18958);

(statearr_19000_20698[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18986 === (21))){
var inst_18978 = (state_18985[(2)]);
var state_18985__$1 = (function (){var statearr_19001 = state_18985;
(statearr_19001[(9)] = inst_18978);

return statearr_19001;
})();
var statearr_19002_20699 = state_18985__$1;
(statearr_19002_20699[(2)] = null);

(statearr_19002_20699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18986 === (13))){
var inst_18939 = (state_18985[(10)]);
var inst_18941 = cljs.core.chunked_seq_QMARK_(inst_18939);
var state_18985__$1 = state_18985;
if(inst_18941){
var statearr_19005_20700 = state_18985__$1;
(statearr_19005_20700[(1)] = (16));

} else {
var statearr_19008_20701 = state_18985__$1;
(statearr_19008_20701[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18986 === (22))){
var inst_18970 = (state_18985[(2)]);
var state_18985__$1 = state_18985;
if(cljs.core.truth_(inst_18970)){
var statearr_19010_20702 = state_18985__$1;
(statearr_19010_20702[(1)] = (23));

} else {
var statearr_19011_20703 = state_18985__$1;
(statearr_19011_20703[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18986 === (6))){
var inst_18914 = (state_18985[(8)]);
var inst_18966 = (state_18985[(11)]);
var inst_18964 = (state_18985[(7)]);
var inst_18964__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18914) : topic_fn.call(null, inst_18914));
var inst_18965 = cljs.core.deref(mults);
var inst_18966__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18965,inst_18964__$1);
var state_18985__$1 = (function (){var statearr_19012 = state_18985;
(statearr_19012[(11)] = inst_18966__$1);

(statearr_19012[(7)] = inst_18964__$1);

return statearr_19012;
})();
if(cljs.core.truth_(inst_18966__$1)){
var statearr_19013_20704 = state_18985__$1;
(statearr_19013_20704[(1)] = (19));

} else {
var statearr_19014_20705 = state_18985__$1;
(statearr_19014_20705[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18986 === (25))){
var inst_18975 = (state_18985[(2)]);
var state_18985__$1 = state_18985;
var statearr_19015_20706 = state_18985__$1;
(statearr_19015_20706[(2)] = inst_18975);

(statearr_19015_20706[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18986 === (17))){
var inst_18939 = (state_18985[(10)]);
var inst_18948 = cljs.core.first(inst_18939);
var inst_18950 = cljs.core.async.muxch_STAR_(inst_18948);
var inst_18951 = cljs.core.async.close_BANG_(inst_18950);
var inst_18952 = cljs.core.next(inst_18939);
var inst_18925 = inst_18952;
var inst_18926 = null;
var inst_18927 = (0);
var inst_18928 = (0);
var state_18985__$1 = (function (){var statearr_19018 = state_18985;
(statearr_19018[(12)] = inst_18926);

(statearr_19018[(13)] = inst_18928);

(statearr_19018[(14)] = inst_18951);

(statearr_19018[(15)] = inst_18925);

(statearr_19018[(16)] = inst_18927);

return statearr_19018;
})();
var statearr_19020_20707 = state_18985__$1;
(statearr_19020_20707[(2)] = null);

(statearr_19020_20707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18986 === (3))){
var inst_18983 = (state_18985[(2)]);
var state_18985__$1 = state_18985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18985__$1,inst_18983);
} else {
if((state_val_18986 === (12))){
var inst_18960 = (state_18985[(2)]);
var state_18985__$1 = state_18985;
var statearr_19021_20708 = state_18985__$1;
(statearr_19021_20708[(2)] = inst_18960);

(statearr_19021_20708[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18986 === (2))){
var state_18985__$1 = state_18985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18985__$1,(4),ch);
} else {
if((state_val_18986 === (23))){
var state_18985__$1 = state_18985;
var statearr_19022_20709 = state_18985__$1;
(statearr_19022_20709[(2)] = null);

(statearr_19022_20709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18986 === (19))){
var inst_18914 = (state_18985[(8)]);
var inst_18966 = (state_18985[(11)]);
var inst_18968 = cljs.core.async.muxch_STAR_(inst_18966);
var state_18985__$1 = state_18985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18985__$1,(22),inst_18968,inst_18914);
} else {
if((state_val_18986 === (11))){
var inst_18939 = (state_18985[(10)]);
var inst_18925 = (state_18985[(15)]);
var inst_18939__$1 = cljs.core.seq(inst_18925);
var state_18985__$1 = (function (){var statearr_19024 = state_18985;
(statearr_19024[(10)] = inst_18939__$1);

return statearr_19024;
})();
if(inst_18939__$1){
var statearr_19025_20710 = state_18985__$1;
(statearr_19025_20710[(1)] = (13));

} else {
var statearr_19026_20711 = state_18985__$1;
(statearr_19026_20711[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18986 === (9))){
var inst_18962 = (state_18985[(2)]);
var state_18985__$1 = state_18985;
var statearr_19027_20712 = state_18985__$1;
(statearr_19027_20712[(2)] = inst_18962);

(statearr_19027_20712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18986 === (5))){
var inst_18922 = cljs.core.deref(mults);
var inst_18923 = cljs.core.vals(inst_18922);
var inst_18924 = cljs.core.seq(inst_18923);
var inst_18925 = inst_18924;
var inst_18926 = null;
var inst_18927 = (0);
var inst_18928 = (0);
var state_18985__$1 = (function (){var statearr_19028 = state_18985;
(statearr_19028[(12)] = inst_18926);

(statearr_19028[(13)] = inst_18928);

(statearr_19028[(15)] = inst_18925);

(statearr_19028[(16)] = inst_18927);

return statearr_19028;
})();
var statearr_19029_20713 = state_18985__$1;
(statearr_19029_20713[(2)] = null);

(statearr_19029_20713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18986 === (14))){
var state_18985__$1 = state_18985;
var statearr_19033_20714 = state_18985__$1;
(statearr_19033_20714[(2)] = null);

(statearr_19033_20714[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18986 === (16))){
var inst_18939 = (state_18985[(10)]);
var inst_18943 = cljs.core.chunk_first(inst_18939);
var inst_18944 = cljs.core.chunk_rest(inst_18939);
var inst_18945 = cljs.core.count(inst_18943);
var inst_18925 = inst_18944;
var inst_18926 = inst_18943;
var inst_18927 = inst_18945;
var inst_18928 = (0);
var state_18985__$1 = (function (){var statearr_19034 = state_18985;
(statearr_19034[(12)] = inst_18926);

(statearr_19034[(13)] = inst_18928);

(statearr_19034[(15)] = inst_18925);

(statearr_19034[(16)] = inst_18927);

return statearr_19034;
})();
var statearr_19035_20715 = state_18985__$1;
(statearr_19035_20715[(2)] = null);

(statearr_19035_20715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18986 === (10))){
var inst_18926 = (state_18985[(12)]);
var inst_18928 = (state_18985[(13)]);
var inst_18925 = (state_18985[(15)]);
var inst_18927 = (state_18985[(16)]);
var inst_18933 = cljs.core._nth(inst_18926,inst_18928);
var inst_18934 = cljs.core.async.muxch_STAR_(inst_18933);
var inst_18935 = cljs.core.async.close_BANG_(inst_18934);
var inst_18936 = (inst_18928 + (1));
var tmp19030 = inst_18926;
var tmp19031 = inst_18925;
var tmp19032 = inst_18927;
var inst_18925__$1 = tmp19031;
var inst_18926__$1 = tmp19030;
var inst_18927__$1 = tmp19032;
var inst_18928__$1 = inst_18936;
var state_18985__$1 = (function (){var statearr_19037 = state_18985;
(statearr_19037[(12)] = inst_18926__$1);

(statearr_19037[(13)] = inst_18928__$1);

(statearr_19037[(15)] = inst_18925__$1);

(statearr_19037[(17)] = inst_18935);

(statearr_19037[(16)] = inst_18927__$1);

return statearr_19037;
})();
var statearr_19038_20716 = state_18985__$1;
(statearr_19038_20716[(2)] = null);

(statearr_19038_20716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18986 === (18))){
var inst_18955 = (state_18985[(2)]);
var state_18985__$1 = state_18985;
var statearr_19039_20717 = state_18985__$1;
(statearr_19039_20717[(2)] = inst_18955);

(statearr_19039_20717[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18986 === (8))){
var inst_18928 = (state_18985[(13)]);
var inst_18927 = (state_18985[(16)]);
var inst_18930 = (inst_18928 < inst_18927);
var inst_18931 = inst_18930;
var state_18985__$1 = state_18985;
if(cljs.core.truth_(inst_18931)){
var statearr_19041_20718 = state_18985__$1;
(statearr_19041_20718[(1)] = (10));

} else {
var statearr_19042_20719 = state_18985__$1;
(statearr_19042_20719[(1)] = (11));

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
var cljs$core$async$state_machine__16914__auto__ = null;
var cljs$core$async$state_machine__16914__auto____0 = (function (){
var statearr_19043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19043[(0)] = cljs$core$async$state_machine__16914__auto__);

(statearr_19043[(1)] = (1));

return statearr_19043;
});
var cljs$core$async$state_machine__16914__auto____1 = (function (state_18985){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_18985);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e19045){var ex__16917__auto__ = e19045;
var statearr_19046_20720 = state_18985;
(statearr_19046_20720[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_18985[(4)]))){
var statearr_19047_20721 = state_18985;
(statearr_19047_20721[(1)] = cljs.core.first((state_18985[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20722 = state_18985;
state_18985 = G__20722;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
cljs$core$async$state_machine__16914__auto__ = function(state_18985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16914__auto____1.call(this,state_18985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16914__auto____0;
cljs$core$async$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16914__auto____1;
return cljs$core$async$state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_19049 = f__17029__auto__();
(statearr_19049[(6)] = c__17028__auto___20691);

return statearr_19049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
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
var G__19055 = arguments.length;
switch (G__19055) {
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
var G__19062 = arguments.length;
switch (G__19062) {
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
var G__19072 = arguments.length;
switch (G__19072) {
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
var c__17028__auto___20731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_19139){
var state_val_19140 = (state_19139[(1)]);
if((state_val_19140 === (7))){
var state_19139__$1 = state_19139;
var statearr_19146_20732 = state_19139__$1;
(statearr_19146_20732[(2)] = null);

(statearr_19146_20732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19140 === (1))){
var state_19139__$1 = state_19139;
var statearr_19148_20733 = state_19139__$1;
(statearr_19148_20733[(2)] = null);

(statearr_19148_20733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19140 === (4))){
var inst_19084 = (state_19139[(7)]);
var inst_19083 = (state_19139[(8)]);
var inst_19087 = (inst_19084 < inst_19083);
var state_19139__$1 = state_19139;
if(cljs.core.truth_(inst_19087)){
var statearr_19152_20734 = state_19139__$1;
(statearr_19152_20734[(1)] = (6));

} else {
var statearr_19154_20735 = state_19139__$1;
(statearr_19154_20735[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19140 === (15))){
var inst_19122 = (state_19139[(9)]);
var inst_19127 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19122);
var state_19139__$1 = state_19139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19139__$1,(17),out,inst_19127);
} else {
if((state_val_19140 === (13))){
var inst_19122 = (state_19139[(9)]);
var inst_19122__$1 = (state_19139[(2)]);
var inst_19123 = cljs.core.some(cljs.core.nil_QMARK_,inst_19122__$1);
var state_19139__$1 = (function (){var statearr_19159 = state_19139;
(statearr_19159[(9)] = inst_19122__$1);

return statearr_19159;
})();
if(cljs.core.truth_(inst_19123)){
var statearr_19160_20737 = state_19139__$1;
(statearr_19160_20737[(1)] = (14));

} else {
var statearr_19161_20738 = state_19139__$1;
(statearr_19161_20738[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19140 === (6))){
var state_19139__$1 = state_19139;
var statearr_19162_20739 = state_19139__$1;
(statearr_19162_20739[(2)] = null);

(statearr_19162_20739[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19140 === (17))){
var inst_19129 = (state_19139[(2)]);
var state_19139__$1 = (function (){var statearr_19168 = state_19139;
(statearr_19168[(10)] = inst_19129);

return statearr_19168;
})();
var statearr_19169_20740 = state_19139__$1;
(statearr_19169_20740[(2)] = null);

(statearr_19169_20740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19140 === (3))){
var inst_19135 = (state_19139[(2)]);
var state_19139__$1 = state_19139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19139__$1,inst_19135);
} else {
if((state_val_19140 === (12))){
var _ = (function (){var statearr_19171 = state_19139;
(statearr_19171[(4)] = cljs.core.rest((state_19139[(4)])));

return statearr_19171;
})();
var state_19139__$1 = state_19139;
var ex19166 = (state_19139__$1[(2)]);
var statearr_19173_20742 = state_19139__$1;
(statearr_19173_20742[(5)] = ex19166);


if((ex19166 instanceof Object)){
var statearr_19175_20744 = state_19139__$1;
(statearr_19175_20744[(1)] = (11));

(statearr_19175_20744[(5)] = null);

} else {
throw ex19166;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19140 === (2))){
var inst_19081 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19083 = cnt;
var inst_19084 = (0);
var state_19139__$1 = (function (){var statearr_19179 = state_19139;
(statearr_19179[(7)] = inst_19084);

(statearr_19179[(11)] = inst_19081);

(statearr_19179[(8)] = inst_19083);

return statearr_19179;
})();
var statearr_19180_20746 = state_19139__$1;
(statearr_19180_20746[(2)] = null);

(statearr_19180_20746[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19140 === (11))){
var inst_19096 = (state_19139[(2)]);
var inst_19098 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19139__$1 = (function (){var statearr_19181 = state_19139;
(statearr_19181[(12)] = inst_19096);

return statearr_19181;
})();
var statearr_19183_20747 = state_19139__$1;
(statearr_19183_20747[(2)] = inst_19098);

(statearr_19183_20747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19140 === (9))){
var inst_19084 = (state_19139[(7)]);
var _ = (function (){var statearr_19186 = state_19139;
(statearr_19186[(4)] = cljs.core.cons((12),(state_19139[(4)])));

return statearr_19186;
})();
var inst_19105 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19084) : chs__$1.call(null, inst_19084));
var inst_19106 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19084) : done.call(null, inst_19084));
var inst_19107 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19105,inst_19106);
var ___$1 = (function (){var statearr_19187 = state_19139;
(statearr_19187[(4)] = cljs.core.rest((state_19139[(4)])));

return statearr_19187;
})();
var state_19139__$1 = state_19139;
var statearr_19188_20749 = state_19139__$1;
(statearr_19188_20749[(2)] = inst_19107);

(statearr_19188_20749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19140 === (5))){
var inst_19119 = (state_19139[(2)]);
var state_19139__$1 = (function (){var statearr_19191 = state_19139;
(statearr_19191[(13)] = inst_19119);

return statearr_19191;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19139__$1,(13),dchan);
} else {
if((state_val_19140 === (14))){
var inst_19125 = cljs.core.async.close_BANG_(out);
var state_19139__$1 = state_19139;
var statearr_19193_20750 = state_19139__$1;
(statearr_19193_20750[(2)] = inst_19125);

(statearr_19193_20750[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19140 === (16))){
var inst_19133 = (state_19139[(2)]);
var state_19139__$1 = state_19139;
var statearr_19194_20751 = state_19139__$1;
(statearr_19194_20751[(2)] = inst_19133);

(statearr_19194_20751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19140 === (10))){
var inst_19084 = (state_19139[(7)]);
var inst_19110 = (state_19139[(2)]);
var inst_19113 = (inst_19084 + (1));
var inst_19084__$1 = inst_19113;
var state_19139__$1 = (function (){var statearr_19197 = state_19139;
(statearr_19197[(7)] = inst_19084__$1);

(statearr_19197[(14)] = inst_19110);

return statearr_19197;
})();
var statearr_19200_20753 = state_19139__$1;
(statearr_19200_20753[(2)] = null);

(statearr_19200_20753[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19140 === (8))){
var inst_19117 = (state_19139[(2)]);
var state_19139__$1 = state_19139;
var statearr_19202_20757 = state_19139__$1;
(statearr_19202_20757[(2)] = inst_19117);

(statearr_19202_20757[(1)] = (5));


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
var cljs$core$async$state_machine__16914__auto__ = null;
var cljs$core$async$state_machine__16914__auto____0 = (function (){
var statearr_19203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19203[(0)] = cljs$core$async$state_machine__16914__auto__);

(statearr_19203[(1)] = (1));

return statearr_19203;
});
var cljs$core$async$state_machine__16914__auto____1 = (function (state_19139){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_19139);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e19204){var ex__16917__auto__ = e19204;
var statearr_19205_20759 = state_19139;
(statearr_19205_20759[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_19139[(4)]))){
var statearr_19207_20760 = state_19139;
(statearr_19207_20760[(1)] = cljs.core.first((state_19139[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20761 = state_19139;
state_19139 = G__20761;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
cljs$core$async$state_machine__16914__auto__ = function(state_19139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16914__auto____1.call(this,state_19139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16914__auto____0;
cljs$core$async$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16914__auto____1;
return cljs$core$async$state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_19213 = f__17029__auto__();
(statearr_19213[(6)] = c__17028__auto___20731);

return statearr_19213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
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
var G__19218 = arguments.length;
switch (G__19218) {
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
var c__17028__auto___20764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_19258){
var state_val_19260 = (state_19258[(1)]);
if((state_val_19260 === (7))){
var inst_19236 = (state_19258[(7)]);
var inst_19235 = (state_19258[(8)]);
var inst_19235__$1 = (state_19258[(2)]);
var inst_19236__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19235__$1,(0),null);
var inst_19237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19235__$1,(1),null);
var inst_19238 = (inst_19236__$1 == null);
var state_19258__$1 = (function (){var statearr_19267 = state_19258;
(statearr_19267[(7)] = inst_19236__$1);

(statearr_19267[(9)] = inst_19237);

(statearr_19267[(8)] = inst_19235__$1);

return statearr_19267;
})();
if(cljs.core.truth_(inst_19238)){
var statearr_19269_20767 = state_19258__$1;
(statearr_19269_20767[(1)] = (8));

} else {
var statearr_19271_20768 = state_19258__$1;
(statearr_19271_20768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19260 === (1))){
var inst_19225 = cljs.core.vec(chs);
var inst_19226 = inst_19225;
var state_19258__$1 = (function (){var statearr_19272 = state_19258;
(statearr_19272[(10)] = inst_19226);

return statearr_19272;
})();
var statearr_19274_20771 = state_19258__$1;
(statearr_19274_20771[(2)] = null);

(statearr_19274_20771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19260 === (4))){
var inst_19226 = (state_19258[(10)]);
var state_19258__$1 = state_19258;
return cljs.core.async.ioc_alts_BANG_(state_19258__$1,(7),inst_19226);
} else {
if((state_val_19260 === (6))){
var inst_19254 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
var statearr_19280_20772 = state_19258__$1;
(statearr_19280_20772[(2)] = inst_19254);

(statearr_19280_20772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19260 === (3))){
var inst_19256 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19258__$1,inst_19256);
} else {
if((state_val_19260 === (2))){
var inst_19226 = (state_19258[(10)]);
var inst_19228 = cljs.core.count(inst_19226);
var inst_19229 = (inst_19228 > (0));
var state_19258__$1 = state_19258;
if(cljs.core.truth_(inst_19229)){
var statearr_19283_20774 = state_19258__$1;
(statearr_19283_20774[(1)] = (4));

} else {
var statearr_19284_20775 = state_19258__$1;
(statearr_19284_20775[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19260 === (11))){
var inst_19226 = (state_19258[(10)]);
var inst_19247 = (state_19258[(2)]);
var tmp19282 = inst_19226;
var inst_19226__$1 = tmp19282;
var state_19258__$1 = (function (){var statearr_19287 = state_19258;
(statearr_19287[(10)] = inst_19226__$1);

(statearr_19287[(11)] = inst_19247);

return statearr_19287;
})();
var statearr_19289_20778 = state_19258__$1;
(statearr_19289_20778[(2)] = null);

(statearr_19289_20778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19260 === (9))){
var inst_19236 = (state_19258[(7)]);
var state_19258__$1 = state_19258;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19258__$1,(11),out,inst_19236);
} else {
if((state_val_19260 === (5))){
var inst_19252 = cljs.core.async.close_BANG_(out);
var state_19258__$1 = state_19258;
var statearr_19294_20781 = state_19258__$1;
(statearr_19294_20781[(2)] = inst_19252);

(statearr_19294_20781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19260 === (10))){
var inst_19250 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
var statearr_19295_20782 = state_19258__$1;
(statearr_19295_20782[(2)] = inst_19250);

(statearr_19295_20782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19260 === (8))){
var inst_19236 = (state_19258[(7)]);
var inst_19237 = (state_19258[(9)]);
var inst_19226 = (state_19258[(10)]);
var inst_19235 = (state_19258[(8)]);
var inst_19242 = (function (){var cs = inst_19226;
var vec__19231 = inst_19235;
var v = inst_19236;
var c = inst_19237;
return (function (p1__19214_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19214_SHARP_);
});
})();
var inst_19243 = cljs.core.filterv(inst_19242,inst_19226);
var inst_19226__$1 = inst_19243;
var state_19258__$1 = (function (){var statearr_19297 = state_19258;
(statearr_19297[(10)] = inst_19226__$1);

return statearr_19297;
})();
var statearr_19299_20784 = state_19258__$1;
(statearr_19299_20784[(2)] = null);

(statearr_19299_20784[(1)] = (2));


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
var cljs$core$async$state_machine__16914__auto__ = null;
var cljs$core$async$state_machine__16914__auto____0 = (function (){
var statearr_19301 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19301[(0)] = cljs$core$async$state_machine__16914__auto__);

(statearr_19301[(1)] = (1));

return statearr_19301;
});
var cljs$core$async$state_machine__16914__auto____1 = (function (state_19258){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_19258);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e19304){var ex__16917__auto__ = e19304;
var statearr_19306_20785 = state_19258;
(statearr_19306_20785[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_19258[(4)]))){
var statearr_19307_20786 = state_19258;
(statearr_19307_20786[(1)] = cljs.core.first((state_19258[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20787 = state_19258;
state_19258 = G__20787;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
cljs$core$async$state_machine__16914__auto__ = function(state_19258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16914__auto____1.call(this,state_19258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16914__auto____0;
cljs$core$async$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16914__auto____1;
return cljs$core$async$state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_19308 = f__17029__auto__();
(statearr_19308[(6)] = c__17028__auto___20764);

return statearr_19308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
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
var G__19317 = arguments.length;
switch (G__19317) {
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
var c__17028__auto___20793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_19347){
var state_val_19348 = (state_19347[(1)]);
if((state_val_19348 === (7))){
var inst_19329 = (state_19347[(7)]);
var inst_19329__$1 = (state_19347[(2)]);
var inst_19330 = (inst_19329__$1 == null);
var inst_19331 = cljs.core.not(inst_19330);
var state_19347__$1 = (function (){var statearr_19350 = state_19347;
(statearr_19350[(7)] = inst_19329__$1);

return statearr_19350;
})();
if(inst_19331){
var statearr_19351_20794 = state_19347__$1;
(statearr_19351_20794[(1)] = (8));

} else {
var statearr_19352_20795 = state_19347__$1;
(statearr_19352_20795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19348 === (1))){
var inst_19323 = (0);
var state_19347__$1 = (function (){var statearr_19353 = state_19347;
(statearr_19353[(8)] = inst_19323);

return statearr_19353;
})();
var statearr_19355_20796 = state_19347__$1;
(statearr_19355_20796[(2)] = null);

(statearr_19355_20796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19348 === (4))){
var state_19347__$1 = state_19347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19347__$1,(7),ch);
} else {
if((state_val_19348 === (6))){
var inst_19342 = (state_19347[(2)]);
var state_19347__$1 = state_19347;
var statearr_19357_20797 = state_19347__$1;
(statearr_19357_20797[(2)] = inst_19342);

(statearr_19357_20797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19348 === (3))){
var inst_19344 = (state_19347[(2)]);
var inst_19345 = cljs.core.async.close_BANG_(out);
var state_19347__$1 = (function (){var statearr_19358 = state_19347;
(statearr_19358[(9)] = inst_19344);

return statearr_19358;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19347__$1,inst_19345);
} else {
if((state_val_19348 === (2))){
var inst_19323 = (state_19347[(8)]);
var inst_19326 = (inst_19323 < n);
var state_19347__$1 = state_19347;
if(cljs.core.truth_(inst_19326)){
var statearr_19359_20798 = state_19347__$1;
(statearr_19359_20798[(1)] = (4));

} else {
var statearr_19360_20799 = state_19347__$1;
(statearr_19360_20799[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19348 === (11))){
var inst_19323 = (state_19347[(8)]);
var inst_19334 = (state_19347[(2)]);
var inst_19335 = (inst_19323 + (1));
var inst_19323__$1 = inst_19335;
var state_19347__$1 = (function (){var statearr_19361 = state_19347;
(statearr_19361[(10)] = inst_19334);

(statearr_19361[(8)] = inst_19323__$1);

return statearr_19361;
})();
var statearr_19362_20800 = state_19347__$1;
(statearr_19362_20800[(2)] = null);

(statearr_19362_20800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19348 === (9))){
var state_19347__$1 = state_19347;
var statearr_19364_20802 = state_19347__$1;
(statearr_19364_20802[(2)] = null);

(statearr_19364_20802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19348 === (5))){
var state_19347__$1 = state_19347;
var statearr_19365_20803 = state_19347__$1;
(statearr_19365_20803[(2)] = null);

(statearr_19365_20803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19348 === (10))){
var inst_19339 = (state_19347[(2)]);
var state_19347__$1 = state_19347;
var statearr_19366_20804 = state_19347__$1;
(statearr_19366_20804[(2)] = inst_19339);

(statearr_19366_20804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19348 === (8))){
var inst_19329 = (state_19347[(7)]);
var state_19347__$1 = state_19347;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19347__$1,(11),out,inst_19329);
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
var cljs$core$async$state_machine__16914__auto__ = null;
var cljs$core$async$state_machine__16914__auto____0 = (function (){
var statearr_19368 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19368[(0)] = cljs$core$async$state_machine__16914__auto__);

(statearr_19368[(1)] = (1));

return statearr_19368;
});
var cljs$core$async$state_machine__16914__auto____1 = (function (state_19347){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_19347);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e19369){var ex__16917__auto__ = e19369;
var statearr_19370_20806 = state_19347;
(statearr_19370_20806[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_19347[(4)]))){
var statearr_19371_20808 = state_19347;
(statearr_19371_20808[(1)] = cljs.core.first((state_19347[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20809 = state_19347;
state_19347 = G__20809;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
cljs$core$async$state_machine__16914__auto__ = function(state_19347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16914__auto____1.call(this,state_19347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16914__auto____0;
cljs$core$async$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16914__auto____1;
return cljs$core$async$state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_19372 = f__17029__auto__();
(statearr_19372[(6)] = c__17028__auto___20793);

return statearr_19372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
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
cljs.core.async.t_cljs$core$async19386 = (function (f,ch,meta19379,_,fn1,meta19387){
this.f = f;
this.ch = ch;
this.meta19379 = meta19379;
this._ = _;
this.fn1 = fn1;
this.meta19387 = meta19387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19388,meta19387__$1){
var self__ = this;
var _19388__$1 = this;
return (new cljs.core.async.t_cljs$core$async19386(self__.f,self__.ch,self__.meta19379,self__._,self__.fn1,meta19387__$1));
}));

(cljs.core.async.t_cljs$core$async19386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19388){
var self__ = this;
var _19388__$1 = this;
return self__.meta19387;
}));

(cljs.core.async.t_cljs$core$async19386.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19386.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19386.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19386.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19375_SHARP_){
var G__19399 = (((p1__19375_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19375_SHARP_) : self__.f.call(null, p1__19375_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19399) : f1.call(null, G__19399));
});
}));

(cljs.core.async.t_cljs$core$async19386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19379","meta19379",-529412786,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19378","cljs.core.async/t_cljs$core$async19378",1682621918,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19387","meta19387",1081492423,null)], null);
}));

(cljs.core.async.t_cljs$core$async19386.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19386");

(cljs.core.async.t_cljs$core$async19386.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19386");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19386.
 */
cljs.core.async.__GT_t_cljs$core$async19386 = (function cljs$core$async$__GT_t_cljs$core$async19386(f,ch,meta19379,_,fn1,meta19387){
return (new cljs.core.async.t_cljs$core$async19386(f,ch,meta19379,_,fn1,meta19387));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19378 = (function (f,ch,meta19379){
this.f = f;
this.ch = ch;
this.meta19379 = meta19379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19380,meta19379__$1){
var self__ = this;
var _19380__$1 = this;
return (new cljs.core.async.t_cljs$core$async19378(self__.f,self__.ch,meta19379__$1));
}));

(cljs.core.async.t_cljs$core$async19378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19380){
var self__ = this;
var _19380__$1 = this;
return self__.meta19379;
}));

(cljs.core.async.t_cljs$core$async19378.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19378.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19378.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19378.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19378.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async19386(self__.f,self__.ch,self__.meta19379,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19407 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19407) : self__.f.call(null, G__19407));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19378.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19378.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19379","meta19379",-529412786,null)], null);
}));

(cljs.core.async.t_cljs$core$async19378.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19378");

(cljs.core.async.t_cljs$core$async19378.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19378");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19378.
 */
cljs.core.async.__GT_t_cljs$core$async19378 = (function cljs$core$async$__GT_t_cljs$core$async19378(f,ch,meta19379){
return (new cljs.core.async.t_cljs$core$async19378(f,ch,meta19379));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19378(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19419 = (function (f,ch,meta19420){
this.f = f;
this.ch = ch;
this.meta19420 = meta19420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19421,meta19420__$1){
var self__ = this;
var _19421__$1 = this;
return (new cljs.core.async.t_cljs$core$async19419(self__.f,self__.ch,meta19420__$1));
}));

(cljs.core.async.t_cljs$core$async19419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19421){
var self__ = this;
var _19421__$1 = this;
return self__.meta19420;
}));

(cljs.core.async.t_cljs$core$async19419.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19419.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19419.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19419.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19419.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19419.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19420","meta19420",1177920386,null)], null);
}));

(cljs.core.async.t_cljs$core$async19419.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19419");

(cljs.core.async.t_cljs$core$async19419.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19419");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19419.
 */
cljs.core.async.__GT_t_cljs$core$async19419 = (function cljs$core$async$__GT_t_cljs$core$async19419(f,ch,meta19420){
return (new cljs.core.async.t_cljs$core$async19419(f,ch,meta19420));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19419(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19434 = (function (p,ch,meta19435){
this.p = p;
this.ch = ch;
this.meta19435 = meta19435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19436,meta19435__$1){
var self__ = this;
var _19436__$1 = this;
return (new cljs.core.async.t_cljs$core$async19434(self__.p,self__.ch,meta19435__$1));
}));

(cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19436){
var self__ = this;
var _19436__$1 = this;
return self__.meta19435;
}));

(cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19434.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19435","meta19435",158260694,null)], null);
}));

(cljs.core.async.t_cljs$core$async19434.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19434");

(cljs.core.async.t_cljs$core$async19434.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19434");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19434.
 */
cljs.core.async.__GT_t_cljs$core$async19434 = (function cljs$core$async$__GT_t_cljs$core$async19434(p,ch,meta19435){
return (new cljs.core.async.t_cljs$core$async19434(p,ch,meta19435));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async19434(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19451 = arguments.length;
switch (G__19451) {
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
var c__17028__auto___20834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_19480){
var state_val_19481 = (state_19480[(1)]);
if((state_val_19481 === (7))){
var inst_19474 = (state_19480[(2)]);
var state_19480__$1 = state_19480;
var statearr_19485_20837 = state_19480__$1;
(statearr_19485_20837[(2)] = inst_19474);

(statearr_19485_20837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (1))){
var state_19480__$1 = state_19480;
var statearr_19488_20838 = state_19480__$1;
(statearr_19488_20838[(2)] = null);

(statearr_19488_20838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (4))){
var inst_19458 = (state_19480[(7)]);
var inst_19458__$1 = (state_19480[(2)]);
var inst_19459 = (inst_19458__$1 == null);
var state_19480__$1 = (function (){var statearr_19491 = state_19480;
(statearr_19491[(7)] = inst_19458__$1);

return statearr_19491;
})();
if(cljs.core.truth_(inst_19459)){
var statearr_19493_20840 = state_19480__$1;
(statearr_19493_20840[(1)] = (5));

} else {
var statearr_19496_20841 = state_19480__$1;
(statearr_19496_20841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (6))){
var inst_19458 = (state_19480[(7)]);
var inst_19463 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19458) : p.call(null, inst_19458));
var state_19480__$1 = state_19480;
if(cljs.core.truth_(inst_19463)){
var statearr_19502_20842 = state_19480__$1;
(statearr_19502_20842[(1)] = (8));

} else {
var statearr_19503_20843 = state_19480__$1;
(statearr_19503_20843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (3))){
var inst_19476 = (state_19480[(2)]);
var state_19480__$1 = state_19480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19480__$1,inst_19476);
} else {
if((state_val_19481 === (2))){
var state_19480__$1 = state_19480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19480__$1,(4),ch);
} else {
if((state_val_19481 === (11))){
var inst_19467 = (state_19480[(2)]);
var state_19480__$1 = state_19480;
var statearr_19505_20844 = state_19480__$1;
(statearr_19505_20844[(2)] = inst_19467);

(statearr_19505_20844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (9))){
var state_19480__$1 = state_19480;
var statearr_19510_20845 = state_19480__$1;
(statearr_19510_20845[(2)] = null);

(statearr_19510_20845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (5))){
var inst_19461 = cljs.core.async.close_BANG_(out);
var state_19480__$1 = state_19480;
var statearr_19514_20848 = state_19480__$1;
(statearr_19514_20848[(2)] = inst_19461);

(statearr_19514_20848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (10))){
var inst_19471 = (state_19480[(2)]);
var state_19480__$1 = (function (){var statearr_19515 = state_19480;
(statearr_19515[(8)] = inst_19471);

return statearr_19515;
})();
var statearr_19516_20849 = state_19480__$1;
(statearr_19516_20849[(2)] = null);

(statearr_19516_20849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (8))){
var inst_19458 = (state_19480[(7)]);
var state_19480__$1 = state_19480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19480__$1,(11),out,inst_19458);
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
var cljs$core$async$state_machine__16914__auto__ = null;
var cljs$core$async$state_machine__16914__auto____0 = (function (){
var statearr_19517 = [null,null,null,null,null,null,null,null,null];
(statearr_19517[(0)] = cljs$core$async$state_machine__16914__auto__);

(statearr_19517[(1)] = (1));

return statearr_19517;
});
var cljs$core$async$state_machine__16914__auto____1 = (function (state_19480){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_19480);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e19519){var ex__16917__auto__ = e19519;
var statearr_19520_20852 = state_19480;
(statearr_19520_20852[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_19480[(4)]))){
var statearr_19523_20854 = state_19480;
(statearr_19523_20854[(1)] = cljs.core.first((state_19480[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20855 = state_19480;
state_19480 = G__20855;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
cljs$core$async$state_machine__16914__auto__ = function(state_19480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16914__auto____1.call(this,state_19480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16914__auto____0;
cljs$core$async$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16914__auto____1;
return cljs$core$async$state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_19528 = f__17029__auto__();
(statearr_19528[(6)] = c__17028__auto___20834);

return statearr_19528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19530 = arguments.length;
switch (G__19530) {
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
var c__17028__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_19601){
var state_val_19602 = (state_19601[(1)]);
if((state_val_19602 === (7))){
var inst_19596 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19605_20866 = state_19601__$1;
(statearr_19605_20866[(2)] = inst_19596);

(statearr_19605_20866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (20))){
var inst_19566 = (state_19601[(7)]);
var inst_19577 = (state_19601[(2)]);
var inst_19578 = cljs.core.next(inst_19566);
var inst_19552 = inst_19578;
var inst_19553 = null;
var inst_19554 = (0);
var inst_19555 = (0);
var state_19601__$1 = (function (){var statearr_19606 = state_19601;
(statearr_19606[(8)] = inst_19555);

(statearr_19606[(9)] = inst_19554);

(statearr_19606[(10)] = inst_19577);

(statearr_19606[(11)] = inst_19552);

(statearr_19606[(12)] = inst_19553);

return statearr_19606;
})();
var statearr_19607_20868 = state_19601__$1;
(statearr_19607_20868[(2)] = null);

(statearr_19607_20868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (1))){
var state_19601__$1 = state_19601;
var statearr_19608_20871 = state_19601__$1;
(statearr_19608_20871[(2)] = null);

(statearr_19608_20871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (4))){
var inst_19541 = (state_19601[(13)]);
var inst_19541__$1 = (state_19601[(2)]);
var inst_19542 = (inst_19541__$1 == null);
var state_19601__$1 = (function (){var statearr_19610 = state_19601;
(statearr_19610[(13)] = inst_19541__$1);

return statearr_19610;
})();
if(cljs.core.truth_(inst_19542)){
var statearr_19612_20874 = state_19601__$1;
(statearr_19612_20874[(1)] = (5));

} else {
var statearr_19613_20875 = state_19601__$1;
(statearr_19613_20875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (15))){
var state_19601__$1 = state_19601;
var statearr_19618_20876 = state_19601__$1;
(statearr_19618_20876[(2)] = null);

(statearr_19618_20876[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (21))){
var state_19601__$1 = state_19601;
var statearr_19621_20878 = state_19601__$1;
(statearr_19621_20878[(2)] = null);

(statearr_19621_20878[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (13))){
var inst_19555 = (state_19601[(8)]);
var inst_19554 = (state_19601[(9)]);
var inst_19552 = (state_19601[(11)]);
var inst_19553 = (state_19601[(12)]);
var inst_19562 = (state_19601[(2)]);
var inst_19563 = (inst_19555 + (1));
var tmp19615 = inst_19554;
var tmp19616 = inst_19552;
var tmp19617 = inst_19553;
var inst_19552__$1 = tmp19616;
var inst_19553__$1 = tmp19617;
var inst_19554__$1 = tmp19615;
var inst_19555__$1 = inst_19563;
var state_19601__$1 = (function (){var statearr_19626 = state_19601;
(statearr_19626[(8)] = inst_19555__$1);

(statearr_19626[(9)] = inst_19554__$1);

(statearr_19626[(11)] = inst_19552__$1);

(statearr_19626[(12)] = inst_19553__$1);

(statearr_19626[(14)] = inst_19562);

return statearr_19626;
})();
var statearr_19630_20883 = state_19601__$1;
(statearr_19630_20883[(2)] = null);

(statearr_19630_20883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (22))){
var state_19601__$1 = state_19601;
var statearr_19631_20884 = state_19601__$1;
(statearr_19631_20884[(2)] = null);

(statearr_19631_20884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (6))){
var inst_19541 = (state_19601[(13)]);
var inst_19550 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19541) : f.call(null, inst_19541));
var inst_19551 = cljs.core.seq(inst_19550);
var inst_19552 = inst_19551;
var inst_19553 = null;
var inst_19554 = (0);
var inst_19555 = (0);
var state_19601__$1 = (function (){var statearr_19633 = state_19601;
(statearr_19633[(8)] = inst_19555);

(statearr_19633[(9)] = inst_19554);

(statearr_19633[(11)] = inst_19552);

(statearr_19633[(12)] = inst_19553);

return statearr_19633;
})();
var statearr_19636_20888 = state_19601__$1;
(statearr_19636_20888[(2)] = null);

(statearr_19636_20888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (17))){
var inst_19566 = (state_19601[(7)]);
var inst_19570 = cljs.core.chunk_first(inst_19566);
var inst_19571 = cljs.core.chunk_rest(inst_19566);
var inst_19572 = cljs.core.count(inst_19570);
var inst_19552 = inst_19571;
var inst_19553 = inst_19570;
var inst_19554 = inst_19572;
var inst_19555 = (0);
var state_19601__$1 = (function (){var statearr_19639 = state_19601;
(statearr_19639[(8)] = inst_19555);

(statearr_19639[(9)] = inst_19554);

(statearr_19639[(11)] = inst_19552);

(statearr_19639[(12)] = inst_19553);

return statearr_19639;
})();
var statearr_19641_20891 = state_19601__$1;
(statearr_19641_20891[(2)] = null);

(statearr_19641_20891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (3))){
var inst_19598 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19601__$1,inst_19598);
} else {
if((state_val_19602 === (12))){
var inst_19586 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19645_20893 = state_19601__$1;
(statearr_19645_20893[(2)] = inst_19586);

(statearr_19645_20893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (2))){
var state_19601__$1 = state_19601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19601__$1,(4),in$);
} else {
if((state_val_19602 === (23))){
var inst_19594 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19648_20898 = state_19601__$1;
(statearr_19648_20898[(2)] = inst_19594);

(statearr_19648_20898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (19))){
var inst_19581 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19651_20899 = state_19601__$1;
(statearr_19651_20899[(2)] = inst_19581);

(statearr_19651_20899[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (11))){
var inst_19566 = (state_19601[(7)]);
var inst_19552 = (state_19601[(11)]);
var inst_19566__$1 = cljs.core.seq(inst_19552);
var state_19601__$1 = (function (){var statearr_19656 = state_19601;
(statearr_19656[(7)] = inst_19566__$1);

return statearr_19656;
})();
if(inst_19566__$1){
var statearr_19658_20900 = state_19601__$1;
(statearr_19658_20900[(1)] = (14));

} else {
var statearr_19659_20901 = state_19601__$1;
(statearr_19659_20901[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (9))){
var inst_19588 = (state_19601[(2)]);
var inst_19589 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19601__$1 = (function (){var statearr_19662 = state_19601;
(statearr_19662[(15)] = inst_19588);

return statearr_19662;
})();
if(cljs.core.truth_(inst_19589)){
var statearr_19664_20903 = state_19601__$1;
(statearr_19664_20903[(1)] = (21));

} else {
var statearr_19665_20904 = state_19601__$1;
(statearr_19665_20904[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (5))){
var inst_19544 = cljs.core.async.close_BANG_(out);
var state_19601__$1 = state_19601;
var statearr_19668_20905 = state_19601__$1;
(statearr_19668_20905[(2)] = inst_19544);

(statearr_19668_20905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (14))){
var inst_19566 = (state_19601[(7)]);
var inst_19568 = cljs.core.chunked_seq_QMARK_(inst_19566);
var state_19601__$1 = state_19601;
if(inst_19568){
var statearr_19673_20908 = state_19601__$1;
(statearr_19673_20908[(1)] = (17));

} else {
var statearr_19674_20909 = state_19601__$1;
(statearr_19674_20909[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (16))){
var inst_19584 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19677_20911 = state_19601__$1;
(statearr_19677_20911[(2)] = inst_19584);

(statearr_19677_20911[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (10))){
var inst_19555 = (state_19601[(8)]);
var inst_19553 = (state_19601[(12)]);
var inst_19560 = cljs.core._nth(inst_19553,inst_19555);
var state_19601__$1 = state_19601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19601__$1,(13),out,inst_19560);
} else {
if((state_val_19602 === (18))){
var inst_19566 = (state_19601[(7)]);
var inst_19575 = cljs.core.first(inst_19566);
var state_19601__$1 = state_19601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19601__$1,(20),out,inst_19575);
} else {
if((state_val_19602 === (8))){
var inst_19555 = (state_19601[(8)]);
var inst_19554 = (state_19601[(9)]);
var inst_19557 = (inst_19555 < inst_19554);
var inst_19558 = inst_19557;
var state_19601__$1 = state_19601;
if(cljs.core.truth_(inst_19558)){
var statearr_19680_20914 = state_19601__$1;
(statearr_19680_20914[(1)] = (10));

} else {
var statearr_19681_20915 = state_19601__$1;
(statearr_19681_20915[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__16914__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16914__auto____0 = (function (){
var statearr_19685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19685[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16914__auto__);

(statearr_19685[(1)] = (1));

return statearr_19685;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16914__auto____1 = (function (state_19601){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_19601);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e19688){var ex__16917__auto__ = e19688;
var statearr_19689_20916 = state_19601;
(statearr_19689_20916[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_19601[(4)]))){
var statearr_19690_20918 = state_19601;
(statearr_19690_20918[(1)] = cljs.core.first((state_19601[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20919 = state_19601;
state_19601 = G__20919;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16914__auto__ = function(state_19601){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16914__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16914__auto____1.call(this,state_19601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16914__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16914__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_19694 = f__17029__auto__();
(statearr_19694[(6)] = c__17028__auto__);

return statearr_19694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
}));

return c__17028__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19701 = arguments.length;
switch (G__19701) {
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
var G__19711 = arguments.length;
switch (G__19711) {
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
var G__19730 = arguments.length;
switch (G__19730) {
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
var c__17028__auto___20932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_19758){
var state_val_19759 = (state_19758[(1)]);
if((state_val_19759 === (7))){
var inst_19751 = (state_19758[(2)]);
var state_19758__$1 = state_19758;
var statearr_19765_20936 = state_19758__$1;
(statearr_19765_20936[(2)] = inst_19751);

(statearr_19765_20936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (1))){
var inst_19732 = null;
var state_19758__$1 = (function (){var statearr_19766 = state_19758;
(statearr_19766[(7)] = inst_19732);

return statearr_19766;
})();
var statearr_19768_20938 = state_19758__$1;
(statearr_19768_20938[(2)] = null);

(statearr_19768_20938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (4))){
var inst_19735 = (state_19758[(8)]);
var inst_19735__$1 = (state_19758[(2)]);
var inst_19736 = (inst_19735__$1 == null);
var inst_19737 = cljs.core.not(inst_19736);
var state_19758__$1 = (function (){var statearr_19769 = state_19758;
(statearr_19769[(8)] = inst_19735__$1);

return statearr_19769;
})();
if(inst_19737){
var statearr_19770_20940 = state_19758__$1;
(statearr_19770_20940[(1)] = (5));

} else {
var statearr_19772_20941 = state_19758__$1;
(statearr_19772_20941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (6))){
var state_19758__$1 = state_19758;
var statearr_19774_20942 = state_19758__$1;
(statearr_19774_20942[(2)] = null);

(statearr_19774_20942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (3))){
var inst_19753 = (state_19758[(2)]);
var inst_19755 = cljs.core.async.close_BANG_(out);
var state_19758__$1 = (function (){var statearr_19775 = state_19758;
(statearr_19775[(9)] = inst_19753);

return statearr_19775;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19758__$1,inst_19755);
} else {
if((state_val_19759 === (2))){
var state_19758__$1 = state_19758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19758__$1,(4),ch);
} else {
if((state_val_19759 === (11))){
var inst_19735 = (state_19758[(8)]);
var inst_19745 = (state_19758[(2)]);
var inst_19732 = inst_19735;
var state_19758__$1 = (function (){var statearr_19779 = state_19758;
(statearr_19779[(10)] = inst_19745);

(statearr_19779[(7)] = inst_19732);

return statearr_19779;
})();
var statearr_19780_20947 = state_19758__$1;
(statearr_19780_20947[(2)] = null);

(statearr_19780_20947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (9))){
var inst_19735 = (state_19758[(8)]);
var state_19758__$1 = state_19758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19758__$1,(11),out,inst_19735);
} else {
if((state_val_19759 === (5))){
var inst_19735 = (state_19758[(8)]);
var inst_19732 = (state_19758[(7)]);
var inst_19739 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19735,inst_19732);
var state_19758__$1 = state_19758;
if(inst_19739){
var statearr_19782_20949 = state_19758__$1;
(statearr_19782_20949[(1)] = (8));

} else {
var statearr_19783_20950 = state_19758__$1;
(statearr_19783_20950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (10))){
var inst_19748 = (state_19758[(2)]);
var state_19758__$1 = state_19758;
var statearr_19784_20952 = state_19758__$1;
(statearr_19784_20952[(2)] = inst_19748);

(statearr_19784_20952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (8))){
var inst_19732 = (state_19758[(7)]);
var tmp19781 = inst_19732;
var inst_19732__$1 = tmp19781;
var state_19758__$1 = (function (){var statearr_19785 = state_19758;
(statearr_19785[(7)] = inst_19732__$1);

return statearr_19785;
})();
var statearr_19786_20953 = state_19758__$1;
(statearr_19786_20953[(2)] = null);

(statearr_19786_20953[(1)] = (2));


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
var cljs$core$async$state_machine__16914__auto__ = null;
var cljs$core$async$state_machine__16914__auto____0 = (function (){
var statearr_19787 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19787[(0)] = cljs$core$async$state_machine__16914__auto__);

(statearr_19787[(1)] = (1));

return statearr_19787;
});
var cljs$core$async$state_machine__16914__auto____1 = (function (state_19758){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_19758);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e19788){var ex__16917__auto__ = e19788;
var statearr_19789_20956 = state_19758;
(statearr_19789_20956[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_19758[(4)]))){
var statearr_19790_20957 = state_19758;
(statearr_19790_20957[(1)] = cljs.core.first((state_19758[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20959 = state_19758;
state_19758 = G__20959;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
cljs$core$async$state_machine__16914__auto__ = function(state_19758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16914__auto____1.call(this,state_19758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16914__auto____0;
cljs$core$async$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16914__auto____1;
return cljs$core$async$state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_19791 = f__17029__auto__();
(statearr_19791[(6)] = c__17028__auto___20932);

return statearr_19791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19793 = arguments.length;
switch (G__19793) {
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
var c__17028__auto___20963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_19846){
var state_val_19847 = (state_19846[(1)]);
if((state_val_19847 === (7))){
var inst_19842 = (state_19846[(2)]);
var state_19846__$1 = state_19846;
var statearr_19850_20968 = state_19846__$1;
(statearr_19850_20968[(2)] = inst_19842);

(statearr_19850_20968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19847 === (1))){
var inst_19805 = (new Array(n));
var inst_19806 = inst_19805;
var inst_19807 = (0);
var state_19846__$1 = (function (){var statearr_19851 = state_19846;
(statearr_19851[(7)] = inst_19807);

(statearr_19851[(8)] = inst_19806);

return statearr_19851;
})();
var statearr_19852_20970 = state_19846__$1;
(statearr_19852_20970[(2)] = null);

(statearr_19852_20970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19847 === (4))){
var inst_19811 = (state_19846[(9)]);
var inst_19811__$1 = (state_19846[(2)]);
var inst_19812 = (inst_19811__$1 == null);
var inst_19813 = cljs.core.not(inst_19812);
var state_19846__$1 = (function (){var statearr_19857 = state_19846;
(statearr_19857[(9)] = inst_19811__$1);

return statearr_19857;
})();
if(inst_19813){
var statearr_19858_20971 = state_19846__$1;
(statearr_19858_20971[(1)] = (5));

} else {
var statearr_19860_20972 = state_19846__$1;
(statearr_19860_20972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19847 === (15))){
var inst_19836 = (state_19846[(2)]);
var state_19846__$1 = state_19846;
var statearr_19863_20973 = state_19846__$1;
(statearr_19863_20973[(2)] = inst_19836);

(statearr_19863_20973[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19847 === (13))){
var state_19846__$1 = state_19846;
var statearr_19865_20977 = state_19846__$1;
(statearr_19865_20977[(2)] = null);

(statearr_19865_20977[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19847 === (6))){
var inst_19807 = (state_19846[(7)]);
var inst_19832 = (inst_19807 > (0));
var state_19846__$1 = state_19846;
if(cljs.core.truth_(inst_19832)){
var statearr_19866_20980 = state_19846__$1;
(statearr_19866_20980[(1)] = (12));

} else {
var statearr_19867_20981 = state_19846__$1;
(statearr_19867_20981[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19847 === (3))){
var inst_19844 = (state_19846[(2)]);
var state_19846__$1 = state_19846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19846__$1,inst_19844);
} else {
if((state_val_19847 === (12))){
var inst_19806 = (state_19846[(8)]);
var inst_19834 = cljs.core.vec(inst_19806);
var state_19846__$1 = state_19846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19846__$1,(15),out,inst_19834);
} else {
if((state_val_19847 === (2))){
var state_19846__$1 = state_19846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19846__$1,(4),ch);
} else {
if((state_val_19847 === (11))){
var inst_19824 = (state_19846[(2)]);
var inst_19825 = (new Array(n));
var inst_19806 = inst_19825;
var inst_19807 = (0);
var state_19846__$1 = (function (){var statearr_19870 = state_19846;
(statearr_19870[(7)] = inst_19807);

(statearr_19870[(10)] = inst_19824);

(statearr_19870[(8)] = inst_19806);

return statearr_19870;
})();
var statearr_19872_20983 = state_19846__$1;
(statearr_19872_20983[(2)] = null);

(statearr_19872_20983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19847 === (9))){
var inst_19806 = (state_19846[(8)]);
var inst_19822 = cljs.core.vec(inst_19806);
var state_19846__$1 = state_19846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19846__$1,(11),out,inst_19822);
} else {
if((state_val_19847 === (5))){
var inst_19807 = (state_19846[(7)]);
var inst_19811 = (state_19846[(9)]);
var inst_19817 = (state_19846[(11)]);
var inst_19806 = (state_19846[(8)]);
var inst_19815 = (inst_19806[inst_19807] = inst_19811);
var inst_19817__$1 = (inst_19807 + (1));
var inst_19818 = (inst_19817__$1 < n);
var state_19846__$1 = (function (){var statearr_19875 = state_19846;
(statearr_19875[(12)] = inst_19815);

(statearr_19875[(11)] = inst_19817__$1);

return statearr_19875;
})();
if(cljs.core.truth_(inst_19818)){
var statearr_19876_20986 = state_19846__$1;
(statearr_19876_20986[(1)] = (8));

} else {
var statearr_19877_20988 = state_19846__$1;
(statearr_19877_20988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19847 === (14))){
var inst_19839 = (state_19846[(2)]);
var inst_19840 = cljs.core.async.close_BANG_(out);
var state_19846__$1 = (function (){var statearr_19879 = state_19846;
(statearr_19879[(13)] = inst_19839);

return statearr_19879;
})();
var statearr_19880_20990 = state_19846__$1;
(statearr_19880_20990[(2)] = inst_19840);

(statearr_19880_20990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19847 === (10))){
var inst_19829 = (state_19846[(2)]);
var state_19846__$1 = state_19846;
var statearr_19884_20991 = state_19846__$1;
(statearr_19884_20991[(2)] = inst_19829);

(statearr_19884_20991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19847 === (8))){
var inst_19817 = (state_19846[(11)]);
var inst_19806 = (state_19846[(8)]);
var tmp19878 = inst_19806;
var inst_19806__$1 = tmp19878;
var inst_19807 = inst_19817;
var state_19846__$1 = (function (){var statearr_19885 = state_19846;
(statearr_19885[(7)] = inst_19807);

(statearr_19885[(8)] = inst_19806__$1);

return statearr_19885;
})();
var statearr_19887_20993 = state_19846__$1;
(statearr_19887_20993[(2)] = null);

(statearr_19887_20993[(1)] = (2));


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
var cljs$core$async$state_machine__16914__auto__ = null;
var cljs$core$async$state_machine__16914__auto____0 = (function (){
var statearr_19888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19888[(0)] = cljs$core$async$state_machine__16914__auto__);

(statearr_19888[(1)] = (1));

return statearr_19888;
});
var cljs$core$async$state_machine__16914__auto____1 = (function (state_19846){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_19846);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e19889){var ex__16917__auto__ = e19889;
var statearr_19890_20996 = state_19846;
(statearr_19890_20996[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_19846[(4)]))){
var statearr_19891_20998 = state_19846;
(statearr_19891_20998[(1)] = cljs.core.first((state_19846[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21000 = state_19846;
state_19846 = G__21000;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
cljs$core$async$state_machine__16914__auto__ = function(state_19846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16914__auto____1.call(this,state_19846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16914__auto____0;
cljs$core$async$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16914__auto____1;
return cljs$core$async$state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_19894 = f__17029__auto__();
(statearr_19894[(6)] = c__17028__auto___20963);

return statearr_19894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19899 = arguments.length;
switch (G__19899) {
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
var c__17028__auto___21006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17029__auto__ = (function (){var switch__16913__auto__ = (function (state_19946){
var state_val_19947 = (state_19946[(1)]);
if((state_val_19947 === (7))){
var inst_19941 = (state_19946[(2)]);
var state_19946__$1 = state_19946;
var statearr_19948_21009 = state_19946__$1;
(statearr_19948_21009[(2)] = inst_19941);

(statearr_19948_21009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (1))){
var inst_19901 = [];
var inst_19902 = inst_19901;
var inst_19903 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19946__$1 = (function (){var statearr_19949 = state_19946;
(statearr_19949[(7)] = inst_19903);

(statearr_19949[(8)] = inst_19902);

return statearr_19949;
})();
var statearr_19950_21012 = state_19946__$1;
(statearr_19950_21012[(2)] = null);

(statearr_19950_21012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (4))){
var inst_19906 = (state_19946[(9)]);
var inst_19906__$1 = (state_19946[(2)]);
var inst_19907 = (inst_19906__$1 == null);
var inst_19908 = cljs.core.not(inst_19907);
var state_19946__$1 = (function (){var statearr_19951 = state_19946;
(statearr_19951[(9)] = inst_19906__$1);

return statearr_19951;
})();
if(inst_19908){
var statearr_19953_21013 = state_19946__$1;
(statearr_19953_21013[(1)] = (5));

} else {
var statearr_19954_21014 = state_19946__$1;
(statearr_19954_21014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (15))){
var inst_19902 = (state_19946[(8)]);
var inst_19933 = cljs.core.vec(inst_19902);
var state_19946__$1 = state_19946;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19946__$1,(18),out,inst_19933);
} else {
if((state_val_19947 === (13))){
var inst_19928 = (state_19946[(2)]);
var state_19946__$1 = state_19946;
var statearr_19955_21020 = state_19946__$1;
(statearr_19955_21020[(2)] = inst_19928);

(statearr_19955_21020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (6))){
var inst_19902 = (state_19946[(8)]);
var inst_19930 = inst_19902.length;
var inst_19931 = (inst_19930 > (0));
var state_19946__$1 = state_19946;
if(cljs.core.truth_(inst_19931)){
var statearr_19957_21024 = state_19946__$1;
(statearr_19957_21024[(1)] = (15));

} else {
var statearr_19958_21025 = state_19946__$1;
(statearr_19958_21025[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (17))){
var inst_19938 = (state_19946[(2)]);
var inst_19939 = cljs.core.async.close_BANG_(out);
var state_19946__$1 = (function (){var statearr_19959 = state_19946;
(statearr_19959[(10)] = inst_19938);

return statearr_19959;
})();
var statearr_19961_21026 = state_19946__$1;
(statearr_19961_21026[(2)] = inst_19939);

(statearr_19961_21026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (3))){
var inst_19943 = (state_19946[(2)]);
var state_19946__$1 = state_19946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19946__$1,inst_19943);
} else {
if((state_val_19947 === (12))){
var inst_19902 = (state_19946[(8)]);
var inst_19921 = cljs.core.vec(inst_19902);
var state_19946__$1 = state_19946;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19946__$1,(14),out,inst_19921);
} else {
if((state_val_19947 === (2))){
var state_19946__$1 = state_19946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19946__$1,(4),ch);
} else {
if((state_val_19947 === (11))){
var inst_19906 = (state_19946[(9)]);
var inst_19902 = (state_19946[(8)]);
var inst_19910 = (state_19946[(11)]);
var inst_19918 = inst_19902.push(inst_19906);
var tmp19962 = inst_19902;
var inst_19902__$1 = tmp19962;
var inst_19903 = inst_19910;
var state_19946__$1 = (function (){var statearr_19966 = state_19946;
(statearr_19966[(12)] = inst_19918);

(statearr_19966[(7)] = inst_19903);

(statearr_19966[(8)] = inst_19902__$1);

return statearr_19966;
})();
var statearr_19967_21031 = state_19946__$1;
(statearr_19967_21031[(2)] = null);

(statearr_19967_21031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (9))){
var inst_19903 = (state_19946[(7)]);
var inst_19914 = cljs.core.keyword_identical_QMARK_(inst_19903,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19946__$1 = state_19946;
var statearr_19968_21037 = state_19946__$1;
(statearr_19968_21037[(2)] = inst_19914);

(statearr_19968_21037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (5))){
var inst_19911 = (state_19946[(13)]);
var inst_19903 = (state_19946[(7)]);
var inst_19906 = (state_19946[(9)]);
var inst_19910 = (state_19946[(11)]);
var inst_19910__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19906) : f.call(null, inst_19906));
var inst_19911__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19910__$1,inst_19903);
var state_19946__$1 = (function (){var statearr_19970 = state_19946;
(statearr_19970[(13)] = inst_19911__$1);

(statearr_19970[(11)] = inst_19910__$1);

return statearr_19970;
})();
if(inst_19911__$1){
var statearr_19971_21040 = state_19946__$1;
(statearr_19971_21040[(1)] = (8));

} else {
var statearr_19972_21041 = state_19946__$1;
(statearr_19972_21041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (14))){
var inst_19906 = (state_19946[(9)]);
var inst_19910 = (state_19946[(11)]);
var inst_19923 = (state_19946[(2)]);
var inst_19924 = [];
var inst_19925 = inst_19924.push(inst_19906);
var inst_19902 = inst_19924;
var inst_19903 = inst_19910;
var state_19946__$1 = (function (){var statearr_19975 = state_19946;
(statearr_19975[(14)] = inst_19923);

(statearr_19975[(15)] = inst_19925);

(statearr_19975[(7)] = inst_19903);

(statearr_19975[(8)] = inst_19902);

return statearr_19975;
})();
var statearr_19977_21045 = state_19946__$1;
(statearr_19977_21045[(2)] = null);

(statearr_19977_21045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (16))){
var state_19946__$1 = state_19946;
var statearr_19978_21046 = state_19946__$1;
(statearr_19978_21046[(2)] = null);

(statearr_19978_21046[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (10))){
var inst_19916 = (state_19946[(2)]);
var state_19946__$1 = state_19946;
if(cljs.core.truth_(inst_19916)){
var statearr_19980_21047 = state_19946__$1;
(statearr_19980_21047[(1)] = (11));

} else {
var statearr_19981_21048 = state_19946__$1;
(statearr_19981_21048[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (18))){
var inst_19935 = (state_19946[(2)]);
var state_19946__$1 = state_19946;
var statearr_19982_21049 = state_19946__$1;
(statearr_19982_21049[(2)] = inst_19935);

(statearr_19982_21049[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (8))){
var inst_19911 = (state_19946[(13)]);
var state_19946__$1 = state_19946;
var statearr_19984_21052 = state_19946__$1;
(statearr_19984_21052[(2)] = inst_19911);

(statearr_19984_21052[(1)] = (10));


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
var cljs$core$async$state_machine__16914__auto__ = null;
var cljs$core$async$state_machine__16914__auto____0 = (function (){
var statearr_19986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19986[(0)] = cljs$core$async$state_machine__16914__auto__);

(statearr_19986[(1)] = (1));

return statearr_19986;
});
var cljs$core$async$state_machine__16914__auto____1 = (function (state_19946){
while(true){
var ret_value__16915__auto__ = (function (){try{while(true){
var result__16916__auto__ = switch__16913__auto__(state_19946);
if(cljs.core.keyword_identical_QMARK_(result__16916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16916__auto__;
}
break;
}
}catch (e19987){var ex__16917__auto__ = e19987;
var statearr_19988_21058 = state_19946;
(statearr_19988_21058[(2)] = ex__16917__auto__);


if(cljs.core.seq((state_19946[(4)]))){
var statearr_19989_21059 = state_19946;
(statearr_19989_21059[(1)] = cljs.core.first((state_19946[(4)])));

} else {
throw ex__16917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21060 = state_19946;
state_19946 = G__21060;
continue;
} else {
return ret_value__16915__auto__;
}
break;
}
});
cljs$core$async$state_machine__16914__auto__ = function(state_19946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16914__auto____1.call(this,state_19946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16914__auto____0;
cljs$core$async$state_machine__16914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16914__auto____1;
return cljs$core$async$state_machine__16914__auto__;
})()
})();
var state__17030__auto__ = (function (){var statearr_19991 = f__17029__auto__();
(statearr_19991[(6)] = c__17028__auto___21006);

return statearr_19991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
