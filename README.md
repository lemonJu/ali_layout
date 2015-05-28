
## 关于这次作业

#### 账号列表

1. 谢鹏程  lemonju
2. 杨广 HellowVirgil
3. 费稚卿 blairFzq
4. 任洋iyang519


####要求：实现常用的所有布局
我参考了一些网上的布局图片，收集了部分图片过来，列举在下面：

![Alt text](http://1.cutexie.sinaapp.com/ali/1.jpg)
![Alt text](http://1.cutexie.sinaapp.com/ali/2.jpg)
![Alt text](http://1.cutexie.sinaapp.com/ali/3.jpg)
![Alt text](http://1.cutexie.sinaapp.com/ali/4.jpg)
![Alt text](http://1.cutexie.sinaapp.com/ali/5.jpg)
![Alt text](http://1.cutexie.sinaapp.com/ali/6.jpg)
![Alt text](http://1.cutexie.sinaapp.com/ali/7.jpg)
![Alt text](http://1.cutexie.sinaapp.com/ali/8.jpg)

有列举出来的，我们在一起讨论总结下。

##关于布局方式
布局方式应该是比较多，群里面也提到了尽量做兼容，做不到兼容就列出兼容性，所以div布局table布局设置flex grid布局应该都可以上，我们先总结下可能的布局在讨论怎么写代码吧。

<p align="right">2015/5/1 <b>谢鹏程</b></p>

##布局实现
采用何种方式实现布局设计，也有不同的方式，这里基于页面的实现单位而言，分为四种类型：固定布局、可切换的固定布局、弹性布局、混合布局。

1. 固定布局：以像素作为页面的基本单位，不管设备屏幕及浏览器宽度，只设计一套尺寸；
2. 可切换的固定布局：同样以像素作为页面单位，参考主流设备尺寸，设计几套不同宽度的布局。通过设别的屏幕尺寸或浏览器宽度，选择最合适的那套宽度布局；
3. 弹性布局：以百分比作为页面的基本单位，可以适应一定范围内所有尺寸的设备屏幕及浏览器宽度，并能完美利用有效空间展现最佳效果；
4. 混合布局：同弹性布局类似，可以适应一定范围内所有尺寸的设备屏幕及浏览器宽度，并能完美利用有效空间展现最佳效果；只是混合像素、和百分比两种单位作为页面单位。
![Alt text](http://heyuchan.com/wp-content/uploads/2015/02/03布局实现.png)

<p align="right">2015/5/3 <b>杨广</b></p>




