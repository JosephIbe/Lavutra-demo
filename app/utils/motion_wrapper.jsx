'use client'

import { MotionConfig } from 'framer-motion'

export default function MotionWrapper({children}) {
    return(
        <MotionConfig reducedMotion="user">
            {children}
        </MotionConfig>    
    )
}