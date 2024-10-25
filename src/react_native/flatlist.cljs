(ns react-native.flatlist
  (:require
   [reagent.core :as reagent]
   ["react-native" :as react-native]
   [reagent.core :as r]))

(def rn-flat-list (reagent/adapt-react-class (.-FlatList ^js react-native)))

(defn- wrap-render-fn
  [f render-data]
  (fn [^js data]
    (reagent/as-element [f (.-item data) (.-index data)
                         (.-separators data) render-data
                         (.-isActive data) (.-drag data)])))

(defn base-flatlist-props
  [{:keys [key-fn render-fn empty-component header footer separator data render-data on-drag-end-fn
           horizontalIndicator verticalIndicator]
    :as   props}]
  (merge
   {:data                   (to-array data)}
   {:keyExtractor           key-fn
    :renderItem             (wrap-render-fn render-fn render-data)
    :ItemSeparatorComponent (fn [] (r/as-element separator))
    :ListFooterComponent    (fn [] (r/as-element footer))
    :ListHeaderComponent    (fn [] (r/as-element header))
    :showsHorizontalScrollIndicator horizontalIndicator
    :showsVerticalScrollIndicator verticalIndicator
    :onDragEnd              on-drag-end-fn}
   (dissoc props :data :header :footer :empty-component :separator :render-fn :key-fn :on-drag-end-fn)))

(defn flat-list
  [props]
  [rn-flat-list (base-flatlist-props props)])