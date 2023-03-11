export function generateID() {
  return `id${Math.random().toString(16).slice(2)}`;
}

export function getFileExtension(fileName: string) {
  return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length);
}

export function fromSecondsToMinutes(seconds: number) {
  return `${Math.floor(seconds / 60)}:${seconds % 60 ? (Math.floor(seconds % 60) < 10 ? `0${Math.floor(seconds % 60)}` : Math.floor(seconds % 60)) : '00'}`;
}

export function addThousandsSeparator(n: string | number) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
