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
import WhiteYes from '../Assets/icons/yes.svg';
import WhiteNo from '../Assets/icons/no.svg';
import WhiteUnsure from '../Assets/icons/unsure.svg';
import WhiteControl from '../Assets/icons/white-cogwheel_1527330 2.svg'
import WhiteHealth from '../Assets/icons/white-Frame 1321318623.svg';
import WhiteRelationships from '../Assets/icons/white-friendly_7959357 3.svg';
import WhiteMoney from '../Assets/icons/white-g381.svg';
import WhitePerformance from '../Assets/icons/white-performance_12521295 2.svg';
import WhiteRole from '../Assets/icons/white-comic_11944501 2.svg';
import WhiteStress from '../Assets/icons/white-storm_6455019 4.svg';
import WhiteSocial from '../Assets/icons/white-chat_18966109 4.svg';
import WhiteRelax from '../Assets/icons/white-Group.svg';
import WhiteEmotional from '../Assets/icons/white-mood_17989552 4.svg';
import WhiteHabit from '../Assets/icons/white-checklist_4301650 4.svg';
import WhiteBoost from '../Assets/icons/white-business_9852276 4.svg';
import Yes from '../Assets/icons/yes-green.svg';
import No from '../Assets/icons/No-red.svg';
import Unsure from '../Assets/icons/yellow 1321318219.svg';

export const questions = [
    {
        type: 'multi',
        question: "What is your main reason for wanting to quit drinking?",
        answer: [
            { text: "Health", icon: Health, WhiteIcon: WhiteHealth },
            { text: "Relationships", icon: Relationships, WhiteIcon: WhiteRelationships }, 
            { text: "Control", icon: Control, WhiteIcon: WhiteControl }, 
            { text: "Money", icon: Money, WhiteIcon: WhiteMoney }, 
            { text: "Performance", icon: Performance, WhiteIcon: WhitePerformance },
            { text: "Role model", icon: Role, WhiteIcon: WhiteRole },
        ]
    },
    {
        type: 'multi',
        question: "What do you think is the main reason you drink?",
        answer: [
            { text: "Stress or anxiety", icon: Stress, WhiteIcon: WhiteStress },
            { text: "Socializing", icon: Social, WhiteIcon: WhiteSocial },
            { text: "Relaxation", icon: Relax, WhiteIcon: WhiteRelax }, 
            { text: "Emotional space", icon: Emotional, WhiteIcon: WhiteEmotional },
            { text: "Habit", icon: Habit, WhiteIcon: WhiteHabit }, 
            { text: "Confidence boost", icon: Boost, WhiteIcon: WhiteBoost},
        ]
    },
    {
        type: 'solo',
        question: 'Do you ever drink to feel "normal" or fit in with others?',
        answer: [
            {text: "Yes", icon: Yes, WhiteIcon: WhiteYes},
            {text: "I'm not sure", icon: Unsure, WhiteIcon: WhiteUnsure},
            {text: "No", icon: No, WhiteIcon: WhiteNo},  
        ]
    },
    {
        type: 'solo',
        question: "Do you sometimes feel like you're missing out if you don't participate in group activities or social events?",
        answer: [
            {text: "Yes", icon: Yes, WhiteIcon: WhiteYes},
            {text: "I'm not sure", icon: Unsure, WhiteIcon: WhiteUnsure},
            {text: "No", icon: No, WhiteIcon: WhiteNo},  
        ]
    },
    {
        type: 'solo',
        question: "Do you often find yourself wanting to escape from your daily responsibilities or pressures?",
        answer: [
            {text: "Yes", icon: Yes, WhiteIcon: WhiteYes},
            {text: "I'm not sure", icon: Unsure, WhiteIcon: WhiteUnsure},
            {text: "No", icon: No, WhiteIcon: WhiteNo},  
        ]
    },
    {
        type: 'solo',
        question: "Do you often seek ways to relax or unwind after a long, stressful day?",
        answer: [
            {text: "Yes", icon: Yes, WhiteIcon: WhiteYes},
            {text: "I'm not sure", icon: Unsure, WhiteIcon: WhiteUnsure},
            {text: "No", icon: No, WhiteIcon: WhiteNo},  
        ]
    },
];
