const createMockIRReport = (username) => {
  const ages = [25, 32, 40, 48, 55, 60];
  const genders = ["Male", "Female"];
  const symptomsList = [
    "Fever, Cough",
    "Chest pain, Shortness of breath",
    "Dry cough, Fatigue",
    "High fever, Difficulty breathing",
    "Mild cough, Body pain"
  ];
  const predictions = [30, 45, 60, 75, 85];

  return {
    name: username,
    age: ages[Math.floor(Math.random() * ages.length)],
    gender: genders[Math.floor(Math.random() * genders.length)],
    symptoms: symptomsList[Math.floor(Math.random() * symptomsList.length)],
    prediction: predictions[Math.floor(Math.random() * predictions.length)],
    image: "/images/ir-sample.jpg",
    date: new Date().toLocaleDateString()
  };
};

export default createMockIRReport;
