var recipes = {flour: "1 cup"}

var object = {prop: 1}

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object, {["prop2"] = '2'})
}
