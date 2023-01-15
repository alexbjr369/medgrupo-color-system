/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Colors } from "./interface";
export namespace Components {
    interface MedBase {
        /**
          * Defines the component color.
         */
        "color"?: Colors;
    }
}
declare global {
    interface HTMLMedBaseElement extends Components.MedBase, HTMLStencilElement {
    }
    var HTMLMedBaseElement: {
        prototype: HTMLMedBaseElement;
        new (): HTMLMedBaseElement;
    };
    interface HTMLElementTagNameMap {
        "med-base": HTMLMedBaseElement;
    }
}
declare namespace LocalJSX {
    interface MedBase {
        /**
          * Defines the component color.
         */
        "color"?: Colors;
    }
    interface IntrinsicElements {
        "med-base": MedBase;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "med-base": LocalJSX.MedBase & JSXBase.HTMLAttributes<HTMLMedBaseElement>;
        }
    }
}
