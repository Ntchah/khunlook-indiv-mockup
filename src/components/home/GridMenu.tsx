const stats = [
     { id: 1, name: 'Menu Vaccine', value: 'Protect your child with timely vaccinations for a healthy future.', icon: '/img/vaccine.png' },
     { id: 2, name: 'Menu Teeth', value: 'Ensure a bright smile with regular dental care and tracking.', icon: '/img/baby-teeth.png' },
     { id: 3, name: 'Menu Appointment', value: 'Easily manage and track all your child\'s health appointments.', icon: '/img/doctor.png' },
];

export default function GridMenu() {
     return (
          <div className="bg-white py-24 sm:py-32">
               <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                         {stats.map((stat) => (
                              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 items-center">
                                   <img
                                        src={stat.icon}
                                        className="h-16 w-16 mb-4" 
                                        alt="menu-logo"
                                   />
                                   <div className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                                        {stat.name}
                                   </div>
                                   <div className="text-base leading-7 text-gray-600">
                                        {stat.value}
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
}
