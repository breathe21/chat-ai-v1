import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import ChatIcon from '@mui/icons-material/Chat';
import DeleteIcon from '@mui/icons-material/Delete';

const SideBar = () => {

  return (
    <div className='text-white bg-[#1e1f20] w-[280px] h-screen p-8'>
      <div className='mt-20'>
        <button className='px-4 py-2 flex items-center space-x-2 cursor-pointer bg-gray-600 mb-10 rounded-lg'>
          <AddIcon className='w-4 h-4 '/>
          <span >Cuộc trò chuyện mới</span>
        </button>
        <div className='space-y-4'>
          <p>Gần đây:</p>
          <div className='flex flex-col space-y-6'>
            <div className='flex items-center justify-between p-2 bg-gray-800 rounded-lg'>
              <div className='flex items-center space-x-4'>
                <ChatIcon className='w-8 h-8'/>
                <p>chat</p>
              </div>
              <DeleteIcon className='cursor-pointer'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default SideBar