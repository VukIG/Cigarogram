import { Outlet } from 'react-router-dom'

type Props = {}

function Main({}: Props) {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Main