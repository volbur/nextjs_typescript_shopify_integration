import { createContext, FC, useContext, ReactNode, useState } from "react"

const UIContext = createContext<{[key: string]: any}>({
    uiState: "defaultState"
})

interface LayoutProps {
    children: ReactNode;
}

export const UIProvider: FC<LayoutProps> = ({children}) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false)

    const uiState = {
        isSidebarOpen,
        setSidebarOpen
    }

    return (
        <UIContext.Provider value={uiState}>
        {children}
        </UIContext.Provider>
    )
}

export const useUI = () => {
    const context = useContext(UIContext)
    return context
}