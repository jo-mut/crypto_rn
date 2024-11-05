(ns main.core
  (:require
   [main.screens.core :as screens]
   [main.screens.buy.view :as buy]
   [main.screens.trade.view :as trade]
   [react-native.core :as rn]
   [react-native.navigation.core :as navigation]))


(defn app-root []
  [navigation/navigation-container
   {:ref navigation/navigation-ref}
   [navigation/stack
    {:screenOptions
     {:headerShown     false}
     :initialRouteName :tabs}
    [{:name      "Buy"
      :component  buy/view}
     {:name      "Trade"
      :component trade/view}
     {:name      :tabs
      :component screens/main-screens}]]])

(defn init []
  (rn/register-component "crypto_rn" app-root))
