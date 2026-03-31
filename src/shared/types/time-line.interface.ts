export interface Detail {
  title?: string;
  description: string | string[];
  url?: string;
}

export interface TimelineData {
  title: string;
  current?: boolean;
  subTitle: { title: string; url?: string };
  date: string;
  extraDetails?: Detail[];
}
