<template>
    <div>
        <input type="number" readonly v-model="selected_value" @focus="focused" v-bind:min="min" v-bind:max="max" v-bind:placeholder="placeholder">
        <div v-show="field_focused">
            <input type="range" @change="changed" v-bind:min="min" v-bind:max="max" v-bind:step="step">
        </div>
    </div>
</template>

<script>
export default {
    name: "TimeInput",
    props: ['min', 'max', 'placeholder', 'step'],
    methods: {
        changed(evt) {
            this.selected_value = evt.target.value;
            this.field_focused = false;
            this.$emit('input', this.selected_value);
        },
        focused() {
            this.field_focused = true;
        }
    },
    data() {
        return {
            field_focused: false,
            selected_value: 0,
        }
    }
}
</script>