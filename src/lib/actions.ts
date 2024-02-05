'use server'

import { Resend } from 'resend'
import React from 'react'
import { formValidate, getErrorMessage } from '@/lib/utils'
import ContactFormEmail from '@/templates/contactEmail'
const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const data = formValidate(formData)
  if (data.accepted) {
    const { emailSender, message, nameSender } = data
    try {
      await resend.emails.send({
        from: 'Formulario de contacto <onboasdarding@resend.dev>',
        to: 'gzecuestre@gmail.com',
        subject: 'Mensaje en gzecuestre.com',
        reply_to: emailSender,
        react: React.createElement(ContactFormEmail, {
          message: message as string,
          emailSender: emailSender as string,
          nameSender: nameSender as string
        })
      })
      return { error: false }
    } catch (error: unknown) {
      return {
        error: getErrorMessage(error)
      }
    }
  } else return { error: data.error }
}
