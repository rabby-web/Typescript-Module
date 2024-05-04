{
    //  generic interface 
    interface Developer <T,X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        };
        smartWatch: T;
        bike? : X;
    }

    type IntelWatch = {
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper : Developer<IntelWatch, null> ={
        name: "ZNR",
        computer: {
            brand: "Intel",
            model: "I9 14th Jen",
            releaseYear: 2024,
        },
        smartWatch: {
            brand: "Casino",
            model: "32-M",
            display: "LED"
        }
    }
    interface AppleWatch {
        brand: string;
            model: string;
            heartTrack: boolean;
            sleepTrack: boolean;
    }
    interface YamahaBike {
            model: string
            eCC: string
    }
    const richDeveloper : Developer<AppleWatch, YamahaBike> ={
        name: "SIU",
        computer: {
            brand: "Intel",
            model: "I5 8th Jen",
            releaseYear: 2024,
        },
        smartWatch: {
            brand: "Apple",
            model: "32-M",
            heartTrack: true,
            sleepTrack: false
        },
        bike: {
            model: 'Yamaha',
            eCC: "100cc"
        }
    }




















    //
}