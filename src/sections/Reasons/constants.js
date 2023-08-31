import image1 from '../../assets/images/reason1-img.png';
import image2 from '../../assets/images/reason1-img2.jpg';
import image3 from '../../assets/images/reason1-img3.png';

export const reason1Content = [
    {
        title: 'App',
        background: '#F1EAFE',
        textColor: '#6E2DFA',
        text: 'is the flagship product that allows consumers to efficiently find and order their cannabis ' +
            'products in a familiar and gamified manner, through a modern and user-friendly interface. ',
        image: image1,
    },
    {
        title: 'Connect',
        background: '#fff5eb',
        textColor: '#ff9644',
        text: 'is a retailer dashboard providing growers and vendors with business intelligence, allowing for ' +
            'proactive decision- making. Key analytics empower dispensaries to sell more products with ' +
            'minimal investment.',
        image: image2,
    },
    {
        title: 'Trax',
        background: '#EAF9FF',
        textColor: '#30c6ff',
        text: 'is a powerful GPS logistics solution built to monitor, in real time, the entire' +
            ' cannabis supply chain, focusing on chain of custody of the plant. ',
        image: image3,
    }
]

export const mockMentorAwards = [
    'Dr. Uma Dhanabalan is a highly respected and educated physician',
    'Bachelor of Arts degree with Honors from Rutgers University',
    'Medical Degree from the University of Medicine & Dentistry in Newark, New Jersey.',
    'Family Practice Residency at the Medical University of South Carolina, in Charleston, South Carolina.',
    'Master’s in Public Health and completed her Occupational & Environmental Medicine Residency and Fellowship' +
    'in Heavy Metals at the Harvard School of Public Health in Boston, Massachusetts'
]

export const mockStephenCFO = [
    {
        text: <p className='position-relative mb-3 text-colored'>
            Stephen is a very accomplished financial and operational executive.</p>,
    },
    {
        text:
            <p className='position-relative mb-3 text-colored'>
                Took his own high tech company public and raised over <span className='text-body'>$10 million privately
                    and $41 million through a public offering</span>{' '}
                at a time when the valuation of his company was $1.8 billion.</p>,
    },
    {
        text:
            <p className='position-relative mb-3 text-colored'>
                Has extensive <span className='text-body'>M&A experience </span>
                and has been instrumental in the acquisition and integration of companies for his own high tech
                company, as well as other companies that he served as CFO.
            </p>
    }
]
