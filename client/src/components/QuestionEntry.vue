<template>
    <div>
        <div v-show="type == 'multiple'">
            <h4>Multiple Choice</h4>
            <textarea placeholder="What is your question?"></textarea>
            <h5>Answers</h5>
            <div class="row">
                <div class="col-1">
                    <input type="checkbox">
                </div>
                <div class="col-11">
                    <input type="text" placeholder="Answer">
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-right">
                    <button>Add</button>
                </div>
            </div>
        </div>
        <div v-show="type == 'matching'">
            <h4>Matching Pairs</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: "QuestionEntry",
    props: ['type'],
    methods: {
    },
    data() {
        return {
        }
    }
}
</script>