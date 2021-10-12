export interface Wizard {
  step: number;
  steps: number;
}

export type WizardStepsOptions = "next" | "back" | number;
