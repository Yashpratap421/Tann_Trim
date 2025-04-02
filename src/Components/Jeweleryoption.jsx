import Image from 'next/image';

const Jewoption = () => {
  return (
    <div className='h-[10vh] px-5 py-3 flex gap-12'>
      <h1 className='text-[18px] font-[600] text-white border-r-2 pr-4 border-green-600  flex justify-center items-center'><p>Jewellery</p>
      
      </h1>
        <div className="h-[100%] flex gap-16 px-7"> 
          <img src="/images/diamond.png" height={72} width={72}  alt="" />
          <img src="/images/earrings.png" height={72} width={72} alt="" />
          <img src="/images/jewelery.png" height={72} width={72} alt="" />
          <img src="/images/necklace.png" height={72} width={72} alt="" />
        </div>
    </div>
  );
};

export default Jewoption;
