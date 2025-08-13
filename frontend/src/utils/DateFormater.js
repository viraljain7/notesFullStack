// utils/dateFormatter.js
export function formatUTCToLocal(utcString, timeZone = "Asia/Kolkata") {
    const dateObj = new Date(utcString);
    return dateObj.toLocaleDateString("en-IN", {
      timeZone,
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  }
  