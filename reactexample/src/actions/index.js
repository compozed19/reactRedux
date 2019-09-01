
let nextToDoId =0;
export const addData = () =>({
    type:'ADD_TODO',
    id : nextToDoId ++
})