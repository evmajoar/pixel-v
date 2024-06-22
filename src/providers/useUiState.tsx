import React, {createContext, PropsWithChildren, useCallback, useContext, useState} from "react";

interface IUiStateContextValue {
  sidebarIsOpen: boolean,
  doOpenSidebar: () => void,
  doCloseSidebar: () => void,
  toggleSidebar: () => void,
}

// @ts-ignore
const UiStateContext = createContext<IUiStateContextValue>();

export function UiStateProvider({ children }: PropsWithChildren) {
  const [sidebarIsOpen, setSidebarState] = useState<boolean>(false);

  const toggleSidebar = useCallback(() => {
    setSidebarState(prevState => !prevState);
  }, [])

  const doOpenSidebar = useCallback(() => {
    setSidebarState(true);
  }, []);

  const doCloseSidebar = useCallback(() => {
    setSidebarState(false);
  }, []);

  const values: IUiStateContextValue = {
    sidebarIsOpen,
    doOpenSidebar,
    doCloseSidebar,
    toggleSidebar
  }

  return (
    <UiStateContext.Provider value={values}>
      {children}
    </UiStateContext.Provider>
  );
}

export function useUiState() {
  return useContext(UiStateContext);
}
