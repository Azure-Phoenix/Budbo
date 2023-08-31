import { useEffect } from 'react';
import { useInView } from 'react-hook-inview';

import Notification from '../../components/Notification';

export default function Unique({ setCurrentLink }) {
    const [ref, isVisible] = useInView({
        threshold: 1,
    })
    useEffect(() => {
        if (isVisible) {
            setCurrentLink('advantage')
        }
    }, [isVisible])

    return (
        <div style={{ maxWidth: '860px' }}>
            <Notification
                title='Fortune favors the bold.'
                link='#'
                buttonName='future'
                linkText='Take Control of your Future. Join Budbo'
                transformed
                w80
            />
          
            <p className='text-colored'>
                Its all-encompassing model makes Budbo a best-in-class global platform
                for all things cannabis.
                Powered by blockchain and a worldwide movement towards legalization,
                our business model is virtually endlessly scalable,
                offering <span className="text-body fw-bold"> an unparalleled potential for growth.</span>
            </p>
        </div >
    )
}
