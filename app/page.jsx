import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>EduFinder - School Management System</title>
        <meta
          name='description'
          content='Find and manage schools with our comprehensive school management platform'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50'>
        <nav className='bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm'>
          <div className='container mx-auto px-4'>
            <div className='flex items-center justify-between h-20'>
              <Link href='/' className='flex items-center gap-3'>
                <div>
                  <h1 className='md:text-2xl text-base font-bold text-slate-800'>
                    EduFinder
                  </h1>
                  <p className='text-xs text-emerald-600 font-medium'>
                    School Management System
                  </p>
                </div>
              </Link>
              <div className='flex items-center gap-6'>
                <Link
                  href='/schools'
                  className='font-semibold md:text-xl text-sm text-slate-600 hover:text-emerald-600 transition-colors duration-200 flex items-center gap-2'
                >
                  Browse Schools
                </Link>
                <Link
                  href='/schools/add'
                  className='bg-gradient-to-r from-emerald-600 to-teal-600 text-white md:text-base text-sm md:px-6 md:py-3 px-3 py-1 rounded-xl font-light md:font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-lg flex items-center gap-2'
                >
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                    />
                  </svg>
                  Add School
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <section className='py-32'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h1 className='text-4xl md:text-8xl font-bold mb-8 leading-tight'>
                <span className='text-slate-800'>Find The</span>
                <br />
                <span className='bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
                  Perfect School
                </span>
              </h1>

              <p className='text-base md:text-2xl text-slate-600 mb-16 leading-relaxed max-w-3xl mx-auto'>
                Discover exceptional educational institutions with our
                comprehensive school management platform. Connect with top-rated
                schools and make informed decisions for your child's future.
              </p>

              <div className='flex flex-col sm:flex-row gap-8 justify-center items-center'>
                <Link
                  href='/schools'
                  className='bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 md:px-12 md:py-5 rounded-2xl font-medium md:font-bold text-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-xl flex items-center gap-3'
                >
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                  Browse Schools
                </Link>
                <Link
                  href='/schools/add'
                  className='bg-white text-emerald-700 border-2 border-emerald-600 md:px-12 md:py-5 px-6 py-2 rounded-2xl font-bold text-base md:text-xl hover:bg-emerald-600 hover:text-white transition-all duration-200 shadow-lg flex items-center gap-3'
                >
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                    />
                  </svg>
                  Add Your School
                </Link>
              </div>
            </div>
          </div>
        </section>
        <footer className='bg-slate-800 text-white py-12'>
          <div className='container mx-auto px-4 text-center'>
            <div className='flex items-center justify-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center'>
                <svg
                  className='w-5 h-5 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 14l9-5-9-5-9 5 9 5z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
                  />
                </svg>
              </div>
              <span className='text-2xl font-bold'>EduFinder</span>
            </div>
            <p className='text-slate-400 text-lg'>
              Your trusted partner in finding the perfect educational
              institution.
            </p>
            <div className='mt-8 pt-8 border-t border-slate-700'>
              <p className='text-slate-500'>
                © 2025 EduFinder. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
