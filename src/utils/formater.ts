export function msToHMS(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const hoursStr = hours.toString().padStart(2, "0");
  const minutesStr = minutes.toString().padStart(2, "0");
  const secondsStr = seconds.toString().padStart(2, "0");

  return `${hoursStr}:${minutesStr}:${secondsStr}`;
}

export function bytesToKMG(bytes: number): string {
  if (bytes >= 1073741824) {
    return (bytes / 1073741824).toFixed(2) + " GB";
  } else if (bytes >= 1048576) {
    return (bytes / 1048576).toFixed(2) + " MB";
  } else if (bytes >= 1024) {
    return (bytes / 1024).toFixed(2) + " KB";
  } else if (bytes > 1) {
    return `${bytes} bytes`;
  } else if (bytes === 1) {
    return "1 byte";
  }
  return "0 bytes";
}

export function parseMACfromQuery(queryString: string): string | null {
  const params = queryString.split("&");
  for (const param of params) {
    const [key, value] = param.split("=");
    if (key === "info") {
      return value;
    }
  }
  return null;
}
