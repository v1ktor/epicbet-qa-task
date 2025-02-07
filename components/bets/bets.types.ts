import { NavigateTo } from "../navigation/navigation.types";

export type SportsCategory = Extract<NavigateTo, "category-football">;

export interface PlaceBetOptions {
  indexOfOutcomeButton: number;
  amount: number;
}
