import React from 'react'

const Card = ({ontitle, subtitle, top, children}) => {
  return (
    <>
        <main className=" mx-auto flex min-h-[calc(100vh-112px)] max-w-6xl items-center px-6 md:px-10 pb-14">
            <section  className="surface-paper w-full rounded-[28px] border border-[var(--border)] p-8 md:p-12">
                 <p className=" text-sm md:text-base font-bold tracking-[0.18em] uppercase">
           {top}
          </p>

          <h1 className="mt-3 text-[var(--ink)] text-4xl md:text-6xl font-black tracking-tight">
            {ontitle}
          </h1>

           <p className="mt-4 max-w-2xl text-[var(--muted)] text-lg md:text-2xl font-semibold">
             {subtitle}
           </p>

           {children}

            </section>
        </main>
    </>
  )
}

export default Card
