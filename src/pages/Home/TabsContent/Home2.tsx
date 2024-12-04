import { Trans } from '@lingui/macro'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import copin_logo from 'assets/images/copin_logo.png'
import daudit from 'assets/images/daudit-logo.svg'
import home_product_2 from 'assets/images/home_product_2.png'
import truedrop from 'assets/images/truedrop-logo.png'
import trustgem from 'assets/images/trustgem-logo.png'
import { BodyTextWithTitle } from 'components/common/BodyText'
import LargeHeading from 'components/common/LargeHeading'
import { ListBodyTextWithTitle } from 'components/common/ListBodyText'
import PublicTabContentContainer from 'components/common/PublicTabContentContainer'
import Spacer from 'components/common/Spacer'
import { Box, Grid, Image, Type } from 'theme/base'
import ROUTES from 'utils/routes'

const ProductItemWrapper = styled(Box)`
  position: relative;
`
const ProductWrapper = styled(Grid)`
  width: 100%;
  margin-bottom: 48px;
  & ${ProductItemWrapper} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 32px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.neutral5};
  }
  & ${ProductItemWrapper}:nth-child(odd) {
    padding-left: 0;
    border-right: 2px solid ${({ theme }) => theme.colors.neutral5};
  }
  & ${ProductItemWrapper}:nth-child(even) {
    padding-right: 0;
  }
  & ${ProductItemWrapper}:is(:nth-child(1), :nth-child(2)) {
    padding-top: 0;
    border-right: none;
  }
  & ${ProductItemWrapper}:is(:nth-last-child(1), :nth-last-child(2)) {
    padding-bottom: 0;
    border-bottom: none;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    & ${ProductItemWrapper} {
      width: 100%;
      padding-left: 0;
      padding-right: 0;
    }
    & ${ProductItemWrapper}:nth-child(2) {
      display: none;
    }
    & ${ProductItemWrapper}:nth-child(odd) {
      padding-left: 0;
      border-right: none;
    }
    ${ProductItemWrapper}:nth-last-child(2) {
      padding-bottom: 32px;
      border-bottom: 2px solid ${({ theme }) => theme.colors.neutral5};
    }
    & ${ProductItemWrapper}:last-child {
      margin-bottom: 64px;
    }
  }
`
function Home2() {
  return (
    <PublicTabContentContainer>
      <LargeHeading hasUnderline>
        <Trans>Our Projects</Trans>
      </LargeHeading>
      <Spacer mb="56px" />
      <ProductWrapper gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr']}>
        <ProductItemWrapper>
          <Box mb={24}>
            <ListBodyTextWithTitle
              heading={
                <a href="https://copin.io/" target="_blank" rel="noreferrer" className="underline">
                  <Type.H4>Copin</Type.H4>
                </a>
              }
              listText={[
                'Data analytics infrastructure for perpetual DEXs',
                'Explore, analyze, and copy-trade top DEXs',
                'Designed for the mass adoption of the perpetual DEX narrative',
              ]}
            />
          </Box>
          <div>
            <Image src={copin_logo} />
          </div>
        </ProductItemWrapper>
        <ProductItemWrapper></ProductItemWrapper>
        <ProductItemWrapper>
          <Box mb={24}>
            <ListBodyTextWithTitle
              heading={
                <a href="https://mintty.com/" target="_blank" rel="noreferrer" className="underline">
                  <Type.H4>Mintty</Type.H4>
                </a>
              }
              listText={[
                'An NFT marketplace for Vietnamese',
                'Hybrid transactions, payment by fiat',
                'Automated all blockchain processes',
              ]}
            />
          </Box>
          <div>
            <Image src={home_product_2} />
          </div>
        </ProductItemWrapper>
        <ProductItemWrapper>
          <Box mb={24}>
            <ListBodyTextWithTitle
              heading={
                <a href="https://daudit.org/" target="_blank" rel="noreferrer" className="underline">
                  <Type.H4>DAudit</Type.H4>
                </a>
              }
              listText={[
                'DAudit specializes in Blockchain technology solutions, audits, CAS / KYC / KYB services, and Dapp Security across all chains.',
              ]}
            />
          </Box>
          <div>
            <Image height={48} src={daudit} />
          </div>
        </ProductItemWrapper>
        <ProductItemWrapper>
          <Box mb={24}>
            <ListBodyTextWithTitle
              heading={
                <a href="https://trustgem.io/" target="_blank" rel="noreferrer" className="underline">
                  <Type.H4>Trustgem</Type.H4>
                </a>
              }
              listText={[
                'The Leading Web3 Community of Transparent Reviews',
                'Reviewers donation by cryptos',
                'Auto-sync token & liquidity information',
              ]}
            />
          </Box>
          <div>
            <Image height={48} src={trustgem} />
          </div>
        </ProductItemWrapper>
        <ProductItemWrapper>
          <Box mb={24}>
            <ListBodyTextWithTitle
              heading={
                <a href="https://truedrop.io/" target="_blank" rel="noreferrer" className="underline">
                  <Type.H4>TrueDrop</Type.H4>
                </a>
              }
              listText={[
                'The fully on-chain NFT Launchpad for everyone',
                'Self-deploying NFT & Drop by contract factory',
                'EVM Multichain',
              ]}
            />
          </Box>
          <div>
            <Image height={48} src={truedrop} />
          </div>
        </ProductItemWrapper>
      </ProductWrapper>
      <ProductItemWrapper sx={{ borderTop: 'normal', borderColor: 'neutral5' }} py={24}>
        <Box mb={24}>
          <BodyTextWithTitle heading="Brings ideas to life together?" body="Feel free to contact us!" />
        </Box>
        <Type.Body>
          <Box
            as={Link}
            to={ROUTES.CONTACT.path}
            sx={{ fontSize: 'inherit', textDecoration: 'underline', color: 'neutral2' }}
          >
            <Trans>Get in touch</Trans> →
          </Box>
        </Type.Body>
      </ProductItemWrapper>
    </PublicTabContentContainer>
  )
}

export default Home2
