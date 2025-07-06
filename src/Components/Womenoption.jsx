import Image from 'next/image';

const Womenoption = () => {
  return (
    <div className='h-[10vh] px-5 py-3 flex gap-12'>
      <h1 className='text-[18px] font-[600] text-white border-r-2 pr-4 border-green-600  justify-center items-center'><p>Women's</p>
      <p>Cloths</p>
      
      </h1>
        <div className="h-[100%] flex gap-16 px-7"> 
          <img src="/images/girluniform.png" height={72} width={80}  alt="" />
          <img src="/images/dress.png" height={80} width={80} alt="" />
          <img src="/images/girljeans.png" height={80} width={80} alt="" />
          <img src="/images/girl.png" height={80} width={80} alt="" />
          <img src="/images/woman.png" height={80} width={80} alt="" />
          <img src="/images/skirt.png" height={80} width={80} alt="" />
        </div>
    </div>
  );
};

export default Womenoption;
