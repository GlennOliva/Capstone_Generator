const titles = [
    "The Future of AI in Healthcare",
    "Revolutionizing Transportation with Self-Driving Cars",
    "The Impact of Blockchain on Business",
    "Building Sustainable Cities with Renewable Energy",
    "Innovative Solutions for Climate Change",
    "Empowering Education with Technology",
    "The Future of Space Exploration",
    "Transforming Healthcare with Digital Health",
    "Creating Smart Homes with IoT",
    "Challenges and Opportunities in Cybersecurity",
    "Personalized Fitness App",
    "Smart Home Automation System",
    "Stock Trading Platform",
    "Online Learning Management System",
    "Digital Health Assistant",
    "Social Network Analysis Tool",
    "Natural Language Processing Chatbot",
    "Real-Time Language Translator",
    "Blockchain-Based Supply Chain Management System"

];

const generateBtn = document.getElementById("generate-btn");
const titleElement = document.getElementById("title");

generateBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * titles.length);
    titleElement.innerText = titles[randomIndex];
});
