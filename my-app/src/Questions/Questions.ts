import Control from '../Assets/icons/cogwheel_1527330 1.svg';
import Health from '../Assets/icons/Frame 1321318622.svg';
import Relationships from '../Assets/icons/friendly_7959357 2.svg';
import Money from '../Assets/icons/g381.svg';
import Performance from '../Assets/icons/performance_12521295 1.svg';
import Role from '../Assets/icons/comic_11944501 1.svg';
import Stress from '../Assets/icons/storm_6455019 3.svg'
import Social from '../Assets/icons/chat_18966109 3.svg';
import Relax from '../Assets/icons/Group.svg'
import Emotional from '../Assets/icons/mood_17989552 3.svg';
import Habit from '../Assets/icons/checklist_4301650 3.svg';
import Boost from '../Assets/icons/business_9852276 3.svg';
import Yes from '../Assets/icons/Yes.svg';
import No from '../Assets/icons/No.svg';
import Unsure from '../Assets/icons/notsure.svg';

export const questions = [
    {
        id: 1,
        question: "What is your main reason for wanting to quit drinking?",
        answer: [
            { text: "Health", icon: Health },
            { text: "Relationships", icon: Relationships }, 
            { text: "Control", icon: Control }, 
            { text: "Money", icon: Money }, 
            { text: "Performance", icon: Performance },
            { text: "Role model", icon: Role },
        ]
    },
    {
        id: 2,
        question: "What do you think is the main reason you drink?",
        answer: [
            { text: "Stress or anxiety", icon: Stress },
            { text: "Socializing", icon: Social },
            { text: "Relaxation", icon: Relax }, 
            { text: "Emotional space", icon: Emotional },
            { text: "Habit", icon: Habit }, 
            { text: "Confidence boost", icon: Boost},
        ]
    },
    {
        id: 3,
        question: 'Do you ever drink to feel "normal" or fit in with others?',
        answer: [
            {text: "Yes", icon: Yes},
            {text: "I'm not sure", icon: No},
            {text: "No", icon: Unsure},  
        ]
    },
    {
        id: 4,
        question: "Do you sometimes feel like you're missing out if you don't participate in group activities or social events?",
        answer: [
            {text: "Yes", icon: Yes},
            {text: "I'm not sure", icon: No},
            {text: "No", icon: Unsure},  
        ]
    },
    {
        id: 5,
        question: "Do you often find yourself wanting to escape from your daily responsibilities or pressures?",
        answer: [
            {text: "Yes", icon: Yes},
            {text: "I'm not sure", icon: No},
            {text: "No", icon: Unsure},  
        ]
    },
    {
        id: 6,
        question: "Do you often seek ways to relax or unwind after a long, stressful day?",
        answer: [
            {text: "Yes", icon: Yes},
            {text: "I'm not sure", icon: No},
            {text: "No", icon: Unsure},  
        ]
    },
];
