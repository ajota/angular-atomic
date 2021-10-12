import { Component, VERSION } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  wizard = {
    step: 1,
    steps: 3
  };

  step(goTo: "next" | "back" | number) {
    this.wizard.step =
      (goTo === "next" && this.wizard.step + 1) ||
      (goTo === "back" && this.wizard.step - 1) ||
      (typeof goTo === "number" && goTo) ||
      this.wizard.step;
  }
}
