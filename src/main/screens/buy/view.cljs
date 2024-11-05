(ns main.screens.buy.view
  (:require [react-native.core :as rn]
            [re-frame.core :as rf]))

(defn view
  [{:keys [navigation]}]
  (js/console.log (str "props ===== " navigation))
  [rn/view {:flex 1}
   [rn/touchable-opacity 
    {:on-press (fn []
                 (rf/dispatch (.navigate  navigation "Trade")))}
    [rn/view {:height 200
              :background-color "blue"
              :width  "100%"}]]])