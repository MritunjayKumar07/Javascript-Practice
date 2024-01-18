console.log(typeof NaN) // number
console.log(typeof undefined) // undefine
console.log([5+"5"], typeof (5+"5")) //55 string
console.log([5+5+"5"], typeof (5+5+"5")) //105 string
console.log(["5"+5], typeof ("5"+5)) //55 string
console.log(["5"+5+5], typeof ("5"+5+5)) //555 string

arr = [9, 'mritunjay', true, 452522,  1, "mk", false  ]
console.log(arr.indexOf('mritunjay'))
console.log(arr)

console.log('------------------------------------------------------------------------------')
console.log(arr.unshift(500))
console.log(arr)
console.log(arr.slice(1, 3))
console.log(arr.splice(1, 3))
console.log(arr)
