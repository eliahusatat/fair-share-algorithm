import Vuetify from '../plugins/vuetify'

export const translate = (...args) => Vuetify.framework.lang.t(...args)

export const arrayToMatrix = (arr) => {
  const mat = arr.map(el => {
    return el.objects.map(obj => {
      return obj.value
    })
  })
  return mat
}
/*
  this function  convert the res from the server to matrix
  the res look like that : ['[[1.    0.325]', ' [0.    0.674]]']
  and return [[1,0.325],[0,0.674]]
  bug ['[[0.    1.   ]', ' [0.999 0.   ]]']!!
 */
export const algoResultToArray = (arr) => {
  let ans = arr.map(el => { // in each element replace all the spaces in ,
    return el.replace(/(\s+)([0-9])/g, ',$2').replace(/(\s+)([^0-9])/g, '$2')
  })
  ans = ans.join() // combine all the arr to single str
  return JSON.parse(ans.replace(/(\.)([^0-9])/g, '$2')) // replace all the '.' if there isn't number after her and convert to array
}
