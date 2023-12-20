import { createSlice , PayloadAction } from "@reduxjs/toolkit"

export type InitialStateUser = {
    name:string,
    lastname:string
    id:string,

}

const initialState = {
    name:"mamad",
    lastname:"ali",
    id:"hossein"
} as InitialStateUser

export const auth = createSlice({
    name:"auth",
    initialState,
    reducers:{
        addUser:(state, action:PayloadAction<InitialStateUser>)=>{
            return action.payload
        }
    }
})


export const { addUser } = auth.actions
export default auth.reducer