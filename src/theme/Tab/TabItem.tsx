import css, { SystemStyleObject } from '@styled-system/css'
import styled from 'styled-components/macro'

import Button from 'theme/Button'

type SubNavItemProps = {
  active?: boolean
  additionalStyles?: SystemStyleObject
}

const SubNavItem = styled(Button)(({ active, additionalStyles }: SubNavItemProps) =>
  css({
    border: 'none',
    px: '16px',
    py: '6px',
    bg: active ? 'neutral1' : 'transparent',
    color: active ? 'neutral8' : 'neutral4',
    '&:hover,&:focus,&:active': {
      color: active ? 'neutral8' : 'neutral1',
    },
    borderRadius: '8px',
    ...additionalStyles,
  })
)

export default SubNavItem
