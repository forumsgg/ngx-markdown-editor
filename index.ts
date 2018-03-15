import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MarkdownEditorComponent } from './md-editor/md-editor.component';

export * from './md-editor/md-editor.component';

@NgModule({
    declarations: [
        MarkdownEditorComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule, MatIconModule, FlexLayoutModule
    ],
    exports: [
        MarkdownEditorComponent
    ]
})
export class LMarkdownEditorModule { }
