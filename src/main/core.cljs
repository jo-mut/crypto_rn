(ns main.core
  (:require
   [steroid.rn.core :as rn]
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [steroid.rn.navigation.core :as rnn]
   [cljs-bean.core :as bean]
   [steroid.rn.navigation.stack :as stack]
   [steroid.rn.navigation.bottom-tabs :as bottom-tabs]
   [main.views :as screens]
   [main.home.view :as home]
   [steroid.rn.navigation.safe-area :as safe-area]
   [main.react-native.core :as react-native]
   steroid.rn.navigation.events
   main.events
   main.subs))


(def tab-icons
  {"home"         "home"
   "portfolio"    "portfolio"
   "transactions" "transactions"
   "prices"       "prices"
   "settings"     "settings"})

(defn screen-options [options]
  (let [{:keys [route]} (bean/->clj options)]
    #js {:tabBarIcon
         (fn [data]
           (let [{:keys [color]} (bean/->clj data)
                 icon (get tab-icons (:name route))]
             (reagent/as-element
              [react-native/ion-icons {:name icon :color color :size 30}])))}))

(defn main-screens []
  [bottom-tabs/bottom-tab
   {:screenOptions screen-options
    :tabBarOptions {:activeTintColor   "#5cb85c"
                    :inactiveTintColor :black
                    :showLabel         true}}
   [{:name      :home
     :component home/view}
    {:name      :portfolio
     :component screens/basic-screen}
    {:name      :transactions
     :component screens/ui-screen}
    {:name      :prices
     :component screens/list-screen}
    {:name      :settings
     :component screens/storage-screen}]])

(defn root-stack []
  [safe-area/safe-area-provider
   [(rnn/create-navigation-container-reload
     {:on-ready #(re-frame/dispatch [:init-app-db])}
     [stack/stack
      {:mode :modal :header-mode :none}
      [{:name      :main
        :component main-screens}
       {:name      :modal
        :component screens/modal-screen}]])]])

(defn init []
  (rn/register-comp "crypto_rn" root-stack))