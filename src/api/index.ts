import { post } from './utils'

// function sleep(interval: any) {
//   return new Promise(() => {
//     setTimeout(() => {
//       console.log(111)
//     }, interval)
//   })
// }
export async function dexPoolTokenPage() {
  // await sleep(10000)
  return post('/v1/dexPoolToken/page', {
    pageIndex: 1,
    pageSize: 100
  })
}

export async function dexPoolTokenCombinationPage() {
  // await sleep(10000)
  return post('/v1/dexPoolTokenCombination/page', {
    pageIndex: 1,
    pageSize: 100
  })
}
