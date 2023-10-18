

import { FC } from "react"
import { Container } from "@components/ui"
import Link from "next/link"
import s from "./Navbar.module.css"
import Usernav from "../Usernav"

const Navbar: FC = () => {

  return (
    <Container>
      <div className={s.root}>
        <div className="flex flex-1 items-center">
          <Link className={s.logo} href="/">
            NEXT_STORE
          </Link>
          <nav className="ml-6 space-x-6">
            <Link className={s.link} href="/">
              All
            </Link>
            <Link className={s.link} href="/">
              Clothes
            </Link>
            <Link className={s.link} href="/">
              Accesories
            </Link>
            <Link className={s.link} href="/">
              Shoes
            </Link>
          </nav>
          <div className="flex flex-1 justify-end space-x-8">
            <Usernav />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Navbar
