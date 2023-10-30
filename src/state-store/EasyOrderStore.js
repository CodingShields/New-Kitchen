import { create } from 'zustand';

const initializeState = {
    Event: "",
    Culture: "",
    HeadCount: "",
    Courses: "",
    Dietary: "",
    Balance: "",
    HowToFlavor: "",    
    CookTime: "",
    HowToCook: "",
    Measure:"",
    Dessert: "",
    Seasonal: "",
    Beverage: "",
    BotResponse: "",
};

export const useEasyOrderStore = create((set, get) => ({
    ...initializeState,
    actions: {
        getEasyOrderStore: () => {
            const state = get()
            return{
                Event: state.Event,
                Culture: state.Culture,
                HeadCount: state.HeadCount,
                Courses: state.Courses,
                Dietary: state.Dietary,
                Balance: state.Balance,
                HowToFlavor: state.HowToFlavor,
                CookTime: state.CookTime,
                HowToCook: state.HowToCook,
                Measure:state.Measure,
                Dessert: state.Dessert,
                Seasonal: state.Seasonal,
                Beverage: state.Beverage,
            };
        },
        resetForm: () => set(initializeState),
        setEvent: (str) => set({ Event: str }),
        setCulture: (str) => set({ Culture: str }),
        setHeadCount: (str) => set({ HeadCount: str }),
        setCourses: (str) => set({ Courses: str }),
        setDietary: (str) => set({ Dietary: str }),
        setHowToFlavor: (str) => set({ HowToFlavor: str }),
        setBalance: (str) => set({ Balance: str }),
        setCookTime: (str) => set({ CookTime: str }),
        setHowToCook: (str) => set({ HowToCook: str }),
        setMeasure: (str) => set({ Measure: str }),
        setDessert: (str) => set({ Dessert: str }),
        setSeasonal: (str) => set({ Seasonal: str }),
        setBeverage: (str) => set({ Beverage: str }),
        setBotResponse: (str) => set({ BotResponse: str }),
    },
}));

export const useEasyOrderStoreActions = () => useEasyOrderStore((state) => state.actions);
