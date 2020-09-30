// NavigationService.js

import { NavigationActions } from 'react-navigation'; 

let _navigator; 

function setTopLevelNavigator(navigationRef) {
    _navigator = navigatorRef; 
}

function navigate(routeName, parans) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName, 
            params,
        })
    );
}

// add other navigation functions that you need and export them

export default {
    navigate, 
    setTopLevelNavigator, 
};
