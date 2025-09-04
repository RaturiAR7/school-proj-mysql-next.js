import { Star, GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";

const SchoolCard = ({ school }) => {
  const data = {
    name: "Anshul",
  };
  return (
    <div className='group bg-black rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-1'>
      <div className='relative overflow-hidden'>
        <Image
          alt='school image'
          src={
            school.image
              ? `/schoolImages/${school.image}`
              : "/default-school.jpg"
          }
          width={400}
          height={300}
          className='w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent'></div>
        <div className='absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl px-3 py-2 flex items-center gap-1 shadow-lg'>
          <Star className='w-4 h-4 text-amber-400 fill-current' />
          <span className='text-sm font-bold text-gray-800'>
            {school.rating}
          </span>
        </div>
        <div className='absolute bottom-4 left-4 right-4'>
          <div className='bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
            <div className='flex items-center gap-2 text-white'>
              <GraduationCap className='w-4 h-4' />
              <span className='text-sm font-medium'>
                Established Excellence
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='p-8'>
        <h3 className='text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors duration-300 leading-tight'>
          {school.name}
        </h3>
        <div className='flex items-start gap-3 text-slate-600 mb-6'>
          <div className='w-8 h-8 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1'>
            <MapPin className='w-4 h-4 text-emerald-600' />
          </div>
          <div>
            <p className='text-sm leading-relaxed text-slate-600'>
              {school.address}
            </p>
            <p className='text-sm font-semibold text-emerald-700 mt-1 flex items-center gap-1'>
              {school.city}
            </p>
          </div>
        </div>
        <button className='w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-2xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-emerald-200 group-hover:shadow-xl'>
          <span className='flex items-center justify-center gap-2'>
            Explore School
            <div className='w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </span>
        </button>
      </div>
    </div>
  );
};

export default SchoolCard;
