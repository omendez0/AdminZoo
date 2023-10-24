import { GET } from "./request";

export const downloadZoneReports = async () => {
  const response = await GET("/generateReportsForZones");
  return response;
};
