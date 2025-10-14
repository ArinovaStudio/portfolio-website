import React from 'react';

const MiniLoader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
    <div className="flex-col gap-4 w-full flex items-center justify-center">
      <div className="w-20 h-20 border-4 border-transparent text-primary text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
        <div className="w-16 h-16 border-4 border-transparent text-white text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full" />
      </div>
    </div>
    </div>
  );
}

export default MiniLoader;
