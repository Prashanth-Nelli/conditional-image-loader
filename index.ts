import { NgModule } from "@angular/core";

import { ConditionalImageLoaderDirective } from "./components/conditional-image-loader";

/**
 * @description : An Angular2 Module for ConditionalImageLoader Directive.
 * 
 * @export
 * @class ConditionalImageLoaderModule
 */
@NgModule({
    imports      : [],
    exports      : [ConditionalImageLoaderDirective],
    providers    : [],
    declarations : [ConditionalImageLoaderDirective]
})
export class ConditionalImageLoaderModule{
    
}