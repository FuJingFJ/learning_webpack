import _ from 'lodash'
import printMe from './print.js'
import './style.css'

function component () {
  var element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ') // loadsh _join(array, [separator=',']) 数组以separator拼合为字符串

  var btn = document.createElement('button')
  btn.innerHTML = 'Click me and check the console'
  btn.onclick = printMe
  element.appendChild(btn)

  return element
}
document.body.appendChild(component())
