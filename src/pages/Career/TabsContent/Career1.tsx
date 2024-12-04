import { Trans } from '@lingui/macro'

import home_2 from 'assets/images/home_2.png'
import LargeHeading from 'components/common/LargeHeading'
import ListBodyText from 'components/common/ListBodyText'
import PublicTabContentContainer from 'components/common/PublicTabContentContainer'
import Spacer from 'components/common/Spacer'
import { Type } from 'theme/base'

function Career1() {
  return (
    <PublicTabContentContainer image={home_2}>
      <LargeHeading hasUnderline>
        <Trans>Introduction</Trans>
      </LargeHeading>
      <Spacer mb={4} />
      <Type.H3 fontSize="24px" lineHeight="32px">
        <Trans>WHO WE ARE?</Trans>
      </Type.H3>
      <Spacer mb={3} />
      <ListBodyText
        listText={[
          <Trans key={1}>Working location: Da Nang, Vietnam</Trans>,
          <Trans key={2}>Startup products based on Blockchain Technology</Trans>,
          <Trans key={2}>Decentralized mindset</Trans>,
          <Trans key={2}>The workflow inspried by The Spotify Model</Trans>,
        ]}
      />
      <Spacer mb={4} />
      <Type.H3 fontSize="24px" lineHeight="32px">
        <Trans>WHAT WILL YOU EARN?</Trans>
      </Type.H3>
      <Spacer mb={3} />
      <Type.Body>
        <Trans>Beside your salary, we will provide:</Trans>
      </Type.Body>
      <ListBodyText
        listText={[
          <Trans key={1}>Ready to train you on blockchain knowledge</Trans>,
          <Trans key={1}>Every day at work is a promissing day</Trans>,
          <Trans key={1}>100% motivation to push yourself to improve</Trans>,
        ]}
      />
    </PublicTabContentContainer>
  )
}

export default Career1
