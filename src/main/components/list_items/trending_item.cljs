(ns main.components.list-items.trending-item
  (:require
   [react-native.core :as rn]
   [main.constants.theme :as theme]))

(defn view
  [{:keys [item]}]
  (let [{:keys [currency code image amount changes]} item]
    [rn/view
     {:style {:min-width        130
              :border-radius    10
              :padding          15
              :background-color (:white theme/colors)}}
     [rn/view {:style
               {:flex-direction :row}}
      [rn/image
       {:source image
        :style  {:margin-right 8
                 :width        24
                 :height       24
                 :radius       (/ 24 2)}}]
      [rn/view
       [rn/text {:style
                 {:color     (:black theme/colors)
                  :font-size 14}}
        currency]
       [rn/text {:style
                 {:color (:black theme/colors)
                  :font-size 10}}
        code]]]
     [rn/view {:style
               {:margin-top 12}}
      [rn/text {:style
                {:color (:black theme/colors)
                 :font-size 16
                 :font-weight "bold"}}
       amount]]
     [rn/text {:style
               {:color (:black theme/colors)
                :font-size 10}}
      changes]]))