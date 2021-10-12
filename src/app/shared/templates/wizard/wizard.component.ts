import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-wizard",
  templateUrl: "./wizard.component.html",
  styleUrls: ["./wizard.component.scss"]
})
export class WizardComponent implements OnInit {
  // @Input() wizardOptions: WizardOptions;
  // @Output() wizardOptionsChange = new EventEmitter<WizardOptions>();
  @Input() step: number;
  @Input() steps: number;

  totalSteps = new Array(1);

  constructor() {}

  ngOnInit() {
    console.log(this.steps);
    this.totalSteps = new Array(this.steps);
  }
}
