function Intro() {
  return (
    // h3 removed md:text-3xl temp.
    <h3 className='~text-base/3xl container my-8 text-center font-bold uppercase md:my-24'>
      {/* span removed text-sm md:text-xl temp. */}
      <span className='~text-sm/2xl'>Check out our</span> <br /> all-natural{' '}
      <span className='font-normal'>products</span>
    </h3>
  );
}

function BigGallery() {
  return (
    <div className='container mx-auto hidden w-[800px] grid-cols-2 grid-rows-2 gap-4 md:grid'>
      <div className=''>
        <div className='flex flex-col overflow-hidden object-cover transition-all'>
          <div className='grow overflow-hidden'>
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
        <div className='flex flex-col overflow-hidden object-cover transition-all'>
          <div className='grow overflow-hidden'>
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
        <div className='flex flex-col overflow-hidden object-cover transition-all'>
          <div className='grow overflow-hidden'>
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
        <div className='flex flex-col overflow-hidden object-cover transition-all'>
          <div className='grow overflow-hidden'>
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
      <div className='grid auto-rows-auto grid-cols-2 gap-4 md:hidden'>
        <div className='col-span-full grid grid-cols-subgrid overflow-hidden'>
          <div className='col-span-full flex flex-col overflow-hidden bg-white'>
            <div className='overflow-hidden'>
              <img
                className='object-cover object-bottom transition-all hover:scale-105 min-[340px]:object-center min-[340px]:pb-[30px]'
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
        <div className='row-span-1 row-start-2'>
          <div className='overflow-hidden bg-white transition-all'>
            <img
              className='w-full overflow-hidden transition-all hover:scale-110'
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
        <div className='row-span-1 row-start-2'>
          <div className='overflow-hidden bg-white transition-all'>
            <img
              className='w-full overflow-hidden transition-all hover:scale-110'
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
