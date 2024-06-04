import axios from 'axios';

export class ApiClient {
    constructor() {
        this.baseUrl = "https://api.edamam.com/api/recipes/v2";
        this.apiId = process.env.API_ID;
        this.apiKey = process.env.API_KEY;
    }

    #buildUrl(query) {
        const queryParams = {
            type: 'public',
            q: query,
            app_id: this.apiId,
            app_key: this.apiKey,
            cuisineType: 'Japanese'
        };

        const url = new URL(this.baseUrl);
        url.search = new URLSearchParams(queryParams).toString();
        return url.toString();
    }

    async getRecipes(query) {
        try {
            const url = this.#buildUrl(query);
            const response = await axios.get(url);
            const data = response.data;
            console.log(data);
            return data.hits.map((hit) => hit.recipe);
        } catch (error) {
            console.error("Error fetching recipes:", error);
            throw error;
        }
    }
}
