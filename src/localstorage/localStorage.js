export const loadState = () => {
    try {
        const stateData = localStorage.getItem('state');
        if(stateData === null){
            return undefined
        }
        return JSON.parse(stateData);
    } catch(err){
        return undefined
    }
}

export const saveState = (state) => {
    try {
        const stateData = JSON.stringify(state);
        localStorage.setItem('state', stateData);
    } catch(err){

    }
};
