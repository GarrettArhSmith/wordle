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
  keyOnClick: (e: {code: string, key: string, repeat: boolean}) => void;
}

const Keyboard = ({ keys, keyOnClick }: Props) => {

  const mockEvent = (key: { char: string; }) => {
    if (key.char === 'Enter' || key.char === 'Backspace') return { code: key.char, key: key.char, repeat: false }
    return { code: `Key${key.char.toUpperCase()}`, key: key.char, repeat: false }
  }

  return (
    <div className='flex flex-wrap gap-1 md:gap-1.5 justify-center'>
      {keys.map(key => (
        <Fragment key={v4()}>
          <Key char={key.char} onClick={() => keyOnClick(mockEvent(key))}></Key>
          {(key.char === 'p' || key.char === 'l') && <hr className='w-full -my-1.5 border-none' />}
          {key.char === 'l' && <Key onClick={() => keyOnClick(mockEvent({char: 'Enter'}))}>Enter</Key>}
          {key.char === 'm' && <Key onClick={() => keyOnClick(mockEvent({char: 'Backspace'}))}><BackspaceIcon className='size-6' /></Key>}
        </Fragment>
      ))}
    </div>
  )
}

export default Keyboard