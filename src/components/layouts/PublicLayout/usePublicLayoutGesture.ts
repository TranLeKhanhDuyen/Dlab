import { Gesture, Handler } from '@use-gesture/vanilla'
import { useCallback, useEffect, useRef } from 'react'

function usePublicLayoutGesture(
  mainRef: React.MutableRefObject<HTMLDivElement | null>,
  contentRef: React.MutableRefObject<HTMLDivElement | null>,
  goNextHandler: (timeoutRef: React.MutableRefObject<any>) => void,
  goPrevHandler: (timeoutRef: React.MutableRefObject<any>) => void
) {
  const startingAtBoundary = useRef({ top: false, bottom: false })
  const timeoutRef = useRef<any>(null)

  const isReachBounding = (target: { current: HTMLDivElement }) => {
    if (target) {
      const currentTarget = target.current
      const mainBottom = currentTarget.scrollHeight - currentTarget.scrollTop
      const mainTop = currentTarget.scrollTop
      const mainHeight = currentTarget.clientHeight
      const isBottom = Math.ceil(mainBottom) <= mainHeight + 1
      const isTop = mainTop === 0
      return [isBottom, isTop]
    }
    throw new Error('div not available')
  }

  const maximumGestureDuration = 500
  const debounceTime = 300

  const startGestureHandler = useCallback<Handler<'drag' | 'wheel'>>(() => {
    const [isMainBottom, isMainTop] = isReachBounding(mainRef as { current: HTMLDivElement })
    const [isContentBottom, isContentTop] = isReachBounding(contentRef as { current: HTMLDivElement })

    if (isMainBottom && isContentBottom && isMainTop && isContentTop) {
      startingAtBoundary.current = { top: true, bottom: true }
      return
    }
    if (isMainBottom && isContentBottom) {
      startingAtBoundary.current = { top: false, bottom: true }
      return
    }
    if (isMainTop && isContentTop) {
      startingAtBoundary.current = { top: true, bottom: false }
      return
    } else {
      startingAtBoundary.current = { top: false, bottom: false }
      return
    }
  }, [contentRef, mainRef])

  const wheelHandler = useCallback(
    (state) => {
      if (state.ctrlKey) return
      if (timeoutRef.current || state.elapsedTime > maximumGestureDuration) return
      const [isMainBottom, isMainTop] = isReachBounding(mainRef as { current: HTMLDivElement })
      const [isContentBottom, isContentTop] = isReachBounding(contentRef as { current: HTMLDivElement })

      // scroll down
      if (state.direction[1] > 0 && startingAtBoundary.current.bottom) {
        if (isMainBottom && isContentBottom) {
          timeoutRef.current = setTimeout(() => goNextHandler(timeoutRef), debounceTime)
        }
      }

      // scroll up
      if (state.direction[1] < 0 && startingAtBoundary.current.top) {
        if (isMainTop && isContentTop) {
          timeoutRef.current = setTimeout(() => goPrevHandler(timeoutRef), debounceTime)
        }
      }
    },
    [contentRef, mainRef, goPrevHandler, goNextHandler]
  )

  const dragHandler = useCallback(
    (state) => {
      if (state.ctrlKey) return
      if (timeoutRef.current || state.elapsedTime > maximumGestureDuration) return

      const [isMainBottom, isMainTop] = isReachBounding(mainRef as { current: HTMLDivElement })
      const [isContentBottom, isContentTop] = isReachBounding(contentRef as { current: HTMLDivElement })

      // scroll down
      if (state.direction[1] < 0 && startingAtBoundary.current.bottom) {
        if (isMainBottom && isContentBottom) {
          timeoutRef.current = setTimeout(() => goNextHandler(timeoutRef), debounceTime)
        }
      }

      // scroll up
      if (state.direction[1] > 0 && startingAtBoundary.current.top) {
        if (isMainTop && isContentTop) {
          timeoutRef.current = setTimeout(() => goPrevHandler(timeoutRef), debounceTime)
        }
      }
    },
    [contentRef, mainRef, goPrevHandler, goNextHandler]
  )

  useEffect(() => {
    let gesture: Gesture
    if (contentRef.current) {
      gesture = new Gesture(
        contentRef.current,
        {
          onDragStart: startGestureHandler,
          onDragEnd: (state) => {
            dragHandler(state)
          },
          onWheelStart: startGestureHandler,
          onWheelEnd: (state) => {
            wheelHandler(state)
          },
        },
        {
          drag: { pointer: { touch: true } },
        }
      )
    }
    return () => {
      if (gesture) gesture.destroy()
    }
  }, [dragHandler, wheelHandler, startGestureHandler, contentRef])
}

export default usePublicLayoutGesture
