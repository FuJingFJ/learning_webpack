import _ from 'lodash'


function component () {
  var element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ') // loadsh _join(array, [separator=',']) 数组以separator拼合为字符串
  return element
}
document.body.appendChild(component())
