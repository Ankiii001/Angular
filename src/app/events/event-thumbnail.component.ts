import { Component, Input } from '@angular/core'
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="wellhoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <div>Date: {{event.date}}</div>
    <div>Time: {{event.time}}</div>
    <div>Price: \${{event.price}}</div>
    <div>
        <span>Location: {{event.location.address}}</span>
        <span>&nbsp;</span>
        <span>{{event.location.city}}, {{event.location.country}}</span>
    </div>
  </div>
`
})
export class EventThumbnailComponent {
    @Input() event: any;
    someProperty: any = "Some Value" ;

    logFoo() {
        console.log('foo');
    }
}
