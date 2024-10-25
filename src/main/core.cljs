(ns main.core
  (:require
   ["react" :as react]
   [main.screens.home.view :as home]
   [main.screens.prices.view :as prices]
   [main.screens.settings.view :as settings]
   [main.screens.portfolio.view :as portfolio]
   [main.screens.transactions.view :as transactions]
   [react-native.core :as rn]
   [main.components.icons :as icons]
   [react-native.navigation.core :as navigation]
   [reagent.core :as reagent]))

(defn main-screens []
  [navigation/bottom-tabs
   {:screenOptions {:tabBarActiveTintColor   "#5cb85c"
                    :tabBarInactiveTintColor :black
                    :headerShown             false
                    :showLabel               true}}
   

    [{:name "Home"
       :component home/view
       :options {:tabBarIcon (fn [{:keys [focused color size]}]
                               (reagent/as-element
                                [icons/m-icon
                                 {:name :home
                                  :size 24}]))}}
      {:name "Portfolio"
       :component portfolio/view
       :options {:tabBarIcon (fn [{:keys [focused color size]}]
                               (reagent/as-element
                                [icons/m-icon
                                 {:name :wallet
                                  :size 24}]))}}
      {:name "Transactions"
       :component transactions/view
       :options {:tabBarIcon (fn [{:keys [focused color size]}]
                               (reagent/as-element
                                [icons/m-icon
                                 {:name :swap-horizontal
                                  :size 24}]))}}
      {:name "Prices"
       :component prices/view
       :options {:tabBarIcon (fn [{:keys [focused color size]}]
                               (reagent/as-element
                                [icons/m-icon
                                 {:name :chart-timeline-variant
                                  :size 24}]))}}
      {:name "Settings"
       :component settings/view
       :options  {:tabBarIcon (fn [{:keys [focused color size]}]
                                (reagent/as-element
                                 [icons/m-icon
                                  {:name :cog
                                   :size 24}]))}}]])

(defn app-root [] 
  
  [navigation/navigation-container
   [navigation/stack
    {:screenOptions
     {:headerShown false}}
    [{:name :tabs
      :component main-screens}]]])

(defn init []
  (rn/register-component "crypto_rn" app-root))
