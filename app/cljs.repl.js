goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24865){
var map__24866 = p__24865;
var map__24866__$1 = cljs.core.__destructure_map(map__24866);
var m = map__24866__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24866__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24866__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24869_25035 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24870_25036 = null;
var count__24871_25037 = (0);
var i__24872_25038 = (0);
while(true){
if((i__24872_25038 < count__24871_25037)){
var f_25039 = chunk__24870_25036.cljs$core$IIndexed$_nth$arity$2(null, i__24872_25038);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_25039], 0));


var G__25040 = seq__24869_25035;
var G__25041 = chunk__24870_25036;
var G__25042 = count__24871_25037;
var G__25043 = (i__24872_25038 + (1));
seq__24869_25035 = G__25040;
chunk__24870_25036 = G__25041;
count__24871_25037 = G__25042;
i__24872_25038 = G__25043;
continue;
} else {
var temp__5804__auto___25045 = cljs.core.seq(seq__24869_25035);
if(temp__5804__auto___25045){
var seq__24869_25046__$1 = temp__5804__auto___25045;
if(cljs.core.chunked_seq_QMARK_(seq__24869_25046__$1)){
var c__5525__auto___25047 = cljs.core.chunk_first(seq__24869_25046__$1);
var G__25048 = cljs.core.chunk_rest(seq__24869_25046__$1);
var G__25049 = c__5525__auto___25047;
var G__25050 = cljs.core.count(c__5525__auto___25047);
var G__25051 = (0);
seq__24869_25035 = G__25048;
chunk__24870_25036 = G__25049;
count__24871_25037 = G__25050;
i__24872_25038 = G__25051;
continue;
} else {
var f_25053 = cljs.core.first(seq__24869_25046__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_25053], 0));


var G__25054 = cljs.core.next(seq__24869_25046__$1);
var G__25055 = null;
var G__25056 = (0);
var G__25057 = (0);
seq__24869_25035 = G__25054;
chunk__24870_25036 = G__25055;
count__24871_25037 = G__25056;
i__24872_25038 = G__25057;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25058 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_25058], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_25058)))?cljs.core.second(arglists_25058):arglists_25058)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24877_25059 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24878_25060 = null;
var count__24879_25061 = (0);
var i__24880_25062 = (0);
while(true){
if((i__24880_25062 < count__24879_25061)){
var vec__24914_25063 = chunk__24878_25060.cljs$core$IIndexed$_nth$arity$2(null, i__24880_25062);
var name_25064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24914_25063,(0),null);
var map__24917_25065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24914_25063,(1),null);
var map__24917_25066__$1 = cljs.core.__destructure_map(map__24917_25065);
var doc_25067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24917_25066__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24917_25066__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_25064], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_25068], 0));

if(cljs.core.truth_(doc_25067)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_25067], 0));
} else {
}


var G__25069 = seq__24877_25059;
var G__25070 = chunk__24878_25060;
var G__25071 = count__24879_25061;
var G__25072 = (i__24880_25062 + (1));
seq__24877_25059 = G__25069;
chunk__24878_25060 = G__25070;
count__24879_25061 = G__25071;
i__24880_25062 = G__25072;
continue;
} else {
var temp__5804__auto___25073 = cljs.core.seq(seq__24877_25059);
if(temp__5804__auto___25073){
var seq__24877_25074__$1 = temp__5804__auto___25073;
if(cljs.core.chunked_seq_QMARK_(seq__24877_25074__$1)){
var c__5525__auto___25075 = cljs.core.chunk_first(seq__24877_25074__$1);
var G__25076 = cljs.core.chunk_rest(seq__24877_25074__$1);
var G__25077 = c__5525__auto___25075;
var G__25078 = cljs.core.count(c__5525__auto___25075);
var G__25079 = (0);
seq__24877_25059 = G__25076;
chunk__24878_25060 = G__25077;
count__24879_25061 = G__25078;
i__24880_25062 = G__25079;
continue;
} else {
var vec__24918_25080 = cljs.core.first(seq__24877_25074__$1);
var name_25081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24918_25080,(0),null);
var map__24921_25082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24918_25080,(1),null);
var map__24921_25083__$1 = cljs.core.__destructure_map(map__24921_25082);
var doc_25084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24921_25083__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24921_25083__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_25081], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_25085], 0));

if(cljs.core.truth_(doc_25084)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_25084], 0));
} else {
}


var G__25086 = cljs.core.next(seq__24877_25074__$1);
var G__25087 = null;
var G__25088 = (0);
var G__25089 = (0);
seq__24877_25059 = G__25086;
chunk__24878_25060 = G__25087;
count__24879_25061 = G__25088;
i__24880_25062 = G__25089;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__24922 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24923 = null;
var count__24924 = (0);
var i__24925 = (0);
while(true){
if((i__24925 < count__24924)){
var role = chunk__24923.cljs$core$IIndexed$_nth$arity$2(null, i__24925);
var temp__5804__auto___25090__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___25090__$1)){
var spec_25091 = temp__5804__auto___25090__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_25091)], 0));
} else {
}


var G__25092 = seq__24922;
var G__25093 = chunk__24923;
var G__25094 = count__24924;
var G__25095 = (i__24925 + (1));
seq__24922 = G__25092;
chunk__24923 = G__25093;
count__24924 = G__25094;
i__24925 = G__25095;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__24922);
if(temp__5804__auto____$1){
var seq__24922__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__24922__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24922__$1);
var G__25096 = cljs.core.chunk_rest(seq__24922__$1);
var G__25097 = c__5525__auto__;
var G__25098 = cljs.core.count(c__5525__auto__);
var G__25099 = (0);
seq__24922 = G__25096;
chunk__24923 = G__25097;
count__24924 = G__25098;
i__24925 = G__25099;
continue;
} else {
var role = cljs.core.first(seq__24922__$1);
var temp__5804__auto___25107__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___25107__$2)){
var spec_25108 = temp__5804__auto___25107__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_25108)], 0));
} else {
}


var G__25110 = cljs.core.next(seq__24922__$1);
var G__25111 = null;
var G__25112 = (0);
var G__25113 = (0);
seq__24922 = G__25110;
chunk__24923 = G__25111;
count__24924 = G__25112;
i__24925 = G__25113;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__24939 = datafied_throwable;
var map__24939__$1 = cljs.core.__destructure_map(map__24939);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24939__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24939__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24939__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__24940 = cljs.core.last(via);
var map__24940__$1 = cljs.core.__destructure_map(map__24940);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24940__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24940__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24940__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__24941 = data;
var map__24941__$1 = cljs.core.__destructure_map(map__24941);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24941__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24941__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24941__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__24942 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__24942__$1 = cljs.core.__destructure_map(map__24942);
var top_data = map__24942__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24942__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__24946 = phase;
var G__24946__$1 = (((G__24946 instanceof cljs.core.Keyword))?G__24946.fqn:null);
switch (G__24946__$1) {
case "read-source":
var map__24947 = data;
var map__24947__$1 = cljs.core.__destructure_map(map__24947);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24947__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24947__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__24948 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__24948__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24948,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24948);
var G__24948__$2 = (cljs.core.truth_((function (){var fexpr__24953 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24953.cljs$core$IFn$_invoke$arity$1 ? fexpr__24953.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24953.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24948__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24948__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24948__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24948__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__24956 = top_data;
var G__24956__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24956,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24956);
var G__24956__$2 = (cljs.core.truth_((function (){var fexpr__24957 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24957.cljs$core$IFn$_invoke$arity$1 ? fexpr__24957.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24957.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24956__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24956__$1);
var G__24956__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24956__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24956__$2);
var G__24956__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24956__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24956__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24956__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24956__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__24959 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24959,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24959,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24959,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24959,(3),null);
var G__24964 = top_data;
var G__24964__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24964,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__24964);
var G__24964__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24964__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__24964__$1);
var G__24964__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24964__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__24964__$2);
var G__24964__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24964__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24964__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24964__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24964__$4;
}

break;
case "execution":
var vec__24967 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24967,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24967,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24967,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24967,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__24936_SHARP_){
var or__5002__auto__ = (p1__24936_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__24971 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24971.cljs$core$IFn$_invoke$arity$1 ? fexpr__24971.cljs$core$IFn$_invoke$arity$1(p1__24936_SHARP_) : fexpr__24971.call(null, p1__24936_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__24972 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__24972__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24972,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__24972);
var G__24972__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24972__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24972__$1);
var G__24972__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24972__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__24972__$2);
var G__24972__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24972__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__24972__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24972__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24972__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24946__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__24986){
var map__24987 = p__24986;
var map__24987__$1 = cljs.core.__destructure_map(map__24987);
var triage_data = map__24987__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24987__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24987__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24987__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24987__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24987__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24987__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24987__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24987__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__24988 = phase;
var G__24988__$1 = (((G__24988 instanceof cljs.core.Keyword))?G__24988.fqn:null);
switch (G__24988__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__24991 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__24992 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24993 = loc;
var G__24994 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24995_25141 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24996_25145 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24997_25146 = true;
var _STAR_print_fn_STAR__temp_val__24998_25147 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24997_25146);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24998_25147);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24983_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24983_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24996_25145);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24995_25141);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24991,G__24992,G__24993,G__24994) : format.call(null, G__24991,G__24992,G__24993,G__24994));

break;
case "macroexpansion":
var G__25000 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__25001 = cause_type;
var G__25002 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25003 = loc;
var G__25004 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25000,G__25001,G__25002,G__25003,G__25004) : format.call(null, G__25000,G__25001,G__25002,G__25003,G__25004));

break;
case "compile-syntax-check":
var G__25005 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__25006 = cause_type;
var G__25007 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25008 = loc;
var G__25009 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25005,G__25006,G__25007,G__25008,G__25009) : format.call(null, G__25005,G__25006,G__25007,G__25008,G__25009));

break;
case "compilation":
var G__25010 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__25011 = cause_type;
var G__25012 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25013 = loc;
var G__25014 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25010,G__25011,G__25012,G__25013,G__25014) : format.call(null, G__25010,G__25011,G__25012,G__25013,G__25014));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__25018 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__25019 = symbol;
var G__25020 = loc;
var G__25021 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25022_25159 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25023_25160 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25024_25161 = true;
var _STAR_print_fn_STAR__temp_val__25025_25162 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25024_25161);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25025_25162);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24985_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24985_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25023_25160);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25022_25159);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__25018,G__25019,G__25020,G__25021) : format.call(null, G__25018,G__25019,G__25020,G__25021));
} else {
var G__25027 = "Execution error%s at %s(%s).\n%s\n";
var G__25028 = cause_type;
var G__25029 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25030 = loc;
var G__25031 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25027,G__25028,G__25029,G__25030,G__25031) : format.call(null, G__25027,G__25028,G__25029,G__25030,G__25031));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24988__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
