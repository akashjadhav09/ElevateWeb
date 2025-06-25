import {React} from 'react';

export default function BookFreeCall(){
    return(
        <div className='book-free-call-main bg-[#12141d] p-8'>
            <div className='book-free-call-inner flex flex-col items-center justify-center'>
                <div className='thumbnail-wrapper h-[100px] w-[100px] border rounded-full m-4'>
                    <img className='h-full w-full border rounded-full object-cover p-1' src="./public/assets/images/prof-avtar-1.png" alt="" />
                </div>
                <div className='title-wrapper text-5xl text-white m-2'>Meet the Minds Behind the Magic</div>
                <div className='sub-title-wrapper text-lg text-white m-1'>Get a free 30-minute strategy session with our lead designer.</div>
                <button className='book-free-call-btn border border-[#d2ff28] rounded-full bg-[#d2ff28] text-gray-900 px-7 py-4 m-4'>Book a free call</button>
                <div className='email-detail-wrapper flex flex-col items-center gap-1 mt-14 mb-6'>
                    <div className='email-label text-white'>Prefer Email</div>
                    <a href="mailto:example@gmail.com" className="email-wrapper text-white text-lg font-semibold underline">
                        example@gmail.com
                    </a>
                </div>
            </div>
        </div>
    )
}