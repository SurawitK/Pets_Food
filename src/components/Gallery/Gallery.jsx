function Intro() {
  return (
    // h3 removed md:text-3xl temp.
    <h3 className='my-8 container text-center font-bold uppercase md:my-24 ~text-base/3xl'>
      {/* span removed text-sm md:text-xl temp. */}
      <span className='~text-sm/2xl'>Check out our</span> <br /> all-natural{' '}
      <span className='font-normal'>products</span>
    </h3>
  );
}

function BigGallery() {
  return (
    <div className='hidden container grid-cols-2 grid-rows-2 gap-4 md:grid'>
      <div className=''>
        <div className='flex flex-col object-cover overflow-hidden transition-all '>
          <div className='overflow-hidden grow'>
            <img
              className='transition-all hover:scale-105'
              src='/dog/dog_food_3.jpeg'
              alt='Dog Food'
            />
          </div>
          <p className='font-bold'>Dog Food</p>
          <p className=''>
            From natural ingredients, appeal to <br /> a wide range of dog
            breeds and needs.
          </p>
        </div>
      </div>
      <div className=''>
        <div className='flex flex-col object-cover overflow-hidden transition-all'>
          <div className='overflow-hidden grow'>
            <img
              className='transition-all hover:scale-105'
              src='/cat/cat_snack_1.jpeg'
              alt='Cat Snack'
            />
          </div>
          <p className='font-bold'>Cat Snack</p>
          <p className=''>
            From natural ingredients, appeal to <br /> a wide range of cat
            breeds and needs.
          </p>
        </div>
      </div>
      <div className=''>
        <div className='flex flex-col object-cover overflow-hidden transition-all'>
          <div className='overflow-hidden grow'>
            <img
              className='transition-all hover:scale-105'
              src='/cat/cat_toy_1.jpeg'
              alt='Cat Toy'
            />
          </div>
          <p className='font-bold'>Cat Toy</p>
          <p className=''>Toys that are suitable for cats playtime.</p>
        </div>
      </div>
      <div className=''>
        <div className='flex flex-col object-cover overflow-hidden transition-all'>
          <div className='overflow-hidden grow'>
            <img
              className='transition-all hover:scale-105'
              src='/dog/dog_toy_1.jpeg'
              alt='Dog Toy'
            />
          </div>
          <p className='font-bold'>Dog Toy</p>
          <p className=''>Toys that are suitable for dogs playtime.</p>
        </div>
      </div>
    </div>
  );
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
              <p className='font-bold'>Dog Food</p>
              <p className=''>
                From natural ingredients, appeal to{' '}
                <br className='min-[400px]:hidden' /> a wide range of dog breeds
                and needs.
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
          <div className='ml-4'>
            <p className='font-bold'>Cat Snack</p>
            <p className='min-[400px]:hidden'>Kitty needs more tuna</p>
            <p className='max-[400px]:hidden'>
              From natural ingredients, appeal to a wide range of cat breeds and
              needs.
            </p>
          </div>
        </div>
        <div className='row-start-2 row-span-1 '>
          <div className='bg-white transition-all overflow-hidden '>
            <img
              className='overflow-hidden  hover:scale-110 transition-all w-full'
              src='/cat/cat_toy_1.jpeg'
              alt='Cat Toy'
            />
          </div>
          <div className='ml-4'>
            <p className='font-bold'>Cat Toy</p>
            <p className='min-[400px]:hidden'>Whiskers loves catnip mouse</p>
            <p className='max-[400px]:hidden'>
              Toys that are suitable for cats playtime.
            </p>
          </div>
        </div>
      </div>
      <BigGallery />
    </section>
  );
}

export { Gallery };
