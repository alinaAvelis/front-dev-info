"use client"
import { useDispatch, useSelector, useStore } from 'react-redux'
import type { RootState, AppDispatch, AppStore } from './store'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()

// 'use client'
// import { useDispatch, useSelector, useStore } from 'react-redux'
// import type { RootState, AppDispatch, AppStore } from './store'

// export const useAppDispatch = useDispatch

// export const useAppSelector = <TSelected = unknown>(
//   selector: (state: RootState) => TSelected,
// ) => useSelector<RootState, TSelected>(selector)

// export const useAppStore = useStore

