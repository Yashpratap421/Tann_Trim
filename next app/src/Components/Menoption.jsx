import Image from 'next/image';

const Menoption = () => {
  return (
    <div className='h-[10vh] px-5 py-3 flex gap-12'>
      <h1 className='text-[18px] font-[600] text-white border-r-2 pr-4 border-green-600  justify-center items-center'><p>Men's</p>
      <p>Cloths</p>
      
      </h1>
        <div className="h-[100%] flex gap-16 px-7"> 
          <img src="/images/uniform.png" height={72} width={72}  alt="" />
          <img src="/images/shirt.png" height={72} width={72} alt="" />
          <img src="/images/jeans.png" height={72} width={72} alt="" />
          <img src="/images/shorts.png" height={72} width={72} alt="" />
        </div>
    </div>
  );
};

export default Menoption;
