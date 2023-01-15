import React from 'react';
import { RiCustomerService2Full, RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>COME AND VISIT OUR LOCATIONS</h2>
          <p className='py-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati ut nemo voluptatibus vel voluptatem asperiores nostrum,
            unde placeat optio similique sunt ipsa alias commodi numquam fugit
            atque delectus ad magnam quo voluptas est rem perspiciatis? Corrupti
            ipsum sint labore repudiandae molestias officiis quae minima harum 
            alias iste. Architecto, expedita suscipit!
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
                <h3 className='py-2'>LEADING DEVELOPERS</h3>
                <p className='py-1'>BEST REAL ESTATE FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
                <h3 className='py-2'>GOLDEN LION WINNERS</h3>
                <p className='py-1'>BEST SERVICE FOR THIS DECADE</p>
            </div>
          </div>
        </div>
      </div>

      <div>
          <div className='border text-center'>
              <p className='pt-2'>GET 10% OFF CONSULTATION</p>
              <p className='py-4'>12 HOURS LEFT</p>
              <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
          </div>
          <form className='w-full'>
              <div className='flex flex-col my-2'>
                  <label>Location</label>
                  <select className='border rounded-md p-2'>
                      <option>Rezzel Street</option>
                      <option>Liver Street</option>
                      <option>Roger Street</option>
                      <option>Palm Street</option>
                  </select>
              </div>
              <div className='flex flex-col my-4'>
                  <label>Visit Date</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
              
                <button className='w-full my-4'>Rates & Availabilities</button>
          </form>
      </div>
    </div>
  );
};

export default Search;
