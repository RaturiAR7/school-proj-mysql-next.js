import { Search, GraduationCap, Delete, Plus } from "lucide-react";
import SchoolCard from "../components/SchoolCard";
import Link from "next/link";
import DeleteButton from "../components/DeleteButton";

export const revalidate = 60;

export default async function Page() {
  let schoolData = [];
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/api/school`,
      {
        next: { revalidate: 60 },
      }
    );
    schoolData = await response.json();
  } catch (e) {
    console.error("Failed to fetch schools", e);
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-emerald-50 p-10'>
      <header className='relative bg-gradient-to-br from-slate-800 via-slate-700 to-emerald-800 text-white py-24 overflow-hidden'>
        <div className='container mx-auto px-4 relative z-10 text-center max-w-4xl'>
          <div className='flex items-center justify-center gap-3 mb-6'>
            <div className='w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-emerald-400/30'>
              <GraduationCap className='w-6 h-6 text-emerald-300' />
            </div>
            <span className='text-emerald-300 text-lg font-medium'>
              EduFinder
            </span>
          </div>
          <h1 className='text-5xl md:text-7xl font-bold mb-8 leading-tight'>
            <span className='text-white'>Discover</span>
            <br />
            <span className='bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent'>
              Elite Schools
            </span>
          </h1>
        </div>
      </header>
      <div className='container mx-auto px-4 mb-12'>
        <h2 className='text-3xl font-bold text-slate-800 mb-2 text-center'>
          {schoolData.length} Premium Schools
        </h2>
        <p className='text-slate-600 text-center'>
          Curated educational excellence for your child
        </p>
      </div>
      <div className='container mx-auto px-4 pb-24'>
        {schoolData.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 text-black '>
            {schoolData.map((school, index) => (
              <div key={school.id}>
                <SchoolCard school={school} />
              </div>
            ))}
          </div>
        ) : (
          <div className='text-center py-24'>
            <Search className='w-16 h-16 mx-auto mb-6 text-emerald-500' />
            <h3 className='text-2xl font-bold text-slate-800'>
              No schools found
            </h3>
          </div>
        )}
      </div>
      <div className='flex flex-col sm:flex-row gap-8 justify-center items-center'>
        <Link
          href='/schools/add'
          className='bg-white text-emerald-700 border-2 border-emerald-600 md:px-12 md:py-5 px-6 py-2 rounded-2xl font-bold text-base md:text-xl hover:bg-emerald-600 hover:text-white transition-all duration-200 shadow-lg flex items-center gap-3'
        >
          <Plus />
          Add Your School
        </Link>
        <DeleteButton />
      </div>
    </div>
  );
}
