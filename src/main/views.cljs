(ns main.views
  (:require [steroid.rn.core :as rn]
            [re-frame.core :as re-frame]
            [steroid.rn.components.ui :as ui]
            [steroid.rn.navigation.safe-area :as safe-area]))

(defn home-screen []
  [safe-area/safe-area-view {:style {:flex 1}}
   [rn/view {:style {:align-items :center :justify-content :center :flex 1}}
    [rn/text {:style {:color :red :font-size 30 :margin-top 10}} "Home Screen"]]])

(defn basic-screen []
  [safe-area/safe-area-view {:style {:flex 1}}
   [rn/view {:style {:align-items :center :justify-content :center :flex 1}}
    [rn/text {:style {:color :red :font-size 30 :margin-top 10}} "Basic Screen"]]])

(defn ui-screen []
  [safe-area/safe-area-view {:style {:flex 1}}
   [rn/view {:style {:align-items :center :justify-content :center :flex 1}}
    [rn/text {:style {:color :red :font-size 30 :margin-top 10}} "UI Screen"]]])

(defn list-screen []
  [safe-area/safe-area-view {:style {:flex 1}}
   [rn/view {:style {:align-items :center :justify-content :center :flex 1}}
    [rn/text {:style {:color :red :font-size 30 :margin-top 10}} "List Screen"]]])

(defn storage-screen []
  [safe-area/safe-area-view {:style {:flex 1}}
   [rn/view {:style {:align-items :center :justify-content :center :flex 1}}
    [rn/text {:style {:color :red :font-size 30 :margin-top 10}} "Storage Screen"]]])

(defn modal-screen []
  [rn/view {:style {:align-items :center :justify-content :center :flex 1}}
   [ui/button {:title    "Navigate back"
               :on-press #(re-frame/dispatch [:navigate-back])}]])
