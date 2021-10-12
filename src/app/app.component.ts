import { Component, VERSION } from "@angular/core";
import {
  Wizard,
  WizardStepsOptions
} from "./shared/templates/wizard/wizard.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  wizard: Wizard = {
    step: 1,
    steps: 3
  };

  step(goTo: WizardStepsOptions) {
    this.wizard.step =
      // if the step is less than the total step
      (this.wizard.step < this.wizard.steps &&
        // and if action is next, increase step in one
        goTo === "next" &&
        this.wizard.step + 1) ||
      // if the step is less or equal than the total steps
      (this.wizard.step <= this.wizard.steps &&
        // and if action is back, decrease step in one
        goTo === "back" &&
        this.wizard.step - 1) ||
      // else set the step with the fixed number or stay on place.
      (typeof goTo === "number" && goTo) ||
      this.wizard.step;
  }
}
