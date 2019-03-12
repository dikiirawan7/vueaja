export default{
    increment:(state)=>{
        if(state.count<10){
         state.count= state.count+1
        }
        else{
            alert(state.count)
        }
    }
}