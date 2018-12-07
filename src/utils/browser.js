
import cookie from 'js-cookie'
import { find, isNaN } from 'lodash'
// 判断浏览器类型
// pc、wx、app、phone

const browsertype = () => {
  const ua = window.navigator.userAgent;
  const agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  const flag = find(agents, (item) => {
    return ua.indexOf(item) > -1
  })
  if (!!cookie.get('http_ostype')) return 'app' // eslint-disable-line
  else if (/MicroMessenger/i.test(ua)) return 'wx'
  else if (!isNaN(flag)) return 'phone'
  return 'pc'
}

export default browsertype
