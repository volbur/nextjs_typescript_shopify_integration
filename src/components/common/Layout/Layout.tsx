import { FC, ReactNode } from "react"
import s from "./Layout.module.css"

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <>
      <main className={s.root}>
        { children }
      </main>
    </>
  )
}

export default Layout
