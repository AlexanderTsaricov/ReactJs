const initialState = {
    theme: "light",
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_LIGHT": {
            document.body.style.backgroundColor = "#ffffff";
            return { ...state, theme: "lightThem" };
        }

        case "TOGGLE_DARK": {
            document.body.style.backgroundColor = "#121212";
            return { ...state, theme: "darkThem" };
        }

        default:
            return state;
    }
};
