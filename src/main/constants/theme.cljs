(ns main.constants.theme)

(def colors
  {:primary "#7F5DF0"
   :secondary "#5D2DFD"
   :white "#fff"
   :black "#000000"
   :green "#37E39F"
   :red "#F9A8BA"
   :gray "#6A6A6A"
   :lightGray "#dbdbdb"
   :lightGray1 "#f5f6fa"})

(def size
  {:base    8
   :font    14
   :radius  12
   :padding 24
   :h1      30
   :h2      22
   :h3      16
   :h4      14
   :body1   30
   :body2   22
   :body3   16
   :body4   14
   :body5   12
   :width   1
   :height  1})


(def fonts
  {:h1 {:fontFamily "Roboto-Black"
        :fontSize   (:h1 size)
        :lineHeight 36}
   :h2 {:fontFamily "Roboto-Bold"
        :fontSize   (:h2 size)
        :lineHeight 30}
   :h3 {:fontFamily "Roboto-Bold"
        :fontSize   (:h3 size)
        :lineHeight 22}
   :h4 {:fontFamily "Roboto-Bold"
        :fontSize   (:h4 size)
        :lineHeight 22}
   :body1 {:fontFamily "Roboto-Regular"
           :fontSize   (:body1 size)
           :lineHeight 36}
   :body2 {:fontFamily "Roboto-Regular"
           :fontSize   (:body2 size)
           :lineHeight 30}
   :body3 {:fontFamily "Roboto-Regular"
           :fontSize   (:body3 size)
           :lineHeight 22}
   :body4 {:fontFamily "Roboto-Regular"
           :fontSize   (:body4 size)
           :lineHeight 22}
   :body5 {:fontFamily "Roboto-Regular"
           :fontSize   (:body5 size)
           :lineHeight 22}})