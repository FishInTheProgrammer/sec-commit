let menu = {};

/**
 * 首页【运营简报（今日下单金额，订单数，客单价，昨日下单金额-客单价），销售额趋势】
 * @type {{name: string, path: string, icon: string}}
 */
menu.home = {
  name: '首页',
  path: '/',
  icon: 'fa fa-tachometer',
};


/**
 * 商品
 * @type {{name: string, icon: string, children: {}}}
 */
menu.product_manage = {
  name: '商品',
  icon: 'fa fa-shopping-basket',
  children: {}
};
let productManage = menu.product_manage.children;

productManage.library = {
  name: '商品库',
  path: '/index',
};
productManage.quotation = {
  name: '报价单',
  path: '/quotation',
};

/**
 * 采购
 * @type {{name: string, icon: string, children: {}}}
 */
menu.purchase_manage = {
  name: '采购',
  icon: 'fa fa-shopping-cart',
  children: {}
};

let PurchaseManage = menu.purchase_manage.children;

PurchaseManage.purchase = {
  name: '订单列表',
  path: '/order_list',
};
PurchaseManage.task = {
  name: '采购任务',
  path: '/task',
};
PurchaseManage.bills = {
  name: '采购单据',
  path: '/bills',
};
// ContentManage.message = {
//   name: '留言管理',
//   path: '/message_manage',
// };
/**
 * 分拣
 * @type {{name: string, path: string, icon: string}}
 */
menu.sorting = {
  name: '分拣',
  icon: 'fa fa-hand-lizard-o',
  path: '/sorting'
};

/**
 * 配送
 * @type {{name: string,  path: string, icon: string}}
 */
menu.delivery = {
  name: '配送',
  icon: 'fa fa-user-circle-o',
  path: '/delivery',
};

/**
 * 进销存
 * @type {{name: string, icon: string, children: {}}}
 */
menu.Enters_sells_saves = {
  name: '进销存',
  icon: 'fa fa-random',
  children: {}
};
let EnterSellsSaves = menu.Enters_sells_saves.children;

EnterSellsSaves.storage = {
  name: '入库',
  path: '/storage',
};
EnterSellsSaves.out_bound = {
  name: '出库',
  path: '/out_bound',
};
EnterSellsSaves.inventory = {
  name: '盘点',
  path: '/inventory',
};


/**
 * 数据中心
 * @type {{name: string, icon: string, children: {}}}
 */
menu.category_manage = {
  name: '数据中心',
  icon: 'fa fa-line-chart',
  children: {}
};
let CategoryManage = menu.category_manage.children;

CategoryManage.report = {
  name: '每日报表',
  path: '/report',
};
CategoryManage.profit = {
  name: '利润报表',
  path: '/profit',
};


export default menu;