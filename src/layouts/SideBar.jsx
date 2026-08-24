import AddIcon from '@mui/icons-material/Add';
import ChatIcon from '@mui/icons-material/Chat';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, removeChat } from '../redux/slices/chatSlice';

const SideBar = ({ openSideBar, setOpenSideBar }) => {

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.chat);

  const handleNewChat = () => {
    dispatch(addChat());
  }

  const handleRemoveChat = (id) => {
    dispatch(removeChat(id));
  }

  return (
    <>
      {/* Overlay mobile */}
      {openSideBar && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpenSideBar(false)}
        />
      )}

      <aside
        className={`
          fixed lg:static z-50
          w-72 h-dvh p-8
          text-white bg-[#1e1f20]
          transition-transform duration-300
          ${openSideBar ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="mt-20">
          <button className="w-full px-4 py-2 flex items-center gap-2 bg-gray-600 mb-10 rounded-lg cursor-pointer"
            onClick={handleNewChat}
          >
            <AddIcon className="w-4 h-4" />
            <span>Cuộc trò chuyện mới</span>
          </button>

          <div className="space-y-4">
            <p>Gần đây</p>
            {/* Đưa space-y-2 vào đây để các item chat xếp chồng lên nhau */}
            <div className="flex flex-col space-y-4">
              {data && data.map((chat) => (
                <div 
                  key={chat?.id} 
                  className="flex items-center justify-between p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <ChatIcon />
                    <p>{chat?.title}</p>
                  </div>
                  <button onClick={() => handleRemoveChat(chat.id)}>
                    <DeleteIcon className="cursor-pointer" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;