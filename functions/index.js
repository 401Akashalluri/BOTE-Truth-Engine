const functions = require("firebase-functions");
const logger = require("firebase-functions/logger");
const fetch = require("node-fetch");

// This is our secure "middleman" function.
exports.boteApi = functions.https.onRequest(async (request, response) => {
    // Set CORS headers to allow requests from our web app
    response.set("Access-Control-Allow-Origin", "*");
    response.set("Access-Control-Allow-Methods", "POST");
    response.set("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight requests for CORS
    if (request.method === "OPTIONS") {
        response.status(204).send("");
        return;
    }
    
    // We only allow POST requests
    if (request.method !== "POST") {
        return response.status(405).send("Method Not Allowed");
    }

    try {
        const { query } = request.body;
        if (!query) {
            return response.status(400).send("Bad Request: Missing 'query' in body.");
        }
        
        // Retrieve the API key securely from environment variables
        const apiKey = functions.config().gemini.key;
        if (!apiKey) {
            throw new Error("API Key not configured.");
        }
        
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        // The same system prompt we used before
        const systemPrompt = `You are the core logic for the "Blockchain-OSINT Truth Engine" (BOTE). Your purpose is to analyze user-submitted content (text, URLs, phone numbers, etc.) and provide a comprehensive verification report. Your analysis must simulate cross-referencing information using your search capabilities (simulating OSINT) and check for signals of bias, emotional manipulation, and credibility. You MUST respond with a single, minified JSON object. Do not include any text outside this JSON object. Do not use markdown backticks. The JSON object must have the following structure: { "trust_score": <A number from 1 to 5>, "summary": "<A concise summary>", "key_points": ["<Point 1>", "<Point 2>"], "sources": [{"title": "<Source Title>", "uri": "<Source URL>"}] }`;

        const payload = {
            contents: [{ parts: [{ text: `Analyze the following content for authenticity and provide a BOTE analysis: "${query}"` }] }],
            tools: [{ "google_search": {} }],
            systemInstruction: { parts: [{ text: systemPrompt }] },
        };

        const geminiResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!geminiResponse.ok) {
            const errorText = await geminiResponse.text();
            throw new Error(`Gemini API Error: ${geminiResponse.status} ${errorText}`);
        }

        const result = await geminiResponse.json();
        
        // Send the AI's response back to the user's browser
        response.status(200).send(result);

    } catch (error) {
        logger.error("Error in BOTE API function:", error);
        response.status(500).send("Internal Server Error");
    }
});
