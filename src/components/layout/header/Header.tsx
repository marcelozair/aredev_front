import { useEffect, useState } from "react"
import { useGlobalContext } from "../../context/appContext";
import Default from "./types/default"
import User from "./types/user"

const Header = () => {

  const $store = useGlobalContext();

  const typeHeader = () => {
    console.log("store user", $store.user)
    if ($store.user) {
      return <User />
    } else {
      return <Default />
    }
  }

  return (
    <>
      { typeHeader() }
    </>
  )
}

export default Header;