interface props {
  label: string,
  type?:  string
}

export default function reInput ({
  label,
  type = 'text'
}: props) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={`${label}${type}`}>{label}</label>
      <input
        id={`${label}${type}`}
        type={type}
        className="p-2 border-2 rounded-xl focus:outline-none focus:ring"
      />
    </div>
  )
}