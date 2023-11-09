import Image from 'next/image';
import React from 'react';

const Browse = () => {
    return (
        <div className='mt-20'>
           <div class="text-center bg-white shadow-lg w-[80%] rounded-xl -mt-32 z-10 p-9 flex items-center flex-col">
            <h2 class="font-semibold text-xl">Start chatting</h2>
            <Image src="" class="w-[40%] rounded-full mt-7"  alt=''/>
            <p class="mt-3 font-semibold text-lg">Leslie Nielsen</p>
            <span class="text-slate-500 rounded-xl border-slate-100 text-sm mt-2 pl-3 pr-3 border-[1px]">
                <span class="bg-green-500 w-2 h-2 rounded-full mt-0.5 inline-block"></span> Active
            </span>
            <button class="w-full gradient rounded-md text-white p-4 mt-4 hover:shadow-xl transition-all duration-200 ease-in">Send a message</button>
        </div>
        </div>
    );
};

export default Browse;