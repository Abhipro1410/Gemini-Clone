import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(" AIzaSyCZVhgaAinjEiLhXuPVwTb8Y-HegbRxmQg    ");


export async function runGemini(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });


  const result = await model.generateContent(prompt);
  const responseText = result.response.text();
  console.log("Response:", responseText);
  
  return responseText;
}

export default runGemini;