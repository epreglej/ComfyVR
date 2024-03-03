export const useLocale = () => useState<string>("locale", () => "en");
export const useCounter = () => useState("counter", () => 0);
