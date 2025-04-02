import Image from 'next/image';

const Electronicoption = () => {
  return (
    <div className='h-[10vh] px-5 py-3  flex gap-12'>
      <h1 className='text-[18px] text-white border-r-2 pr-4 border-green-600 font-[600] justify-center items-center'><p>Electronic's</p>
      <p>Devices</p>
      
      </h1>
        <div className="h-[100%] flex gap-16 px-7"> 
          <img src="/images/cpu.png" height={72} width={72}  alt="" />
          <img src="/images/smartphone.png" height={72} width={72} alt="" />
          <img src="/images/speaker.png" height={72} width={72} alt="" />
          <img src="/images/smartwatch.png" height={72} width={72} alt="" />
        </div>
    </div>
  );
};

export default Electronicoption;
