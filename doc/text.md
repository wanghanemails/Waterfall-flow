瀑布流 主要
1 算出列数          屏幕宽 除以列数  (横向定) document.documentElement.clientWidth/oBoxw
2 取前(列数)个
3 每次取大于(列数)下标的数的时候,放到上次的高度最低的一个.