export default{
    mencariHobiBerdasarkanId:state=>(id)=>{
        return state.Hobi.find((obj)=>{
            return obj.id === id
        })
    }
}