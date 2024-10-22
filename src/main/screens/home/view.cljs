(ns main.screens.home.view
  (:require [main.react-native.core :as rn]
            [main.components.header-bar :as header-bar]
            [main.resources.ui :as resources]))


(defn balance []
  [rn/view {:flex           1
            :padding-top    50
            :padding-bottom 40
            :align-items    :center}
   [rn/text
    {:style {:color    "white"
             :font-size 14}}
    "Your Porfolio Balance"]
   [rn/text
    {:style {:color       "white"
             :font-weight  "600"
             :font-size    32}}
    "12, 743.33"]
   [rn/view
    {:flex-direction :row}
    [rn/text
     {:style {:color    "white"
              :font-size 9
              :margin-right 10}}
     "+2.41%"]
    [rn/text
     {:style {:color    "white"
              :font-size 9}}
     "Last 24 hours"]]])

(defn trending []
  [rn/view
   {:margin-top       30
    :padding-vertical :10}
   [rn/text
    {:style {:color       "black"
             :font-weight "600"
             :font-size   14}}
    "Trending"]])

(defn view []
  [rn/scroll-view
   [rn/image-background
    {:flex  1
     :source (resources/get-image :banner)}
    [header-bar/header-bar]
    [balance]
    [trending]]
   [rn/view {:flex 1
             :background-color "black"}]])