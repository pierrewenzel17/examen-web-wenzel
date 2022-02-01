export default interface Musique {
  id?: string,
  title?: string,
  description?: string,
  album?: string,
  artist?: string,
  duration?: string,
  date?: string,
  styles?: Array<string>,
  picture?: string | ArrayBuffer | null
};
