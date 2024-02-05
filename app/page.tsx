import Image from 'next/image'
import bgImg from '../public/aula-virtual.png'
import defaultImg from '../public/default image.svg'
import BotonNavbar from './components/BotonNavbar'
import Link from 'next/link'

export default function Home() {
  
  const imprimirLineas = (color: string) => {
    const array = [...Array(14)] // using spread syntax (produces the same as above)
    let estilo: string = 'block h-3 w-auto my-5 '
    
    estilo += color=='blue'? 'bg-blue' : 'bg-white'
    return (
      <div className='my-10'>
        {
          array.map(() => 
          <span className={estilo}></span>
          )
        }
      </div>
    )
  }

  return (
    <main className="home min-h-screen">
      <section className="w-full h-[40rem] overflow-hidden relative after:content-[''] after:h-5/6 after:w-3/6 after:absolute after:bg-silver after:right-0 after:top-0 after:-z-10 after:rounded-ss-full
      before:content-[''] before:h-3/6 before:w-4/6 before:absolute before:bg-silver before:right-0 before:top-96 before:-z-10 before:rounded-ss-full">
        <nav className="mx-auto xl:max-w-7xl pt-6">
            <ul className="flex justify-end w-full">
              <BotonNavbar idSeccion={'content1'} clases={"p-3 text-lg font-['FontBold']"} content={'Content 1'} />
              <BotonNavbar idSeccion={'content2'} clases={"p-3 text-lg font-['FontBold']"} content={'Content 2'} />
              <Link className="p-3 text-lg text-blue font-['FontBold']" href="/dashboard">Login</Link>

            </ul>
        </nav>
        <article className="mx-auto xl:max-w-7xl mt-20 relative">
          <Image className='absolute max-w-2xl right-0 -top-12'
            src={bgImg}
            alt="imagen del header"
          />
          <div className="flex gap-6 flex-col max-w-lg">
            <h1 className="text-7xl font-['FontExtraBold']">Lorem ipsum Design</h1>
            <p className="font-['FontSemiBold']">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="mt-20">
            <Link className="bg-blue text-white font-['FontBold'] text-xl py-4 px-10 hover:bg-blue-hover" href="/dashboard">LOGIN</Link>
          </div>
        </article>
      </section>

      <section id='content1' className='mx-auto xl:max-w-7xl pt-40 pb-20'>
        <article className="relative">
          <div className="flex gap-6 flex-col max-w-96">
            <h1 className="text-7xl font-['FontExtraBold']">Content 1</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </article>
        <div className='grid lg:grid-cols-4 gap-12 mt-16 relative'>
          <article className='flex flex-col gap-6'>
            <div className='w-auto relative aspect-square bg-blue flex items-center justify-center'>
              <Image className='w-20'
                src={defaultImg}
                alt="imagen del header"
              />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </article>
          <article className='flex flex-col gap-6'>
            <div className='w-auto relative aspect-square bg-blue flex items-center justify-center'>
              <Image className='w-20'
                src={defaultImg}
                alt="imagen del header"
              />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </article>
          <article className='flex flex-col gap-6'>
            <div className='w-auto relative aspect-square bg-blue flex items-center justify-center'>
              <Image className='w-20'
                src={defaultImg}
                alt="imagen del header"
              />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </article>
          <article className='flex flex-col gap-6'>
            <div className='w-auto relative aspect-square bg-blue flex items-center justify-center'>
              <Image className='w-20'
                src={defaultImg}
                alt="imagen del header"
              />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </article>
        </div>
      </section>

      <section id='content2' className='w-full relative pt-40 pb-20 bg-sky'>
        <div className='mx-auto xl:max-w-7xl'>
          <div className=" flex justify-end relative">
            <div className="flex gap-6 flex-col text-right max-w-96">
              <h1 className="text-7xl font-['FontExtraBold']">Content 2</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className='grid lg:grid-cols-3 gap-20 mt-16 relative'>
            <article className='flex flex-col gap-6'>
              <div className='border-8 border-white py-10 px-14'>
                <span className='block h-6 w-auto my-5 bg-white'></span>
                <div className='w-full'>
                  {
                    imprimirLineas('white')
                  }
                </div>
                <span className='block h-6 w-auto my-5 bg-white'></span>
              </div>
            </article>
            <article className='flex flex-col gap-6'>
              <div className='border-8 border-blue py-10 px-14'>
                <span className='block h-6 w-auto my-5 bg-blue'></span>
                <div className='w-full'>
                  {
                    imprimirLineas('blue')
                  }
                </div>
                <span className='block h-6 w-auto my-5 bg-blue'></span>
              </div>
            </article>
            <article className='flex flex-col gap-6'>
              <div className='border-8 border-white py-10 px-14'>
                <span className='block h-6 w-auto my-5 bg-white'></span>
                <div className='w-full'>
                  {
                    imprimirLineas('white')
                  }
                </div>
                <span className='block h-6 w-auto my-5 bg-white'></span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className='w-full h-36 bg-blue'></section>
    </main>
  );
}
