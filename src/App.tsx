import React from 'react';
import './App.css';
import { ItemDirective, ItemsDirective, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { NumericTextBox } from '@syncfusion/ej2-inputs';

class App extends React.Component {
  public templateNumericTextbox = new NumericTextBox(
    { 
      format: 'c2', 
      value: 1, 
      width: 90 
    });
  public templateDropdownList : Object = new DropDownList(
    {
     dataSource: ['Badminton', 'Basketball', 'Cricket', 'Golf', 'Hockey', 'Rugby'], 
     width: 120,
     index: 2 
    });
  
  render() {
    return ( 
      <ToolbarComponent width="875" overflowMode="Extended">
      <ItemsDirective>
        <ItemDirective suffixIcon="e-cut-icon tb-icons" text="Cut"></ItemDirective>
        <ItemDirective suffixIcon="e-copy-icon tb-icons" text="Copy"></ItemDirective>
        <ItemDirective suffixIcon="e-paste-icon tb-icons" text="Paste"></ItemDirective>
        <ItemDirective type="Separator"></ItemDirective>
        <ItemDirective suffixIcon="e-bold-icon tb-icons" text="Bold"></ItemDirective>
        <ItemDirective suffixIcon="e-underline-icon tb-icons" text="Underline"></ItemDirective>
        <ItemDirective suffixIcon="e-italic-icon tb-icons" text="Italic"></ItemDirective>
        <ItemDirective type="Separator"></ItemDirective>
        <ItemDirective suffixIcon="e-bullets-icon tb-icons" text="Bullets"></ItemDirective>
        <ItemDirective suffixIcon="e-numbering-icon tb-icons" text="Numbering"></ItemDirective>
        <ItemDirective type="Separator"></ItemDirective>
        <ItemDirective suffixIcon="e-undo-icon tb-icons" text="Undo"></ItemDirective>
        <ItemDirective suffixIcon="e-redo-icon tb-icons" text="Redo"></ItemDirective>
        <ItemDirective type="Separator"></ItemDirective>
        <ItemDirective suffixIcon="e-alignleft-icon tb-icons" text="Left"></ItemDirective>
        <ItemDirective suffixIcon="e-alignright-icon tb-icons" text="Right"></ItemDirective>
        <ItemDirective suffixIcon="e-aligncenter-icon tb-icons" text="Center"></ItemDirective>
        <ItemDirective suffixIcon="e-alignjustify-icon tb-icons" text="Justify"></ItemDirective>
        <ItemDirective type="Separator"></ItemDirective>
        <ItemDirective suffixIcon="e-table-icon tb-icons" text="Table"></ItemDirective>
        <ItemDirective suffixIcon="e-picture-icon tb-icons" text="Picture"></ItemDirective>
        <ItemDirective type="Input" template={this.templateNumericTextbox}/>
        <ItemDirective type="Input" template={this.templateDropdownList}/>
    </ItemsDirective>
    </ToolbarComponent>
    ); 
  }
}

export default App;
