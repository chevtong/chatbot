//import { CVcomponent } from "./CustomComponent/CVcomponent";
import Jokecomponent from "./CustomComponent/Jokecomponent"

export const steps = [
    {
        id: '1',
        message: 'Hi, how can I help you? You can pick one of the popular options below',
        trigger: '2',
    },
    {
        id: '2',
        options: [
            { value: 1, label: 'Tell me a joke', trigger: '3' },
            { value: 2, label: 'Get to know me', trigger: '4' },
            { value: 3, label: 'Dinner ideas', trigger: '4' },
        ],
        
    },
    {
        id: '3',
  
        component: <Jokecomponent />,
       
        trigger: '4' ,
    },
    {
        id: '4',
        message: 'Want something else?',
        trigger: '5',
       
    },
    {
        id: '5', 
        user: true, 
    },
];