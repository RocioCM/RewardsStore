import React from 'react';

const AppContext = React.createContext();

function AppProvider({children, context}) {
	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

export {AppContext};
export default AppProvider;