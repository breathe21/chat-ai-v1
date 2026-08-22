import AddIcon from '@mui/icons-material/Add';
import ChatIcon from '@mui/icons-material/Chat';
import DeleteIcon from '@mui/icons-material/Delete';

const SideBar = ({ openSideBar, setOpenSideBar }) => {
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
          <button className="w-full px-4 py-2 flex items-center gap-2 bg-gray-600 mb-10 rounded-lg cursor-pointer">
            <AddIcon className="w-4 h-4" />
            <span>Cuộc trò chuyện mới</span>
          </button>

          <div className="space-y-4">
            <p>Gần đây:</p>

            <div className="flex items-center justify-between p-2 bg-gray-800 rounded-lg">
              <div className="flex items-center gap-4">
                <ChatIcon />
                <p>chat</p>
              </div>

              <DeleteIcon className="cursor-pointer" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
