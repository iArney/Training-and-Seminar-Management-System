import {defineStore} from "pinia";

/**
 * define the counter store 
 * @args store name
 * @args object with state, getter, actions properties
 * Options are defined similarly to the options api
 */
export const useCounterStore = defineStore("counter", {
    state: () => { return {count: 0}},
    actions: {
        increament(val = 1){
            this.count += val
        },
        multiply (val = 1){
            this.count *= val
        }, 
    },
    getters: {
        doubleCount: state => state.count*2,
    }
})
