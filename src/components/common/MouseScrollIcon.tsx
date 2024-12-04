import { ReactComponent as ChevronDown } from 'assets/icons/chevron_down.svg'
import { ReactComponent as MouseIcon } from 'assets/icons/mouse.svg'
import useIsMobile from 'hooks/helpers/useIsMobile'
import { Type } from 'theme/base'

function MouseScrollIcon({ direction = 'down' }: { direction?: 'down' | 'up' }) {
  const isMobile = useIsMobile()
  return (
    <>
      {isMobile ? (
        <>
          {direction === 'up' ? (
            <>
              <Type.Body color="neutral3">Swipe Down</Type.Body>
              <ChevronDown />
            </>
          ) : (
            <>
              <Type.Body color="neutral3">Swipe Up</Type.Body>
              <ChevronDown style={{ transform: 'rotateX(180deg)' }} />
            </>
          )}
        </>
      ) : (
        <>
          <MouseIcon />

          {direction === 'up' ? (
            <>
              <Type.Body color="neutral3">Scroll Up</Type.Body>
              <ChevronDown style={{ transform: 'rotateX(180deg)' }} />
            </>
          ) : (
            <>
              <Type.Body color="neutral3">Scroll Down</Type.Body>
              <ChevronDown />
            </>
          )}
        </>
      )}
    </>
  )
}

export default MouseScrollIcon
