import { useRef, useEffect, useState } from 'react'

export const useEffectOnce = (effect: () => void | (() => void)) => {
    const destroyFunc = useRef<void | (() => void)>()
    const effectCalled = useRef(false)
    const renderAfterCalled = useRef(false)

    const [val, setVal] = useState(0)

    if (effectCalled.current) {
        renderAfterCalled.current = true
    }

    useEffect(() => {
        if (!effectCalled.current) {
            destroyFunc.current = effect()
            effectCalled.current = true
        }
        setVal((v) => v + 1)

        return () => {
            if (!renderAfterCalled.current) {
                return
            }
            if (destroyFunc.current) {
                destroyFunc.current()
            }
        }
    }, [])
}
