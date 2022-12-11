export function changeCounty(state){
    return {
        type: 'SET_STATES',
        payload: state
    }
}

export function changeInfo(counties){
    return {
        type: 'SET_COUNTIES',
        payload: counties
    }
}