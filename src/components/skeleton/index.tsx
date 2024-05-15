export default function Skeleton() {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 w-64 h-72">
      <div className="animate-pulse w-full h-full flex justify-around items-center flex-col">
        <div className="rounded-md bg-slate-200 h-28 w-28"></div>
        <div className="flex flex-col justify-center items-center w-full m-2 gap-2">
          <div className="h-2 bg-slate-200 rounded w-full"></div>
          <div className="h-2 bg-slate-200 rounded w-full"></div>
          <div className="h-2 bg-slate-200 rounded w-full"></div>
          <div className="h-2 bg-slate-200 rounded w-full"></div>
          <div className="h-2 bg-slate-200 rounded w-full"></div>

        </div>
      </div>
    </div>
  )

}