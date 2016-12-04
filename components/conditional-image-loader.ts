import { Directive , Input , OnChanges , SimpleChanges , ElementRef , Renderer , DoCheck} from "@angular/core";


/**
 * @name ConditionalImageLoaderDirective
 * @description use this angular2 directive to load image from a url whose value is truthy
 * 
 * @export
 * @class ConditionalImageLoaderDirective
 * @implements {OnChanges}
 */
@Directive({
    selector : "[conditionalImageLoader]"
})
export class ConditionalImageLoaderDirective implements DoCheck{

    /**
     * @description : input configuration for the directive
     * @private
     * @type {{ [key : string] : string }}
     */
    @Input("conditionalImageLoader")
    private imageUrlConfig : { [key : string] : string };

    /**
     * 
     * @private
     * @type {HTMLImageElement}
     * 
     */
    private imageElement : HTMLImageElement;
    
    /**
     * 
     * 
     * @private
     * @type {string}
     * 
     */
    private activeImageUrl : string;

    /**
     * Creates an instance of ConditionalImageLoaderDirective.
     * 
     * @param {ElementRef} element
     * @param {Renderer} render
     * 
     * 
     */
    constructor(
        private element: ElementRef , 
        private render : Renderer
    ){
        this.imageElement = this.element.nativeElement;
    }

    /**
     * @description this method will get called when ever angular dirty checks the directive.
     * 
     */
    ngDoCheck(){
        this.findActiveUrl();
    }

    /**
     * @private
     * @description : this method iterates over the configuration to find the url whose value is truthy.
     * this method will be called every time the input configuration to directive changes 
     * 
     */
    private findActiveUrl(){

        if(typeof this.imageUrlConfig != "object"){
            console.error(this.imageUrlConfig);
            throw new Error("Expected key value pair as input to the directive but got " + JSON.stringify(this.imageUrlConfig));
        }

        Object.keys(this.imageUrlConfig)
        .map((imageUrl) => {
            if(this.imageUrlConfig[imageUrl]){
                this.activeImageUrl = imageUrl;
            }
        });

        this.updateImageSrc();
    
    }

    /**
     * @private
     * @description : this method is used to update the image source with the active url.
     */
    updateImageSrc(){
        this.imageElement.src = this.activeImageUrl;
    }

}