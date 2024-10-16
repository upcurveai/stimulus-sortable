import { Controller } from "@hotwired/stimulus";
import Sortable from "sortablejs";
import { patch } from "@rails/request.js";
const _StimulusSortable = class _StimulusSortable extends Controller {
  initialize() {
    this.onUpdate = this.onUpdate.bind(this);
  }
  connect() {
    Sortable.active ? this.sortable = Sortable.get(this.element) : this.sortable = new Sortable(this.element, {
      ...this.defaultOptions,
      ...this.options
    });
  }
  disconnect() {
    Sortable.active || this.sortable.destroy(), this.sortable = void 0;
  }
  async onUpdate({ item, newIndex }) {
    if (!item.dataset.sortableUpdateUrl)
      return;
    const param = this.resourceNameValue ? `${this.resourceNameValue}[${this.paramNameValue}]` : this.paramNameValue, data = new FormData();
    return data.append(param, newIndex + 1), await patch(item.dataset.sortableUpdateUrl, { body: data, responseKind: this.responseKindValue });
  }
  get options() {
    return {
      animation: this.animationValue || this.defaultOptions.animation || 150,
      handle: this.handleValue || this.defaultOptions.handle || void 0,
      onUpdate: this.onUpdate
    };
  }
  get defaultOptions() {
    return {};
  }
};
_StimulusSortable.values = {
  resourceName: String,
  paramName: {
    type: String,
    default: "position"
  },
  responseKind: {
    type: String,
    default: "html"
  },
  animation: Number,
  handle: String
};
let StimulusSortable = _StimulusSortable;
export {
  StimulusSortable as default
};
