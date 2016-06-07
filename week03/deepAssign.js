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

})()
