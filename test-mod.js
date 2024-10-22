const facts = [
    {
        id: 1,
        fact: "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible."
    },
    {
        id: 2,
        fact: "Bananas are berries, but strawberries aren’t. Botanically, bananas are classified as berries, whereas strawberries belong to a different group called aggregate fruits."
    },
    {
        id: 3,
        fact: "Octopuses have three hearts. Two pump blood to the gills, while one pumps it to the rest of the body."
    },
    {
        id: 4,
        fact: "The Eiffel Tower can be 15 cm taller during the summer due to the expansion of iron in heat."
    },
    {
        id: 5,
        fact: "Sharks have been around longer than trees. Sharks have existed for about 400 million years, while trees have been around for 350 million years."
    },
    {
        id: 6,
        fact: "Wombat poop is cube-shaped. This unusual shape helps the poop stay in place and not roll away."
    },
    {
        id: 7,
        fact: "A day on Venus is longer than a year. Venus takes about 243 Earth days to rotate once, but only 225 Earth days to orbit the sun."
    },
    {
        id: 8,
        fact: "Butterflies can taste with their feet. This helps them find suitable plants to lay their eggs on."
    },
    {
        id: 9,
        fact: "Humans share 60% of their DNA with bananas. While this doesn’t mean we’re closely related, it shows how much of our genetic makeup is shared across living organisms."
    },
    {
        id: 10,
        fact: "There are more stars in the universe than grains of sand on Earth. Scientists estimate there are about 10 times more stars in the observable universe than all the grains of sand on Earth's beaches."
    },
    {
        id: 11,
        fact: "Cats can't taste sweetness. They lack taste receptors for sweet flavors, making them indifferent to sugary treats."
    },
    {
        id: 12,
        fact: "Tigers have striped skin, not just striped fur. The pattern is unique to each tiger, like human fingerprints."
    },
    {
        id: 13,
        fact: "Humans have the same number of hair follicles as chimpanzees, but our body hair is much finer."
    },
    {
        id: 14,
        fact: "You can hear a blue whale's heartbeat from over 2 miles away. Their hearts can weigh nearly 400 pounds!"
    },
    {
        id: 15,
        fact: "The Empire State Building has its own zip code. Its zip code is 10118."
    },
    {
        id: 16,
        fact: "Avocados are poisonous to birds. They contain a toxin called persin, which can be fatal to many birds."
    },
    {
        id: 17,
        fact: "Water makes up about 60% of the human body. This percentage can vary slightly depending on age, sex, and fitness level."
    },
    {
        id: 18,
        fact: "Sloths can take up to a month to digest a single meal. Their slow metabolism helps them conserve energy."
    },
    {
        id: 19,
        fact: "Humans are the only animals that blush. It's thought to be a social reaction that signals remorse or embarrassment."
    },
    {
        id: 20,
        fact: "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid of Giza."
    },
    {
        id: 21,
        fact: "The shortest war in history lasted just 38 to 45 minutes. It was between Britain and Zanzibar in 1896."
    },
    {
        id: 22,
        fact: "Koalas sleep up to 22 hours a day due to their low-energy diet of eucalyptus leaves."
    },
    {
        id: 23,
        fact: "Cows have best friends and can become stressed when they are separated."
    },
    {
        id: 24,
        fact: "A group of flamingos is called a 'flamboyance.'"
    },
    {
        id: 25,
        fact: "Octopuses can escape through any hole larger than their beak. They are incredibly flexible, making them great escape artists."
    },
    {
        id: 26,
        fact: "In Switzerland, it is illegal to own just one guinea pig because they are social animals that need companionship."
    },
    {
        id: 27,
        fact: "Humans blink around 15-20 times per minute, but during focused tasks, like reading, we blink less."
    },
    {
        id: 28,
        fact: "A bolt of lightning contains enough energy to toast 100,000 slices of bread."
    },
    {
        id: 29,
        fact: "Polar bears have black skin underneath their white fur, which helps them absorb heat from the sun."
    },
    {
        id: 30,
        fact: "Caterpillars have 12 eyes, but they don't see very well. Their eyes help them detect light and darkness."
    },
    {
        id: 31,
        fact: "The moon is moving away from Earth at a rate of about 1.5 inches (3.8 cm) per year."
    },
    {
        id: 32,
        fact: "Bees can recognize human faces. They use a process called 'configural processing' similar to how humans recognize faces."
    },
    {
        id: 33,
        fact: "Ostriches can run faster than horses, reaching speeds of up to 45 mph (72 km/h)."
    },
    {
        id: 34,
        fact: "The national animal of Scotland is the unicorn. It has been a symbol of purity, innocence, and power in Scottish history."
    },
    {
        id: 35,
        fact: "The longest hiccuping spree lasted 68 years. Charles Osborne started hiccuping in 1922 and continued until 1990."
    },
    {
        id: 36,
        fact: "Elephants are the only mammals that can't jump."
    },
    {
        id: 37,
        fact: "Dolphins have names for each other. They use unique whistles to identify and call out to each other."
    },
    {
        id: 38,
        fact: "Ants can lift objects 50 times their body weight. They are incredibly strong for their size."
    },
    {
        id: 39,
        fact: "The wood frog can hold its pee for up to eight months. This helps it survive long winters by recycling urea."
    },
    {
        id: 40,
        fact: "Jellyfish are about 95% water. Their bodies contain only a small amount of solid material."
    },
    {
        id: 41,
        fact: "The average cloud weighs about 1.1 million pounds. Despite their fluffy appearance, clouds are made of heavy water vapor."
    },
    {
        id: 42,
        fact: "A human sneeze can travel up to 100 miles per hour and produce up to 40,000 droplets."
    },
    {
        id: 43,
        fact: "Dragonflies can see in all directions at once. Their compound eyes give them nearly 360-degree vision."
    },
    {
        id: 44,
        fact: "The longest recorded flight of a chicken is 13 seconds."
    },
    {
        id: 45,
        fact: "In Japan, letting a sumo wrestler make your baby cry is considered good luck."
    },
    {
        id: 46,
        fact: "Some turtles can breathe through their butts. This unusual process is called cloacal respiration."
    },
    {
        id: 47,
        fact: "Penguins can leap up to 6 feet in the air out of the water."
    },
    {
        id: 48,
        fact: "A crocodile cannot stick its tongue out."
    },
    {
        id: 49,
        fact: "Rats laugh when tickled. Their high-pitched chirps are signs of enjoyment."
    },
    {
        id: 50,
        fact: "The Mantis Shrimp has the fastest punch in the animal kingdom, striking at speeds of 50 mph."
    }
];

module.exports = facts;
