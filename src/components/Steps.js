//import { CVcomponent } from "./CustomComponent/CVcomponent";
import Jokecomponent from "./CustomComponent/Jokecomponent"
import RestaurantComponent from "./CustomComponent/RestaurantComponent";


export const steps = [
    {
        id: '1',
        message: 'Hi, how can I help you? You can pick one of the popular options below',
        trigger: '2',
    },
    {
        id: '2',
        options: [
            { value: 1, label: 'Tell me a joke', trigger: 'jokeStep' },
            { value: 2, label: 'Get to know me', trigger: 'nextStep' },
            { value: 3, label: 'Restaurant nearby', trigger: 'restaurantStep' },
        ],

    },
    {
        id: 'jokeStep',

        component: <Jokecomponent />,

        trigger: 'nextStep',
    },
    {
        id: 'nextStep',
        message: 'Want something else?',
        trigger: '5',

    },
    {
        id: '5',
        user: true,
        validator: (answer) => {
            if (answer.includes("restaurant")) {
                return true;
            } else {
                return 'How are search for a restaurant nearby you?';
            }
        },
        trigger: 'restaurantStep',
    },
    {
        id: 'restaurantStep',
        component: <RestaurantComponent />,

    }
];