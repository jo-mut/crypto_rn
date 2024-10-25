(ns main.components.list-items.default-item
  (:require [react-native.core :as rn]
            [main.constants.theme :as theme]))

(defn- left-component
  [{:keys [icon]}]
  [rn/image {:source icon}])

(defn- right-component
  [{:keys [icon]}]
  [rn/image {:source icon}])

(defn- title-component
  [{:keys [title sub-title]}]
  [rn/view {:style {:margin-horizontal 10}}
   [rn/text {:style {:color     (:black theme/colors)
                     :font-size 14}} title]
   [rn/text {:style {:color     (:black theme/colors)
                     :font-size 12}} sub-title]])

(defn view
  [{:keys [left-side right-side title sub-title]}]
  [rn/view {:flex-direction  :row
            :style {:padding       10
                    :border-radius 10}}
   [left-component]
   [title-component]
   [right-component]])