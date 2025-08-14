// builder.config.(js|ts)
import i18n from './src/plugins/i18n.ts';

import {defineConfig, elementTypes, nl_NL} from '@vueform/builder';

// You might place this anywhere else in your project
import './src/assets/scss/FormBuilder/index.scss';

// Element Types
import containerElementType from './builder_configs/elementTypes/containerElementType.js';
import textElementType from './builder_configs/elementTypes/textElementType.js';
import textareaElementType from './builder_configs/elementTypes/textareaElementType.js';
import radiogroupElementType from './builder_configs/elementTypes/radiogroupElementType.js';
import checkboxElementType from './builder_configs/elementTypes/checkboxElementType.js';
import checkboxgroupElementType from './builder_configs/elementTypes/checkboxgroupElementType.js';
import resumableMultifileElementType from './builder_configs/elementTypes/resumableMultifileElementType.js';

import h1ElementType from './builder_configs/elementTypes/h1ElementType.js';
import h2ElementType from './builder_configs/elementTypes/h2ElementType.js';
import h3ElementType from './builder_configs/elementTypes/h3ElementType.js';
import pElementType from './builder_configs/elementTypes/pElementType.js';
import en_US_custom from './src/lang/en/builder';
import nl_NL_custom from './src/lang/nl/builder';

// Element Props
import checkboxProp from './builder_configs/elementProps/checkboxProp.js';
import checkboxGroupProp from './builder_configs/elementProps/checkboxGroupProp.js';
import containerProp from './builder_configs/elementProps/containerProp.js';
import defaultProp from './builder_configs/elementProps/defaultProp.js';
import h1Prop from './builder_configs/elementProps/h1Prop.js';
import h2Prop from './builder_configs/elementProps/h2Prop.js';
import h3Prop from './builder_configs/elementProps/h3Prop.js';
import resumableMultiFileProp from './builder_configs/elementProps/resumableMultiFileProp.js';
import paragraphProp from './builder_configs/elementProps/paragraphProp.js';
import radioGroupProp from './builder_configs/elementProps/radioGroupProp.js';
import textProp from './builder_configs/elementProps/textProp.js';
import textAreaProp from './builder_configs/elementProps/textAreaProp.js';

const HixPreset = {
  search: false,
  autosave: 0,
  leftLayout: 'tabs',
  leftPanel: ['elements'],
  toggleLeft: false,
  toggleRight: false,
  rightPanel: [
    'form', 'settings',
  ],
  views: [
    'editor', 'preview',
  ],
  darkMode: [],
  devices: [],
  save: false,
  modelPreview: false,
  form: {
    props: {
      properties: {
        name: false,
        width: false,
        nesting: false,
      },
      submission: false,
      validation: {
        live: false,
      },
      layout: {
        size: false,
        columns: false,
        forceLabels: false,
        floatPlaceholders: false,
        displayErrors: false,
        displayMessages: false,
      },
    },
  },
  elements: [
    'container',
    'text',
    'textarea',
    'checkbox',
    'checkboxgroup',
    'radiogroup',
    'h1',
    'h2',
    'h3',
    'p',
    'resumablemultifile',
  ],
  element: {
    types: {
      container: containerElementType,
      text: textElementType,
      textarea: textareaElementType,
      checkbox: checkboxElementType,
      checkboxgroup: checkboxgroupElementType,
      radiogroup: radiogroupElementType,
      h1: h1ElementType,
      h2: h2ElementType,
      h3: h3ElementType,
      p: pElementType,
      resumablemultifile: resumableMultifileElementType,
    },
    props: {
      default: defaultProp,
      container: containerProp,
      text: textProp,
      textarea: textAreaProp,
      checkbox: checkboxProp,
      checkboxgroup: checkboxGroupProp,
      radiogroup: radioGroupProp,
      h1: h1Prop,
      h2: h2Prop,
      h3: h3Prop,
      p: paragraphProp,
      resumablemultifile: resumableMultiFileProp
    },
  },
  categories: [
    {
      label: 'category_fields',
      key: 'fields',
    },
    {
      label: 'category_layout',
      key: 'static',
    },
  ],
  ai: {
    /**
     * Enable the AI assistant. (`false` by default)
     */
    enabled: true,

    /**
     * List of messages to display while the form is being generated. ([] by default)
     * If empty, the default message 'Please wait while your form is being generated' will be shown.
     */
    messages: Object.values(i18n.global.tm('template.ai.generation')),

    /**
     * Whether messages should be shuffled. (`false` by default)
     */
    shuffle: true,
  },
};

export default defineConfig({
  preset: HixPreset,
  builderFallbackLocale: 'nl_NL',
  builderLocales: {
    nl_NL: nl_NL_custom,
    en_US: en_US_custom,
  },
});
