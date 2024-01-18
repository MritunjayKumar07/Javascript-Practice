console.log(typeof NaN) // number
console.log(typeof undefined) // undefine
console.log([5+"5"], typeof (5+"5")) //55 string
console.log([5+5+"5"], typeof (5+5+"5")) //105 string
console.log(["5"+5], typeof ("5"+5)) //55 string
console.log(["5"+5+5], typeof ("5"+5+5)) //555 string

arr = [9, 'mritunjay', true, 452522,  1, "mk", false  ]
console.log(arr.indexOf('mritunjay'))
console.log(arr)
