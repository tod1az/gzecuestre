import type { ContactEmailFormProps } from "@/lib/types"
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from '@react-email/components'
import { Tailwind } from "@react-email/tailwind"

export default function ContactFormEmail({ message, nameSender, emailSender }: ContactEmailFormProps) {
  return (
    <Html>
      <Head />
      <Preview>{`Nuevo mensaje de ${nameSender} a través del formulario de contacto`}</Preview>
      <Tailwind>
        <Body className="bg-gray-10">
          <Container className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
            <Section className="leading-tight">
              <Heading>{`Recibiste un mensaje de ${nameSender} a través del formulario de contacto`}</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>{`El email de ${nameSender} es: ${emailSender}`}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}