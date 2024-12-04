import { Trans } from '@lingui/macro'

import home_2 from 'assets/images/home_2.png'
import BodyText from 'components/common/BodyText'
import LargeHeading from 'components/common/LargeHeading'
import PublicTabContentContainer from 'components/common/PublicTabContentContainer'
import Spacer from 'components/common/Spacer'

import ContactInfo from './ContactInfo'

function Contact2() {
  return (
    <PublicTabContentContainer image={home_2}>
      <LargeHeading>
        <Trans>Be Decentraler</Trans>
      </LargeHeading>
      <Spacer mb={4} />
      <BodyText>
        <Trans>Interested in our vision, but can&apos;t find a job description that&apos;s right for you? </Trans>
      </BodyText>
      <Spacer mb={4} />
      <BodyText maxWidth="none">
        <Trans>
          Don&apos;t worry, we are ready to listen to you, if you also want to build a decentralized world like us!
        </Trans>
      </BodyText>
      <Spacer mb={4} />
      <ContactInfo />
    </PublicTabContentContainer>
  )
}

export default Contact2
