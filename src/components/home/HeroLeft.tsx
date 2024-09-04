

import Phone from "./Phone"

export default function HeroLeft() {
     return (
          <section className="bg-gradient-to-br from-primary-20 to-white dark:bg-gray-900">
               <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <Phone imageUrl="/img/phone-mockup.png" />
                    <div className="mt-4 md:mt-0">
                         <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                              Let's Take a good care of your child together.
                         </h2>
                         <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                              Join us in nurturing your child's health and growth with expert guidance, personalized tracking, and family-focused care.
                         </p>
                         <div className="flex justify-right space-x-4 mt-6">
                         <a href="https://apps.apple.com/us/app/khunlook-%E0%B8%84-%E0%B8%93%E0%B8%A5-%E0%B8%81/id961051837?ls=1">
                              <img src="/img/appStore.png" alt="App Store" className="w-32 sm:w-40 md:w-48" />
                         </a>
                         <a href="https://play.google.com/store/apps/details?id=hda.app.khunlook">
                              <img src="/img/googlePlay.png" alt="Google Play" className="w-32 sm:w-40 md:w-48" />
                         </a>
                    </div>
                    </div>
               </div>
          </section>
     );
}
