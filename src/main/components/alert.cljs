(ns main.components.alert
  (:require [react-native.core :as rn]
            [main.constants.theme :as theme]
            [main.components.icons :as icons]))

(defn- left-component
  [{:keys [name]}]
  [icons/icon
   {:name name
    :size   18}])

(defn- right-component
  [{:keys [name]}]
  [icons/icon
   {:name name
    :size   18}])

(defn- title-component
  [{:keys [title sub-title]}]
  [rn/view
   {:style {:margin-horizontal 10}}
   [rn/text
    {:style
     {:color        (:black theme/colors)
      :font-weight  "600"
      :font-size    14}}
    title]
   [rn/text
    {:style
     {:color     (:black theme/colors)
      :font-size 12}}
    sub-title]])

(defn view
  [{:keys [left-icon right-icon title sub-title]}]
  [rn/view
   {:flex-direction  :row
    :style {:padding            20
            :border-radius      10
            :margin-horizontal  20
            :justify-content    :space-between
            :align-items        :center
            :background-color   (:white theme/colors)}}
   [left-component
    {:name left-icon}]
   [title-component
    {:title title
     :sub-title sub-title}]
   [right-component
    {:name right-icon}]])