(ns main.events
  (:require
   [re-frame.core :as rf]
   [react-native.navigation.core :as navigation]))

(def app-db (atom {}))

(rf/reg-event-fx
 {:events [:init-app-db]}
 (fn []
   {:db app-db}))

(rf/reg-fx
 :navigate
 (fn [[screen params]]
   (js/console.log (str "ste " screen))
   (when (.isReady navigation/navigation-ref)
     (.navigate navigation/navigation-ref screen (clj->js params)))))

(rf/reg-event-fx
 :navigate-to
 (fn [_ [_ component params]]
   {:navigate [component params]}))