import SideBarMessages from "./SideBarMessages"
import Chats from "./Chats"
import DM from "./DM"
type Props = {}

function Messages({}: Props) {
  return (
    <div className="w-full h-full flex justify-center items-center">
        <SideBarMessages />
        <Chats />
        <DM />
    </div>
  )
}

export default Messages