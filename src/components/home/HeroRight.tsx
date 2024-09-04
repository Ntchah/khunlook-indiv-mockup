import Phone from "./Phone";

export default function HeroRight() {
     return (
          <section className="bg-gradient-to-bl from-primary-20 to-white dark:bg-gray-900">
               <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                         <img
                              src="/img/baby.png"
                              className="mr-3 h-15 sm:h-20 mb-5"
                              alt="baby-logo"
                         />
                         <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
                              Menu Growth
                         </h1>
                         <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                              Track your child's growth effortlessly with our interactive graph, monitoring weight and height for healthy development.
                         </p>

                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:justify-center">
                         <Phone imageUrl="/img/phone-mockup.png" />
                    </div>
               </div>
          </section>
     );
};

