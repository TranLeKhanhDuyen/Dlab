import { Trans } from '@lingui/macro'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import home_3 from 'assets/images/home_3.png'
import BottomInstructorContainer from 'components/common/BottomInstructorContainer'
import LargeHeading from 'components/common/LargeHeading'
import { ListBodyTextWithTitle } from 'components/common/ListBodyText'
import PublicTabContentContainer from 'components/common/PublicTabContentContainer'
import Spacer from 'components/common/Spacer'
import { Box, Flex, Grid, Type } from 'theme/base'
import ROUTES from 'utils/routes'

const GridContainer = styled(Grid)`
  row-gap: 32px;
`
const GridItem = styled(Box)`
  width: 100%;
  height: 100%;
`

function Home4() {
  return (
    <PublicTabContentContainer image={home_3}>
      <LargeHeading hasUnderline>
        <Trans>Tech Stack</Trans>
      </LargeHeading>
      <Spacer mb="48px" />
      <GridContainer gridTemplateColumns={['auto', 'auto auto']} gridAutoRows="160px">
        <GridItem>
          <ListBodyTextWithTitle heading="Backend" listText={['Nestjs', 'MongoDB, Redis, Elasticsearch', 'Kafka']} />
        </GridItem>
        <GridItem>
          <ListBodyTextWithTitle heading="Frontend" listText={['Reactjs, Next.js', 'Flutter', 'Web3']} />
        </GridItem>
        <GridItem>
          <ListBodyTextWithTitle heading="CI, CD & Infra" listText={['CircleCI', 'K8S, Google Cloud', 'S3, IPFS']} />
        </GridItem>
        <GridItem>
          <ListBodyTextWithTitle
            heading="Blockchain"
            listText={['Solidity', 'EVM indexing protocol', 'ZKRollup (Planning)']}
          />
        </GridItem>
        <GridItem>
          <ListBodyTextWithTitle heading="Management" listText={['Spotify Model', 'Jira']} />
        </GridItem>
      </GridContainer>
      <BottomInstructorContainer>
        <Flex alignItems="center" sx={{ flexWrap: 'wrap', gap: '8px' }}>
          <Type.Body color="neutral3">
            <Trans>Interesting about us? </Trans>
          </Type.Body>
          <Type.Body>
            <Box as={Link} to={ROUTES.CAREER.path} sx={{ fontSize: 'inherit', color: 'primary1' }}>
              <Trans>Let&apos;s apply! →</Trans>
            </Box>
          </Type.Body>
        </Flex>
      </BottomInstructorContainer>
    </PublicTabContentContainer>
  )
}

export default Home4
