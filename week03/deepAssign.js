(function() {
  'use strict'

  if (typeof Object.deepAssign == 'function') return

  var isEnumerable = Object.prototype.propertyIsEnumerable

  Object.defineProperty(Object, 'deepAssign',
  {
    value: function deepAssign(target, sources)
    {
      if (target == null || !(target instanceof Object) || !(target.__proto__.constructor == Object))
        throw new TypeError('Cannot convert undefined or null to object')

      var to = Object(target)
      for (var index = 1; index < arguments.length;)
      {
        var from = arguments[index++]
        if (from !== Object(from)) continue

        Reflect.ownKeys(from).forEach(function(key)
        {
          if (isEnumerable.call(from, key)){
            to[key] = from[key]
          }

        })
      }

      return to
    },
    writable: true,
    configurable: true
  })

  var obj1 = {
    a: 9,
    b: 'a'
  }
  var obj2 = Object.create(null)
  var obj2 = {
    'null': 'null',
    get() {
      console.log('Hello!')
    }
  }
  var obj3 = {
    a: 23,
    b: 'tr',
    c: 10,
    d: 89
  }
  var obj4 = {
    a: {j: 'jj', m: {g: 4, r: 'four'}},
    foo() {
      alert('Hello')
    },
    b: 'bb',
    c: null,
    d: false
  }
  var obj5 = {
      a: [5, 4, 6],
      b: 2,
      c: new Set([1, 2, 3]),
      d: new Map([[1, 2], ['some str', 5]]),
      e: /smth/ig,
      f: {
          a: 3,
          b: 4,
          c: {
              d: new Date()
          }
      }
  }

  console.log(Object.deepAssign(obj1, obj2, obj3, obj4, obj5))

})()
