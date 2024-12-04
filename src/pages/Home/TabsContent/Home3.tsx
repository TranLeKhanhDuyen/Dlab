import { Trans } from '@lingui/macro'

import home_2 from 'assets/images/home_2.png'
import BodyText from 'components/common/BodyText'
import LargeHeading from 'components/common/LargeHeading'
import { ListBodyTextWithTitle } from 'components/common/ListBodyText'
import PublicTabContentContainer from 'components/common/PublicTabContentContainer'
import Spacer from 'components/common/Spacer'

function Home3() {
  return (
    <PublicTabContentContainer image={home_2}>
      <LargeHeading hasUnderline>
        <Trans>Core Value</Trans>
      </LargeHeading>
      <BodyText mt={4}>
        <Trans>
          Our company culture values <b>transparency</b>, <b>commitment</b>, and <b>agility</b> to promote an open,
          dedicated, and adaptable work environment. We strive to create a culture of transparency, where everyone is
          committed to open communication and agile problem-solving.
        </Trans>
      </BodyText>
      <Spacer mb="48px" />
      <LargeHeading>
        <Trans>Our Principle</Trans>
      </LargeHeading>
      <Spacer mb="48px" />
      <ListBodyTextWithTitle
        color="primary1"
        heading={<Trans>Develop</Trans>}
        listText={[
          <Trans key={1}>Each person has a goal but always towards a destination</Trans>,
          <Trans key={2}>Always searching & aiming for new knowledge</Trans>,
          <Trans key={3}>Fail fast, learn faster</Trans>,
        ]}
      />
      <Spacer mb="56px" />
      <ListBodyTextWithTitle
        color="secondary3"
        heading={<Trans>Decentralized</Trans>}
        listText={[
          <Trans key={1}>Fall in love with Blockchain</Trans>,
          <Trans key={2}>Always thinking with Decentralized mindset</Trans>,
          <Trans key={3}>Flat communication</Trans>,
        ]}
      />
      <Spacer mb="56px" />
      <ListBodyTextWithTitle
        color="secondary1"
        heading={<Trans>Dream</Trans>}
        listText={[
          <Trans key={1}>Go big or go home</Trans>,
          <Trans key={2}>Always hope & dream</Trans>,
          <Trans key={3}>&quot;It&apos;s better to regret what you have done than what you haven&apos;t&quot;</Trans>,
        ]}
      />
      <Spacer mb="16px" />
    </PublicTabContentContainer>
  )
}

export default Home3
