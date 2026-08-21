const Home = () => {
  return (
      <div className="max-w-[90%] w-full mx-auto mt-64">
        <div className="flex flex-col space-y-5 text-center">
          <div className="space-y-4">
            <p 
              className="bg-gradient-to-r from-blue-600 to-indigo-400 
              text-[40px] text-3xl inline-block text-transparent bg-clip-text">
              Welcome to AI Studio
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <input 
              type="text"
              className="w-full p-4 text-primary border border-transparent caret-gray-300 text-md focus:outline-none focus:ring-0 bg-input rounded-2xl"
              placeholder="Nhập nội dung..."
            />
            <button className="p-4 rounded-lg bg-blue-500 text-white">
              Gửi
            </button>
          </div>
        </div>
      </div>
  );
};

export default Home;