import { Component, EventEmitter, Output, signal } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css',
    imports: [ButtonComponent, ControlComponent, FormsModule]
})
export class NewTicketComponent {

    enteredTitle = signal<string>('');

    enteredText = signal<string>('');

    @Output() add = new EventEmitter<{title: string, text: string}>();

    onSubmit(): void {
        this.add.emit({title: this.enteredTitle(), text: this.enteredText()});
        this.enteredTitle.set(this.enteredTitle());
        this.enteredText.set(this.enteredText());
    }
}
