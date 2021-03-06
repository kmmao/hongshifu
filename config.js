var host ="https://hsf-api.threeape.com"
var config={
  host,
  login_url: host +'/api/auth/login',
  quick_login_url: host + '/api/auth/quick_login',
  refresh_url: host + '/api/auth/refresh',
  logout_url: host + '/api/auth/logout',
  info_url: host + '/api/auth/info',
  isregister_url: host + '/api/calling/isregister',  
  register_url: host + '/api/calling/register',
  calling_url: host + '/api/calling/save',
  list_url: host + '/api/order/list',
  detail_url: host + '/api/order/detail',
  order_url: host + '/api/order/save',
  cancel_url: host + '/api/order/cancel', 
  tracker_url: host + '/api/order/tracker',
  item_url: host + '/api/parameter/item',
  send_url: host + '/api/sms/send',   
  openid_url: host + '/api/wechat/mini_program/openid', 
  evaluate_url: host + '/api/order/evaluate',
  userinfo_url: host + '/api/wechat/mini_program/userinfo',
  senduser_url: host + '/api/sendorder/senduser',
  driverlist_url: host + '/api/driver/lists',
  reglist_url: host + '/api/wechat/region/list',
  hotline_url: host + '/api/wechat/company/hotline',
  reglist_url: host + '/api/wechat/region/list',
  charstan_url: host + '/api/wechat/company/charge_standard',
  couponli_url: host + '/api/activity/coupon/list',
  couponde_url: host + '/api/activity/coupon/detail',
  couponob_url: host + '/api/activity/coupon/obtain'
}
var header = { 'x-service-id': '2' }
module.exports = {config, header}