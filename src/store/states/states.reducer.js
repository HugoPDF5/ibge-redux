const initalState = {
    states: [],
    counties: [],
    microregion: [],
    mesoregion: [],
    region: [],
    uf: ''
}

export default function (state = initalState, action){
    switch(action.type){
        case 'SET_STATES':
            return {
                ...state,
                states: action.payload
            }
        case 'SET_COUNTIES':
            return {
                ...state,
                counties: action.payload
            }
        
        default: 
            return state
    }
}