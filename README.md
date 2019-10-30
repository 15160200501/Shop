# Shop
超市商城类网页，下面有该项目详情信息

### 首页显示
- 首页显示，使用了swiper插件有顶部轮播，网格分布，还使用了切片功能。在home.html中通过for循环发送给前端显示。

![image](https://www.github.com/15160200501/Shop/GPAXF/images/home.png) 
![image](https://www.github.com/15160200501/Shop/GPAXF/images/home_1.png) 

### 买商品页面
- 闪购页面，在左侧栏点击事件标签处添加了路由，通过两张表的categoryid和typeid进行级联，会显示该类中下的商品列表。点击左侧某一类时，通过ifequal判断类型与黄色点击事件一致。最上面子分类childcid与FoodType表中子品类childtypenames进行了二级级联，在js中还添加了页面点击页面收起功能。右侧价格排序使用了order_by对查询结果进行了排序。

![image](https://www.github.com/15160200501/Shop/GPAXF/images/market.png)  
![image](https://www.github.com/15160200501/Shop/GPAXF/images/market_2.png)  

### 注册页面
- 注册页面显示，选择了bootstrap的表单的一个页面，在视图函数中写请求页面使用GET方法，注册时使用POST方法，个人注册信息保存在MySQL数据库中，在注册页面必须加csrf_token，否则报错。注册时添加了用户名是否会被注册过，在js中添加了用户名发送给服务器进行预校验，在视图函数写相关逻辑。密码存储到MySQL中还添加了对其进行哈希算法进行加密，之后拼接时间戳，致使数据库中看到用户的密码是加密后的一串数字。在用户注册成功保存之后，使用uuid生成u_token为唯一标识，将该值缓存入redis中。将该值传给用户邮件确认是否已经激活，在activate视图函数中接收u_token,如果用户存在，自动跳转到登录页面，表明该用户已经激活，在MySQL中的AXFUser数据库表中看到该用户is_activate显示为1，表明已经激活。

![image](https://www.github.com/15160200501/Shop/GPAXF/images/register.png)
![image](https://www.github.com/15160200501/Shop/GPAXF/images/youjian.png)

### 登录页面
- 登录页面显示。登录账号时，对数据库中的数据进行预处理，对用户密码进行解密，如果与用户输入的密码相同，通过session将用户信息存储，重定向到我的页面。在login.html中添加了表单的密码的加密事件的返回值。在js中通过在用户输入登录密码时，使用md5在线加密，使得在浏览器的表单密码位置显示的是一串密码，避免被抓包。

![image](https://www.github.com/15160200501/Shop/GPAXF/images/login.png)
![image](https://www.github.com/15160200501/Shop/GPAXF/images/shujukumima.png)

### 我的个人信息页面
- 我的页面显示。如果登录之后通过session，如果查到该信息，则进入到我的个人信息页面。否则进入登录页面。我的页面中一些样式使用开源的bootstrap的组件。退出登录按钮，通过视图函数mine写判断用户是否存在，在html中通过if判断是否显示。头像显示通过已存入数据库中注册时的头像，在mine视图函数里写逻辑，该用户使用pk=user_id，来确定是哪位用户，然后在mine_html中写判断通过is_login，在标签中添加img传入。如果在当前页面退出登录，可以通过未登录标签js打开一个当前页面的登录界面。

![image](https://www.github.com/15160200501/Shop/GPAXF/images/login_in.png)

### 购物车页面
- 购物车页面显示。在买商品页面可以购买商品和删除商品功能，前提是该用户是登录状态，在中间件添加了用户是否登录进行预校验。可以点击购买商品的个数，会实时的显示需要购买此商品的个数。当选好商品个数的时候，会显示之前选好的商品在在购物车显示，是通过在购物车页面通过for循环商品，显示购物车商品列表。可以点击前面的✔，对商品进行选中或者不选中，是通过if判断。也可以将商品全选或者不全选，后面会显示选中的价钱，是通过选中的cartid进行计算，然后在页面上进行显示。

![image](https://www.github.com/15160200501/Shop/GPAXF/images/order.png)

### 订单列表显示
- 用户选完商品的时候，点击下单，会显示订单列表，有时会有多个订单列表。这些未付款的订单个数会显示在个人主页中待付款中，如果付过款该订单会跳转到待收货标签中。

![image](https://www.github.com/15160200501/Shop/GPAXF/images/order_in_all.png)
![image](https://www.github.com/15160200501/Shop/GPAXF/images/order_all.png)

### 订单详情页显示
- 订单详情页显示。点击其中一个订单列表有用户选中的订单列表的详情信息，有总价格，商品个数，商品名称，还有支付按钮。支付功能调用支付宝的接口，配置一下即可使用，有些需要企业认证。支付成功之后会跳转到个人主页中的待收货标签中，会显示1，整个流程基本走通。

![image](https://www.github.com/15160200501/Shop/GPAXF/images/order_1.png)
