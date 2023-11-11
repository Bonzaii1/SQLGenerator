import openaiClient from "./api.js"

const generate = async (queryDesc) => {

    const davinci = async (queryDesc) => {
        const response = await openaiClient.completions.create({
            model: "text-davinci-003",
            prompt: `Convert the following natural language description into a SQL query: \n\n${queryDesc}.`,
            max_tokens: 100,
            temperature: 0
        })

        return response.data.choices[0].text
    }

    const chatGPTAPI = async (queryDesc) => {
        const messages = [
            { role: "system", content: `You are a translator from plain english to SQL.` },
            { role: "user", content: `Convert the following natural language description into a SQL query: \n\nshow all elements from the table users.` },
            { role: "assistant", content: `SELECT * FROM USERS;` },
            { role: "user", content: `Convert the following natural language description into a SQL query: \n\n${queryDesc}.` }
        ];
        const response = await openaiClient.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: messages
        })

        return response.data.choices[0].text
    }

    return await chatGPTAPI(queryDesc)
}

export default generate;