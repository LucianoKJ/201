import { ADD_VALUE, SUB_VALUE } from './actionTypes'

// action creator動作建立器
// 命名一般同action type，改為小駝峰寫法
// 一般也是一個action type寫一個
// 直接導出即可
export const addValue = (payload) => {
  return { type: ADD_VALUE, payload }
}

export const subValue = (payload) => {
  return { type: SUB_VALUE, payload }
}
