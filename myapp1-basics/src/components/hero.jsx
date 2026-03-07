import Image from 'next/image'
import heroImg from '@/public/heroimg.jpg'
export const Hero = ()=>{
  return (
    <>
      <div className="">
        <Image
        src={heroImg}
        alt="Hero image"
        className="absolute top-0"
        />
      </div>
    </>
  )
}