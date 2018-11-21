import _ from 'lodash'
import './style.css'

function component () {
  var element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ') // loadsh _join(array, [separator=',']) 数组以separator拼合为字符串
  element.classList.add('hello')
  return element
}
document.body.appendChild(component())
