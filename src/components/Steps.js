import { CVcomponent } from "./CustomComponent/CVcomponent";

export const steps = [
    {
        id: '1',
        message: 'Hi, how can I help you?',
        trigger: '2',
    },
    {
        id: '2',
        options: [
            { value: 1, label: 'Tell me a joke', trigger: '4' },
            { value: 2, label: 'Get to know me', trigger: '3' },
            { value: 3, label: 'Dinner ideas', trigger: '3' },
        ],
        
    },
    {

        id: '3',
  
        message: 'What do you think',
        user: true,
        // trigger: ,
    },
    {
        id: '4',
        
        component: <CVcomponent />,
        trigger: '2',
    },
];