(ns main.screens.core
  (:require
   [main.screens.home.view :as home]
   [main.screens.portfolio.view :as portfolio]
   [main.screens.transactions.view :as transactions]
   [main.screens.prices.view :as prices]
   [main.screens.settings.view :as settings] 
   [reagent.core :as reagent]
   [main.components.icons :as icons]
   [react-native.navigation.core :as navigation]))

(defn tab-bar-options
  [{:keys [name icon-size]}]
  {:tabBarIcon (fn [{:keys [focused color size]}]
                 (reagent/as-element
                  [icons/m-icon
                   {:name name
                    :size icon-size}]))})

(defn main-screens [props]
  [navigation/bottom-tabs
   {:screenOptions {:tabBarActiveTintColor   "#5cb85c"
                    :tabBarInactiveTintColor :black
                    :headerShown             false
                    :showLabel               true}}

   [{:name "Home"
     :component home/view
     :options (tab-bar-options {:name      :home
                                :icon-size 24})}
    {:name "Portfolio"
     :component portfolio/view
     :options (tab-bar-options {:name      :wallet
                                :icon-size 24})}
    {:name "Transactions"
     :component transactions/view
     :options  (tab-bar-options {:name      :swap-horizontal
                                 :icon-size 24})}
    {:name "Prices"
     :component prices/view
     :options (tab-bar-options {:name      :chart-timeline-variant
                                :icon-size 24})}
    {:name "Settings"
     :component settings/view
     :options  (tab-bar-options {:name      :cog
                                 :icon-size 24})}]])
