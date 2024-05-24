function Intro() {
  return (
    <h3 className='uppercase font-bold text-center  md:text-3xl my-8 md:my-24'>
      <span className='text-sm  md:text-xl'>Check out our</span> <br />{' '}
      all-natural <span className='font-normal'>products</span>
    </h3>
  )
}

function BigGallery() {
  return (
    <div className='md:grid grid-cols-3 grid-rows-2 gap-4 hidden'>
      <div className='col-span-1 row-span-2'>
        <div className='flex flex-col object-cover overflow-hidden transition-all '>
          <div className='overflow-hidden grow'>
            <img
              className='transition-all hover:scale-105'
              src='dog/dog_food_3.jpeg'
              alt='Dog Food'
            />
          </div>
          <p>Dog Food</p>
        </div>
      </div>
      <div className='col-span-1 row-span-2'>
        <div className='flex flex-col object-cover overflow-hidden transition-all'>
          <div className='overflow-hidden grow'>
            <img
              className='transition-all hover:scale-105'
              src='cat/cat_snack_1.jpeg'
              alt='Cat Snack'
            />
          </div>
          <p>Cat Snack</p>
        </div>
      </div>
      <div className='col-span-1 row-span-1'>
        <div className='flex flex-col object-cover overflow-hidden transition-all'>
          <div className='overflow-hidden grow'>
            <img
              className='transition-all hover:scale-105 w-[400px] h-[175px]'
              src='cat/cat_toy_1.jpeg'
              alt='Cat Toy'
            />
          </div>
          <p>Cat Toy</p>
        </div>
      </div>
      <div className='col-span-1 row-span-1 col-start-3'>
        <div className='flex flex-col object-cover overflow-hidden transition-all'>
          <div className='overflow-hidden grow'>
            <img
              className='transition-all hover:scale-105 w-[400px] h-[175px]'
              src='dog/dog_toy_1.jpeg'
              alt='Dog Toy'
            />
          </div>
          <p>Dog Toy</p>
        </div>
      </div>
    </div>
  )
}

function Gallery() {
  return (
    <section className='container mx-auto my-8 md:my-24'>
      <Intro />
      <div className='grid grid-cols-2 gap-4 auto-rows-fr md:hidden '>
        <div className='col-span-full grid grid-cols-subgrid overflow-hidden '>
          <div className='flex flex-col bg-white col-span-full overflow-hidden'>
            <div className='overflow-hidden'>
              <img
                className='hover:scale-105 object-cover transition-all object-bottom min-[340px]:object-center min-[340px]:pb-[30px]'
                src='/dog/dog_food_3.jpeg'
                alt='Dog Food'
              />
            </div>
            <div className='ml-6'>
              <p>Dog Food</p>
              <p className=''>
                From natural ingredients, appeal to <br /> a wide range of dog
                breeds and needs.
              </p>
            </div>
          </div>
        </div>
        <div className='row-start-2 row-span-1'>
          <div className='bg-white transition-all overflow-hidden'>
            <img
              className='overflow-hidden  hover:scale-110 transition-all w-full'
              src='/cat/cat_snack_1.jpeg'
              alt='Cat Snack'
            />
          </div>
          <p>Cat Snack</p>
        </div>
        <div className='row-start-2 row-span-1 '>
          <div className='bg-white transition-all overflow-hidden '>
            <img
              className='overflow-hidden  hover:scale-110 transition-all w-full'
              src='/cat/cat_toy_1.jpeg'
              alt='Cat Toy'
            />
          </div>
          <p>Cat Toy</p>
        </div>
      </div>
      <BigGallery />
    </section>
  )
}

export default Gallery
