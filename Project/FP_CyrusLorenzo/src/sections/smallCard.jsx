import React from 'react'

const SmallCard = ({title, descrp}) => {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[rgba(249,241,226,0.55)] px-6 py-5">
      <div className="text-[var(--ink)] text-2xl font-black">{title}</div>
      <div className="mt-1 font-semibold">{descrp}</div>
    </div>
  )
}

export default SmallCard
