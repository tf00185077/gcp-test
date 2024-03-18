import {defineStore} from "pinia"
export const useTrainPiniaStore = defineStore("trainPiniaStore",{
    state:()=>({count:0}),
    getters:{
        double:(state)=>state.count * 2
    },
    actions:{
        increment(){
            this.count++
        }
    }
})