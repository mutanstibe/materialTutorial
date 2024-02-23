import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Material Examples';
  panelOpenState = true;

  componentList = [
    {title: "Autocomplete", url: ""},
    {title: "Badge", url: ""},
    {title: "Bottom sheet", url: ""},
    {title: "Button", url: ""},
    {title: "Button toggle", url: ""},
    {title: "Card", url: ""},
    {title: "Checkbox", url: ""},
    {title: "Chips", url: ""},
    {title: "Core", url: ""},
    {title: "Datepicker", url: ""},
    {title: "Dialog", url: ""},
    {title: "Divider", url: ""},
    {title: "Expansion panel", url: ""},
    {title: "Form field", url: ""},
    {title: "Grid list", url: ""},
    {title: "Icon", url: ""},
    {title: "Input", url: ""},
    {title: "List", url: ""},
    {title: "Menu", url: ""},
    {title: "Paginator", url: ""},
    {title: "Progress bar", url: ""},
    {title: "Progress spinner", url: ""},
    {title: "Radio button", url: ""},
    {title: "Ripples", url: ""},
    {title: "Select", url: ""},
    {title: "Sidenav", url: ""},
    {title: "Slide toggle", url: ""},
    {title: "Slider", url: ""},
    {title: "Snackbar", url: ""},
    {title: "Sort header", url: ""},
    {title: "Stepper", url: ""},
    {title: "Table", url: ""},
    {title: "Tabs", url: ""},
    {title: "Toolbar", url: ""},
    {title: "Tooltip", url: ""},
    {title: "Tree", url: ""}
  ]

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(component: any) {
    const snackBar = this._snackBar.open(
      "Tutorial of the " + component.title + " will open in 3 seconds...",
      "CANCEL",
      {
        duration: 3000
      });
    
    const timeOut = setTimeout(() => {
      this.navigateTo(component.url)
    }, 3000)

    snackBar.onAction().subscribe(() => {
      clearTimeout(timeOut);
      snackBar.dismiss();
    });
  }

  ngOnInit() {
    for (const componentItem of this.componentList) {
      componentItem.url = componentItem.title.toLowerCase().replaceAll(" ", "")
      
    }
  }

  navigateTo(url: string) {
    console.log(url)
  }
}
