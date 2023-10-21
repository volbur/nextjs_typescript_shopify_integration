import { createContext, FC, useContext, ReactNode } from "react"

const UIContext = createContext<{[key: string]: string}>({
    uiState: "defaultState"
})

interface LayoutProps {
    children: ReactNode;
}

export const UIProvider: FC<LayoutProps> = ({children}) => {
return (
    <UIContext.Provider value={{uiState: "someState"}}>
    {children}
    </UIContext.Provider>
)
}

export const useUI = () => {
    const context = useContext(UIContext)
    return context
}