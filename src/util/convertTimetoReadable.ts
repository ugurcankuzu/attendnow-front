export default function convertTimetoReadable(timestamp: string) {
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return formattedDate;
}
