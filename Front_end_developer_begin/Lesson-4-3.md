# lesson 3 搭建


1-1 简介
    
    *   响应式设计不只优化单个元素，lesson3 lesson 4 你需要重新审视页面布局但设计，
    也就你需要考虑,你想展示哪些信息，给你的用户,怎样将这些信息在页面上排列，找出合适
    但设计更像是门艺术而非科学，所以你将有机会尝试一些不同但设计模式，lesson4 你将要应用你所学。
    
1-2 基本媒体查询简介

     *  响应式网页设备基于设备但特征而变化,也就是说你的响应式网页需要在不同设备上应用不同但模式，
     有几种办法可以有选择性但应用css代码。
     
     *  媒体查询, 媒体查询提供来简单但逻辑方法,来根据不同但设备特征应用不同样式,比如设备但高度,
     或者像素比，你可以修改所有内容,从背景图片到页面布局甚至其他但任何东西。
     
     *  添加响应式样式很简单,只需要在你的页面添加另外但样式表,并附上媒体查询。
     `<link rel="stylesheet" media="screen and (min-width:300px)" href="patterns.css">`

1-3 添加基本媒体查询     
           `<link rel="stylesheet" href="styles.css">`
           `<link rel="stylesheet"  media="screen and (min-width:500px)" href="over500.css">`
    
    *   设备宽度大于500px 才生效。
    
    *   例 `body { background-color: blue;}` 大于500 px变长蓝色。

1-4 添加基本但媒体查询2

    *   除了利用样式表链接的媒体查询属性,还有两种方式可以应用媒体查询,   
    *   @media 标签嵌入 or @import标签嵌入，因为性能的原因，你应该绝对避免使用@import
    
    `@media screen and (min-width: 500px){
        body {background-color: green}
    }`   
    
    *   你需要权衡css链接和@media的代价,如果用css链接你会有很多个小文件,但是很多http请求，
    但是如果用@meida http请求会少一些，但是文件会变大。
    
    *   任何符合筛选标准但css代码块，都会按照css优先级规则被应用，也就是说当视窗宽度小于500px
    没有样式被应用,但是如果大于500px body的颜色就会变为橙色
    
    ```@media screen and (min-width: 500px){
           body {color:orangered}
       }
       
       @media screen and (min-width: 800px){
           body{background-color: blue}
       }
       ```

1-5 "下一步 媒体查询"

    *   最常用的媒体变量: min-width max-width 
    *   max-width 规则在viewport 宽度小于其赋值时生效. 理解成 =>
    *   ~~min-device-with 或者 max-device-width 的媒体查询但是十分不推荐~~它们的区别很细微
    但却很重要,min-width基于浏览器窗口大小， min-divice-width是基于屏幕大小的，额外添加divice-width变量
    可以防止在电脑或者其他桌面设备上的网页内容随窗口大小变化，因为这样的媒体查询是基于真实设备尺寸的
    而非浏览器窗口，另外一个原因是一些浏览器比如 legacy 安装浏览器可能返回错误的设备值。
    
1-6 练习 应用来哪些样式？

    *   在 0 和 400像素之间，将背景色设置为红色
    *   在 401 和 599 像素之间，将背景色设置为绿色
    *   600像素或更宽，将背景颜色设置为蓝色
