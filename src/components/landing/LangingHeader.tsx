export default function LandingHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className='font-bold LandingSubTitle text-3xl xl:text-4xl pt-12 text-center'>
      {children}
    </h2>
  )
}
