import { FC, ReactNode } from "react"
import s from "./Layout.module.css"
import { Footer } from "@components/common";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className={s.root}>
      <main className="fit">
        { children }
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
