import logo from "./assets/ab-logo-square.png";

const Contact = () => {
  return (
    <section className='grid grid-cols-12 rounded border-y p-2'>
      <div className='col-span-full sm:col-span-4 py-4 '>
        <div className='h-full hidden sm:block'>
          <div className='flex items-center justify-center h-full'>
            <img className='w-[170px] rounded-sm' src={logo} alt='logo' />
          </div>
        </div>
      </div>
      <article className='col-span-full sm:col-span-8 sm:border-s p-2'>
        <div className='text-start p-5'>
          <h3 className='text-xl font-bold text-primary text-start'>Contact</h3>
          <p className='text-muted-foreground'>
            Here are my links and socials if you're interested on working with me.
          </p>
        </div>
        <aside className='flex flex-wrap items-center justify-center gap-3'>
          {/* github */}
          <a
            href='https://github.com/ArvinBuid
            '
            className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 hover:text-blue-600'
          >
            <div className='flex items-center '>
              {/* github svg */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-10 w-10 p-2 text-blue-600'
              >
                <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                <path d='M9 18c-4.51 2-5-2-7-2'></path>
              </svg>
              <div>Github</div>
            </div>
          </a>
          {/* linkedin */}
          <a
            href='https://www.linkedin.com/in/arvinbuid01'
            className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 hover:text-blue-600'
          >
            <div className='flex items-center justify-center'>
              {/* github svg */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-10 w-10 p-2 text-blue-600'
              >
                <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                <rect width='4' height='12' x='2' y='9'></rect>
                <circle cx='4' cy='4' r='2'></circle>
              </svg>
              <div>Linkedin</div>
            </div>
          </a>
          {/* email */}
          <a
            href='https://www.linkedin.com/in/arvin-buid/'
            className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 hover:text-blue-600'
          >
            <div className='flex items-center'>
              {/* email svg*/}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-10 w-10 p-2 text-blue-600'
              >
                <rect width='20' height='16' x='2' y='4' rx='2'></rect>
                <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
              </svg>
              <div>Email</div>
            </div>
          </a>
        </aside>
      </article>
    </section>
  );
};

export default Contact;
