(ns main.react-native.navigation.core
  (:require
   ["@react-navigation/bottom-tabs" :refer (createBottomTabNavigator)]
   ["@react-navigation/native" :refer [NavigationContainer]]
   ["@react-navigation/native-stack" :refer [createNativeStackNavigator]]
   [reagent.core :as reagent]
   [main.react-native.navigation.utils :as utils]))


(def navigation-container (reagent/adapt-react-class NavigationContainer))

(defn create-stack-navigator []
  (let [^js stack (createNativeStackNavigator)]
    [(reagent/adapt-react-class (.-Navigator stack))
     (reagent/adapt-react-class (.-Screen stack))]))

(defn create-bottom-tab-navigator []
  (let [^js tab (createBottomTabNavigator)]
    [(reagent/adapt-react-class (.-Navigator tab))
     (reagent/adapt-react-class (.-Screen tab))]))

(defn stack [& params]
  (let [[navigator screen] (create-stack-navigator)]
    (utils/prepare-navigator navigator screen)))

(defn bottom-tabs [& params]
  (let [[navigator tab] (create-bottom-tab-navigator)]
    (utils/prepare-navigator navigator tab)))
