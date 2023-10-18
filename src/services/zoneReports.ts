import { GET } from "./request";

export const zoneReports = {
  async downloadZoneReports() {
    const response = await GET("/generateReportsForZones");
    return response;
  },
};
