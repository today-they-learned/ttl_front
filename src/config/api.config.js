export const apiUrl = 
  process.env.NODE_ENV === 'production'
    ? 'https://api.todaytheylearn.com'
    : 'http://3.34.83.191/';
