(ns main.screens.home.view
  (:require [react-native.core :as rn]
            [main.components.header-bar :as header-bar]
            [main.resources.ui :as resources]
            [main.constants.dummy :as dummy]
            [main.components.list-items.trending-item :as trending-item]
            [main.components.alert :as alert]
            [main.constants.theme :as theme]))


(defn balance []
  [rn/view {:flex           1
            :padding-top    50
            :align-items    :center}
   [rn/text
    {:style {:color       "white"
             :font-size   14}}
    "Your Porfolio Balance"]
   [rn/text
    {:style {:color       "white"
             :font-weight  "bold"
             :font-size    28}}
    (:balance dummy/portfolio)]
   [rn/view
    {:flex-direction :row}
    [rn/text
     {:style {:color    "white"
              :font-size 9
              :margin-right 10}}
     (:changes dummy/portfolio)]
    [rn/text
     {:style {:color    "white"
              :font-size 9}}
     "Last 24 hours"]]])

(defn trending-item
  []
  (fn [item]
    [trending-item/view {:item item}]))


(defn trending []
  (let [trending-currencies dummy/trending-currencies]
    [rn/view
     {:margin-top        20
      :margin-left       20
      :padding-vertical  10}
     [rn/text
      {:style {:color         (:white theme/colors)
               :font-weight   "600"
               :font-size     16
               :margin-bottom 5}}
      "Trending"]
     [rn/flat-list
      {:horizontal          true
       :horizontalIndicator false
       :data                trending-currencies
       :separator           [rn/view {:margin-right 10}]
       :render-fn           (fn [item]
                              [trending-item item])}]]))

(defn- transaction-item 
  []
  )

(defn transaction-history []
  (let [items dummy/trending-currencies]
    [rn/view
     {:margin-top        10
      :margin-horizontal 20
      :padding-vertical  10}
     [rn/text
      {:style {:color         (:black theme/colors)
               :font-weight   "600"
               :font-size     16
               :margin-bottom 5}}
      "Transaction History"]
     [rn/view
      {:style {:border-radius     10
               :background-color  (:white theme/colors)}}
      [rn/flat-list
       {:verticalIndicator false
        :data                items
        :separator           [rn/view
                              {:style {:margin-vertical   5
                                       :height            0.1
                                       :margin-horizontal 20
                                       :background-color  (:lightGray theme/colors)}}]
        :render-fn           (fn [item]
                               [transaction-item item])}]]]))

(defn price-alert
  []
  [rn/view
   {:style {:margin-top 70}}
   [alert/view
    {:left-icon  :notification_color
     :right-icon :right_arrow
     :title      "Set Price Alert"
     :sub-title  "Get notified when your coins are moving"}]])

(defn invest-caution
  []
  [rn/view
   {:style {:padding           20
            :margin-top        20
            :margin-horizontal 20
            :border-radius     10
            :background-color  (:secondary theme/colors)}}
   [rn/text
    {:style {:color    (:white theme/colors)
             :font-size 14}}
    "It is very difficult to time an investiment especially when the market is volatile. Learn how to use dollar cost averaging to your advantage"]
   [rn/text
    {:style {:color                (:blue theme/colors)
             :margin-top           10
             :text-decoration-line :underline,
             :font-size            14}}
    "Learn more"]])

(defn header
  []
  [rn/image-background
   {:flex   1
    :source (resources/get-image :banner)}
   [header-bar/header-bar]
   [balance]
   [rn/view {:margin-bottom -60}
    [trending]]])

(defn view []
  [rn/scroll-view
   [rn/view
    [header]
    [price-alert]
    [invest-caution]
    [transaction-history]
    [rn/view
     {:flex 1
      :background-color "black"}]]])