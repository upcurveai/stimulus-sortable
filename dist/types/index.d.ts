import { Controller } from "@hotwired/stimulus";
import Sortable from "sortablejs";
import { Options } from "@rails/request.js";
export default class StimulusSortable extends Controller<HTMLElement> {
    animationValue: number;
    resourceNameValue: string;
    paramNameValue: string;
    responseKindValue: Options["responseKind"];
    sortable: Sortable;
    handleValue: string;
    static values: {
        resourceName: StringConstructor;
        paramName: {
            type: StringConstructor;
            default: string;
        };
        responseKind: {
            type: StringConstructor;
            default: string;
        };
        animation: NumberConstructor;
        handle: StringConstructor;
    };
    initialize(): void;
    connect(): void;
    disconnect(): void;
    onUpdate({ item, newIndex }: {
        item: any;
        newIndex: any;
    }): Promise<import("@rails/request.js").FetchResponse>;
    get options(): Sortable.Options;
    get defaultOptions(): Sortable.Options;
}
