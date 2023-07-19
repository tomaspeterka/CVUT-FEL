// List of items
const itemsList = [
  "agility",
  "animal",
  "ants1",
  "bag",
  "ball3",
  "basketball",
  "basketball-11",
  "beaker",
  "bear-6",
  "bicycle",
  "bicycle-7",
  "bird-15",
  "bird-2",
  "birds1",
  "boat",
  "bolt1",
  "book",
  "book-3",
  "bottle",
  "bubble",
  "bull",
  "bus",
  "bus-2",
  "car",
  "car-9",
  "carchase",
  "cat",
  "cattle-13",
  "chameleon-20",
  "clownfish",
  "colorfish",
  "conduction1",
  "crab-18",
  "crab-6",
  "crabs1",
  "dancingshoe",
  "deer",
  "diabolo",
  "diving",
  "dog",
  "dog-7",
  "dog1",
  "dolphins",
  "domino_damselfish",
  "dragon",
  "drone",
  "drone1",
  "drone_across",
  "duck",
  "f1",
  "fernando",
  "fish1",
  "fish2",
  "fishnet",
  "flag",
  "flag-3",
  "flamingo1",
  "flyboard",
  "fox",
  "freesbiedog",
  "frisbee",
  "gametarget-7",
  "goldfish",
  "goldfish-3",
  "gorilla-13",
  "gymnastics1",
  "gymnastics3",
  "hand",
  "hand-9",
  "hand2",
  "hand3",
  "handball2",
  "hat-1",
  "hat-5",
  "helicopter",
  "houseride",
  "iceskater2",
  "juggling",
  "kangaroo",
  "kite-10",
  "lamb",
  "leaves",
  "licenseplate",
  "lion-12",
  "marathon",
  "matrix",
  "monkey",
  "monkey-3",
  "monkey-9",
  "moorish_idol",
  "motorcycle",
  "motorcycle-1",
  "motorcycle-18",
  "nature",
  "orangefish",
  "panda",
  "parkour",
  "person-12",
  "person-5",
  "pig-2",
  "polo",
  "pool-15",
  "rabbit",
  "rabbit-10",
  "rabbits",
  "racing-16",
  "robot",
  "robot-1",
  "robot-19",
  "robot-5",
  "rollerman",
  "run",
  "sailing",
  "seagull",
  "seastar",
  "sepia-13",
  "sepia-8",
  "shaking",
  "shark-2",
  "sheep-9",
  "singer3",
  "sitcom",
  "skateboard-8",
  "skiing",
  "snake",
  "soccer1",
  "soldier",
  "squirrel",
  "stripedfish",
  "surfboard-12",
  "tank-16",
  "tank-9",
  "tennis",
  "tiger-4",
  "train-7",
  "transparent_fish",
  "uav1",
  "umbrella-19",
  "umbrella-9",
  "volleyball",
  "volleyball-18",
  "volleyball-19",
  "wheel",
  "whitefish",
  "wiper",
  "wubble_bubble",
  "yoyo-7",
  "zebra-10",
  "zebra-16",
  "zebrafish1"
]
;

// Function to capitalize the first letter, remove numbers, and replace underscores with spaces
function formatItem(item) {
  // Special case for "F1"
  if (item === "f1") {
    return "F1";
  }

  return item.charAt(0).toUpperCase() + item.slice(1).replace(/[0-9]/g, '').replace(/_/g, ' ').replace(/-/g, '');
}

// Function to capitalize the first letter, remove numbers, and replace underscores with spaces
//function formatItem(item) {
//return item.charAt(0).toUpperCase() + item.slice(1).replace(/[0-9]/g, '').replace(/_/g, ' ').replace(/-/g, '');
//}

// Get the unordered list element
const myList = document.getElementById("myList");

// Loop through the items list and create the list elements
for (const item of itemsList) {
// Create the list item and anchor elements
const listItem = document.createElement("li");
const anchorElement1 = document.createElement("a");
const anchorElement2 = document.createElement("a");
const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");

// Set the href attributes for the anchor elements
anchorElement1.setAttribute("href", "#" + item);
anchorElement2.setAttribute("href", "Videos/" + item + ".mp4");
anchorElement2.setAttribute("download", "");

// Add class for the second anchor element
anchorElement2.classList.add("hovering");

// Set the class attribute for the SVG element
svgElement.setAttribute("class", "hoverElement");
svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svgElement.setAttribute("viewBox", "0 0 24 24");

// Set the 'd' attribute for the path element
pathElement.setAttribute("d", "M12 16l-4-4h3V4h2v8h3l-4 4zm-4 5h8v2H8z");

// Create the text node for the first anchor element
const textNode = document.createTextNode(formatItem(item));

// Append the text node to the first anchor element
anchorElement1.appendChild(textNode);

// Append the path element to the SVG element
svgElement.appendChild(pathElement);

// Append the SVG element to the second anchor element
anchorElement2.appendChild(svgElement);

// Append the anchor elements to the list item
listItem.appendChild(anchorElement1);
listItem.appendChild(anchorElement2);

// Append the list item to the unordered list
myList.appendChild(listItem);
}
