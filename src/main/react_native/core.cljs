(ns main.react-native.core
  (:require
   [reagent.core :as reagent]
   ["react-native" :as react-native]))

(def view (reagent/adapt-react-class (.-View ^js react-native)))

(def ^:private image-native
  (reagent/adapt-react-class (.-Image ^js react-native)))

(defn image
  [{:keys [source] :as props}]
  [image-native
   (if (string? source)
     (assoc props :source {:uri source})
     props)])

(def scroll-view (reagent/adapt-react-class (.-ScrollView ^js react-native)))

(def safe-area-view (reagent/adapt-react-class (.-SafeAreaView ^js react-native)))

(def text (reagent/adapt-react-class (.-Text ^js react-native)))

(def text-input (reagent/adapt-react-class (.-TextInput ^js react-native)))

(def touchable-opacity (reagent/adapt-react-class (.-TouchableOpacity ^js react-native)))

(def touchable-highlight (reagent/adapt-react-class (.-TouchableHighlight ^js react-native)))

(def touchable-without-feedback
  (reagent/adapt-react-class (.-TouchableWithoutFeedback ^js react-native)))

(defn hide-splash-screen
  []
  (.hide ^js (-> react-native .-NativeModules .-SplashScreen)))

(defn reactify-component [value] (reagent/reactify-component value))

(def app-registry react-native/AppRegistry)

(defn register-component [name app-root]
  (.registerComponent
   app-registry
   name
   #(reactify-component app-root)))

(def get-window
  (memoize
   (fn []
     (js->clj (.get (.-Dimensions ^js react-native) "window") :keywordize-keys true))))

(def get-screen
  (memoize
   (fn []
     (js->clj (.get (.-Dimensions ^js react-native) "screen") :keywordize-keys true))))

