(ns main.views
  (:require
   [main.react-native.core :as rn]
   [re-frame.core :as re-frame]))

(defn home-screen []
  [rn/safe-area-view
   {:style {:flex 1}}
   [rn/view {:style
             {:align-items :center
              :justify-content :center
              :flex 1}}
    [rn/text {:style
              {:color :red
               :font-size 30
               :margin-top 10}}
     "Home Screen"]]])

(defn basic-screen []
  [rn/safe-area-view
   {:style {:flex 1}}
   [rn/view
    {:style
     {:align-items :center
      :justify-content :center
      :flex 1}}
    [rn/text
     {:style {:color :red
              :font-size 30
              :margin-top 10}}
     "Basic Screen"]]])

(defn ui-screen []
  [rn/safe-area-view
   {:style {:flex 1}}
   [rn/view
    {:style {:align-items
             :center :justify-content
             :center :flex 1}}
    [rn/text
     {:style {:color :red
              :font-size 30
              :margin-top 10}}
     "UI Screen"]]])

(defn list-screen []
  [rn/safe-area-view
   {:style {:flex 1}}
   [rn/view {:style
             {:align-items :center
              :justify-content :center
              :flex 1}}
    [rn/text {:style {:color :red
                      :font-size 30
                      :margin-top 10}}
     "List Screen"]]])

(defn storage-screen []
  [rn/safe-area-view
   {:style {:flex 1}}
   [rn/view
    {:style {:align-items :center
             :justify-content :center
             :flex 1}}
    [rn/text
     {:style {:color :red
              :font-size 30
              :margin-top 10}}
     "Storage Screen"]]])
