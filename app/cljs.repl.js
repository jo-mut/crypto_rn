goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__16397){
var map__16398 = p__16397;
var map__16398__$1 = cljs.core.__destructure_map(map__16398);
var m = map__16398__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16398__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16398__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__16399_16604 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16400_16605 = null;
var count__16401_16606 = (0);
var i__16402_16607 = (0);
while(true){
if((i__16402_16607 < count__16401_16606)){
var f_16613 = chunk__16400_16605.cljs$core$IIndexed$_nth$arity$2(null, i__16402_16607);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_16613], 0));


var G__16617 = seq__16399_16604;
var G__16618 = chunk__16400_16605;
var G__16619 = count__16401_16606;
var G__16620 = (i__16402_16607 + (1));
seq__16399_16604 = G__16617;
chunk__16400_16605 = G__16618;
count__16401_16606 = G__16619;
i__16402_16607 = G__16620;
continue;
} else {
var temp__5804__auto___16621 = cljs.core.seq(seq__16399_16604);
if(temp__5804__auto___16621){
var seq__16399_16622__$1 = temp__5804__auto___16621;
if(cljs.core.chunked_seq_QMARK_(seq__16399_16622__$1)){
var c__5525__auto___16623 = cljs.core.chunk_first(seq__16399_16622__$1);
var G__16624 = cljs.core.chunk_rest(seq__16399_16622__$1);
var G__16625 = c__5525__auto___16623;
var G__16626 = cljs.core.count(c__5525__auto___16623);
var G__16627 = (0);
seq__16399_16604 = G__16624;
chunk__16400_16605 = G__16625;
count__16401_16606 = G__16626;
i__16402_16607 = G__16627;
continue;
} else {
var f_16632 = cljs.core.first(seq__16399_16622__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_16632], 0));


var G__16633 = cljs.core.next(seq__16399_16622__$1);
var G__16634 = null;
var G__16635 = (0);
var G__16636 = (0);
seq__16399_16604 = G__16633;
chunk__16400_16605 = G__16634;
count__16401_16606 = G__16635;
i__16402_16607 = G__16636;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16642 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_16642], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_16642)))?cljs.core.second(arglists_16642):arglists_16642)], 0));
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
var seq__16405_16658 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16406_16659 = null;
var count__16407_16660 = (0);
var i__16408_16661 = (0);
while(true){
if((i__16408_16661 < count__16407_16660)){
var vec__16422_16662 = chunk__16406_16659.cljs$core$IIndexed$_nth$arity$2(null, i__16408_16661);
var name_16663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16422_16662,(0),null);
var map__16425_16664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16422_16662,(1),null);
var map__16425_16665__$1 = cljs.core.__destructure_map(map__16425_16664);
var doc_16667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16425_16665__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16425_16665__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_16663], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_16669], 0));

if(cljs.core.truth_(doc_16667)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_16667], 0));
} else {
}


var G__16675 = seq__16405_16658;
var G__16676 = chunk__16406_16659;
var G__16677 = count__16407_16660;
var G__16678 = (i__16408_16661 + (1));
seq__16405_16658 = G__16675;
chunk__16406_16659 = G__16676;
count__16407_16660 = G__16677;
i__16408_16661 = G__16678;
continue;
} else {
var temp__5804__auto___16679 = cljs.core.seq(seq__16405_16658);
if(temp__5804__auto___16679){
var seq__16405_16680__$1 = temp__5804__auto___16679;
if(cljs.core.chunked_seq_QMARK_(seq__16405_16680__$1)){
var c__5525__auto___16681 = cljs.core.chunk_first(seq__16405_16680__$1);
var G__16682 = cljs.core.chunk_rest(seq__16405_16680__$1);
var G__16683 = c__5525__auto___16681;
var G__16684 = cljs.core.count(c__5525__auto___16681);
var G__16685 = (0);
seq__16405_16658 = G__16682;
chunk__16406_16659 = G__16683;
count__16407_16660 = G__16684;
i__16408_16661 = G__16685;
continue;
} else {
var vec__16431_16686 = cljs.core.first(seq__16405_16680__$1);
var name_16687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16431_16686,(0),null);
var map__16434_16688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16431_16686,(1),null);
var map__16434_16689__$1 = cljs.core.__destructure_map(map__16434_16688);
var doc_16690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16434_16689__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16434_16689__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_16687], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_16691], 0));

if(cljs.core.truth_(doc_16690)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_16690], 0));
} else {
}


var G__16703 = cljs.core.next(seq__16405_16680__$1);
var G__16704 = null;
var G__16705 = (0);
var G__16706 = (0);
seq__16405_16658 = G__16703;
chunk__16406_16659 = G__16704;
count__16407_16660 = G__16705;
i__16408_16661 = G__16706;
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

var seq__16436 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__16437 = null;
var count__16438 = (0);
var i__16439 = (0);
while(true){
if((i__16439 < count__16438)){
var role = chunk__16437.cljs$core$IIndexed$_nth$arity$2(null, i__16439);
var temp__5804__auto___16710__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___16710__$1)){
var spec_16715 = temp__5804__auto___16710__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_16715)], 0));
} else {
}


var G__16720 = seq__16436;
var G__16721 = chunk__16437;
var G__16722 = count__16438;
var G__16723 = (i__16439 + (1));
seq__16436 = G__16720;
chunk__16437 = G__16721;
count__16438 = G__16722;
i__16439 = G__16723;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__16436);
if(temp__5804__auto____$1){
var seq__16436__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__16436__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16436__$1);
var G__16724 = cljs.core.chunk_rest(seq__16436__$1);
var G__16725 = c__5525__auto__;
var G__16726 = cljs.core.count(c__5525__auto__);
var G__16727 = (0);
seq__16436 = G__16724;
chunk__16437 = G__16725;
count__16438 = G__16726;
i__16439 = G__16727;
continue;
} else {
var role = cljs.core.first(seq__16436__$1);
var temp__5804__auto___16728__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___16728__$2)){
var spec_16729 = temp__5804__auto___16728__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_16729)], 0));
} else {
}


var G__16734 = cljs.core.next(seq__16436__$1);
var G__16735 = null;
var G__16736 = (0);
var G__16737 = (0);
seq__16436 = G__16734;
chunk__16437 = G__16735;
count__16438 = G__16736;
i__16439 = G__16737;
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
var map__16452 = datafied_throwable;
var map__16452__$1 = cljs.core.__destructure_map(map__16452);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16452__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16452__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16452__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__16454 = cljs.core.last(via);
var map__16454__$1 = cljs.core.__destructure_map(map__16454);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16454__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16454__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16454__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__16456 = data;
var map__16456__$1 = cljs.core.__destructure_map(map__16456);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16456__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16456__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16456__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__16457 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__16457__$1 = cljs.core.__destructure_map(map__16457);
var top_data = map__16457__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16457__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__16458 = phase;
var G__16458__$1 = (((G__16458 instanceof cljs.core.Keyword))?G__16458.fqn:null);
switch (G__16458__$1) {
case "read-source":
var map__16459 = data;
var map__16459__$1 = cljs.core.__destructure_map(map__16459);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16459__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16459__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__16460 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__16460__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16460,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__16460);
var G__16460__$2 = (cljs.core.truth_((function (){var fexpr__16461 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__16461.cljs$core$IFn$_invoke$arity$1 ? fexpr__16461.cljs$core$IFn$_invoke$arity$1(source) : fexpr__16461.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16460__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__16460__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16460__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__16460__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__16462 = top_data;
var G__16462__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16462,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__16462);
var G__16462__$2 = (cljs.core.truth_((function (){var fexpr__16463 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__16463.cljs$core$IFn$_invoke$arity$1 ? fexpr__16463.cljs$core$IFn$_invoke$arity$1(source) : fexpr__16463.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16462__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__16462__$1);
var G__16462__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16462__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__16462__$2);
var G__16462__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16462__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16462__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16462__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16462__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__16464 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16464,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16464,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16464,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16464,(3),null);
var G__16467 = top_data;
var G__16467__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16467,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__16467);
var G__16467__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16467__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__16467__$1);
var G__16467__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16467__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__16467__$2);
var G__16467__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16467__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__16467__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16467__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__16467__$4;
}

break;
case "execution":
var vec__16468 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16468,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16468,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16468,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16468,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__16447_SHARP_){
var or__5002__auto__ = (p1__16447_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__16471 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__16471.cljs$core$IFn$_invoke$arity$1 ? fexpr__16471.cljs$core$IFn$_invoke$arity$1(p1__16447_SHARP_) : fexpr__16471.call(null, p1__16447_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__16472 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__16472__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16472,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__16472);
var G__16472__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16472__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16472__$1);
var G__16472__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16472__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__16472__$2);
var G__16472__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16472__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__16472__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16472__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16472__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16458__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__16483){
var map__16486 = p__16483;
var map__16486__$1 = cljs.core.__destructure_map(map__16486);
var triage_data = map__16486__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16486__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16486__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16486__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16486__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16486__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16486__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16486__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16486__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__16492 = phase;
var G__16492__$1 = (((G__16492 instanceof cljs.core.Keyword))?G__16492.fqn:null);
switch (G__16492__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__16493 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__16494 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__16495 = loc;
var G__16496 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16501_16780 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16502_16781 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16504_16782 = true;
var _STAR_print_fn_STAR__temp_val__16505_16784 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16504_16782);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16505_16784);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16481_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16481_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16502_16781);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16501_16780);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__16493,G__16494,G__16495,G__16496) : format.call(null, G__16493,G__16494,G__16495,G__16496));

break;
case "macroexpansion":
var G__16507 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__16508 = cause_type;
var G__16509 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__16510 = loc;
var G__16511 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__16507,G__16508,G__16509,G__16510,G__16511) : format.call(null, G__16507,G__16508,G__16509,G__16510,G__16511));

break;
case "compile-syntax-check":
var G__16512 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__16513 = cause_type;
var G__16514 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__16515 = loc;
var G__16516 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__16512,G__16513,G__16514,G__16515,G__16516) : format.call(null, G__16512,G__16513,G__16514,G__16515,G__16516));

break;
case "compilation":
var G__16517 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__16518 = cause_type;
var G__16519 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__16520 = loc;
var G__16521 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__16517,G__16518,G__16519,G__16520,G__16521) : format.call(null, G__16517,G__16518,G__16519,G__16520,G__16521));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__16523 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__16524 = symbol;
var G__16525 = loc;
var G__16526 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16532_16813 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16533_16814 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16534_16815 = true;
var _STAR_print_fn_STAR__temp_val__16535_16816 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16534_16815);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16535_16816);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16482_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16482_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16533_16814);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16532_16813);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__16523,G__16524,G__16525,G__16526) : format.call(null, G__16523,G__16524,G__16525,G__16526));
} else {
var G__16544 = "Execution error%s at %s(%s).\n%s\n";
var G__16545 = cause_type;
var G__16546 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__16547 = loc;
var G__16548 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__16544,G__16545,G__16546,G__16547,G__16548) : format.call(null, G__16544,G__16545,G__16546,G__16547,G__16548));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16492__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
