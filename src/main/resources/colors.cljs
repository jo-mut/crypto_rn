(ns main.resources.colors)


(def colors
  {:primary "#7F5DF0",
   :secondary "#5D2DFD",

   :white "#fff",
   :black "#000000",
   :green "#37E39F",
   :red "#F9A8BA",
   :gray "#6A6A6A",
   :lightGray "#dbdbdb",
   :lightGray1 "#f5f6fa"})


(def sizes
  {;; global sizes
   :base 8,
   :font 14,
   :radius 12,
   :padding 24,

   ;; font size
   :h1    30,
   :h2    22,
   :h3    16,
   :h4    14,
   :body1 30,
   :body2 22,
   :body3 16,
   :body4 14,
   :body5 12,

   ;; app dimensions
   :width,
   :height})

(def fonts
  {:h1    {:font-family "Roboto-Black",   :font-size  sizes.h1,    :line-height 36},
   :h2    {:font-family "Roboto-Bold",    :font-size  sizes,       :line-height 30},
   :h3    {:font-family "Roboto-Bold",    :font-size  sizes,       :line-height 22},
   :h4    {:font-family "Roboto-Bold",    :font-size  sizes.h4,    :line-height 22},
   :body1 {:font-family "Roboto-Regular", :font-size  sizes.body1, :line-height 36},
   :body2 {:font-family "Roboto-Regular", :font-size  sizes.body2, :line-height 30},
   :body3 {:font-family "Roboto-Regular", :font-size  sizes.body3, :line-height 22},
   :body4 {:font-family "Roboto-Regular", :font-size  sizes.body4, :line-height 22},
   :body5 {:font-family "Roboto-Regular", :font-size  sizes.body5, :line-height 22}})