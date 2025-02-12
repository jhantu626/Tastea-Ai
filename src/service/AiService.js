import axios from 'axios';

class AiService {
  constructor() {
    this.baseUrl = process.env.API_URL;
  }

  async dietPlanCreatory({promptText, authToken}) {
    try {
      const uri = `${this.baseUrl}/api/v1/ai/generate?prompt=${promptText}`;
      const response = await axios.post(
        uri,
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      );
      const data = response.data;
      return data;
    } catch (error) {
      const data = await error.response.data;
      return data;
    }
  }
}

const aiService = new AiService();

export {aiService};
