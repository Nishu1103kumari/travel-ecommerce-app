
import img from "../assets/image.gif"

function Home() {
  return (
    <>
   

    <div className="w-[100%] h-[100vh] bg-amber-50">
    <div className=" w-[100%] h-[30%] font-bold text-4xl flex justify-center items-center bg-white  text-red-800 ">
          Welcome To Dream Destinations Co
    </div>
    <div className="flex justify-center items-center  w-[100%] h-[50%] gap-4">
      <img src={img} alt="" className="w-[20%] h-[50%] " />
      <span  className="w-[40%] h-[20%] text-7xl font-bold text-gray-700">Explore  & Plan  <br/>Your Journey</span>
    </div>
    </div>

    
    </>

  )
}

export default Home
