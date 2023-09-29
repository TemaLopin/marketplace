import { AppDispatch, RootState } from "@/redux/store"
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux"



export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector