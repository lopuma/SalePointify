// import { NAVIGATION_PATHS } from './Header'
// import { Link } from './Link'

export const ACTIONS_MSGS = {
  ADDED_TO: 'añadido a',
  DELETED_FROM: 'eliminado de',
  ADD_TO_SPECIFIC_LIST: 'Añadir a la lista',
  IS_ALREADY_IN_LIST: 'Ya está en la lista',
  DELETE_FROM_LIST: 'Eliminar de la lista',
}

export function BookNotification({ message, book, listName, Icon }) {
  return (
    <div className="flex justify-center items-center gap-2 overflow-hidden">
      <img
        className="w-10 h-10"
        src={book.cover}
        alt={`Portada del libro ${book.title} del autor ${book.price}`}
      />
      <p className="text-md">
        <span className="font-bold">{book.title}</span> {message}{' '}
        <span>{listName}</span>
      </p>

      {/* <Link targetId={NAVIGATION_PATHS.LISTS}> */}
      <a className="text-lg">
        <Icon />
      </a>
      {/* </Link> */}
    </div>
  )
}
