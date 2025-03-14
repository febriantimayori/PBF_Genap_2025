export default async function handler(req, res) {
    const API_KEY = "b0d4870a8896626ef01d6f16df5d1c43"; 
    const city = req.query.city || "";
  
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
  
    res.status(200).json(data);
  }
  