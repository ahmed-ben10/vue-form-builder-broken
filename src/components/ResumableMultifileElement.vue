<script>
import {defineElement} from '@vueform/vueform';

import BaseElement from '@vueform/vueform/src/mixins/BaseElement.js';
import HasView from '@vueform/vueform/src/mixins/HasView.js';
import HasChange from '@vueform/vueform/src/mixins/HasChange.js';
import HasData from '@vueform/vueform/src/mixins/HasData.js';
import HasValidation from '@vueform/vueform/src/mixins/HasValidation.js';

import useElement from '@vueform/vueform/src/composables/useElement';
import useForm$ from '@vueform/vueform/src/composables/useForm$';
import useTheme from '@vueform/vueform/src/composables/useTheme';
import useLayout from '@vueform/vueform/src/composables/elements/useLayout';
import usePath from '@vueform/vueform/src/composables/elements/usePath';
import useConditions from '@vueform/vueform/src/composables/useConditions';
import useValue from '@vueform/vueform/src/composables/elements/useValue';
import useData from '@vueform/vueform/src/composables/elements/useData';
import useLabel from '@vueform/vueform/src/composables/elements/useLabel';
import useColumns from '@vueform/vueform/src/composables/elements/useColumns';
import useBaseElement from '@vueform/vueform/src/composables/elements/useBaseElement';
import useGenericName from '@vueform/vueform/src/composables/elements/useGenericName';
import useView from '@vueform/vueform/src/composables/elements/useView';
import useTemplates from '@vueform/vueform/src/composables/elements/useTemplates';
import useSlots from '@vueform/vueform/src/composables/elements/useSlots';
import useDisabled from '@vueform/vueform/src/composables/elements/useDisabled';
import useEvents from '@vueform/vueform/src/composables/useEvents';
import useHandleInput from '@vueform/vueform/src/composables/elements/useHandleInput';
import useEmpty from '@vueform/vueform/src/composables/elements/useEmpty';
import useClasses from '@vueform/vueform/src/composables/elements/useClasses';
import useFieldId from '@vueform/vueform/src/composables/elements/useFieldId';
import useInput from '@vueform/vueform/src/composables/elements/useInput';
import useFocused from '@vueform/vueform/src/composables/elements/useFocused';
import useFocus from '@vueform/vueform/src/composables/elements/useFocus';
import useWatchValue from '@vueform/vueform/src/composables/elements/useWatchValue';
import useA11y from '@vueform/vueform/src/composables/elements/useA11y';
import useEl$ from '@vueform/vueform/src/composables/elements/useEl$';

import {text as useValidation} from '@vueform/vueform/src/composables/elements/useValidation';
import {text as useDefault} from '@vueform/vueform/src/composables/elements/useDefault';
import {generic as useNullValue} from '@vueform/vueform/src/composables/elements/useNullValue';

import ResumableMultiFileUpload from './ResumableMultiFileUpload.vue';

export default defineElement({
    name: 'ResumableMultifileElement',
    components: {ResumableMultiFileUpload},
    mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
    setup(props, ctx) {
        const context = {...ctx};

        context.features = [
            useEl$,
            useForm$,
            useTheme,
            useLayout,
            useInput,
            usePath,
            useNullValue,
            useFieldId,
            useEvents,
            useBaseElement,
            useDisabled,
            useDefault,
            useConditions,
            useValidation,
            useValue,
            useEmpty,
            useData,
            useLabel,
            useGenericName,
            useView,
            useTemplates,
            useClasses,
            useColumns,
            useSlots,
            useHandleInput,
            useFocused,
            useA11y,
            useWatchValue,
            useFocus,
        ];
        context.slots = [
            'label', 'info', 'required', 'description',
            'before', 'between', 'after',
        ];

        const handleInput = (value) => {
            context.element.model.value = value;
        };

        return {
            ...useElement(props, context),
            handleInput
        };
    },
});
</script>

<template>
    <ElementLayout>
        <template #element>
            <ResumableMultiFileUpload @file-uploaded="handleInput" @file-deleted="handleInput" :current-files="model"
                                      :delete-permanent="false"/>
        </template>

        <!-- Default element slots -->
        <template v-for="(component, slot) in elementSlots" #[slot]>
            <slot :name="slot" :el$="el$">
                <component :is="component" :el$="el$"/>
            </slot>
        </template>
    </ElementLayout>
</template>