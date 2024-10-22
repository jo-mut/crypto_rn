(ns main.components.icons
  (:require
   ["react" :as react]
   [main.react-native.core :as rn]
   [main.resources.ui :as resources]
   [reagent.core :as reagent]))

(def icon-map
  {:AntDesign "AntDesign"
   :EvilIcons "EvilIcons"
   :Entypo "Entypo"
   :Feather "Feather"
   :FontAwesome "FontAwesome"
   :Fontisto "Fontisto"
   :Foundation "Foundation"
   :Ionicons "Ionicons"
   :MaterialIcons "MaterialIcons"
   :MaterialCommunityIcons "MaterialCommunityIcons"
   :Octicons "Octicons"
   :Zocial "Zocial"
   :SimpleLineIcons "SimpleLineIcons"})

(defn use-mount [effect]
  (react/useEffect effect #()))

(defn m-icon
  [{:keys [name size color]}]
  (reagent/as-element
   [rn/view
    {:style
     {:align-items "center"
      :justify-content "center"}}
    (reagent/as-element
     [rn/community-icons
      {:name name
       :size size
       :color color}])]))

(defn icon
  [{:keys [name size color]}]
  (reagent/as-element
   [rn/image
    {:source (resources/get-icons name)}]))