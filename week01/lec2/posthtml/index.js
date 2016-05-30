'use strict'

const PostHTML = require('posthtml')
const html = 
`
  <div class="js-row">Some content1</div>
  <div class="container">Some content2</div>
  <div class="js-col-md-6">Some content3</div>
  <div class="col-md-6">Some content4</div>
  <div class="js-smth js-class some-class">Some content5</div>
  <div class="js-container some-class">Some content6</div>
  <div class="js-col-lg-3">Some content6</div>
`

const bootstrapJsPattern = /js-/ig
const plugin = tree => tree
   .match( { attrs: { class: true } }, node =>
   {
    var attrsVal = node.attrs.class.split(' ')
    let bootstrClassList = []
    let jsClassList = []

    for (let i = 0; i < attrsVal.length; i++) {
      if (attrsVal[i].match(bootstrapJsPattern)) {
        jsClassList.push(attrsVal[i]);
      } else {
        bootstrClassList.push(attrsVal[i])
      }
    }

    node.attrs['data-js'] =  jsClassList.join(' ').length > 0 ? jsClassList.join(' ') : null
    node.attrs['class'] =  bootstrClassList.length > 0 ? bootstrClassList.join(' ') : null

     return node
   })

PostHTML([ plugin ])
    .process(html)
    .then(result =>
    {
      console.log(result.html)
    })
    .catch(console.error)
