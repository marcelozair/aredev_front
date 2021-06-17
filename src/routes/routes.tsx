import Notas from "../components/view/notas/Notas"
import Nota from "../components/view/notas/Nota"
import Account from "./../components/view/user/account/Account"

export const RouterView = [
  {
    component: Account,
    path: "/cuenta",
    isPrivate: true
  },
  {
    component: Nota,
    path: "/notas/:id",
    isPrivate: true
  },
  {
    component: Notas,
    path: "/notas",
    isPrivate: true
  }
]
 