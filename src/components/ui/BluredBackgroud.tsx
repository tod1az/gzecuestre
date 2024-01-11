


export default function BluredBackgroud() {
  return (
    <>
      <div className="absolute top-[10rem] -z-10 flex">
        <div className="h-[20rem]  w-[20rem] bg-orange-300 blur-[10rem]  rounded-full" />
        <div className="ml-24 h-[20rem]  w-[20rem] bg-orange-400 blur-[10rem] rounded-full" />
      </div>
      <div className="absolute top-[30rem] -z-0 flex">
        <div className="h-[20rem]  w-[20rem] bg-orange-300 blur-[10rem]  rounded-full" />
        <div className="ml-24 h-[20rem]  w-[20rem] bg-orange-400 blur-[10rem]  rounded-full" />
      </div>
    </>
  )
}
