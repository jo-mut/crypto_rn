(ns main.components.text
  [:require
   [react-native.core :as rn]])


(defn text
  [{:keys [string size color line-height font-weight font-family] 
    :or {size         24
         color        "#000000"
         font-weight "400"}}]
  [rn/text
   {:style {:size        size
            :color       color
            :font-weight font-weight
            :font-family font-family
            :line-height line-height}}
   string])