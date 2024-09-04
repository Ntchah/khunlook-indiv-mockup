import Image from "next/image"

export default function Hero() {
     return (
          <section className="bg-gradient-to-b from-primary-20 to-white dark:bg-gray-900">
               <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-white rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                         <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Khunlook is updated! Download Now.</span>
                         <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">KhunLook</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Track and evaluate your child growth and health with KhunLook.</p>
               
                    <div className="flex justify-center space-x-4 mt-4">
                         <a href="https://apps.apple.com/us/app/khunlook-%E0%B8%84-%E0%B8%93%E0%B8%A5-%E0%B8%81/id961051837?ls=1">
                              <img src="/img/appStore.png" alt="App Store" className="w-40 sm:w-48 md:w-56" />
                         </a>
                         <a href="https://play.google.com/store/apps/details?id=hda.app.khunlook">
                              <img src="/img/googlePlay.png" alt="Google Play" className="w-40 sm:w-48 md:w-56" />
                         </a>
                    </div>

               </div>
          </section>
     )
}

