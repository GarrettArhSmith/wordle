import { Fragment } from 'react'
import { v4 } from 'uuid';
import { BackspaceIcon } from '@heroicons/react/24/outline';
import Key from './Key';

type KeyType = {
  used: boolean;
  char: string;
}

type Props = {
  keys: KeyType[];
}

const Keyboard = ({ keys }: Props) => {
  return (
    <div className='flex flex-wrap gap-1 md:gap-1.5 justify-center'>
      {keys.map(key => (
        <Fragment key={v4()}>
          <Key char={key.char}></Key>
          {(key.char === 'p' || key.char === 'l') && <hr className='w-full -my-1.5 border-none' />}
          {key.char === 'l' && <Key>Enter</Key>}
          {key.char === 'm' && <Key><BackspaceIcon className='size-6' /></Key>}
        </Fragment>
      ))}
    </div>
  )
}

export default Keyboard