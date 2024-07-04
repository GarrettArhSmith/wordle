import { Fragment } from 'react'
import { v4 } from 'uuid';
import { BackspaceIcon } from '@heroicons/react/24/outline';

type KeyType = {
  used: boolean;
  char: string;
}

type Props = {
  keys: KeyType[];
}

const Keyboard = ({ keys }: Props) => {
  return (
    <div className='flex flex-wrap gap-1.5 justify-center'>
      {keys.map(key => (
        <Fragment key={v4()}>
          <div
            className={`bg-slate-300 w-8 md:w-11 h-14 flex items-center justify-center rounded uppercase font-bold`}
          >
            {key.char}
          </div>
          {(key.char === 'p' || key.char === 'l') && <hr className='w-full -my-1.5 border-none' />}
          {key.char === 'l' && <div className='bg-slate-300 w-16 h-14 flex items-center justify-center rounded uppercase font-bold text-sm'>Enter</div>}
          {key.char === 'm' && <div className='bg-slate-300 w-16 h-14 flex items-center justify-center rounded font-bold'><BackspaceIcon className='size-6' /></div>}
        </Fragment>
      ))}
    </div>
  )
}

export default Keyboard