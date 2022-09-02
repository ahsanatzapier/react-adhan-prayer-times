import { createContext, useState } from "react";

export const ComponentsContext = createContext({
  showTitleComponent: null,
  setShowTitleComponent: () => null,
  showImageComponent: null,
  setShowImageComponent: () => null,
  showSmallImageComponent: null,
  setShowSmallImageComponent: () => null,
  showSearchComponent: null,
  setShowSearchComponent: () => null,
  showLocationResultsComponent: null,
  setShowLocationResultsComponent: () => null,
  showPrayersComponent: null,
  setShowPrayersComponent: () => null,
  showLocationItemsComponent: null,
  setShowLocationItemsComponent: () => null,
});

export const ComponentsProvider = ({ children }) => {
  const [showTitleComponent, setShowTitleComponent] = useState(false);
  const [showImageComponent, setShowImageComponent] = useState(false);
  const [showSmallImageComponent, setShowSmallImageComponent] = useState(false);
  const [showSearchComponent, setShowSearchComponent] = useState(false);
  const [showLocationResultsComponent, setShowLocationResultsComponent] =
    useState(false);
  const [showPrayersComponent, setShowPrayersComponent] = useState(false);
  const [showLocationItemsComponent, setShowLocationItemsComponent] =
    useState(false);

  const value = {
    showTitleComponent,
    setShowTitleComponent,
    showImageComponent,
    setShowImageComponent,
    showSmallImageComponent,
    setShowSmallImageComponent,
    showSearchComponent,
    setShowSearchComponent,
    showLocationResultsComponent,
    setShowLocationResultsComponent,
    showPrayersComponent,
    setShowPrayersComponent,
    showLocationItemsComponent,
    setShowLocationItemsComponent,
  };

  return (
    <ComponentsContext.Provider value={value}>
      {children}
    </ComponentsContext.Provider>
  );
};
