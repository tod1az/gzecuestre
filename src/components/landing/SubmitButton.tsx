import { Button } from '@/components/ui/button'
import React from 'react'
import { IoIosSend } from 'react-icons/io'
import { useFormStatus } from 'react-dom'

export default function SubmitButton() {

  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      disabled={pending}
      className={`flex text-lg gap-2 items-center bg-orange-600
              hover:bg-negro hover:text-white w-[8rem] h-[2rem]
             active:scale-105 active:translate-y-0.5 transition-all
             `}>
      {
        pending
          ? <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white' />
          :
          <>
            Enviar
            <IoIosSend />
          </>
      }

    </Button>
  )
}
