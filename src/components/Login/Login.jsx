import React from 'react'
import { Container, CTA, CTALogoOne, CTALogoTwo, Description, SignUp } from './Styled'

export const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src='/images/cta-logo-one.svg' alt='Logo one' />
        <SignUp>GET ALL THERE!</SignUp>
        <Description>
          Get premier access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.
        </Description>
        <CTALogoTwo src='/images/cta-logo-two.png' alt='Logo two' />
      </CTA>
    </Container>
  )
}
