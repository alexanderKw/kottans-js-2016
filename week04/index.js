"use strict"

class MyPromise extends Promise
{
    static map(input, mapper)
    {
        return new this((resolve, reject) =>
        {
            let results = []
            let pending = 0
            MyPromise.resolve(input).then(iterable =>
            {
                if(!Array.isArray(iterable)) resolve([])

                for(let iterator of iterable)
                {
                    pending++
                    MyPromise.resolve(iterator).then(iterator =>
                    {
                        MyPromise.resolve(mapper(iterator)).then(value =>
                        {
                            results.push(value)
                            if(!--pending) resolve(results)
                        }, reject)
                    }, reject)
                }
            }, reject)
        })
    }
}

module.exports = MyPromise;
