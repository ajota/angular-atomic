import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-wizard",
  templateUrl: "./wizard.component.html",
  styleUrls: ["./wizard.component.scss"]
})
export class WizardComponent implements OnInit {
  @Input() step: number;
  @Input() steps: number;

  private totalSteps? = new Array(1);

  ngOnInit() {
    console.log(this.steps);
    this.totalSteps = new Array(this.steps);
  }
}
