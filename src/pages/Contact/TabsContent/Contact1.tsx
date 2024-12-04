import { Trans } from '@lingui/macro'

import home_1 from 'assets/images/home_1.png'
import BodyText from 'components/common/BodyText'
import LargeHeading from 'components/common/LargeHeading'
import ListBodyText from 'components/common/ListBodyText'
import PublicTabContentContainer from 'components/common/PublicTabContentContainer'
import Spacer from 'components/common/Spacer'

import ContactInfo from './ContactInfo'

function Contact1() {
  return (
    <PublicTabContentContainer image={home_1}>
      <LargeHeading>
        <Trans>Company Info</Trans>
      </LargeHeading>
      <Spacer mb={4} />
      <BodyText>
        <Trans>DECENTRALAB PTE. LTD</Trans>
      </BodyText>
      <Spacer mb={4} />
      <ListBodyText
        maxWidth="none"
        listText={[
          <Trans key={1}>160 Robinson Road, #14-04 Singapore Business Federation Centre, Singapore (068914)</Trans>,
          <Trans key={2}>70 Phan Thanh Street, Da Nang City, Viet Nam</Trans>,
        ]}
      />
      <Spacer mb={4} />
      <ContactInfo />
    </PublicTabContentContainer>
  )
}

export default Contact1
