const baseURL = "http://localhost:8080";

export default async function getData(endpoint) {
  try {
    const response = await fetch(`${baseURL}${endpoint}`);
    const info = response.json();
    return info;
  } catch (error) {
    throw error; // Optional: rethrow the error if you want to handle it further up the call stack
  }
}
