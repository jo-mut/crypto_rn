(ns main.resources.ui)

(def images
  {:bitcoin  (js/require "../resources/images/ui/empty-chats-header.png"),
   :ethereum (js/require "../assets/images/ethereum.png"),
   :litecoin (js/require "../assets/images/litecoin.png"),
   :ripple   (js/require "../assets/images/ripple.png")})

(def icons
  {:back_arrow         (js/require "../assets/icons/back_arrow.png"),
   :home               (js/require "../assets/icons/home.png"),
   :line_graph         (js/require "../assets/icons/line_graph.png"),
   :notification_color  (js/require "../assets/icons/notification_color.png"),
   :notification_white  (js/require "../assets/icons/notification_white.png"),
   :pie_chart          (js/require "../assets/icons/pie_chart.png"),
   :right_arrow        (js/require "../assets/icons/right_arrow.png"),
   :settings           (js/require "../assets/icons/settings.png"),
   :star               (js/require "../assets/icons/star.png"),
   :transaction        (js/require "../assets/icons/transaction.png")})

(defn get-image
  [k]
  (k images))