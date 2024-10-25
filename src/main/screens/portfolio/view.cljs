(ns main.screens.portfolio.view
 (:require 
  [react-native.core :as rn]))


(defn view []
  [rn/scroll-view
   [rn/view {:flex 1
             :padding-bottom 50}]])