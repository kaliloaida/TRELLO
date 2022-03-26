import * as React from 'react'
import { UNSAFE_NavigationContext } from 'react-router-dom'
export function useBlocker (navigationBlockerHandler, canShowDialogPrompt){
    const navigator = React.useContext(UNSAFE_NavigationContext).navigator
    React.useEffect(()=>{
        if (!canShowDialogPrompt){
            return
        }
        const unblock = navigator.block((el)=>{
            const autoUnblocking={
                ...el,
                retry(){
                    unblock()
                    el.retry()
                }
            }
            navigationBlockerHandler(autoUnblocking)
        })
         return unblock
    })
}