(ns main.core
  (:require
   [main.screens.home.view :as home]
   [main.screens.prices.view :as prices]
   [main.screens.settings.view :as settings]
   [main.screens.portfolio.view :as portfolio]
   [main.react-native.core :as rn]
   [main.react-native.navigation.core :as navigation]))

(defn main-screens []
  [navigation/bottom-tabs
   {:tabBarOptions {:activeTintColor   "#5cb85c"
                    :inactiveTintColor :black
                    :showLabel         true}}
   [{:name "Home"
     :component home/view} 
    {:name "Portfolio"
     :component portfolio/view}
    {:name "Prices"
     :component prices/view}
    {:name "Settings"
     :component settings/view}]])

(defn app-root []
  [navigation/navigation-container
   [navigation/stack
    [{:name :main
      :component main-screens}]]])

(defn init []
  (rn/register-component "crypto_rn" app-root))
