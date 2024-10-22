(ns main.components.header-bar
  (:require [main.react-native.core :as rn]
            [main.components.text :as text]))

(defn header-bar
  [{:keys [left-component title right-component]}]
  [rn/view {:style {:flex-direction   :row
                    :justify-content  :space-between
                    :padding-vertical 12}} 
   [text/text {:string      title}]])