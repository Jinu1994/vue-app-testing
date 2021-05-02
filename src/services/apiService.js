import axios from 'axios'

export class ApiService
{
  async getData() {
    let response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data;
  }

  async getPosts(userId) {
    let response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        userId
      }
    })
    return response.data;
  }
}