import { Trans } from '@lingui/macro'
import styled from 'styled-components/macro'

import home_1 from 'assets/images/home_1.png'
import BodyText, { BodyTextWithTitle } from 'components/common/BodyText'
import LargeHeading from 'components/common/LargeHeading'
import { ListBodyTextWithTitle } from 'components/common/ListBodyText'
import PublicTabContentContainer from 'components/common/PublicTabContentContainer'
import Spacer from 'components/common/Spacer'
import { Flex, Type } from 'theme/base'

const TextWithBg = styled(Type.H5)`
  line-height: 40px;
  display: block;
  max-width: max-content;
  background: linear-gradient(90deg, #08e6a5 0%, #27daf6 50%, #3e8aff 100%);
  padding: 0 12px;
  color: ${({ theme }) => theme.colors.neutral7};
`

function Home1() {
  return (
    <PublicTabContentContainer image={home_1}>
      <Flex
        alignItems={['flex-start', 'flex-start', 'center', 'center']}
        flexDirection={['column', 'column', 'row', 'row']}
      >
        <LargeHeading mr={3}>Decentralab</LargeHeading>
        <Type.H5 color="neutral3" fontWeight="400">
          /ˌdiːˈsentrəlab/
        </Type.H5>
      </Flex>
      <TextWithBg mt="24px">
        <Trans>{`< A Web3 Studio />`}</Trans>
      </TextWithBg>
      <BodyText mt={4}>
        <Trans>
          We focus on creating decentralized applications (dApps) on the blockchain, using web3 technologies. We aim to
          empower innovation by providing the tools and expertise necessary to build and deploy decentralized
          applications that can disrupt traditional industries and create new business models
        </Trans>
      </BodyText>
      <Spacer mb="56px" />
      <BodyTextWithTitle
        heading={<Trans>Our Mission</Trans>}
        body={
          <Trans>
            We are focused on bringing our ideas to life with blockchain technology and a decentralized mindset.
          </Trans>
        }
      />
      <Spacer mb="56px" />
      <ListBodyTextWithTitle
        heading={<Trans>Our Promise</Trans>}
        listText={[
          <Trans key={1}>1% better every day, and every day at work is a promising day.</Trans>,
          <Trans key={2}>100% motivation to push ourselves to improve.</Trans>,
          <Trans key={3}>All our products follow the most important core value: Transparency</Trans>,
        ]}
      />
      <Spacer mb="16px" />
    </PublicTabContentContainer>
  )
}

export default Home1
