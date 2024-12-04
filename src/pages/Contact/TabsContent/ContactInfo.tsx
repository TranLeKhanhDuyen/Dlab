import { Trans } from '@lingui/macro'
import { HiOutlineMail } from 'react-icons/hi'
import { TbBrandTelegram } from 'react-icons/tb'

import TextWithLink from 'components/common/TextWithLink'
import { Box, Flex, Type } from 'theme/base'

function ContactInfo() {
  return (
    <>
      <Flex mb={[2, 0]} alignItems={['flex-start', 'center']} flexDirection={['column', 'row']}>
        <Box width={250} sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <HiOutlineMail />
          <Type.Body>
            <Trans>Contact Us Via Email:</Trans>
          </Type.Body>
        </Box>
        <TextWithLink color="primary1" href="mailto:hi@decentralab.asia" style={{ paddingLeft: '32px' }}>
          hi@decentralab.asia
        </TextWithLink>
      </Flex>
      <Flex alignItems={['flex-start', 'start']} flexDirection={['column', 'row']} mt={16}>
        <Box width={250} sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <TbBrandTelegram />
          <Type.Body>
            <Trans>Our Socials:</Trans>
          </Type.Body>
        </Box>
        <Box pl={32}>
          <TextWithLink
            color="primary1"
            href="https://www.linkedin.com/company/decentralab-pte-ltd/"
            style={{ display: 'block' }}
            target="_blank"
          >
            Linkedin
          </TextWithLink>
          <TextWithLink
            color="primary1"
            href="https://www.facebook.com/Decentralab"
            style={{ display: 'block', paddingTop: '8px' }}
            target="_blank"
          >
            Facebook
          </TextWithLink>
        </Box>
      </Flex>
    </>
  )
}

export default ContactInfo
