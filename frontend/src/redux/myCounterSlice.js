const { createSlice } = require('@reduxjs/toolkit');

const myCounterSlice = createSlice({
    name: "my",
    initialState: {value: 0},
    reducers: {
        include: (state)=> {state.value++},
        declude: (state)=> {state.value--}
    }
});

export const {include, declude} = myCounterSlice.actions;
export default myCounterSlice.reducer;

