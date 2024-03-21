import md5 from "md5";
import React from "react";

const publicKey = import.meta.env.VITE_MARVEL_API_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_MARVEL_API_PRIVATE_KEY;
const apiBaseURL = "https://gateway.marvel.com/v1/public";

// Creates a URL for searching Marvel API for comics with titles starting with a given search term
function createURL() {
  // Get the current timestamp
  const ts = Date.now();

  // Create a new URLSearchParams object and set the necessary query parameters
  const params = new URLSearchParams({
    ts: ts,
    apikey: publicKey,
    hash: md5(ts + privateKey + publicKey), // Generate hash for authentication
  });
  // Construct the endpoint URL for searching comics with the query parameters
  const endpoint = `${apiBaseURL}/characters?`; // Notice the question mark to start the query parameters.

  // Combine the endpoint URL with the query parameters to form the complete API request URL
  const url = endpoint + params;

// Return the complete API request URL
  return url;
}

export default createURL