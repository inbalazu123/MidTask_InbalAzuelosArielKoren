
const jsonData = 
   {
    "generators": [
        {
            "id": 1,
            "title": "ציוד למעקב עיניים",
"pic":"image/eyeOne.svg"
,
            "abstract": "המעבדה צריכה להיות מצוידת במצלמות",
            "fullContent": " המעבדה צריכה להיות מצוידת במצלמות ברזולוציה גבוהה וחיישנים אינפרא אדום או אולטרה-אדום שיכולים לזהות תנועות עיניים בדיוק גבוה..",
            "cat":"ציוד מעבדה"
        },
        {
            "id": 2,
            "title": "פלטפורמת תצוגה",
"pic":"image/eyeTwo.svg",
            "abstract": "פלטפורמה שבה מוצגים המידע",
            "fullContent": "הפלטפורמה שבה מוצגים המידע או התמונות שמועברות לעיני המשתתפים צריכה להיות ברורה ובאיכות גבוהה כך שתאפשר הבנה מדויקת של הנתונים",
            "cat":"ציוד מעבדה"
        },

{
            "id": 3,
            "title": " איתור AOI ואיזורי עניין",
"pic":"image/eyeThree.svg",
            "abstract": "מערכות תוכנה",
            "fullContent": "מערכות תוכנה יכולות לאזור אזורי עניין בתמונה או בפלטפורמה, ולאתר ולרשום תנועות עיניים באזורים אלה.",
            "cat":"ציוד מעבדה"
        },

{
            "id": 4,
            "title": "הגדרת ניסויים ומחקרים",
"pic":"image/eyeFour.svg",
            "abstract": "תשתית להגדרת ניסויים ומחקרים",
            "fullContent": "מעבדת מעקב עיניים צריכה לספק תשתית להגדרת ניסויים ומחקרים, ולסייע לחוקרים בעיצובם ובהפעלתם.",
            "cat":"הדרכה"
        },
{
            "id": 5,
            "title": "מודלים וניתוח נתונים",
"pic":"image/eyeFive.svg",
            "abstract": " כלים ומערכות תוכנה",
            "fullContent": "המעבדה צריכה לספק כלים ומערכות תוכנה לניתוח נתונים, כולל יכולות ליצירת דוחות, גרפים, וניתוחים סטטיסטיים של הנתונים שנאספים.",
            "cat":"ציוד מעבדה"
        },

{
            "id": 6,
            "title": "בקרת איכות וביצועים",
"pic":"image/eyeSix.svg",
            "abstract": "חשוב לשמור על בקרת איכות מדויקת",
            "fullContent": "חשוב לשמור על בקרת איכות מדויקת של הנתונים ושל הביצועים, ולוודא שהם נאספים בדיוק גבוה.",
            "cat":"מחקר"
        },
{
            "id": 7,
            "title": "הדרכה והפעלה",
"pic":"image/eyeSeven.svg",
            "abstract": "המעבדה צריכה לספק הדרכה מדויקת ",
            "fullContent": "המעבדה צריכה לספק הדרכה והפעלה מדויקת עבור חוקרים ולתת תמיכה טכנית בזמן הניסויים.",
            "cat":"הדרכה"
        },
{
            "id": 8,
            "title": "תיעוד ובטיחות במעבדה",
"pic":"image/eyeEight.svg",
            "abstract": "חשוב להקפיד על תיעוד מדויק  ",
            "fullContent": "חשוב להקפיד על תיעוד מדויק של כל התהליכים והנתונים שנאספים, ולוודא שהמחקר נעשה בהתאם להנחיות בטיחותיות.",
            "cat":"מחקר"
        },
{
            "id": 9,
            "title": "אתיקה ומקצועית",
"pic":"image/eyeNine.svg",
            "abstract": "שמירה על קוד האתי",
            "fullContent": " החוקרים במעבדת מעקב עיניים צריכים לעבוד בהתאם לקוד אתי ולשמור על התנהגות מקצועית וכבודן של המשתתפים במחקר",
            "cat":"מחקר"
        },
{
            "id": 10,
            "title": "מחקר בין תחומי",
"pic":"image/eyeTen.svg",
            "abstract":"קידום שיתופי פעולה",
            "fullContent": " מעבדות מעקב עיניים מקדמות שיתופי פעולה בין תחומים על ידי ספק גישה לציוד ולתומכות טכנית לחוקרים מתחומי פסיכולוגיה, נוירומדע, אינטראקציה בין-אדם למחשב, שיווק, ורפואה.",
            "cat":"מחקר"
        }
    ]
}


//לאחר טעינת העמוד
document.addEventListener("DOMContentLoaded", function (event) {
  createGenerators(); // Initially, show all generators
  document.getElementById('search-btn').addEventListener('click', searchByCategory); // Add event listener to search button
});

// Function to create generator elements and append them to the container
function createGenerators(categoryFilter) {
  const generatorsContainer = document.getElementById('generators-container');
  generatorsContainer.id = 'generators-container';
  document.body.appendChild(generatorsContainer);
  // Clear any existing content
  generatorsContainer.innerHTML = '';

  // Filter generators based on the category if a filter is provided
  const filteredGenerators = categoryFilter ?
    jsonData.generators.filter(generator => generator.cat === categoryFilter) :
    jsonData.generators;

  // Iterate through each filtered generator
  filteredGenerators.forEach(generator => {
    const generatorItem = document.createElement('div');
    generatorItem.classList.add('generator-item');

    const image = document.createElement('img');
    image.src = generator.pic;
    image.alt = generator.title;

    const title = document.createElement('h2');
    title.textContent = generator.title;

    const abstract = document.createElement('p');
    abstract.textContent = generator.abstract;

    const moreDetailsBtn = document.createElement('button');
    moreDetailsBtn.textContent = "למידע נוסף";
    moreDetailsBtn.classList.add('btn', 'btn-primary', 'mb-2');
    moreDetailsBtn.addEventListener('click', () => showFullContent(generator.id));

    generatorItem.appendChild(image);
    generatorItem.appendChild(title);
    generatorItem.appendChild(abstract);
    generatorItem.appendChild(moreDetailsBtn);

    generatorsContainer.appendChild(generatorItem);

    title.addEventListener('mouseover', () => {
      title.style.color = '#99B9FF';
    });
    
    // Add event listener to change title color back to default on mouseout
    title.addEventListener('mouseout', () => {
      title.style.color = ''; // Reset to default color
    });
});
}



// Function to handle search based on category
function searchByCategory() {
  const searchInput = document.getElementById('search-input').value.trim(); // Get the search input value
  createGenerators(searchInput); // Call createGenerators with the search input value as a filter
  document.getElementById('search-input').value = ''; // Clear the search input field
}

// Function to show full content in a Bootstrap modal when clicking More Details button
function showFullContent(id) {
  const generator = jsonData.generators.find(gen => gen.id === id);
  if (generator) {
      const modalTitle = document.getElementById('full-content-title');
      const modalInfo = document.getElementById('full-content-info');
      
      modalTitle.textContent = generator.title;
      modalInfo.textContent = generator.fullContent;
      
      const fullContentModal = new bootstrap.Modal(document.getElementById('full-content-modal'));
      fullContentModal.show();
  }
}

function toggleNav(){
  document.getElementById("main-nav").classList.toggle("hide-mobile");
}

