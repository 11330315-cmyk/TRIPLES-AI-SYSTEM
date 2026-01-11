export enum AppStep {
  WELCOME = 'WELCOME', // 新增歡迎頁面
  INTERVIEW = 'INTERVIEW',
  FORM = 'FORM',
  CAMERA = 'CAMERA',
  ANALYZING = 'ANALYZING',
  RESULT = 'RESULT'
}

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female'
}

export interface UserProfile {
  name: string;
  height: string; // cm
  weight: string; // kg
  eventDist: string;
  style: string;
  gender: Gender;
}

export interface AnalysisResult {
  isValidPose: boolean;
  validationMessage?: string;
  sizeRecommendation: string;
  bodyTypeAnalysis: string;
  isBroadShoulders: boolean;
  strategySuit: string;
  strategyNutrition: string;
  strategyTip: string;
  encouragement: string;
}

export const RACE_DISTANCES = [
  "25.75K (衝刺賽)",
  "51.5K (標準賽)",
  "113K (半程超鐵)",
  "226K (全程超鐵)"
];

export const CLOTHING_STYLES = [
  "短袖 (Short Sleeve)",
  "無袖 (Sleeveless)"
];