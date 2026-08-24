import { createSlice } from "@reduxjs/toolkit";

const initData = {
    data: [],
}

const ChatSlice = createSlice({
    name: 'chat',
    initialState: initData,
    reducers:{
        addChat:(state, action) => {
            state.data.push('Hello')
        }
    }
});

export const { addChat } = ChatSlice.actions;

export default ChatSlice.reducer;