import axios from 'axios';

const http = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://' : 'http://'
});

export default {
  async getCases() {
    const { data } = await http.get('/api/cases');
    return data;
  },
  async getTweets(params) {
    const { data } = await http.get('/api/tweets', {
      params
    });
    return data;
  },
  async getTimeline() {
    const { data } = await http.get('/api/timeline');
    return data;
  },
  async getFatalityRate() {
    const { data } = await http.get('/api/fatality-rate');
    return data;
  }
};
