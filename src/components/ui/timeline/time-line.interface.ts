export interface Detail {
  title?: string;
  description?: string | string[];
  url?: string;
}

export interface TimeLineData {
  title?: string;
  subTitle?: { title: string, url?: string }
  date?: string;
  extraDetails?: Detail[];
}