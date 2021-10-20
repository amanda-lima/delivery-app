export const SET_SELECTED_TAB = 'SET_SELECTED_TAB'

export const setSelectedTabSucess = (selectedTab) => ({
    type: SET_SELECTED_TAB,
    payload: { selectedTab }
})

export const setSelectedTab(selectedTab) {
    return dispatch => {
        dispatch(setSelectedTabSucess(selectedTab))
    }
}