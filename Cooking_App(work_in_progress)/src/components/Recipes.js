import carbonaraPhoto from "./assets/images/carbonara.jpg";
import saladPhoto from "./assets/images/salad.jpg";
import alfredoPhoto from "./assets/images/alfredo.jpg";
import beefStewPhoto from "./assets/images/beefstew.jpg";
import scampiPhoto from "./assets/images/shrimp.jpg";
import greekSaladPhoto from "./assets/images/greek.jpg";
import risottoPhoto from "./assets/images/shrooms.jpg";
import tacoSaladPhoto from "./assets/images/tacosald.jpg";
import tomatoSoupPhoto from "./assets/images/tomatosoup.jpg";
import beefBroccoliPhoto from "./assets/images/beefandbroc.jpg";
import veggieLasagnaPhoto from "./assets/images/lasagna.jpg";
import curryPhoto from "./assets/images/curry.jpg";
import roastedVeggieSaladPhoto from "./assets/images/roastedvegsald.jpg";
import pestoPastaPhoto from "./assets/images/pesto.jpg";
import grilleSalmon from "./assets/images/salmon.jpg";

const recipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    photo: carbonaraPhoto,
    ingredients: [
      "1 lb spaghetti",
      "4 oz pancetta, diced",
      "3 cloves garlic, minced",
      "3 eggs",
      "1/2 cup grated parmesan cheese",
      "Salt and pepper to taste",
    ],
    duration: 20,
    isHealthy: false,
  },
  {
    id: 2,
    name: "Green Salad",
    photo: saladPhoto,
    ingredients: [
      "Mixed greens",
      "Cherry tomatoes",
      "Cucumber",
      "Carrots",
      "Red onion",
      "Lemon vinaigrette",
    ],
    duration: 10,
    isHealthy: false,
  },

  {
    id: 3,
    name: "Chicken Alfredo",
    photo: alfredoPhoto,
    ingredients: [
      "1 lb fettuccine",
      "2 tbsp butter",
      "2 cloves garlic, minced",
      "1 lb boneless, skinless chicken breast, cut into bite-sized pieces",
      "2 cups heavy cream",
      "1 cup grated parmesan cheese",
      "Salt and pepper to taste",
    ],
    duration: 30,
    isHealthy: false,
  },
  {
    id: 4,
    name: "Beef Stew",
    photo: beefStewPhoto,
    ingredients: [
      "2 lbs stewing beef, cut into bite-sized pieces",
      "2 tbsp vegetable oil",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "4 cups beef broth",
      "2 cups diced carrots",
      "2 cups diced potatoes",
      "1 cup frozen peas",
      "Salt and pepper to taste",
    ],
    duration: 120,
    isHealthy: false,
  },

  {
    id: 5,
    name: "Shrimp Scampi",
    photo: scampiPhoto,
    ingredients: [
      "1 lb linguine",
      "4 tbsp butter",
      "4 cloves garlic, minced",
      "1 lb large shrimp, peeled and deveined",
      "1/4 cup white wine",
      "1/4 cup chopped parsley",
      "Salt and pepper to taste",
    ],
    duration: 20,
    isHealthy: false,
  },

  {
    id: 6,
    name: "Greek Salad",
    photo: greekSaladPhoto,
    ingredients: [
      "4 cups chopped romaine lettuce",
      "1 cucumber, diced",
      "1 tomato, diced",
      "1/2 red onion, thinly sliced",
      "1/2 cup crumbled feta cheese",
      "1/4 cup sliced kalamata olives",
      "1/4 cup olive oil",
      "2 tbsp red wine vinegar",
      "Salt and pepper to taste",
    ],
    duration: 10,
    isHealthy: true,
  },

  {
    id: 7,
    name: "Mushroom Risotto",
    photo: risottoPhoto,
    ingredients: [
      "6 cups chicken or vegetable broth",
      "2 tbsp olive oil",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "2 cups Arborio rice",
      "1 cup dry white wine",
      "2 cups sliced mushrooms",
      "1/2 cup grated parmesan cheese",
      "Salt and pepper to taste",
    ],
    duration: 45,
    isHealthy: false,
  },

  {
    id: 8,
    name: "Taco Salad",
    photo: tacoSaladPhoto,
    ingredients: [
      "4 cups chopped romaine lettuce",
      "1 lb ground beef",
      "1 packet taco seasoning",
      "1 can black beans, drained and rinsed",
      "1 tomato, diced",
      "1/2 red onion, diced",
      "1/2 cup shredded cheddar cheese",
      "1/4 cup sour cream",
      "Salt and pepper to taste",
    ],
    duration: 25,
    isHealthy: false,
  },

  {
    id: 9,
    name: "Tomato Basil Soup",
    photo: tomatoSoupPhoto,
    ingredients: [
      "2 tbsp olive oil",
      "1 onion, chopped",
      "4 cloves garlic, minced",
      "4 cups canned whole tomatoes",
      "4 cups chicken or vegetable broth",
      "1/2 cup chopped fresh basil",
      "Salt and pepper to taste",
    ],
    duration: 30,
    isHealthy: true,
  },

  {
    id: 10,
    name: "Beef and Broccoli Stir-Fry",
    photo: beefBroccoliPhoto,
    ingredients: [
      "1 lb flank steak, sliced thinly against the grain",
      "1/4 cup soy sauce",
      "2 tbsp cornstarch",
      "2 tbsp vegetable oil",
      "4 cups broccoli florets",
      "4 cloves garlic, minced",
      "1 tbsp grated fresh ginger",
      "2 tbsp oyster sauce",
      "Salt and pepper to taste",
    ],
    duration: 25,
    isHealthy: false,
  },

  {
    id: 11,
    name: "Vegetable Lasagna",
    photo: veggieLasagnaPhoto,
    ingredients: [
      "12 lasagna noodles",
      "1 tbsp olive oil",
      "2 cloves garlic, minced",
      "2 cups sliced mushrooms",
      "2 cups chopped zucchini",
      "2 cups chopped spinach",
      "2 cups ricotta cheese",
      "2 cups shredded mozzarella cheese",
      "Salt and pepper to taste",
    ],
    duration: 60,
    isHealthy: false,
  },

  {
    id: 12,
    name: "Chicken Curry",
    photo: curryPhoto,
    ingredients: [
      "2 tbsp vegetable oil",
      "1 onion, chopped",
      "4 cloves garlic, minced",
      "2 tbsp grated fresh ginger",
      "1 lb boneless, skinless chicken breast, cut into bite-sized pieces",
      "2 tbsp curry powder",
      "1 can coconut milk",
      "2 cups chopped vegetables",
      "Salt and pepper to taste",
    ],
    duration: 45,
    isHealthy: true,
  },

  {
    id: 13,
    name: "Roasted Vegetable Salad",
    photo: roastedVeggieSaladPhoto,
    ingredients: [
      "4 cups mixed greens",
      "2 cups roasted vegetables (such as carrots, beets, and sweet potatoes)",
      "1/2 cup crumbled goat cheese",
      "1/4 cup toasted pine nuts",
      "2 tbsp balsamic vinegar",
      "2 tbsp olive oil",
      "Salt and pepper to taste",
    ],
    duration: 30,
    isHealthy: true,
  },

  {
    id: 14,
    name: "Pesto Pasta",
    photo: pestoPastaPhoto,
    ingredients: [
      "1 lb spaghetti",
      "2 cups fresh basil leaves",
      "1/2 cup grated parmesan cheese",
      "1/2 cup olive oil",
      "1/4 cup pine nuts",
      "3 cloves garlic, minced",
      "Salt and pepper to taste",
    ],
    duration: 25,
    isHealthy: false,
  },
  {
    id: 15,
    name: "Salmon with Asparagus",
    photo: grilleSalmon,
    ingredients: [
      "4 salmon fillets",
      "1 pound asparagus, trimmed",
      "2 cloves garlic, minced",
      "2 tablespoons olive oil",
      "1 tablespoon lemon juice",
      "Salt and pepper to taste",
    ],
    duration: 30,
    isHealthy: false,
  },
  

  // add more recipes here
];

export default recipes;
