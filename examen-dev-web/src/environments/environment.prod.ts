export const environment = {
  production: true,
  backend: {
    protocol: 'http',
    host: '127.0.0.1',
    port: '3000',
    endpoints: {
      musiqueAleatoire: '/musics/random',
      toutesLesMusique: '/musics',
      uneMusique: '/musics/:id',
      filterByName: '/musics/title/:title'
    }
  }
};
