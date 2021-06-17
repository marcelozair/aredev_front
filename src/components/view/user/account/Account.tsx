import { useEffect } from "react";
import Cabezera from "../../../common/cabezera/Cabezera";
import { useGlobalContext } from "../../../context/appContext";

const Account = () => {
  const $store = useGlobalContext();

  return (
    <div className="wrapper container">
      {
        !$store.getUser() ? <p>Load ...</p> : (
          <>
            <Cabezera textOne={$store.user.name} />
            <div className="container_2">
            </div>
          </>
        )
      }
    </div>
  )
}

export default Account